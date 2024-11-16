module ModelTests

import DifferentiationInterface as DI
import ForwardDiff
import LogDensityProblems: logdensity, logdensity_and_gradient
import LogDensityProblemsAD: ADgradient
import Mooncake
import Random: Random, Xoshiro

using ADTypes
using DynamicPPL

export ADTYPES, ad_ldp, ad_di, Models

"""
    adtypes::Vector{ADTypes.AbstractADType}

    List of AD backends to test.
"""
ADTYPES = [
    AutoMooncake(; config=nothing),
    AutoForwardDiff(),
]

flipped_logdensity(θ, ldf) = logdensity(ldf, θ)

"""
    ad_ldp(model::DynamicPPL.Model,
           adtype::ADTypes.AbstractADType,
           rng::Random.AbstractRNG=Xoshiro(468))

Calculate the logdensity of `model` and its gradient using the AD backend
`adtype`, using the implementation of `logdensity_and_gradient` in the
LogDensityProblemsAD.jl package.

The `rng` argument is used in generating random initial parameters for the
model.

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
function ad_ldp(model::DynamicPPL.Model, adtype::ADTypes.AbstractADType, rng::Random.AbstractRNG=Xoshiro(468))
    ldf = DynamicPPL.LogDensityFunction(model, DynamicPPL.VarInfo(rng, model))
    θ = DynamicPPL.getparams(ldf)
    ℓ = ADgradient(adtype, ldf)
    logdensity_and_gradient(ℓ, θ)
end

"""
    ad_di(model::DynamicPPL.Model,
          adtype::ADTypes.AbstractADType,
          rng::Random.AbstractRNG=Xoshiro(468))

Calculate the logdensity of `model` and its gradient using the AD backend
`adtype`, directly using the interface provided by DifferentiationInterface.jl.

See the notes in `ad_ldp` for more details on the differences between
`ad_di` and `ad_ldp`.
"""
function ad_di(model::DynamicPPL.Model, adtype::ADTypes.AbstractADType, rng::Random.AbstractRNG=Xoshiro(468))
    ldf = DynamicPPL.LogDensityFunction(model, DynamicPPL.VarInfo(rng, model))
    θ = DynamicPPL.getparams(ldf)
    prep = DI.prepare_gradient(flipped_logdensity, adtype, θ, DI.Constant(ldf))
    DI.value_and_gradient(flipped_logdensity, prep, adtype, θ, DI.Constant(ldf))
end

include("./models.jl")

end # module ModelTests
