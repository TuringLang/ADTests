@model function demo_dot_assume_observe_matrix_index(
    x=transpose([1.5 2.0;]), ::Type{TV}=Vector{Float64}
) where {TV}
    s = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m = TV(undef, length(x))
    m ~ product_distribution(Normal.(0, sqrt.(s)))

    x[:, 1] ~ MvNormal(m, Diagonal(s))

    return (; s=s, m=m, x=x, logp=getlogp(__varinfo__))
end

@register demo_dot_assume_observe_matrix_index()
