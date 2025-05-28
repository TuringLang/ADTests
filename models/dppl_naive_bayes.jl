using MLDatasets: MNIST
using MultivariateStats: fit, PCA, transform

# Load MNIST images and labels
features = MNIST(split=:train).features
nrows, ncols, nimages = size(features)
image_raw = Float64.(reshape(features, (nrows * ncols, nimages)))
labels = MNIST(split=:train).targets .+ 1
C = 10 # Number of labels

# Preprocess the images by reducing dimensionality
D = 40
pca = fit(PCA, image_raw; maxoutdim=D)
image = transform(pca, image_raw)

# Take only the first 1000 images and vectorise
N = 1000
image_subset = image[:, 1:N]'
image_vec = vec(image_subset[:, :])
labels = labels[1:N]

@model dppl_naive_bayes(image_vec, labels, C, D) = begin
    m ~ filldist(Normal(0, 10), C, D)
    image_vec ~ MvNormal(vec(m[labels, :]), I)
end

@register dppl_naive_bayes(image_vec, labels, C, D)
