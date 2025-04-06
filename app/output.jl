import Pkg
Pkg.develop(; path=joinpath(@__DIR__, ".."))

import Test: @test, @testset
import ModelTests: MODELS, run_ad, ADIncorrectException
using ADTypes

import ForwardDiff
import ReverseDiff
import Mooncake
import Enzyme: set_runtime_activity, Forward, Reverse

"""
    ADTYPES::Dict{String, ADTypes.AbstractADType}

List of AD backends to test.

NOTE: Make sure that the names are unique and do not contain commas
"""
ADTYPES = Dict(
    "ForwardDiff" => AutoForwardDiff(),
    "ReverseDiff" => AutoReverseDiff(; compile=false),
    # "ReverseDiff:Compiled" => AutoReverseDiff(; compile=true),
    # "Mooncake" => AutoMooncake(; config=nothing),
    # "Enzyme:Forward" => AutoEnzyme(; mode=set_runtime_activity(Forward, true)),
    # "Enzyme:Reverse" => AutoEnzyme(; mode=set_runtime_activity(Reverse, true)),
)

if ARGS == ["--list-model-keys"]
    foreach(println, keys(MODELS))
elseif ARGS == ["--list-adtype-keys"]
    foreach(println, keys(ADTYPES))
elseif length(ARGS) == 3 && ARGS[1] == "--run"
    model, adtype = MODELS[ARGS[2]], ADTYPES[ARGS[3]]
    result = run_ad(model, adtype; benchmark=true)
    if isnothing(result.error)
        println(result.time_vs_primal)
    elseif result.error isa ADIncorrectException
        println("incorrect")
    else
        # some other error happened
        println("err")
    end
else
    println("Usage: julia output.jl --list-model-keys")
    println("       julia output.jl --list-adtype-keys")
    println("       julia output.jl --run <model> <adtype>")
end
