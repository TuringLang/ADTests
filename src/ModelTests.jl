module ModelTests

import ADTypes: AbstractADType, AutoForwardDiff
import Chairmarks: @be
import DifferentiationInterface as DI
import DynamicPPL: Model, LogDensityFunction, VarInfo, AbstractVarInfo
import LogDensityProblems: logdensity, logdensity_and_gradient
import Random: Random, Xoshiro
import Statistics: median
using DocStringExtensions

include("./models.jl")
import .Models: MODELS

export ADTestResult, run_ad, make_function, make_params, MODELS, ADIncorrectException

"""
    REFERENCE_ADTYPE

Reference AD backend to use for comparison. In this case, ForwardDiff.jl, since
it's the default AD backend used in Turing.jl.
"""
const REFERENCE_ADTYPE = AutoForwardDiff()

"""
    ADTestResult

Data structure to store the results of the AD correctness test.

If you want to quickly check whether the result is a success or failure, you
can use `isnothing(result.error)`.
"""
struct ADTestResult
    "The DynamicPPL model that was tested"
    model::Model
    "The values at which the model was evaluated"
    params::Vector{<:Real}
    "The AD backend that was tested"
    adtype::AbstractADType
    "The absolute tolerance for the value of logp"
    value_atol::Real
    "The absolute tolerance for the gradient of logp"
    grad_atol::Real
    "If the test ran, the expected value of logp (calculated using the reference AD backend)"
    value_expected::Union{Nothing,Float64}
    "If the test ran, the expected gradient of logp (calculated using the reference AD backend)"
    grad_expected::Union{Nothing,Vector{Float64}}
    "If the test ran, the actual value of logp (calculated using `adtype`)"
    value_actual::Union{Nothing,Real}
    "If the test ran, the actual gradient of logp (calculated using `adtype`)"
    grad_actual::Union{Nothing,Vector{Float64}}
    "If the test ran and benchmarking was requested, the time taken by the AD backend to calculate the gradient of logp, divided by the time taken to evaluate logp itself"
    time_vs_primal::Union{Nothing,Float64}
    "If the test did not run successfully, the error that was thrown"
    error::Union{Nothing,Exception}
end

"""
    ADIncorrectException

Represents an AD test that ran successfully, but failed due to numerical
inaccuracy.
"""
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
        verbose=true,
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
VarInfo objects which change the way model evaluation occurs. If you want to
use a specific type of VarInfo, pass it as the `varinfo` argument. Otherwise,
it will default to using a `TypedVarInfo` generated from the model.

2. _How to specify the parameters._ For maximum control over this, generate a
vector of parameters yourself and pass this as the `params` argument. If you
don't specify this, it will be taken from the contents of the VarInfo. Note
that if the VarInfo is not specified (and thus automatically generated) the
parameters in it will have been sampled from the prior of the model.

3. _How to specify the results to compare against._ Once logp and its gradient
has been calculated with the specified `adtype`, it must be tested for
correctness. This can be done either by specifying `reference_adtype`, in which
case logp and its gradient will also be calculated with this reference in order
to obtain the ground truth; or by using `expected_value_and_grad`, which is a
tuple of (logp, gradient) that the calculated values must match. The latter is
useful if you are testing multiple AD backends and want to avoid recalculating
the ground truth multiple times. The default reference backend is ForwardDiff.
If none of these parameters are specified, that will be used to calculate the
ground truth.

4. _How to specify the tolerances._ The tolerances for the value and gradient
can be set using `value_atol` and `grad_atol`. These default to 1e-6.

5. _Whether to output extra logging information._ By default, this function
prints a message when it runs. To silence it, set `verbose=false`.
"""
function run_ad(
    model::Model,
    adtype::AbstractADType;
    benchmark=false,
    value_atol=1e-6,
    grad_atol=1e-6,
    rng::Random.AbstractRNG=Xoshiro(468),
    varinfo::AbstractVarInfo=VarInfo(rng, model),
    params::Vector{<:Real}=varinfo[:],
    reference_adtype::AbstractADType=REFERENCE_ADTYPE,
    expected_value_and_grad::Union{Nothing,Tuple{Real,Vector{<:Real}}}=nothing,
    verbose=true,
    throw_error=true,
)::ADTestResult
    try
        verbose && @info "Running AD on $(model.f) with $(adtype)\n"
        ldf = LogDensityFunction(model, varinfo; adtype=adtype)
        verbose && println(Base.stderr, "       params : $(params)")

        # Calculate ground truth to compare against
        value_true, grad_true = if expected_value_and_grad === nothing
            ldf_reference = LogDensityFunction(model, varinfo; adtype=reference_adtype)
            logdensity_and_gradient(ldf_reference, params)
        else
            expected_value_and_grad
        end
        verbose && println(Base.stderr, "     expected : $((value_true, grad_true))")

        value, grad = logdensity_and_gradient(ldf, params)
        if !(grad isa Vector{Float64})
            # https://github.com/JuliaDiff/DifferentiationInterface.jl/issues/754
            grad = collect(grad)
        end
        verbose && println(Base.stderr, "       actual : $((value, grad))")

        value_is_correct = isapprox(value, value_true; atol=value_atol)
        grad_is_correct = isapprox(grad, grad_true; atol=grad_atol)

        maybe_exc = if value_is_correct && grad_is_correct
            nothing
        else
            ADIncorrectException()
        end

        time_vs_primal = if benchmark
            primal_bmark = @be (ldf, params) logdensity(_[1], _[2])
            grad_bmark = @be (ldf, params) logdensity_and_gradient(_[1], _[2])
            median(grad_bmark).time / median(primal_bmark).time
        else
            nothing
        end

        return ADTestResult(
            model, params, adtype, value_atol, grad_atol,
            value_true, grad_true, value, grad, time_vs_primal, maybe_exc
        )
    catch e
        # If we want to throw the error, do so
        throw_error && throw(e)
        # otherwise capture and return it
        println("Error: $e")
        return ADTestResult(
            model, params, adtype, value_atol, grad_atol,
            nothing, nothing, nothing, nothing, nothing, e
        )
    end
end


"""
    make_function(model)

Generate the function to be differentiated. Specifically,
`make_function(model)` returns a function which takes a single argument
`params` and returns the logdensity of `model` evaluated at `params`.

Thus, if you have an AD package that does not have integrations with either
LogDensityProblemsAD.jl (in which case you can use `ad_ldp`) or
DifferentiationInterface.jl (in which case you can use `ad_di`), you can 
test whether your AD package works with Turing.jl models using:

```julia
f = make_function(model)
params = make_params(model)
value, grad = YourADPackage.gradient(f, params)
```

and compare the results against that obtained from either `ad_ldp` or `ad_di` for
an existing AD package with support.

See also: `make_params`.
"""
function make_function(model::Model)
    # TODO: Can we simplify this even further by inlining the definition of
    # logdensity?
    return Base.Fix1(logdensity, LogDensityFunction(model))
end

"""
    make_params(model, rng::Random.AbstractRNG=Xoshiro(468))

Generate a vector of parameters sampled from the prior distribution of `model`.
This can be used as the input to the function to be differentiated. See
`make_function` for more details.
"""
function make_params(model::Model, rng::Random.AbstractRNG=Xoshiro(468))
    return VarInfo(rng, model)[:]
end

end # module ModelTests
