using DynamicPPL: DynamicPPL, VarInfo
using DynamicPPL.TestUtils.AD: run_ad, ADResult, ADIncorrectException, WithBackend
using ADTypes
using Random: Xoshiro

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
    "MooncakeReverse" => AutoMooncake(),
    "MooncakeForward" => AutoMooncakeForward(),
    "EnzymeForward" => AutoEnzyme(; mode=set_runtime_activity(Forward, true)),
    "EnzymeReverse" => AutoEnzyme(; mode=set_runtime_activity(Reverse, true)),
    "Zygote" => AutoZygote(),
)

MODELS = Dict{String,Tuple{String,DynamicPPL.Model}}()
macro register(category, model)
    :(MODELS[string($(esc(model)).f)] = ($(esc(category)), $(esc(model))))
end

"""
    include_model(category::AbstractString, model_name::AbstractString)

Add the model defined in `models/model_name.jl` to the full list of models
tested in this script. The model is registered under the given `category`.

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
macro include_model(category::AbstractString, model_name::AbstractString)
    MODELS_TO_LOAD = get(ENV, "ADTESTS_MODELS_TO_LOAD", "__all__")
    if MODELS_TO_LOAD == "__all__" || model_name in split(MODELS_TO_LOAD, ",")
        # Declare a module containing the model. In principle esc() shouldn't
        # be needed, but see https://github.com/JuliaLang/julia/issues/55677
        Expr(:toplevel, esc(:(module $(gensym())
        using .Main: @register
        using Turing
        include("models/" * $(model_name) * ".jl")
        @register $(category) model
        end)))
    else
        # Empty expression
        :()
    end
end

# Models to test. The convention is that:
#    a, b, c, ... are assumed variables
#    x, y, z, ... are observed variables
# although it's hardly a big deal.
@include_model "Base Julia features" "control_flow"
@include_model "Base Julia features" "multithreaded"
@include_model "Base Julia features" "call_C"
@include_model "Core Turing syntax" "broadcast_macro"
@include_model "Core Turing syntax" "dot_assume"
@include_model "Core Turing syntax" "dot_observe"
@include_model "Core Turing syntax" "dynamic_constraint"
@include_model "Core Turing syntax" "multiple_constraints_same_var"
@include_model "Core Turing syntax" "observe_index"
@include_model "Core Turing syntax" "observe_literal"
@include_model "Core Turing syntax" "observe_multivariate"
@include_model "Core Turing syntax" "observe_submodel"
@include_model "Distributions" "assume_beta"
@include_model "Distributions" "assume_dirichlet"
@include_model "Distributions" "assume_lkjcholu"
@include_model "Distributions" "assume_mvnormal"
@include_model "Distributions" "assume_normal"
@include_model "Distributions" "assume_submodel"
@include_model "Distributions" "assume_wishart"
@include_model "Distributions" "observe_bernoulli"
@include_model "Distributions" "observe_categorical"
@include_model "Distributions" "observe_von_mises"
@include_model "DynamicPPL demo models" "demo_assume_dot_observe"
@include_model "DynamicPPL demo models" "demo_assume_dot_observe_literal"
@include_model "DynamicPPL demo models" "demo_assume_index_observe"
@include_model "DynamicPPL demo models" "demo_assume_matrix_observe_matrix_index"
@include_model "DynamicPPL demo models" "demo_assume_multivariate_observe"
@include_model "DynamicPPL demo models" "demo_assume_multivariate_observe_literal"
@include_model "DynamicPPL demo models" "demo_assume_observe_literal"
@include_model "DynamicPPL demo models" "demo_assume_submodel_observe_index_literal"
@include_model "DynamicPPL demo models" "demo_dot_assume_observe"
@include_model "DynamicPPL demo models" "demo_dot_assume_observe_index"
@include_model "DynamicPPL demo models" "demo_dot_assume_observe_index_literal"
@include_model "DynamicPPL demo models" "demo_dot_assume_observe_matrix_index"
@include_model "DynamicPPL demo models" "demo_dot_assume_observe_submodel"
@include_model "Effect of model size" "n010"
@include_model "Effect of model size" "n050"
@include_model "Effect of model size" "n100"
@include_model "Effect of model size" "n500"
@include_model "PosteriorDB" "pdb_eight_schools_centered"
@include_model "PosteriorDB" "pdb_eight_schools_noncentered"
@include_model "Miscellaneous features" "metabayesian_MH"

# The entry point to this script itself begins here
if ARGS == ["--list-model-keys"]
    foreach(println, sort(collect(keys(MODELS))))
elseif ARGS == ["--list-adtype-keys"]
    foreach(println, sort(collect(keys(ADTYPES))))
elseif length(ARGS) == 2 && ARGS[1] == "--get-category"
    println(MODELS[ARGS[2]][1])
elseif length(ARGS) == 3 && ARGS[1] == "--run"
    model_name, adtype_name = ARGS[2], ARGS[3]
    model, adtype = MODELS[model_name][2], ADTYPES[adtype_name]

    try
        if model_name == "control_flow"
            # https://github.com/TuringLang/ADTests/issues/4
            vi = DynamicPPL.unflatten(VarInfo(model), [0.5, -0.5])
            params = [-0.5, 0.5]
            result = run_ad(model, adtype; varinfo=vi, params=params, test=WithBackend(ADTYPES["FiniteDifferences"]), benchmark=true)
        else
            result = run_ad(
                model,
                adtype;
                rng=Xoshiro(468),
                test=WithBackend(ADTYPES["FiniteDifferences"]),
                benchmark=true,
            )
        end
        # If reached here - nothing went wrong
        println(result.grad_time / result.primal_time)
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
    println("       julia main.jl --get-category <model>")
end
