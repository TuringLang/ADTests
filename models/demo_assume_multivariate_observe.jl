@model function demo_assume_multivariate_observe(x=[1.5, 2.0])
    # Multivariate `assume` and `observe`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))

    return (; s=s, m=m, x=x, logp=getlogp(__varinfo__))
end

@register demo_assume_multivariate_observe()
