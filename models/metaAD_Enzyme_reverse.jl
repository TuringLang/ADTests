using Enzyme: Reverse, gradient

f(x) = x*x

@model function metaAD_Enzymne_reverse(y)
    x ~ Normal()
    gradients = gradient(Reverse, f, x)
    y ~ Normal(sum(gradients), 0.01)
end

model = metaAD_Enzymne_reverse(0.5)