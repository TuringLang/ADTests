import DynamicPPL: Model, VarInfo
import Random: Random, Xoshiro
import Test: @test, @testset
import ModelTests: ad_di, ad_ldp, MODELS
using ADTypes

import ForwardDiff
import ReverseDiff
import Mooncake
import Zygote

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
    test_correctness(
        ad_function,
        model::Model,
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
    model::Model,
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

@testset "$(model.f)" for model in MODELS
    @testset for adtype in ADTYPES
        test_correctness(ad_ldp, model, adtype)
        test_correctness(ad_di, model, adtype)
    end
end
