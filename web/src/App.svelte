<script lang="ts">
    import data from "./data/adtests.json";
    import modelDefinitions from "./data/model_definitions.json";
    import { onMount } from "svelte";

    // Theme Logic
    let theme = $state("light");

    onMount(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            theme = "dark";
        } else {
            theme = "light";
        }
        document.documentElement.setAttribute('data-theme', theme);
    });

    function toggleTheme() {
        theme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

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
    categorisedData = new Map(
        [...categorisedData.entries()].sort(), // Sort categories alphabetically
    );

    import Manifest from "./lib/Manifest.svelte";
    import ResultsTable from "./lib/ResultsTable.svelte";
</script>

<div id="main-wrapper">
    <main>
        <div class="header">
            <h1>Turing AD tests</h1>
            <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle Dark Mode" title="Toggle theme">
                {#if theme === 'dark'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                {/if}
            </button>
        </div>

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
                using FiniteDifferences, i.e., FiniteDifferences is by
                definition always 'correct'.
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

        <div class="warning">
            <b
                >Note: The results here are run with Julia 1.11. Enzyme
                currently does not work on Julia 1.12.</b
            >
        </div>
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

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button.theme-toggle {
        background: transparent;
        color: var(--text-primary);
        border: 1px solid var(--table-border);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    button.theme-toggle:hover {
        background-color: var(--btn-hover);
        transform: rotate(15deg);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    div.warning {
        width: fit-content;
        background-color: var(--warning-bg);
        border: 1px solid var(--warning-border);
        color: var(--warning-text);
        border-radius: 10px;
        padding: 10px 15px;
        margin: auto;
    }

    span.wrong {
        color: var(--wrong-color);
        background-color: var(--wrong-bg);
        padding: 0 4px;
        border-radius: 3px;
    }
    
    span.error {
        color: var(--error-color);
    }
</style>
