using ReverseDiff: GradientTape, gradient!, compile

f(a, b) = sum(a' * b + a * b')

@model function metaAD_ReverseDiff_compiled(y)

    a ~ Normal()
    b ~ Normal()

    a = fill(a, 1, 1)
    b = fill(b, 1, 1)

    inputs = (a, b)
    results = (similar(a), similar(b))

    compiled_f_tape = compile(GradientTape(f, inputs))
    gradients = gradient!(results, compiled_f_tape, inputs)
    gradient_sums = sum(sum.(gradients))

    y ~ Normal(gradient_sums, 0.01)
end

model = metaAD_ReverseDiff_compiled(0.5)