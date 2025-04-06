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
    echo "  run <model_key>: Run the model with the specified key"
    exit 1
}

show_output () {
    echo "----- \$GITHUB_OUTPUT CONTENTS BEGIN -----"
    cat $GITHUB_OUTPUT
    echo "----- \$GITHUB_OUTPUT CONTENTS END   -----"
}

setup () {
    echo "Getting model keys..."
    readarray -t MODELS < <(${JULIA_COMMAND[@]} --list-model-keys)
    MODELS_JSON=$(jq -c -n '$ARGS.positional' --args ${MODELS[@]})
    echo "model_keys=${MODELS_JSON}" >> "${GITHUB_OUTPUT}"

    echo "Getting adtype keys..."
    readarray -t ADTYPES < <(${JULIA_COMMAND[@]} --list-adtype-keys)
    ADTYPE_JSON=$(jq -c -n '$ARGS.positional' --args ${ADTYPES[@]})
    echo "adtype_keys=${ADTYPE_JSON}" >> "${GITHUB_OUTPUT}"

    show_output
}

# check if script is called with setup option
if [ "$1" == "setup" ]; then
    setup
    exit 0
elif [ "$1" == "run" ]; then
    if [ -z "$2" ]; then
        usage
    fi
    MODEL_KEY=$2

    if [ -z "$ADTYPE_KEYS" ]; then
        echo "ADTYPE_KEYS is not set"
        exit 1
    fi
    readarray -t ADTYPES < <(echo $ADTYPE_KEYS | jq -r '.[]')

    # run the model with the specified key
    for ADTYPE in "${ADTYPES[@]}"; do
        echo -n "Running ${MODEL_KEY} with ${ADTYPE}... "
        OUTPUT=$(${JULIA_COMMAND[@]} --run "${MODEL_KEY}" "${ADTYPE}" 2>/dev/null)
        if [ $? -eq 0 ]; then
            RESULT=$(echo "${OUTPUT}" | tail -n 1)
        else
            RESULT="err"
        fi
        echo "${RESULT}"
        echo "result___${MODEL_KEY}___${ADTYPE}=${RESULT}" >> "${GITHUB_OUTPUT}"
    done

    show_output
else
    usage
fi
