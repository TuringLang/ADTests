using DifferentiationInterface
import Mooncake

f(x) = sum(cos, x)

@model function metaAD_Mooncake(y)
    x ~ filldist(Normal(), 2)

    backend = AutoMooncake()
    prep = prepare_gradient(f, backend, x)
    out = sum(gradient(f, prep, backend, x))

    y ~ Normal(out, 0.01)
end

model = metaAD_Mooncake(0.5)