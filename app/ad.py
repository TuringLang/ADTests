import subprocess as sp
import os
import sys
import json
import argparse

JULIA_COMMAND = ["julia", "--project=.", "output.jl"]

def append_to_github_output(key, value):
    """
    Append a key-value pair to the GITHUB_OUTPUT environment variable. The
    value is automatically converted to a JSON string.
    """
    GITHUB_OUTPUT = os.environ.get("GITHUB_OUTPUT", "")
    GITHUB_OUTPUT += f"{key}={json.dumps(value)}\n"
    os.environ["GITHUB_OUTPUT"] = GITHUB_OUTPUT

def print_github_output():
    print("--- $GITHUB_OUTPUT BEGIN ---")
    print(os.environ["GITHUB_OUTPUT"])
    print("--- $GITHUB_OUTPUT END ---")

def get_keys(category):
    """
    Get the model and/or adtypekeys from the Julia script and set them as the
    model_keys output in the GitHub Actions workflow.
    """
    process = sp.run([*JULIA_COMMAND, f"--list-{category}-keys"], capture_output=True, text=True)
    keys = process.stdout.splitlines()
    append_to_github_output(f"{category}_keys", keys)

def setup():
    print("Getting model keys...")
    get_keys("model")
    print("Getting adtype keys...")
    get_keys("adtype")
    print_github_output()

def run_model(model_key: str):
    adtype_keys = json.loads(os.environ["ADTYPE_KEYS"])
    results = {}
    for adtype_key in adtype_keys:
        print(f"Running {model_key} with {adtype_key}... ", end="")
        sys.stdout.flush()
        try:
            process = sp.run([*JULIA_COMMAND, "--run", model_key, adtype_key],
                             capture_output=True, text=True, check=True)
            result = process.stdout.splitlines()[-1]
            try:
                # Successfully ran; it should be a number
                result = f"{float(result):.3f}"
            except ValueError:
                # Something else happened
                pass
        except sp.CalledProcessError as e:
            result = "err"
        print(result)
        results[adtype_key] = result
    append_to_github_output(f"results_{model_key}", results)
    print_github_output()


def parse_args():
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers(dest="subcommand")

    parser_setup = subparsers.add_parser("setup", help="Set up $MODEL_KEYS and $ADTYPE_KEYS")

    parser_run = subparsers.add_parser("run", help="Run all adtypes for a model")
    parser_run.add_argument("model", help="The name of the model to run")

    return parser.parse_args()

if __name__ == "__main__":
    args = parse_args()
    if args.subcommand == "setup":
        print("Setting up model and adtype keys...")
        # setup()
    elif args.subcommand == "run":
        run_model(args.model)
