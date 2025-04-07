import pandas as pd
import json
import os

results = os.environ.get("RESULTS_JSON", None)

if results is None:
    print("RESULTS_JSON not set")
    exit(1)
else:
    print("-------- $RESULTS_JSON --------")
    print(results)
    print("------------- END -------------")

# results is a list of dicts that looks something like this
# [
#     {"model_name": "model1",
#      "results": "{\"AD1\": \"result1\", \"AD2\": \"result2\"}"},
#     {"model_name": "model2",
#      "results": "{\"AD1\": \"result3\", \"AD2\": \"result4\"}"}
# ]

# json-dicts but encoded as strings :upside_down_face:
results_rearranged = []

for entry in json.loads(results):
    entry_flattened = {"model_name": entry["model_name"]}
    model_results = json.loads(entry["results"])
    entry_flattened.update(model_results)
    results_rearranged.append(entry_flattened)

df = pd.DataFrame.from_records(results_rearranged)

print(df)

HTML_HEADER = """
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
<li><i>incorrect</i> means that AD ran but the result was not correct. If this
happens you should be very wary!</li>
<li><i>err</i> means that AD didn't run.</li>
</ul>

<h2>Results</h2>
"""

# Create the directory if it doesn't exist
os.makedirs("html", exist_ok=True)
with open("html/results.html", "w") as f:
    f.write(HTML_HEADER)
    f.write(df.to_html())
    f.write("</body></html>")
