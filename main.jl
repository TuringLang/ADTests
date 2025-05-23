module MWE

import Enzyme: Enzyme, Reverse, Const, set_runtime_activity

Enzyme.Compiler.VERBOSE_ERRORS[] = true

struct PStruct end
Base.getproperty(::Type{PStruct}, s::Symbol) = getfield(PStruct, s)
struct QStruct end
Base.getproperty(::Type{QStruct}, s::Symbol) = getfield(QStruct, s)
struct RStruct end
Base.getproperty(::Type{RStruct}, s::Symbol) = getfield(RStruct, s)

function g(xs)
    return broadcast(x -> (exp(x), x), xs)
end

# function f(x::AbstractVector)
#     logp = Ref(0.0)
#     ts = broadcast(g, x)
#     logp[] += ts[1][1]
#     return logp[]
# end

function f(x::AbstractVector)
    ts = broadcast(g, x)
    return ts[1][1]
end

x = [0.5, 1.0]
# @show f(x)

Enzyme.gradient(Reverse, f, x)

end
