@model function dppl_high_dim_gauss(D)
    m ~ filldist(Normal(0, 1), D)
end

model = dppl_high_dim_gauss(10_000)
