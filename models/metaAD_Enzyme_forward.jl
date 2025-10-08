using Enzyme: Forward, gradient

f(x) = x*x

@model function metaAD_Enzymne_forward(y)
    x ~ Normal()
    gradients = gradient(Forward, f, x)
    y ~ Normal(sum(gradients), 0.01)
end

model = metaAD_Enzymne_forward(0.5)