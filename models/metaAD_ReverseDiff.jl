using ReverseDiff: GradientConfig, gradient

f(a, b) = sum(a' * b + a * b')

@model function metaAD_ReverseDiff(y)

    a ~ Normal()
    b ~ Normal()

    a = fill(a, 1, 1)
    b = fill(b, 1, 1)

    inputs = (a, b)

    cfg = GradientConfig(inputs)
    gradients = gradient(f, inputs, cfg)
    gradient_sums = sum(sum.(gradients))

    y ~ Normal(gradient_sums, 0.01)
end

model = metaAD_ReverseDiff(0.5)