@model function demo_assume_dot_observe_literal()
    # `assume` and literal `dot_observe`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))

    return (; s = s, m = m, x = [1.5, 2.0], logp = getlogp(__varinfo__))
end

@register demo_assume_dot_observe_literal()
