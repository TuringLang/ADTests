import Test: @test, @testset
using DynamicPPL: DynamicPPL, VarInfo
using ADTypes
using Printf: @printf

import FiniteDifferences: central_fdm
import ForwardDiff
import ReverseDiff
import Mooncake
import Enzyme: set_runtime_activity, Forward, Reverse
import Zygote

# AD backends to test.
ADTYPES = Dict(
    "FiniteDifferences" => AutoFiniteDifferences(; fdm=central_fdm(5, 1)),
    "ForwardDiff" => AutoForwardDiff(),
    "ReverseDiff" => AutoReverseDiff(; compile=false),
    "ReverseDiffCompiled" => AutoReverseDiff(; compile=true),
    "Mooncake" => AutoMooncake(; config=nothing),
    "EnzymeForward" => AutoEnzyme(; mode=set_runtime_activity(Forward, true)),
    "EnzymeReverse" => AutoEnzyme(; mode=set_runtime_activity(Reverse, true)),
    "Zygote" => AutoZygote(),
)

# Models to test.
include("models.jl")
using .Models: MODELS

# Benchmarking code is defined here. In time this will be put into DynamicPPL.
# See https://github.com/TuringLang/DynamicPPL.jl/pull/882
include("lib.jl")
using .Lib: run_ad, ADIncorrectException

# The entry point to this script itself begins here
if ARGS == ["--list-model-keys"]
    foreach(println, sort(collect(keys(MODELS))))
elseif ARGS == ["--list-adtype-keys"]
    foreach(println, sort(collect(keys(ADTYPES))))
elseif length(ARGS) == 3 && ARGS[1] == "--run"
    model, adtype = MODELS[ARGS[2]], ADTYPES[ARGS[3]]

    if ARGS[2] == "control_flow"
        # https://github.com/TuringLang/ADTests/issues/4
        vi = DynamicPPL.unflatten(VarInfo(model), [0.5, -0.5])
        params = [-0.5, 0.5]
        result = run_ad(model, adtype; varinfo=vi, params=params, benchmark=true)
    else
        result = run_ad(model, adtype; benchmark=true)
    end

    if isnothing(result.error)
        @printf("%.3f", result.time_vs_primal)
    elseif result.error isa ADIncorrectException
        println("wrong")
    else
        # some other error happened
        println("error")
    end
else
    println("Usage: julia main.jl --list-model-keys")
    println("       julia main.jl --list-adtype-keys")
    println("       julia main.jl --run <model> <adtype>")
end
