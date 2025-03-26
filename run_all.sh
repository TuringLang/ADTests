JULIA_COMMAND="julia --project=app app/output.jl"
OUTPUT_FILE="app/ad_results.csv"

# Create output file
rm ${OUTPUT_FILE}
${JULIA_COMMAND} --setup ${OUTPUT_FILE}

# Get the number of tests
NTESTS=$(wc -l < ${OUTPUT_FILE})

# Silly sed shenanigans
if sed --version >/dev/null 2>&1; then
    SED_CMD="sed -i" # GNU (Linux)
else
    SED_CMD="sed -i ''" # BSD (macOS)
fi

for i in $(seq 1 $NTESTS); do
    echo "Testing ${i}/${NTESTS}"
    RESULT=$(${JULIA_COMMAND} --run ${i} | tail -n 1)
    if [ $? -ne 0 ]; then
        RESULT="err"
    fi
    ${SED_CMD} "/^${i},/s/todo$/${RESULT}/" ${OUTPUT_FILE}
done
