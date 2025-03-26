JULIA_COMMAND="julia --project=app app/output.jl"
OUTPUT_FILE="app/ad_results.csv"

# Create output file
rm -f ${OUTPUT_FILE}
${JULIA_COMMAND} --setup "${OUTPUT_FILE}"

# Get the number of tests
NTESTS=$(wc -l < "${OUTPUT_FILE}")

# Silly sed shenanigans
if sed --version >/dev/null 2>&1; then
    SED_CMD=("sed" "-i")
else
    SED_CMD=("sed" "-i" "")
fi

for i in $(seq 1 $NTESTS); do
    echo "Testing ${i}/${NTESTS}"
    OUTPUT=$(${JULIA_COMMAND} --run ${i})
    if [ $? -eq 0 ]; then
        RESULT=$(echo "${OUTPUT}" | tail -n 1)
    else
        RESULT="err"
    fi
    "${SED_CMD[@]}" "/^${i},/s/todo$/${RESULT}/" "${OUTPUT_FILE}"
done
