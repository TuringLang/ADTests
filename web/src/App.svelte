<script lang="ts">
    import data from "./data/adtests.json";
    import modelDefinitions from "./data/model_definitions.json";

    // Parse data into nice JS objects.
    // Obviously, the nested strings are a bit ugly. From outer to inner, they are:
    // category -> model_name -> adtype -> result
    let categorisedData = new Map<
        string,
        Map<string, Map<string, string | number>>
    >();
    for (const [model_name, results] of Object.entries(data)) {
        let category = results.__category__;
        delete results.__category__;
        let resultsMap = new Map<string, string | number>();
        for (const [adtype, result] of Object.entries(results)) {
            resultsMap.set(adtype, result);
        }
        if (!categorisedData.has(category)) {
            categorisedData.set(
                category,
                new Map<string, Map<string, string | number>>(),
            );
        }
        categorisedData.get(category).set(model_name, resultsMap);
    }
    console.log(categorisedData);

    import Manifest from "./lib/Manifest.svelte";
    import ResultsTable from "./lib/ResultsTable.svelte";
</script>

<div id="main-wrapper">
    <main>
        <h1>Turing AD tests</h1>

        <p>
            <a href="https://turinglang.org/docs">Turing.jl documentation</a> |
            <a href="https://github.com/TuringLang/Turing.jl"
                >Turing.jl GitHub</a
            >
            |
            <a href="https://github.com/TuringLang/ADTests"
                >Source code for these tests</a
            >
        </p>

        <p>
            This page is intended as a brief overview of how different AD
            backends perform on a variety of Turing.jl models. Note that the
            inclusion of any AD backend here does not imply an endorsement from
            the Turing team; this table is purely for information.
        </p>

        <p>
            The scope of this table is limited to Turing models. It does not
            purport to show which AD backend is better for tasks that do not
            involve Turing models. If you are interested in more general
            comparisons of AD backends, you may wish to check out something like <a
                href="https://github.com/gradbench/gradbench"
                target="_blank">GradBench</a
            >.
        </p>

        <ul class="notes">
            <li>
                You can hover over the model names to see their definitions.
            </li>
            <li>
                The definitions of the AD types can be found in <a
                    href="https://github.com/TuringLang/ADTests/blob/main/main.jl"
                    target="_blank">the source code</a
                >.
            </li>
            <li>
                <b>Numbers</b> indicate the time taken to calculate the gradient
                of the log density of the model using the specified AD type,
                divided by the time taken to calculate the log density itself
                (in AD speak, the primal). Basically:
                <b>smaller means faster.</b>
            </li>
            <li>
                '<span class="wrong">wrong</span>' means that AD ran but the
                result was not correct. If this happens you should be very wary!
                Note that this is done by comparing against the result obtained
                using ForwardDiff, i.e., ForwardDiff is by definition always
                'correct'.
            </li>
            <li>
                '<span class="error">error</span>' means that AD didn't run.
            </li>
            <li>
                Some of the 'wrong' or 'error' entries have question marks next
                to them. These will link to a GitHub issue or other page that
                describes the problem.
            </li>
        </ul>

        <h2>Results</h2>
        <p>
            <a href="adtests.json" target="_blank" download
                >Download the raw data (JSON)</a
            >
        </p>
        {#each categorisedData.entries() as [category, modelData]}
            <h3>{category}</h3>
            <ResultsTable data={modelData} {modelDefinitions} />
        {/each}

        <h2>Manifest</h2>
        <p>The tests above were run with the following package versions:</p>
        <Manifest />
    </main>
</div>

<style>
    div#main-wrapper {
        display: flex;
        align-items: center;
        margin: 0px 0px 50px 0px;
    }

    main {
        margin: auto;
        max-width: min-content;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>
