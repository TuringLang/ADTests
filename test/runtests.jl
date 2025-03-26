import DynamicPPL: Model, VarInfo, LogDensityFunction
import Random: Random, Xoshiro
import Test: @test, @testset
import ModelTests: MODELS
import LogDensityProblems: LogDensityProblems
using ADTypes

import ForwardDiff
import ReverseDiff
import Mooncake
import Enzyme: set_runtime_activity, Forward, Reverse, ForwardMode, ReverseMode

"""
    ADTYPES::Vector{ADTypes.AbstractADType}

List of AD backends to test.
"""
ADTYPES = [
    AutoForwardDiff(),
    AutoReverseDiff(; compile=false),
    AutoReverseDiff(; compile=true),
    AutoMooncake(; config=nothing),
    AutoEnzyme(; mode=set_runtime_activity(Forward, true)),
    AutoEnzyme(; mode=set_runtime_activity(Reverse, true)),
]

"""
    REFERENCE_ADTYPE::ADTypes.AbstractADType

Reference AD backend to use for comparison. In this case, ForwardDiff.jl, since
it's the default AD backend used in Turing.jl.
"""
REFERENCE_ADTYPE = AutoForwardDiff()

"""
    get_adtype_shortname(adtype::ADTypes.AbstractADType)

Get the package name that corresponds to the the AD backend `adtype`. Only used
for pretty-printing.
"""
get_adtype_shortname(::AutoMooncake) = "Mooncake"
get_adtype_shortname(::AutoForwardDiff) = "ForwardDiff"
get_adtype_shortname(::AutoReverseDiff{false}) = "ReverseDiff"
get_adtype_shortname(::AutoReverseDiff{true}) = "ReverseDiff:Compiled"
get_adtype_shortname(::AutoEnzyme{<:ReverseMode}) = "Enzyme:Reverse"
get_adtype_shortname(::AutoEnzyme{<:ForwardMode}) = "Enzyme:Forward"

"""
    ADTestResult

Data structure to store the results of the AD correctness test.

If you want to quickly check whether the result is a success or failure, you
can use `isnothing(result.error)`.

$(TYPEDFIELDS)
"""
struct ADTestResult
    "The DynamicPPL model that was tested"
    model::Model, "The values at which the model was evaluated"
    params::Vector{<:Real}, "The AD backend that was tested"
    adtype::ADTypes.AbstractADType,
    "The absolute tolerance for the value of logp"
    value_atol::Real,
    "The absolute tolerance for the gradient of logp"
    grad_atol::Real,
    "If the test ran, the expected value of logp (calculated using the reference AD backend)"
    value_expected::Union{Nothing,Real},
    "If the test ran, the expected gradient of logp (calculated using the reference AD backend)"
    grad_expected::Union{Nothing,Vector{<:Real}},
    "If the test ran, the actual value of logp (calculated using `adtype`)"
    value_actual::Union{Nothing,Real},
    "If the test ran, the actual gradient of logp (calculated using `adtype`)"
    grad_actual::Union{Nothing,Vector{<:Real}},
    "If the test ran and benchmarking was requested, the time taken by the AD backend to calculate the gradient of logp, divided by the time taken to evaluate logp itself"
    time_vs_primal::Union{Nothing,Real},
    "If the test did not run successfully, the error that was thrown"
    error::Union{Nothing,Exception}
end

struct ADIncorrectException <: Exception
end

"""
    run_ad(
        model::Model,
        adtype::ADTypes.AbstractADType;
        benchmark=false,
        value_atol=1e-6,
        grad_atol=1e-6,
        varinfo::AbstractVarInfo=VarInfo(model),
        params::Vector{<:Real}=varinfo[:],
        reference_adtype::ADTypes.AbstractADType=REFERENCE_ADTYPE,
        expected_value_and_grad::Union{Nothing,Tuple{Real,Vector{<:Real}}}=nothing,
    )::ADTestResult

Test the correctness of the AD backend `adtype` for the model `model`. If
`benchmark` is set to `true`, also benchmark the AD backend. By default this is
`false`.

Returns an [`ADTestResult`](@ref) object, which contains the results of the
test and/or benchmark.

The signature of this function is complicated. There are two things that must
be provided:

1. `model` - The model being tested.
2. `adtype` - The AD backend being tested.

Everything else is optional, and can be categorised into several groups:

1. _How to specify the VarInfo._ DynamicPPL contains several different types of
VarInfo objects which change the way model evaluation occurs. If you want to use
a specific type of VarInfo, pass it as the `varinfo` argument. Otherwise, it will
default to using a `TypedVarInfo` generated from the model.

2. _How to specify the parameters._ For maximum control over this, generate a
vector of parameters yourself and pass this as the `params` argument. If you
don't specify this, it will be taken from the contents of the VarInfo. Note that
if the VarInfo is not specified (and thus automatically generated) the parameters
in it will have been sampled from the prior of the model.

3. _How to specify the results to compare against._ Once logp and its gradient
has been calculated with the specified `adtype`, it must be tested for correctness.
This can be done either by specifying `reference_adtype`, in which case logp
and its gradient will also be calculated with this reference in order to obtain
the ground truth; or by using `expected_value_and_grad`, which is a tuple of
(logp, gradient) that the calculated values must match. The latter is useful if
you are testing multiple AD backends and want to avoid recalculating the ground
truth multiple times.

4. _How to specify the tolerances._ The tolerances for the value and gradient can
be set using `value_atol` and `grad_atol`. These default to 1e-6.
"""
function run_ad(
    model::Model,
    adtype::ADTypes.AbstractADType;
    value_atol=1e-6,
    grad_atol=1e-6,
    rng::Random.AbstractRNG=Xoshiro(468),
    varinfo::AbstractVarInfo=VarInfo(rng, model),
    params::Vector{<:Real}=varinfo[:],
    reference_adtype::ADTypes.AbstractADType=REFERENCE_ADTYPE,
    expected_value_and_grad::Union{Nothing,Tuple{Real,Vector{<:Real}}}=nothing,
)::ADTestResult
    try
        # Calculate ground truth to compare against
        value_true, grad_true = if expected_value_and_grad === nothing
            ldf_reference = LogDensityFunction(model; adtype=reference_adtype)
            LogDensityProblems.logdensity_and_gradient(ldf_reference, params)
        else
            expected_value_and_grad
        end

        ldf = LogDensityFunction(model; adtype=adtype)
        value, grad = LogDensityProblems.logdensity_and_gradient(ldf, params)
        info_str = "`run_ad` on $(model.f), $(adtype)\n" *
                   "       params : $(params)\n" *
                   "       actual : $((value, grad))\n" *
                   "     expected : $((value_true, grad_true))\n"
        @info info_str
        value_is_correct = isapprox(value, value_true; atol=value_atol)
        grad_is_correct = isapprox(grad, grad_true; atol=grad_atol)

        exc = if value_is_correct && grad_is_correct
            nothing
        else
            ADIncorrectException()
        end

        return ADTestResult(
            model, params, adtype, value_atol, grad_atol,
            value_true, grad_true, value, grad, nothing, exc
        )
    catch e
        return ADTestResult(
            model, params, adtype, value_atol, grad_atol,
            nothing, nothing, nothing, nothing, nothing, e
        )
    end
end

@testset verbose = true "$(model.f)" for model in MODELS
    @info "Testing AD correctness for $(model.f)"
    test_correctness(model, ADTYPES, REFERENCE_ADTYPE)
end
