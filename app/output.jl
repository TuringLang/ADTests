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
            result = run_ad(model, adtype)
            @test isnothing(result.error)
        end
    end
elseif ARGS == ["--show-total"]
    # Print the total number of tests. Note that this always goes to
    # stderr along with all the other Julia output...
    println(length(MODELS) * length(ADTYPES))
elseif length(ARGS) == 2 && ARGS[1] == "--run"
    # Run a single test
    n = parse(Int, ARGS[2])
    cartesian = CartesianIndices((length(ADTYPES), length(MODELS)))[n]
    adtype, model = ADTYPES[cartesian[1]], MODELS[cartesian[2]]
    result = run_ad(model, adtype)
    @test isnothing(result.error)

    # TODO: Collect results and print into json
end
