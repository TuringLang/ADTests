JULIA_COMMAND=("julia" "--project=." "output.jl")

# TODO: cd to the correct directory inside this script
if [ -f "output.jl" ]; then
    :
else
    echo "This script must be run from the app/ subdirectory"
    exit 1
fi

if [ -z "$GITHUB_OUTPUT" ]; then
    GITHUB_OUTPUT=$(mktemp)
    echo "Not running on GitHub; using temporary file (${GITHUB_OUTPUT}) for output"
fi

usage () {
    echo "Usage: $0 [setup|run <model_key>]"
    echo "  setup: store available model keys and AD types in GITHUB_OUTPUT"
    echo "  run-model <model_key>: Run the given model with all AD types"
    exit 1
}

show_output () {
    echo "----- \$GITHUB_OUTPUT CONTENTS BEGIN -----"
    cat $GITHUB_OUTPUT
    echo "----- \$GITHUB_OUTPUT CONTENTS END   -----"
}

setup () {
    echo "Getting model keys..."
    readarray -t MODELS < <(${JULIA_COMMAND[@]} --list-model-keys 2>/dev/null)
    MODELS_JSON=$(jq -c -n '$ARGS.positional' --args ${MODELS[@]})
    echo "model_keys=${MODELS_JSON}" >> "${GITHUB_OUTPUT}"

    echo "Getting adtype keys..."
    readarray -t ADTYPES < <(${JULIA_COMMAND[@]} --list-adtype-keys 2>/dev/null)
    ADTYPE_JSON=$(jq -c -n '$ARGS.positional' --args ${ADTYPES[@]})
    echo "adtype_keys=${ADTYPE_JSON}" >> "${GITHUB_OUTPUT}"

    show_output
}

# check if script is called with setup option
if [ "$1" == "setup" ]; then
    setup
    exit 0
elif [ "$1" == "run-model" ]; then
    if [ -z "$2" ]; then
        usage
    fi
    MODEL_KEY=$2

    if [ -z "$ADTYPE_KEYS" ]; then
        echo "ADTYPE_KEYS is not set"
        exit 1
    fi
    readarray -t ADTYPES < <(echo $ADTYPE_KEYS | jq -r '.[]')

    declare -A RESULTS

    # run the model with the specified key
    for ADTYPE in "${ADTYPES[@]}"; do
        echo -n "Running ${MODEL_KEY} with ${ADTYPE}... "
        OUTPUT=$(timeout 10m ${JULIA_COMMAND[@]} --run "${MODEL_KEY}" "${ADTYPE}" 2>/dev/null)
        if [ $? -eq 0 ]; then
            RESULT=$(echo "${OUTPUT}" | tail -n 1)
        else
            RESULT="err"
        fi
        echo "${RESULT}"
        RESULTS["${ADTYPE}"]="${RESULT}"
    done

    # Convert the associative array to JSON representation
    RESULTS_JSON=$(for i in "${!dict[@]}"
    do
        echo "$i" 
        echo "${dict[$i]}"
    done |
        jq -c -n -R 'reduce inputs as $i ({}; . + { ($i): (input) })'
    )

    echo "results=${RESULTS_JSON}" >> "${GITHUB_OUTPUT}"

    show_output
else
    usage
fi
