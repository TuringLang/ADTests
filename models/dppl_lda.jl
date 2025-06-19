v = 100      # words
k = 5        # topics
m = 10       # number of docs
alpha = ones(k)
beta = ones(v)

phi = rand(Dirichlet(beta), k)
theta = rand(Dirichlet(alpha), m)
doc_lengths = rand(Poisson(1_000), m)
n = sum(doc_lengths)

w_lda = Vector{Int}(undef, n)
doc_lda = Vector{Int}(undef, n)
for i in 1:m
    # Because all the models exist in the same scope, we need
    # to add some variable suffixes to avoid local/global 
    # scope warnings. This is quite ugly and should be solved
    # properly, using e.g. modules or functions.
    local idx_lda = sum(doc_lengths[1:i-1]) # starting index for inner loop
    for j in 1:doc_lengths[i]
        z_lda = rand(Categorical(theta[:, i]))
        w_lda[idx_lda + j] = rand(Categorical(phi[:, z_lda]))
        doc_lda[idx_lda + j] = i
    end
end

@model function dppl_lda(k, m, w, doc, alpha, beta)
    theta ~ filldist(Dirichlet(alpha), m)
    phi ~ filldist(Dirichlet(beta), k)
    log_phi_dot_theta = log.(phi * theta)
    DynamicPPL.@addlogprob! sum(log_phi_dot_theta[CartesianIndex.(w, doc)])
end

@register dppl_lda(k, m, w_lda, doc_lda, alpha, beta)
