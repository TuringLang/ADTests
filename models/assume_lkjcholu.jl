@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

@register assume_lkjcholu()
