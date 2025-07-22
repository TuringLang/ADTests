#=
This is a "meta-Bayesian" model, where the generative model includes an inversion of a different generative model.
These types of models are common in cognitive modelling, where systems of interest (e.g. human subjects) are thought to use Bayesian inference to navigate their environment.
Here we use a Metropolis-Hasting sampler implemented with Turing as the inversion of the inner "subjective" model.
=#

# Inner model function
@model function inner_model(observation, prior_μ = 0, prior_σ = 1)
    
    # The innter model's prior
    mean ~ Normal(prior_μ, prior_σ)

    # The inner model's likelihood
    observation ~ Normal(mean, 1)
end

# Outer model function
@model function metabayesian_MH(observation, action, inner_sampler = MH(), inner_n_samples = 20)
    
    ### Sample parameters for the inner inference and response ###

    #The inner model's prior's sufficient statistics
    subj_prior_μ ~ Normal(0, 1)
    subj_prior_σ = 1.0 
    
    # #Inverse temperature for actions
    β ~ 1

    ### "Perceptual inference": running the inner model ###

    #Condition the inner model
    inner_m = inner_model(observation, subj_prior_μ, subj_prior_σ)

    #Run the inner Bayesian inference
    chns = sample(inner_m, inner_sampler, inner_n_samples, progress = false)

    #Extract subjective point estimate
    subj_mean_expectationₜ = mean(chns[:mean])


    ### "Response model": picking an action ###

    #The action is a Gaussian-noise report of the subjective point estimate
    action ~ Normal(subj_mean_expectationₜ, β)

end

model = metabayesian_MH(0.0, 1.0)