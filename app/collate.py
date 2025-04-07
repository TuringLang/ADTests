import pandas as pd
import json
import os

results = os.environ.get("RESULTS_JSON", None)

if results is None:
    print("RESULTS_JSON not set")
    exit(1)

# results is a json dict where the keys are model names and the values are
# json-dicts but encoded as strings :upside_down_face:
results_rearranged = []

for model_name, model_results in json.loads(results).items():
    this_entry = {"model_name": model_name}
    model_results = json.loads(model_results)
    this_entry.update(model_results)
    results_rearranged.append(this_entry)

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

with open("html/results.html", "w") as f:
    f.write(HTML_HEADER)
    f.write(df.to_html())
    f.write("</body></html>")
