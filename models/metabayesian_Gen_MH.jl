#=
This is a "meta-Bayesian" model, where the generative model includes an inversion of a different "subjective" generative model.
These types of models are common in cognitive modelling, where systems of interest (e.g. human subjects) are thought to use Bayesian inference to navigate their environment.
Here we use Gen.jl for the inversion of the inner "subjective" model.
=#
using Gen

#Unsure if its possible to pass an RNG to Gen, so setting a global one
using Random
Random.seed!(rng, 1234)

# Inner model function
@gen function inner_model(prior_μ, prior_σ)
    # The inner model's prior
    mean ~ normal(prior_μ, prior_σ)
    # The inner model's likelihood
    {"observation"} ~ normal(mean, 1)
end

function inner_model_inference(observation, prior_μ, prior_σ, num_iters::Int)
    # Create a set of constraints fixing the
    # y coordinates to the observed y values
    constraints = choicemap()
    constraints["observation"] = observation

    # Initialise vector for storing samples
    samples = Vector{Float64}(undef, num_iters)

    # Run the model, constrained by `constraints`,
    # to get an initial execution trace
    (trace, _) = Gen.generate(inner_model, (prior_μ, prior_σ), constraints)

    # Iteratively update the slope then the intercept,
    # using Gen's metropolis_hastings operator.
    for i in 1:num_iters
        (trace, _) = metropolis_hastings(trace, select(:mean))

        #Extract the current sample
        samples[i] = get_choices(trace)[:mean]
    end

    return samples
end


# Outer model function
@model function metabayesian_Gen_MH(
    observation,
    action,
    n_inner_samples = 100,
)
    ### Sample parameters for the inner inference and response ###
    # The inner model's prior's sufficient statistics
    subj_prior_μ ~ Normal(0, 1)
    subj_prior_σ = 1.0 #The precision
    # Inverse temperature for actions
    β ~ Exponential(1)

    ### "Perceptual inference": running the inner model ###
    samples = inner_model_inference(observation, subj_prior_μ, subj_prior_σ, n_inner_samples)
    
    # Extract subjective point estimate
    subj_mean_expectationₜ = mean(samples)


    ### "Response model": picking an action ###
    # The action is a Gaussian-noise report of the subjective point estimate
    action ~ Normal(subj_mean_expectationₜ, β)
end

model = metabayesian_Gen_MH(0.0, 1.0)