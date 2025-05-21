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

"""
    include_model(model_name::AbstractString)

Add the model defined in `models/model_name.jl` to the full list of models
tested in this script.

We want to isolate every model in its own module, so that we avoid e.g.
variable clashes, and also so that we make imports explicit.

However, we don't want the _model files_ themselves to be cluttered with e.g.
`module ... end` blocks as well as boring imports like @model,
Distributions.jl, etc. which Turing re-exports by default anyway. This is
because (a) it's boring and repetitive; and (b) the model definition shown on
the website is exactly the contents of each file, so we would like to keep it
as clean as possible.

To this end, instead of using `include(filename)` we write a small macro that
does this for us. We require the following to be true for each model
definition file:
 - The file is in the `models/` directory.
 - The file is named `model_name.jl`, where `model_name` is the name of the
   model, i.e. it's defined with `@model function model_name(...) ... end`.
 - Once defined, the model is created using `model = model_name(...)`. The
   `model` on the left-hand side is mandatory.
"""
macro include_model(model_name::AbstractString)
    MODELS_TO_LOAD = get(ENV, "ADTESTS_MODELS_TO_LOAD", "__all__")
    if MODELS_TO_LOAD == "__all__" || model_name in split(MODELS_TO_LOAD, ",")
        # Declare a module containing the model. In principle esc() shouldn't
        # be needed, but see https://github.com/JuliaLang/julia/issues/55677
        Expr(:toplevel, esc(:(
            module $(gensym())
                using .Main: @register
                using Turing
                include("models/" * $(model_name) * ".jl")
                @register model
            end
        )))
    else
        # Empty expression
        :()
    end
end

@include_model "assume_beta"
@include_model "assume_dirichlet"
@include_model "assume_lkjcholu"
@include_model "assume_mvnormal"
@include_model "assume_normal"
@include_model "assume_submodel"
@include_model "assume_wishart"
@include_model "broadcast_macro"
@include_model "control_flow"
@include_model "demo_assume_dot_observe"
@include_model "demo_assume_dot_observe_literal"
@include_model "demo_assume_index_observe"
@include_model "demo_assume_matrix_observe_matrix_index"
@include_model "demo_assume_multivariate_observe"
@include_model "demo_assume_multivariate_observe_literal"
@include_model "demo_assume_observe_literal"
@include_model "demo_assume_submodel_observe_index_literal"
@include_model "demo_dot_assume_observe"
@include_model "demo_dot_assume_observe_index"
@include_model "demo_dot_assume_observe_index_literal"
@include_model "demo_dot_assume_observe_matrix_index"
@include_model "demo_dot_assume_observe_submodel"
@include_model "dot_assume"
@include_model "dot_observe"
@include_model "dppl_gauss_unknown.jl"
@include_model "dppl_high_dim_gauss.jl"
@include_model "dppl_naive_bayes.jl"
@include_model "dynamic_constraint"
@include_model "multiple_constraints_same_var"
@include_model "multithreaded"
@include_model "n010"
@include_model "n050"
@include_model "n100"
@include_model "n500"
@include_model "observe_bernoulli"
@include_model "observe_categorical"
@include_model "observe_index"
@include_model "observe_literal"
@include_model "observe_multivariate"
@include_model "observe_submodel"
@include_model "pdb_eight_schools_centered"
@include_model "pdb_eight_schools_noncentered"
@include_model "von_mises"

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
        println(result.time_vs_primal)
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
