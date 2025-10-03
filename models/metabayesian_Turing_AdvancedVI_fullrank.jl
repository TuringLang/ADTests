#=
This is a "meta-Bayesian" model, where the generative model includes an inversion of a different "subjective" generative model.
These types of models are common in cognitive modelling, where systems of interest (e.g. human subjects) are thought to use Bayesian inference to navigate their environment.
Here we use a fullrank variational inference procedure implemented with Turing and ADvancedVI as the inversion of the inner "subjective" model.
=#
using Random: Xoshiro

# Inner model function
@model function inner_model(observation, prior_μ = 0, prior_σ = 1)
    # The inner model's prior
    mean ~ Normal(prior_μ, prior_σ)
    # The inner model's likelihood
    observation ~ Normal(mean, 1)
end

# Outer model function
@model function metabayesian_Turing_AdvancedVI_fullrank(
    observation,
    action,
)
    ### Sample parameters for the inner inference and response ###
    # The inner model's prior's sufficient statistics
    subj_prior_μ ~ Normal(0, 1)
    subj_prior_σ = 1.0
    # Inverse temperature for actions
    β ~ Exponential(1)

    ### "Perceptual inference": running the inner model ###
    # Condition the inner model
    inner_m = inner_model(observation, subj_prior_μ, subj_prior_σ)
    # Run the inner Bayesian inference
    q_init = q_fullrank_gaussian(inner_m)
    q_avg, q_last, info, state = vi(Xoshiro(468), inner_m, q_init, 10, show_progress=false)

    # Extract subjective point estimate
    subj_mean_expectationₜ = mean(q_avg.dist)[1]


    ### "Response model": picking an action ###
    # The action is a Gaussian-noise report of the subjective point estimate
    action ~ Normal(subj_mean_expectationₜ, β)
end

model = metabayesian_Turing_AdvancedVI_fullrank(0.0, 1.0)