@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

@register assume_wishart()
