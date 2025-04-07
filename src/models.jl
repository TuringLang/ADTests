module Models

using DynamicPPL
using Distributions
using LinearAlgebra: I

export MODELS

## Convention in this file for models:
## a, b, c, ... are assumed variables
## x, y, z, ... are observed variables

MODELS = Dict{String,DynamicPPL.Model}()

function add_model!(models::Dict{String,DynamicPPL.Model}, model::DynamicPPL.Model)
    models["$(model.f)"] = model
end

@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower=a)
end
add_model!(MODELS, dynamic_constraint())

@model function multiple_constraints_same_var(
    ::Type{TV}=Vector{Float64}
) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end
add_model!(MODELS, multiple_constraints_same_var())

@model function dot_assume(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end
add_model!(MODELS, dot_assume())

@model function dot_observe(x=[1.5, 2.0, 2.5], ::Type{TV}=Vector{Float64}) where {TV}
    a ~ Normal()
    x .~ Normal(a)
end
add_model!(MODELS, dot_observe())

@model function observe_index(x=[1.5, 2.0, 2.5], ::Type{TV}=Vector{Float64}) where {TV}
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end
add_model!(MODELS, observe_index())

@model function observe_multivariate(x=[1.5, 2.0, 2.5], ::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end
add_model!(MODELS, observe_multivariate())

@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end
add_model!(MODELS, observe_literal())

@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end
add_model!(MODELS, assume_submodel())

@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x=1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end
add_model!(MODELS, observe_submodel())

# This one fails with Enzyme ...

@model function dot_assume_observe_index(x=[1.5, 2.0, 2.5], ::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a[i])
    end
end
add_model!(MODELS, dot_assume_observe_index())

# Add models with different distributions

DISTRIBUTIONS = Dict(
    # Univariate
    :assume_normal => Normal(),
    :assume_beta => Beta(2, 2),
    # Multivariate
    :assume_mvnormal => MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0]),
    :assume_dirichlet => Dirichlet([1.0, 5.0]),
    # Matrixvariate
    :assume_wishart => Wishart(7, [1.0 0.5; 0.5 1.0]),
    :assume_lkjcholu => LKJCholesky(5, 1.0, 'U'),
)

for (name, distribution) in DISTRIBUTIONS
    @eval begin
        @model function $name()
            a ~ $distribution
        end
        add_model!(MODELS, $name())
    end
end

# Add models with different sizes

NS = [10, 50, 100, 500]

for n in NS
    name = Symbol("n$n")
    @eval begin
        @model function $name(::Type{TV}=Vector{Float64}) where {TV}
            a = TV(undef, $n)
            for i in eachindex(a)
                a[i] ~ Normal()
            end
        end
        add_model!(MODELS, $name())
    end
end

end # module Models
