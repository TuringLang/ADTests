NTESTS=$(julia --project=app app/output.jl --show-total | tail -n 1)

for i in $(seq 1 $NTESTS); do
    echo "Testing ${i}/${NTESTS}"
    julia --project=app app/output.jl --run $i
done
