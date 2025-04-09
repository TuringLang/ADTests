import json
import os

## Here you can register known errors that have been reported on GitHub /
## have otherwise been documented. They will be turned into links in the table.

TURING_ONE_PARAM = "https://github.com/EnzymeAD/Enzyme.jl/issues/2337"
KNOWN_ERRORS = {
    ("assume_beta", "EnzymeReverse"): TURING_ONE_PARAM,
    ("assume_dirichlet", "EnzymeReverse"): TURING_ONE_PARAM,
    ("assume_lkjcholu", "EnzymeReverse"): TURING_ONE_PARAM,
    ("assume_normal", "EnzymeReverse"): TURING_ONE_PARAM,
    ("assume_wishart", "EnzymeReverse"): TURING_ONE_PARAM,
}

results = os.environ.get("RESULTS_JSON", None)

if results is None:
    print("RESULTS_JSON not set")
    exit(1)
else:
    print("-------- $RESULTS_JSON --------")
    print(results)
    print("------------- END -------------")
    # results is a list of dicts that looks something like this.
    # [
    #     {"model_name": "model1",
    #      "results": {
    #          "AD1": "result1",
    #          "AD2": "result2"
    #      }
    #     },
    #     {"model_name": "model2",
    #      "results": {
    #          "AD1": "result3",
    #          "AD2": "result4"
    #      }
    #     }
    # ]
    # We do some processing to turn it into a dict of dicts
    results = json.loads(results)
    results = {entry["model_name"]: entry["results"] for entry in results}

# You can also process this with pandas. I don't do that here because
# (1) extra dependency
# (2) df.to_html() doesn't have enough customisation for our purposes.
#
# import pandas as pd
# results_flattened = [
#     {"model_name": entry["model_name"], **entry["results"]}
#     for entry in json.loads(results)
# ]
# df = pd.DataFrame.from_records(results_flattened)

adtypes = list(results.values())[0].keys()
models = sorted(results.keys())

# Create the directory if it doesn't exist
os.makedirs("html", exist_ok=True)
with open("html/index.html", "w") as f:
    f.write(
"""<!DOCTYPE html>
<html>
<head><title>Turing AD tests</title>
<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body><main>
<h1>Turing AD tests</h1>

<p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/penelopeysm/ModelTests.jl">Source code for these tests</a></p>

<p>This page is intended as a brief overview of how different AD backends
perform on a variety of Turing.jl models.
Note that the inclusion of any AD backend here does not imply an endorsement
from the Turing team; this table is purely for information.
</p>

<ul>
<li>The definitions of the models and AD types below can be found on <a
href="https://github.com/penelopeysm/ModelTests.jl" target="_blank">GitHub</a>.</li>
<li><b>Numbers</b> indicate the time taken to calculate the gradient of the log
density of the model using the specified AD type, divided by the time taken to
calculate the log density itself (in AD speak, the primal). Basically:
<b>smaller means faster.</b></li>
<li>'<span class="wrong">wrong</span>' means that AD ran but the result was not correct. If this happens
you should be very wary!</li>
<li>'<span class="error">error</span>' means that AD didn't run.</li>
<li>Some of the 'wrong' or 'error' entries have question marks next to them.
These will link to a GitHub issue or other page that describes the problem.
</ul>

<h2>Results</h2>
""")

    # Table header
    f.write('<table id="results"><thead>')
    f.write("<tr>")
    f.write("<th>Model name \ AD type</th>")
    for adtype in adtypes:
        f.write(f"<th>{adtype}</th>")
    f.write("</tr></thead><tbody>")
    # Table body
    for model_name in models:
        ad_results = results[model_name]
        f.write("\n<tr>")
        f.write(f"<td>{model_name}</td>")
        for adtype in adtypes:
            ad_result = ad_results[adtype]
            try:
                float(ad_result)
                f.write(f'<td>{ad_result}</td>')
            except ValueError:
                # Not a float, embed the class into the html
                error_url = KNOWN_ERRORS.get((model_name, adtype), None)
                span = f'<span class="{ad_result}">{ad_result}'
                if error_url is not None:
                    span = f'<a class="issue" href="{error_url}" target="_blank">(?)</a> {span}'
                f.write(f'<td>{span}</td>')
        f.write("</tr>")
    f.write("\n</tbody></table></main></body></html>")

with open("html/main.css", "w") as f:
    f.write(
"""
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
html {
    font-family: "Fira Sans", sans-serif;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.6;
    background-color: #f1f2e3;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
    display: flex;
    align-items: center;
    margin: 50px 0px;
}

main {
    margin: auto;
    max-width: 1000px;
}

table#results {
    text-align: right;
    border: 1px solid black;
    border-collapse: collapse;
}

td, th {
    border: 1px solid black;
    padding: 0px 10px;
}

th {
    background-color: #ececec;
    text-align: right;
}

td {
    font-family: "Fira Code", monospace;
}

tr > td:first-child {
    font-family: "Fira Sans", sans-serif;
    font-weight: 700;
    background-color: #ececec;
}

tr > th:first-child {
    font-family: "Fira Sans", sans-serif;
    font-weight: 700;
    background-color: #d1d1d1;
}

span.err, span.error {
    color: #ff0000;
}

span.incorrect, span.wrong {
    color: #ff0000;
    background-color: #ffcccc;
}

a.issue {
    color: #880000;
    text-decoration: none;
}

a.issue:hover {
    background-color: #ffcccc;
    transition: background-color 0.3s ease;
}

a.issue:visited {
    color: #880000;
}
""")
