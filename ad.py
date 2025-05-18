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


def try_float(value):
    try:
        return float(value)
    except ValueError:
        return value


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
            result = try_float(output.splitlines()[-1])
        except sp.CalledProcessError as e:
            result = "error"

        print(f" ... {model_key} with {adtype} ==> {result}")
        results[adtype] = result

    print(results)

    # Save results
    append_to_github_output("results", results)


def get_model_definition(model_key):
    """Get the model definition from the file that contains it."""
    return Path(f"models/{model_key}.jl").read_text().strip()


def html(_args):
    web_dir = Path(__file__).parent / "web"
    json_output_dirs = [web_dir / "src" / "data", web_dir / "public"]

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
    # We do some processing to turn it into a dict of dicts, then dump it
    # to the website
    results = json.loads(results)
    new_data = {entry["model_name"]: entry["results"] for entry in results}
    for dir in json_output_dirs:
        with open(dir / "adtests.json", "w") as f:
            json.dump(new_data, f, indent=2)

    # Process Manifest
    try:
        manifest = os.environ["MANIFEST"]
        print("-------- $MANIFEST --------")
        print(manifest)
        print("------------- END -------------")
        manifest = json.loads(manifest)
    except KeyError as e:
        print("MANIFEST environment variable not set, reading from Manifest.toml")
        manifest = get_manifest_dict()
    for dir in json_output_dirs:
        with open(dir / "manifest.json", "w") as f:
            json.dump(manifest, f, indent=2)

    # Process model definitions
    model_keys = list(new_data.keys())
    # technically we can also get it this way
    # model_keys = run_and_capture([*JULIA_COMMAND, "--list-model-keys"]).splitlines()
    model_definitions = {}
    for model_key in model_keys:
        model_definitions[model_key] = get_model_definition(model_key)
    for dir in json_output_dirs:
        with open(dir / "model_definitions.json", "w") as f:
            json.dump(model_definitions, f, indent=2)


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
