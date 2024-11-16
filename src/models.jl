module Models

using DynamicPPL
using Distributions

@model function demo_dynamic_constraint()
    m ~ Normal()
    x ~ truncated(Normal(), m, Inf)
    return (m=m, x=x)
end

MODELS = [demo_dynamic_constraint()]

end
