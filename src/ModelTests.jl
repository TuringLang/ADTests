module ModelTests

import ADTypes: AbstractADType
import DifferentiationInterface as DI
import DynamicPPL: Model, LogDensityFunction, VarInfo
import LogDensityProblems: logdensity, logdensity_and_gradient
import LogDensityProblemsAD: ADgradient
import Random: Random, Xoshiro

export make_function, make_params, ad_ldp, ad_di, MODELS

"""
    flipped_logdensity(θ, ldf)

Flips the order of arguments for `logdensity` to match the signature needed
for DifferentiationInterface.jl.
"""
flipped_logdensity(θ, ldf) = logdensity(ldf, θ)

"""
    ad_ldp(
        model::Model,
        params::Vector{<:Real},
        adtype::AbstractADType
    )

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
function ad_ldp(model::Model, params::Vector{<:Real}, adtype::AbstractADType)
    ldf = LogDensityFunction(model)
    return logdensity_and_gradient(ADgradient(adtype, ldf), params)
end

"""
    ad_di(
        model::Model,
        params::Vector{<:Real},
        adtype::AbstractADType
    )

Calculate the logdensity of `model` and its gradient using the AD backend
`adtype`, evaluated at the parameters `params`, directly using
DifferentiationInterface.jl.

See the notes in `ad_ldp` for more details on the differences between
`ad_di` and `ad_ldp`.
"""
function ad_di(model::Model, params::Vector{<:Real}, adtype::AbstractADType)
    ldf = LogDensityFunction(model)
    prep = DI.prepare_gradient(flipped_logdensity, adtype, params, DI.Constant(ldf))
    return DI.value_and_gradient(flipped_logdensity, prep, adtype, params, DI.Constant(ldf))
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

include("./models.jl")
import .Models: MODELS

end # module ModelTests
