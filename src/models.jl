module Models

using DynamicPPL
using Distributions

export MODELS

@model function demo_dynamic_constraint()
    m ~ Normal()
    x ~ truncated(Normal(); lower=m)
    return (m = m, x = x)
end

MODELS = Model[demo_dynamic_constraint()]

# Add models with different distributions

DISTRIBUTIONS = Dict(
    :normal => Normal(),
    :inverse_gamma => InverseGamma(),
    :beta => Beta(2, 2),
    :lkjcholu => LKJCholesky(5, 1.0, 'U'),
    :lkjcholl => LKJCholesky(5, 1.0, 'L'),
    :wishart => Wishart(7, [1.0 0.5; 0.5 1.0]),
)

for (name, distribution) in DISTRIBUTIONS
    @eval begin
        @model function $name()
            m ~ $distribution
        end
        push!(MODELS, $name())
    end
end

end
