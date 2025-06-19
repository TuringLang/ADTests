@model function von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

@register von_mises(0.4)
