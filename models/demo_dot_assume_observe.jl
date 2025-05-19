@model function demo_dot_assume_observe(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    # `dot_assume` and `observe`
    s = TV(undef, length(x))
    m = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m ~ product_distribution(Normal.(0, sqrt.(s)))

    x ~ MvNormal(m, Diagonal(s))
    return (; s = s, m = m, x = x, logp = getlogp(__varinfo__))
end

@register demo_dot_assume_observe()
