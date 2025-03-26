JULIA_COMMAND="julia --project=app app/output.jl"
OUTPUT_CSV="output/ad_results.csv"
OUTPUT_HTML="output/ad_results.html"
mkdir output

# Create output file
rm -f ${OUTPUT_CSV}
${JULIA_COMMAND} --setup "${OUTPUT_CSV}"

# Get the number of tests
NTESTS=$(wc -l < "${OUTPUT_CSV}")

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
    "${SED_CMD[@]}" "/^${i},/s/todo$/${RESULT}/" "${OUTPUT_CSV}"
done

echo ===============================================
printf "\n\nResults:\n"
cat "${OUTPUT_CSV}"
echo ===============================================

# Generate HTML file
readarray -t MODELS < <(cat "${OUTPUT_CSV}" | cut -d, -f2 | sort | uniq)
readarray -t ADTYPES < <(cat "${OUTPUT_CSV}" | cut -d, -f3 | sort | uniq)

rm -f ${OUTPUT_HTML}

cat <<EOF > ${OUTPUT_HTML}
<!DOCTYPE html>
<html>
<head><title>DynamicPPL AD results</title></head>
<body>
<h1>DynamicPPL AD results</h1>

<p><a href="https://turinglang.org/docs">Back to TuringLang docs</a></p>
<p><a href="https://turinglang.org/DynamicPPL.jl/stable/">Back to DynamicPPL package documentation</a></p>

<h2>Notes</h2>

<ul>
<li>The definitions of the models and AD types below can be found at TODO LINK.</li>
<li>Numbers indicate the time taken to calculate the gradient of the log density of the model using the specified AD type, divided by the time taken to calculate the log density itself (in AD speak, the primal).</li>
<li>A red cross emoji indicates that the gradient calculation errored, or gave a numerically incorrect result.</li>
</ul>

<h2>Results</h2>

<table border="1">
<tr>
<th>Model</th>
EOF

for ADTYPE in "${ADTYPES[@]}"; do
    echo "<th>${ADTYPE}</th>" >> ${OUTPUT_HTML}
done
for MODEL in "${MODELS[@]}"; do
    echo "<tr><td>${MODEL}</td>" >> ${OUTPUT_HTML}
    for ADTYPE in "${ADTYPES[@]}"; do
        RESULT=$(grep ",${MODEL},${ADTYPE}," "${OUTPUT_CSV}" | cut -d, -f4)
        if [ "${RESULT}" == "err" ]; then
            echo "<td>❌</td>" >> ${OUTPUT_HTML}
        else
            RESULT=$(printf "%.3f" "$RESULT")
            echo "<td>${RESULT}</td>" >> ${OUTPUT_HTML}
        fi
    done
    echo "</tr>" >> ${OUTPUT_HTML}
done

echo "</table></body></html>" >> ${OUTPUT_HTML}

echo ===============================================
printf "\n\nHTML output:\n"
cat "${OUTPUT_HTML}"
echo ===============================================
