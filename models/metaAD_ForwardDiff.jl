using ForwardDiff

f(x::Vector) = sum(x)

@model function metaAD_ForwardDiff(y)
    x ~ filldist(Normal(), 2)
    gradients = ForwardDiff.gradient(f, x)
    y ~ Normal(sum(gradients), 0.01)
end

model = metaAD_ForwardDiff(0.5)