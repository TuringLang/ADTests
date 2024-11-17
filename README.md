# ModelTests.jl

ModelTests.jl is currently a small package containing a list of Turing.jl / DynamicPPL.jl `Model` objects, and some functions for testing automatic differentiation packages on them.

## Introduction

In Turing.jl, a model looks something like this:

```julia
julia> using Turing

julia> @model function f(y)
           x ~ Normal(0, 1)
           y ~ Normal(x, 1)
       end
f (generic function with 2 methods)
```

Here, `f(2)` would create a model where the value of `y` is observed to be 2.

The _log probability density_ of a model, or _log density_, is the log joint probability of all the random variables in the model.
This depends on all the free parameters in the model.
In this case, the value of `y` is already fixed, so the logdensity of `f(2)` depends only on `x`.

To give an example, if `x` takes the value of 0.5:
  - the log _prior_ probability is $\log(P(x = 0.5))$, which can be calculated as `logpdf(Normal(0, 1), 0.5) = -1.0439...`.
  - the log _likelihood_ is $\log(P(y = 2 | x = 0.5))$, which can be calculated as `logpdf(Normal(0.5, 1), 2) = -2.0439...`
  - the log _joint_ probability is the sum of the log prior and log likelihood, which is `-3.0878...`. The term 'log density' refers to the log joint probability.

These can be handily evaluated using functions available in Turing.jl:

```julia
julia> logprior(f(2), (x = 0.5,))
-1.0439385332046727

julia> loglikelihood(f(2), (x = 0.5,))
-2.0439385332046727

julia> logjoint(f(2), (x = 0.5,))
-3.0878770664093453
```

When performing MCMC sampling on a model, it is often necessary to evaluate both the log density as well as its gradient with respect to all the free variables.

## Testing with LogDensityProblemsAD

Currently, Turing.jl uses the interface defined in the [LogDensityProblemsAD.jl package](https://github.com/tpapp/LogDensityProblemsAD.jl) to do this.
LogDensityProblemsAD does not itself provide AD functionality, but instead defines an interface which different AD backends can hook into.
For example, to use the [ReverseDiff.jl backend](https://github.com/JuliaDiff/ReverseDiff.jl), one can do:

```julia
julia> using ADTypes: AutoReverseDiff

julia> using LogDensityProblems: logdensity_and_gradient

julia> using LogDensityProblemsAD: ADgradient

julia> import ReverseDiff

julia> logdensity_and_gradient(ADgradient(AutoReverseDiff(), LogDensityFunction(f(2))), [0.5])
(-3.0878770664093453, [1.0])
```

ModelTests.jl provides the function `ad_ldp` which essentially does the above:

```julia
julia> using ModelTests

julia> ad_ldp(f(2), AutoReverseDiff(), [0.5])
(-3.0878770664093453, [1.0])
```

This will work for any backend that is compatible with LogDensityProblemsAD.jl.

> [!NOTE]  
> For some AD backends, LogDensityProblemsAD.jl in fact just delegates to DifferentiationInterface.jl.
> Specifically, as of v1.12.0 of LogDensityProblemsAD, the following backends have custom code and are _not_ handled by DifferentiationInterface.jl: Enzyme, ForwardDiff, ReverseDiff, Tracker, and Zygote (see https://github.com/tpapp/LogDensityProblemsAD.jl/pull/39).
> Other backends, such as Mooncake, are handled by DifferentiationInterface.jl.
> The `ad_di` function (below) provides a more direct way of testing these backends.

## Testing with DifferentiationInterface

Recently, the [DifferentiationInterface.jl](https://github.com/JuliaDiff/DifferentiationInterface.jl) package has sought to provide a unified interface for an even larger variety of AD backends.
For example:

```julia
julia> using LogDensityProblems: logdensity

julia> using DifferentiationInterface: prepare_gradient, Constant, value_and_gradient

julia> l = LogDensityFunction(f(2))
[...]

julia> prep = prepare_gradient((x, l) -> logdensity(l, x), AutoReverseDiff(), [0.5], Constant(l))
[...]

julia> value_and_gradient((x, l) -> logdensity(l, x), prep, AutoReverseDiff(), [0.5], Constant(l))
(-3.0878770664093453, [1.0])
```

ModelTests.jl provides the function `ad_di` which wraps the above:

```julia
julia> ad_di(f(2), AutoReverseDiff(), [0.5])
(-3.0878770664093453, [1.0])
```

This requires the AD backend to be integrated into DifferentiationInterface.jl.

## Manually testing

Suppose you have developed a new AD backend, but it is not yet integrated into either of LogDensityProblemsAD.jl or DifferentiationInterface.jl.
Fret not!
ModelTests.jl lets you construct the function `func` that calculates the log density, as well as the params `x` at which you can evaluate the function:

```julia
julia> func = make_function(f(2))
(::Base.Fix1{typeof(logdensity), LogDensityFunction{DynamicPPL.TypedVarInfo{@NamedTuple{x::DynamicPPL.Metadata{Dict{AbstractPPL.VarName{:x, typeof(identity)}, Int64}, Vector{Normal{Float64}}, Vector{AbstractPPL.VarName{:x, typeof(identity)}}, Vector{Float64}, Vector{Set{DynamicPPL.Selector}}}}, Float64}, DynamicPPL.Model{typeof(f), (:y,), (), (), Tuple{Int64}, Tuple{}, DynamicPPL.DefaultContext}, Nothing}}) (generic function with 1 method)

julia> x = make_params(f(2))
1-element Vector{Float64}:
 0.07200886749732076

julia> func(x)
-3.699044608412951
```

Thus, as long as your AD package has some method to calculate the gradient of `func` at `x`, you can use ModelTests.jl to test it.

## The list of models

Finally, ModelTests.jl exports a list of models which can be used for testing.
These models aim to cover a wide variety of distributions and features in Turing.jl.
This package is still very new, so the list only contains one model 😅

```julia
julia> ModelTests.MODELS
1-element Vector{DynamicPPL.Model{typeof(ModelTests.Models.demo_dynamic_constraint), (), (), (), Tuple{}, Tuple{}, DynamicPPL.DefaultContext}}:
 DynamicPPL.Model{typeof(ModelTests.Models.demo_dynamic_constraint), (), (), (), Tuple{}, Tuple{}, DynamicPPL.DefaultContext}(ModelTests.Models.demo_dynamic_constraint, NamedTuple(), NamedTuple(), DynamicPPL.DefaultContext())
```

Therefore, if you wish to test whether your AD backend is compatible with Turing.jl, you can simply iterate through this list of models and test them using any of the methods above.
