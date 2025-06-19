using StatsFuns: logistic
using LazyArrays

d, n = 100, 10_000
X = randn(d, n)
w = randn(d)
y = Int.(logistic.(X' * w) .> 0.5)

function safelogistic(x::T) where {T}
    logistic(x) * (1 - 2 * eps(T)) + eps(T)
end

lazyarray(f, x) = LazyArray(Base.broadcasted(f, x))

@model dppl_logistic_regression(Xt, y) = begin
    N, D = size(Xt)
    w ~ filldist(Normal(), D)
    y ~ arraydist(lazyarray(x -> Bernoulli(safelogistic(x)), Xt * w))
end

@register dppl_logistic_regression(X', y)
