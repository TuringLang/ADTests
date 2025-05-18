@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

@register observe_literal()
