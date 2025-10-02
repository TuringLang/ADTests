#=
This is a "meta-Bayesian" model, where the generative model includes an inversion of a different "subjective" generative model.
These types of models are common in cognitive modelling, where systems of interest (e.g. human subjects) are thought to use Bayesian inference to navigate their environment.
Here we use RxInfer.jl for the inversion of the inner "subjective" model.
=#
using Random: Xoshiro
using Turing
using RxInfer

# Inner model function
RxInfer.@model function inner_model(observation, prior_μ, prior_σ)
    # The inner model's prior
    mean ~ NormalMeanVariance(prior_μ, prior_σ)
    # The inner model's likelihood
    observation ~ NormalMeanPrecision(mean, 1)
end


# Outer model function
Turing.@model function metabayesian_RxInfer(
    observation,
    action,
)
    ### Sample parameters for the inner inference and response ###
    # The inner model's prior's sufficient statistics
    subj_prior_μ ~ Normal(0, 1)
    subj_prior_σ = 1.0 #The precision
    # Inverse temperature for actions
    β ~ Exponential(1)

    ### "Perceptual inference": running the inner model ###
    results = infer(
        model = inner_model(prior_μ = subj_prior_μ, prior_σ = subj_prior_σ),
        data = (; observation=observation),
        iterations = 3,
        free_energy = false,
        showprogress = false,
    )
    
    # Extract subjective point estimate
    subj_mean_expectationₜ = mean(last(results.posteriors[:mean]))


    ### "Response model": picking an action ###
    # The action is a Gaussian-noise report of the subjective point estimate
    action ~ Normal(subj_mean_expectationₜ, β)
end

model = metabayesian_RxInfer(0.0, 1.0)