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
