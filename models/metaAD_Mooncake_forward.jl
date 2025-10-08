using DifferentiationInterface
import Mooncake

f(x) = sum(cos, x)

@model function metaAD_Mooncake_forward(y)
    x ~ filldist(Normal(), 2)

    backend = AutoMooncakeForward()
    prep = prepare_gradient(f, backend, x)
    out = sum(gradient(f, prep, backend, x))

    y ~ Normal(out, 0.01)
end

model = metaAD_Mooncake_forward(0.5)