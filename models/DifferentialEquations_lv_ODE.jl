#=
This is an implementation of using DIfferentialEquations.jl with Turing to model the Lotka–Volterra equations (predator-prey model).
The model is adapted from the Turing documentation: https://turinglang.org/docs/tutorials/bayesian-differential-equations/ 
=#
using DifferentialEquations
using Distributions

# Define Lotka–Volterra model
function lotka_volterra(du, u, p, t)
    # Model parameters.
    α, β, γ, δ = p
    # Current state.
    x, y = u

    # Evaluate differential equations.
    du[1] = (α - β * y) * x # prey
    du[2] = (δ * x - γ) * y # predator

    return nothing
end

# Define initial-value problem
u0 = [1.0, 1.0]
p = [1.5, 1.0, 3.0, 1.0]
tspan = (0.0, 10.0)
prob = ODEProblem(lotka_volterra, u0, tspan, p)

# Simulate data
sol = solve(prob, Tsit5(); saveat=0.1)
q = 1.7
odedata = rand.(Poisson.(q * Array(sol)))

# Create Turing model
@model function DifferentialEquations_lv_ODE(data, prob)
    # Prior distributions.
    α ~ truncated(Normal(1.5, 0.2); lower=0.5, upper=2.5)
    β ~ truncated(Normal(1.1, 0.2); lower=0, upper=2)
    γ ~ truncated(Normal(3.0, 0.2); lower=1, upper=4)
    δ ~ truncated(Normal(1.0, 0.2); lower=0, upper=2)
    q ~ truncated(Normal(1.7, 0.2); lower=0, upper=3)

    # Simulate Lotka–Volterra model. 
    p = [α, β, γ, δ]
    predicted = solve(prob, Tsit5(); p=p, saveat=0.1, abstol=1e-6, reltol=1e-6)
    ϵ = 1e-5
    
    # Observations.
    for i in eachindex(predicted)
        data[:, i] ~ arraydist(Poisson.(q .* predicted[i] .+ ϵ))
    end

    return nothing
end

# Instantiate the model
model = DifferentialEquations_lv_ODE(odedata, prob)