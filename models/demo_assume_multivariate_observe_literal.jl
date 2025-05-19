@model function demo_assume_multivariate_observe_literal()
    # multivariate `assume` and literal `observe`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))

    return (; s=s, m=m, x=[1.5, 2.0], logp=getlogp(__varinfo__))
end

@register demo_assume_multivariate_observe_literal()
