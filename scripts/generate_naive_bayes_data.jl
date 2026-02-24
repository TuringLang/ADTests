# One-off script to pre-compute the MNIST data used by the dppl_naive_bayes models (and
# avoid introducing MLDatasets and MultivariateStats as dependencies in the main codebase).
#
# For full reproducibility this script should be run using the Manifest.toml in this
# directory.

using MLDatasets: MNIST
using MultivariateStats: fit, PCA, transform
using DelimitedFiles

# Load MNIST images and labels
features = MNIST(split = :train).features
nrows, ncols, nimages = size(features)
image_raw = Float64.(reshape(features, (nrows * ncols, nimages)))
# Convert labels from 0-9 to 1-10 for 1-based indexing in Julia
labels = MNIST(split = :train).targets .+ 1

# Preprocess the images by reducing dimensionality
D = 40
pca = fit(PCA, image_raw; maxoutdim = D)
image = transform(pca, image_raw)

# Take only the first 1000 images
N = 1000
image_subset = image[:, 1:N]'
image_vec = image_subset[:, :]
labels = labels[1:N]

# Write to CSV: first column is label, remaining 40 columns are PCA features
outpath = joinpath(@__DIR__, "..", "data", "dppl_naive_bayes.csv")
header = permutedims(["label"; ["d$i" for i = 1:D]])
open(outpath, "w") do io
    writedlm(io, header, ',')
    writedlm(io, [labels image_vec], ',')
end

println("Wrote $outpath ($(N) rows × $(D+1) cols)")
