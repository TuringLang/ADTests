@model function dot_assume_observe_index(x=[1.5, 2.0, 2.5], ::Type{TV}=Vector{Float64}) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a[i])
    end
end

@register dot_assume_observe_index()
