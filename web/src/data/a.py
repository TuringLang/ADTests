import json

with open("adtests.json") as f:
    data = json.load(f)

new_data = {}

def try_float(value):
    try:
        return float(value)
    except ValueError:
        return value

for i in data:
    model_name = i["model_name"]
    results = {k: try_float(v) for k, v in i["results"].items()}
    new_data[model_name] = results

with open("adtests_new.json", "w") as f:
    json.dump(new_data, f, indent=4)
