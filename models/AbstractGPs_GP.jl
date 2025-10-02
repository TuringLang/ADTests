#=
This is an implementation of using AbstractGPs.jl with Turing to model a Gaussian Process.
The model is adapted from the Turing documentation: https://turinglang.org/docs/tutorials/gaussian-processes-introduction/
=#

using AbstractGPs
using DataFrames
using LogExpFunctions

# Load data
df = DataFrame(
    distance = [2,3,4,5,6], n = [1443, 694, 455, 353, 272], y = [1346, 577, 337, 208, 149]
)

# Make Turing model
@model function AbstractGPs_GP(d, n; jitter=1e-4)
    v ~ Gamma(2, 1)
    l ~ Gamma(4, 1)
    f = GP(v * with_lengthscale(SEKernel(), l))
    f_latent ~ f(d, jitter)
    y ~ product_distribution(Binomial.(n, logistic.(f_latent)))
    return (fx=f(d, jitter), f_latent=f_latent, y=y)
end

model = AbstractGPs_GP(Float64.(df.distance), df.n)