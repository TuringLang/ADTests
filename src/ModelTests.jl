module ModelTests

import DifferentiationInterface as DI
import ForwardDiff
import ReverseDiff
import Zygote
import LogDensityProblems: logdensity, logdensity_and_gradient
import LogDensityProblemsAD: ADgradient
import Mooncake
import Random: Random, Xoshiro
import Test: @test, @testset

using ADTypes
using DynamicPPL

export ADTYPES, ad_ldp, ad_di, Models, test_correctness

"""
    ADTYPES::Vector{ADTypes.AbstractADType}

List of AD backends to test.
"""
ADTYPES = [
    AutoMooncake(; config=nothing),
    AutoForwardDiff(),
    AutoReverseDiff(),
    AutoZygote(),
]

"""
    REFERENCE_ADTYPE::ADTypes.AbstractADType

Reference AD backend to use for comparison. In this case, ForwardDiff.jl, since
it's the default AD backend used in Turing.jl.
"""
REFERENCE_ADTYPE = AutoForwardDiff()

"""
    flipped_logdensity(θ, ldf)

Flips the order of arguments for `logdensity` to match the signature needed
for DifferentiationInterface.jl.
"""
flipped_logdensity(θ, ldf) = logdensity(ldf, θ)

"""
    ad_ldp(model::DynamicPPL.Model,
           adtype::ADTypes.AbstractADType,
           params::Vector{<:Real})

Calculate the logdensity of `model` and its gradient using the AD backend
`adtype`, evaluated at the parameters `params`, using the implementation of
`logdensity_and_gradient` in the LogDensityProblemsAD.jl package.

Note that Turing.jl's samplers use `logdensity_and_gradient` throughout, and
hence this function most closely mimics the usage of AD within Turing.jl.

For some AD backends such as Mooncake.jl, LogDensityProblemsAD.jl simply defers
to the DifferentiationInterface.jl package. In such a case, `ad_ldp`
essentially simplifies to `ad_di` (in that if `ad_di` passes, one
should expect `ad_ldp` to pass as well). However, there are other AD
backends which are still handled with custom code in LogDensityProblemsAD.jl
(such as ForwardDiff.jl). For these backends, `ad_di` may yield different
results compared to `ad_ldp`, and indeed the behaviour of `ad_di` is
not guaranteed to be consistent with the behaviour of Turing.jl.
"""
function ad_ldp(model::DynamicPPL.Model, adtype::ADTypes.AbstractADType, params::Vector{<:Real})
    ldf = DynamicPPL.LogDensityFunction(model)
    return logdensity_and_gradient(ADgradient(adtype, ldf), params)
end

"""
    ad_di(model::DynamicPPL.Model,
          adtype::ADTypes.AbstractADType,
          params::Vector{<:Real})

Calculate the logdensity of `model` and its gradient using the AD backend
`adtype`, evaluated at the parameters `params`, directly using
DifferentiationInterface.jl.

See the notes in `ad_ldp` for more details on the differences between
`ad_di` and `ad_ldp`.
"""
function ad_di(model::DynamicPPL.Model, adtype::ADTypes.AbstractADType, params::Vector{<:Real})
    ldf = DynamicPPL.LogDensityFunction(model)
    prep = DI.prepare_gradient(flipped_logdensity, adtype, params, DI.Constant(ldf))
    return DI.value_and_gradient(flipped_logdensity, prep, adtype, params, DI.Constant(ldf))
end

"""
    test_correctness(
        ad_function,
        model::DynamicPPL.Model,
        adtype::ADTypes.AbstractADType,
        rng::Random.AbstractRNG=Xoshiro(468),
        params::Vector{<:Real}=VarInfo(rng, model)[:];
        value_atol=1e-6,
        grad_atol=1e-6
    )

Test the correctness of the AD backend `adtype` for the model `model` using the
implementation `ad_function`. The test is performed by calculating the logdensity
and its gradient using both the AD backend `adtype` and the reference AD backend,
and checking that the results are close to each other.

The parameters can either be passed explicitly using the `params` argument, or can
be sampled from the prior distribution of the model using the `rng` argument.
"""
function test_correctness(
    ad_function,
    model::DynamicPPL.Model,
    adtype::ADTypes.AbstractADType,
    rng::Random.AbstractRNG=Xoshiro(468),
    params::Vector{<:Real}=VarInfo(rng, model)[:];
    value_atol=1e-6,
    grad_atol=1e-6
)
    value, grad = ad_function(model, adtype, params)
    value_true, grad_true = ad_function(model, REFERENCE_ADTYPE, params)
    info_str = join([
        "Testing correctness of $(Symbol(ad_function))",
        " backend : $(adtype)",
        "   model : $(model.f)",
        "  params : $(params)",
        "  actual : $((value, grad))",
        "expected : $((value_true, grad_true))",
    ], "\n")
    @info info_str
    @test value ≈ value_true atol=value_atol
    @test grad ≈ grad_true atol=grad_atol
end

include("./models.jl")

@testset "$(model.f)" for model in Models.MODELS
    @testset for adtype in ADTYPES
        test_correctness(ad_ldp, model, adtype)
        test_correctness(ad_di, model, adtype)
    end
end

end # module ModelTests
