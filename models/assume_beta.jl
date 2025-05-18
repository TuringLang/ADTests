@model function assume_beta()
    a ~ Beta(2, 2)
end

@register assume_beta()
