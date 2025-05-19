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
    "FiniteDifferences" => AutoFiniteDifferences(; fdm = central_fdm(5, 1)),
    "ForwardDiff" => AutoForwardDiff(),
    "ReverseDiff" => AutoReverseDiff(; compile = false),
    "ReverseDiffCompiled" => AutoReverseDiff(; compile = true),
    "Mooncake" => AutoMooncake(; config = nothing),
    "EnzymeForward" => AutoEnzyme(; mode = set_runtime_activity(Forward, true)),
    "EnzymeReverse" => AutoEnzyme(; mode = set_runtime_activity(Reverse, true)),
    "Zygote" => AutoZygote(),
)

# Models to test. The convention is that:
#    a, b, c, ... are assumed variables
#    x, y, z, ... are observed variables
# although it's hardly a big deal.
MODELS = Dict{String,DynamicPPL.Model}()
macro register(model)
    :(MODELS[string($(esc(model)).f)] = $(esc(model)))
end

# These imports tend to get used a lot in models
using DynamicPPL: @model, to_submodel
using Distributions
using LinearAlgebra

include("models/assume_dirichlet.jl")
include("models/assume_lkjcholu.jl")
include("models/assume_mvnormal.jl")
include("models/assume_normal.jl")
include("models/assume_submodel.jl")
include("models/assume_wishart.jl")
include("models/control_flow.jl")
include("models/demo_assume_dot_observe_literal.jl")
include("models/demo_assume_dot_observe.jl")
include("models/demo_assume_index_observe.jl")
include("models/demo_assume_matrix_observe_matrix_index.jl")
include("models/demo_assume_multivariate_observe_literal.jl")
include("models/demo_assume_multivariate_observe.jl")
include("models/demo_assume_observe_literal.jl")
include("models/demo_assume_submodel_observe_index_literal.jl")
include("models/demo_dot_assume_observe_index_literal.jl")
include("models/demo_dot_assume_observe_index.jl")
include("models/demo_dot_assume_observe_matrix_index.jl")
include("models/demo_dot_assume_observe_submodel.jl")
include("models/demo_dot_assume_observe.jl")
include("models/dot_assume.jl")
include("models/demo_dot_assume_observe.jl")
include("models/dot_observe.jl")
include("models/dynamic_constraint.jl")
include("models/multiple_constraints_same_var.jl")
include("models/multithreaded.jl")
include("models/n010.jl")
include("models/n050.jl")
include("models/n100.jl")
include("models/n500.jl")
include("models/observe_index.jl")
include("models/observe_literal.jl")
include("models/observe_multivariate.jl")
include("models/observe_submodel.jl")
include("models/pdb_eight_schools_centered.jl")
include("models/pdb_eight_schools_noncentered.jl")

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
            result = run_ad(model, adtype; varinfo = vi, params = params, benchmark = true)
        else
            result = run_ad(model, adtype; benchmark = true)
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
