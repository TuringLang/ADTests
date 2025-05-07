"""
ad.py
-----

Top-level Python script which orchestrates the Julia AD tests.

Usage:

    python ad.py setup
    python ad.py run --model <model_key>
    python ad.py html
"""

import json
import os
import subprocess as sp
import tomllib
import argparse
from pathlib import Path
from warnings import warn

JULIA_COMMAND = ["julia", "--color=yes", "--project=.", "main.jl"]

def run_and_capture(command):
    """Run a command and capture its output."""
    result = sp.run(command, text=True, check=True, stdout=sp.PIPE)
    return result.stdout.strip()


def append_to_github_output(key, value):
    """Append a key-value pair to the file specified by $GITHUB_OUTPUT."""
    pair = f"{key}={json.dumps(value)}"
    try:
        fname = os.environ["GITHUB_OUTPUT"]
        with open(fname, "a") as f:
            print(pair, file=f)
    except KeyError:
        print(f"GITHUB_OUTPUT not set")
        print(pair)


def get_manifest_dict():
    with open("Manifest.toml", "rb") as f:
        manifest_data = tomllib.load(f)
        package_versions = {k: v[0].get("version", None) for k, v in manifest_data["deps"].items()}
    return package_versions


def setup(_args):
    # Model keys
    models = run_and_capture([*JULIA_COMMAND, "--list-model-keys"]).splitlines()
    append_to_github_output("model_keys", models)
    # Adtype keys
    adtypes = run_and_capture([*JULIA_COMMAND, "--list-adtype-keys"]).splitlines()
    append_to_github_output("adtype_keys", adtypes)
    # Manifest
    package_versions = get_manifest_dict()
    append_to_github_output("manifest", package_versions)


def run_ad(args):
    model_key = args.model

    # Get adtypes
    try:
        adtypes = json.loads(os.environ["ADTYPE_KEYS"])
    except KeyError:
        warn("ADTYPE_KEYS environment variable not set; running Julia to get adtypes")
        adtypes = run_and_capture([*JULIA_COMMAND, "--list-adtype-keys"]).splitlines()

    results = {}

    if model_key == "multithreaded":
        RUN_JULIA_COMMAND = ["julia", "--threads=2", *JULIA_COMMAND[1:]]
    else:
        RUN_JULIA_COMMAND = JULIA_COMMAND

    # Run tests
    for adtype in adtypes:
        print(f"Running {model_key} with {adtype}...")
        try:
            output = run_and_capture([*RUN_JULIA_COMMAND, "--run", model_key, adtype])
            result = output.splitlines()[-1]
        except sp.CalledProcessError as e:
            result = "error"

        print(f" ... {model_key} with {adtype} ==> {result}")
        results[adtype] = result

    print(results)

    # Save results
    append_to_github_output("results", results)


def html(_args):
    ## Here you can register known errors that have been reported on GitHub /
    ## have otherwise been documented. They will be turned into links in the table.

    ENZYME_RVS_ONE_PARAM = "https://github.com/EnzymeAD/Enzyme.jl/issues/2337"
    ENZYME_FWD_BLAS = "https://github.com/EnzymeAD/Enzyme.jl/issues/1995"
    KNOWN_ERRORS = {
        ("assume_beta", "EnzymeReverse"): ENZYME_RVS_ONE_PARAM,
        ("assume_dirichlet", "EnzymeReverse"): ENZYME_RVS_ONE_PARAM,
        ("assume_lkjcholu", "EnzymeReverse"): ENZYME_RVS_ONE_PARAM,
        ("assume_normal", "EnzymeReverse"): ENZYME_RVS_ONE_PARAM,
        ("assume_wishart", "EnzymeReverse"): ENZYME_RVS_ONE_PARAM,
        ("assume_mvnormal", "EnzymeForward"): ENZYME_FWD_BLAS,
        ("assume_wishart", "EnzymeForward"): ENZYME_FWD_BLAS,
    }


    try:
        results = os.environ["RESULTS_JSON"]
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
    except KeyError as e:
        print("RESULTS_JSON environment variable not set")
        exit(1)

    try:
        manifest = os.environ["MANIFEST"]
        print("-------- $MANIFEST --------")
        print(manifest)
        print("------------- END -------------")
        manifest = json.loads(manifest)
    except KeyError as e:
        print("MANIFEST environment variable not set, reading from Manifest.toml")
        manifest = get_manifest_dict()

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

    adtypes = sorted(list(results.values())[0].keys())
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

<p><a href="https://turinglang.org/docs">Turing.jl documentation</a> | <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a> | <a href="https://github.com/TuringLang/ADTests">Source code for these tests</a></p>

<p>This page is intended as a brief overview of how different AD backends
perform on a variety of Turing.jl models.
Note that the inclusion of any AD backend here does not imply an endorsement
from the Turing team; this table is purely for information.
</p>

<ul>
<li>The definitions of the models and AD types below can be found on <a
href="https://github.com/TuringLang/ADTests" target="_blank">GitHub</a>.</li>
<li><b>Numbers</b> indicate the time taken to calculate the gradient of the log
density of the model using the specified AD type, divided by the time taken to
calculate the log density itself (in AD speak, the primal). Basically:
<b>smaller means faster.</b></li>
<li>'<span class="wrong">wrong</span>' means that AD ran but the result was not
correct. If this happens you should be very wary! Note that this is done by
comparing against the result obtained using ForwardDiff, i.e., ForwardDiff is
by definition always 'correct'.</li>
<li>'<span class="error">error</span>' means that AD didn't run.</li>
<li>Some of the 'wrong' or 'error' entries have question marks next to them.
These will link to a GitHub issue or other page that describes the problem.
</ul>

<h2>Results</h2>
""")

        # Table header
        f.write('<table id="results"><thead>')
        f.write("<tr>")
        f.write('<th class="right">Model name \\ AD type</th>')
        for adtype in adtypes:
            f.write(f'<th class="right">{adtype}</th>')
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
        f.write("\n</tbody></table>")
        f.write("<h2>Manifest</h2><p>The tests above were run with the following package versions:</p>")
        f.write("<table id='manifest'><thead><tr><th>Package</th><th>Version</th>")
        for package, version in manifest.items():
            version_string = "" if version is None else f"v{version}"
            f.write(f"<tr><td>{package}</td><td>{version_string}</td></tr>")
        f.write("</table>")
        f.write("</main></body></html>")

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
    margin: 0px 0px 50px 0px;
}

main {
    margin: auto;
    max-width: 1250px;
}

table {
    border: 1px solid black;
    border-collapse: collapse;
}

table#results {
    text-align: right;
}

td, th {
    border: 1px solid black;
    padding: 0px 10px;
}

th {
    background-color: #ececec;
    text-align: left;
}

th.right {
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


def parse_arguments():
    parser = argparse.ArgumentParser(description="Run AD tests")
    subparsers = parser.add_subparsers(required=True)

    # Setup
    parser_setup = subparsers.add_parser("setup", help="Setup by saving model keys, adtype keys, and Manifest")
    parser_setup.set_defaults(func=setup)

    # Run a given model with all adtypes
    parser_run = subparsers.add_parser("run", help="Run a given model with all adtypes")
    parser_run.add_argument(
        "--model", type=str, help="Key of the model to run"
    )
    parser_run.set_defaults(func=run_ad)

    # Generate HTML page
    parser_html = subparsers.add_parser("html", help="Generate HTML page")
    parser_html.set_defaults(func=html)

    return parser.parse_args()


if __name__ == "__main__":
    args = parse_arguments()
    args.func(args)
