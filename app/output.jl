import Pkg
Pkg.develop(; path=joinpath(@__DIR__, ".."))

import Test: @test, @testset
import ModelTests: MODELS, run_ad
using ADTypes

import ForwardDiff
import ReverseDiff
import Mooncake
import Enzyme: set_runtime_activity, Forward, Reverse, ForwardMode, ReverseMode

"""
    ADTYPES::Vector{ADTypes.AbstractADType}

List of AD backends to test.
"""
ADTYPES = [
    AutoForwardDiff(),
    AutoReverseDiff(; compile=false),
    AutoReverseDiff(; compile=true),
    AutoMooncake(; config=nothing),
    AutoEnzyme(; mode=set_runtime_activity(Forward, true)),
    AutoEnzyme(; mode=set_runtime_activity(Reverse, true)),
]

"""
    get_adtype_shortname(adtype::ADTypes.AbstractADType)

Get the package name that corresponds to the the AD backend `adtype`. Only used
for pretty-printing.

NOTE: Make sure that there's no comma in the name!
"""
get_adtype_shortname(::AutoMooncake) = "Mooncake"
get_adtype_shortname(::AutoForwardDiff) = "ForwardDiff"
get_adtype_shortname(::AutoReverseDiff{false}) = "ReverseDiff"
get_adtype_shortname(::AutoReverseDiff{true}) = "ReverseDiff:Compiled"
get_adtype_shortname(::AutoEnzyme{<:ReverseMode}) = "Enzyme:Reverse"
get_adtype_shortname(::AutoEnzyme{<:ForwardMode}) = "Enzyme:Forward"

if ARGS == ["--run-all"] || ARGS == []
    # Run all tests in one process. Dangerous as Enzyme can crash Julia
    @testset verbose = true "$(model.f)" for model in MODELS
        @testset for adtype in ADTYPES
            result = run_ad(model, adtype; benchmark=true)
            @test isnothing(result.error)
        end
    end
elseif length(ARGS) == 2 && ARGS[1] == "--setup"
    output_file = ARGS[2]
    total = length(MODELS) * length(ADTYPES)
    open(output_file, "w") do io
        for i in 1:total
            cartesian = CartesianIndices((length(ADTYPES), length(MODELS)))[i]
            adtype, model = ADTYPES[cartesian[1]], MODELS[cartesian[2]]
            println(io, "$(i),$(model.f),$(get_adtype_shortname(adtype)),todo")
        end
    end
elseif length(ARGS) == 2 && ARGS[1] == "--run"
    # Run a single test
    i = parse(Int, ARGS[2])
    cartesian = CartesianIndices((length(ADTYPES), length(MODELS)))[i]
    adtype, model = ADTYPES[cartesian[1]], MODELS[cartesian[2]]
    result = run_ad(model, adtype; benchmark=true)
    if isnothing(result.error)
        println(result.time_vs_primal)
    else
        println("err")
    end
end
