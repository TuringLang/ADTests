module Models

using DynamicPPL
using Distributions
using LinearAlgebra:I

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

@model function control_flow()
    a ~ Normal()
    if a > 0
        b ~ Normal()
    else
        b ~ Beta(2, 2)
    end
end
add_model!(MODELS, control_flow())

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

@model function dot_observe(x=[1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end
add_model!(MODELS, dot_observe())

@model function observe_index(x=[1.5, 2.0, 2.5])
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

@model function dot_assume_observe_index(x=[1.5, 2.0, 2.5], ::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a[i])
    end
end
add_model!(MODELS, dot_assume_observe_index())

@model function assume_normal()
    a ~ Normal()
end
add_model!(MODELS, assume_normal())

@model function assume_beta()
    a ~ Beta(2, 2)
end
add_model!(MODELS, assume_beta())

@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end
add_model!(MODELS, assume_mvnormal())

@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end
add_model!(MODELS, assume_dirichlet())

@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end
add_model!(MODELS, assume_wishart())

@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end
add_model!(MODELS, assume_lkjcholu())

@model function n010(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end
add_model!(MODELS, n010())

@model function n050(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end
add_model!(MODELS, n050())

@model function n100(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end
add_model!(MODELS, n100())

@model function n500(::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end
add_model!(MODELS, n500())

@model function multithreaded(x)
    a ~ Normal()
    Threads.@threads for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end
add_model!(MODELS, multithreaded([1.5, 2.0, 2.5, 1.5, 2.0, 2.5]))

end # module Models
