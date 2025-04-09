import Pkg
Pkg.develop(; path=joinpath(@__DIR__, ".."))

import Test: @test, @testset
import ModelTests: MODELS, run_ad, ADIncorrectException
import DynamicPPL as D
using ADTypes
using Printf: @printf

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
    "ReverseDiffCompiled" => AutoReverseDiff(; compile=true),
    "Mooncake" => AutoMooncake(; config=nothing),
    "EnzymeForward" => AutoEnzyme(; mode=set_runtime_activity(Forward, true)),
    "EnzymeReverse" => AutoEnzyme(; mode=set_runtime_activity(Reverse, true)),
)

if ARGS == ["--list-model-keys"]
    foreach(println, keys(MODELS))
elseif ARGS == ["--list-adtype-keys"]
    foreach(println, keys(ADTYPES))
elseif length(ARGS) == 3 && ARGS[1] == "--run"
    model, adtype = MODELS[ARGS[2]], ADTYPES[ARGS[3]]

    
    if ARGS[2] == "control_flow"
        # https://github.com/penelopeysm/ModelTests.jl/issues/4
        vi = D.unflatten(D.VarInfo(model), [0.5, -0.5])
        params = [-0.5, 0.5]
        result = run_ad(model, adtype; varinfo=vi, params=params, benchmark=true)
    else
        result = run_ad(model, adtype; benchmark=true)
    end

    if isnothing(result.error)
        @printf("%.3f", result.time_vs_primal)
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
