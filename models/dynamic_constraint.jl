@model function dynamic_constraint() a ~ Normal()
    b ~ truncated(Normal(); lower=a)
end

@register dynamic_constraint()
