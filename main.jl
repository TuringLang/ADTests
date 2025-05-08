import Test: @test, @testset
using DynamicPPL: DynamicPPL, VarInfo
using DynamicPPL.TestUtils.AD: run_ad, ADResult, ADIncorrectException
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

# The entry point to this script itself begins here
if ARGS == ["--list-model-keys"]
    foreach(println, sort(collect(keys(MODELS))))
elseif ARGS == ["--list-adtype-keys"]
    foreach(println, sort(collect(keys(ADTYPES))))
elseif length(ARGS) == 3 && ARGS[1] == "--run"
    model, adtype = MODELS[ARGS[2]], ADTYPES[ARGS[3]]

    try
        if ARGS[2] == "control_flow"
            # https://github.com/TuringLang/ADTests/issues/4
            vi = DynamicPPL.unflatten(VarInfo(model), [0.5, -0.5])
            params = [-0.5, 0.5]
            result = run_ad(model, adtype; varinfo=vi, params=params, benchmark=true)
        else
            result = run_ad(model, adtype; benchmark=true)
        end
        # If reached here - nothing went wrong
        @printf("%.3f", result.time_vs_primal)
    catch e
        @show e
        if e isa ADIncorrectException
            # First check for completely incorrect ones
            for (a, b) in zip(e.grad_expected, e.grad_actual)
                if !isnan(a) && !isnan(b) && abs(a - b) > 1e-6
                    println("wrong")
                    exit()
                end
            end
            # If not, check for NaN's and report those
            if any(isnan, e.grad_expected) || any(isnan, e.grad_actual)
                println("NaN")
            else
                # Something else went wrong, shouldn't happen
                println("wrong")
            end
        else
            # Some other error, just say it's an error
            println("error")
        end
    end
else
    println("Usage: julia main.jl --list-model-keys")
    println("       julia main.jl --list-adtype-keys")
    println("       julia main.jl --run <model> <adtype>")
end
