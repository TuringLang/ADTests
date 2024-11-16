# ModelTests.jl

ModelTests.jl is currently a small package containing a list of Turing.jl / DynamicPPL.jl `Model` objects, and some functions for testing automatic differentiation packages on them.

## Introduction

In Turing.jl, a model looks something like this:

```julia
using Turing

@model function f(y)
    x ~ Normal(0, 1)
    y ~ Normal(x, 1)
end
```

Here, `f(2)` would be a model where the value of `y` is observed to be 2.

The _log probability density_ of a model (henceforth shortened to logdensity) is the log probability of all the random variables in the model.
This depends on all the free variables in the model: in this case, `y` is already fixed, so the logdensity of `f(2)` depends only on `x`.
For example, if `x` takes the value of 0.5:
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
Currently, Turing.jl uses the [LogDensityProblemsAD.jl package](https://github.com/tpapp/LogDensityProblemsAD.jl) to do this.
