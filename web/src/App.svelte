<script lang="ts">
    import data from "./data/adtests.json";
    import modelDefinitions from "./data/model_definitions.json";
    import type { CategoryData, ResultValue } from "./lib/types";

    const initialTheme =
        typeof document !== "undefined"
            ? localStorage.getItem("theme") ||
              document.documentElement.getAttribute("data-theme") ||
              "light"
            : "light";
    if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", initialTheme);
    }
    let theme = $state(initialTheme);

    function toggleTheme() {
        theme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    // Parse data into nice JS objects.
    // Obviously, the nested strings are a bit ugly. From outer to inner, they are:
    // category -> model_name -> adtype -> result
    let unsortedCategorisedData = new Map<string, CategoryData>();
    for (const [model_name, results] of Object.entries(data)) {
        let category = results.__category__;
        delete results.__category__;
        let resultsMap = new Map<string, ResultValue>();
        for (const [adtype, result] of Object.entries(results)) {
            resultsMap.set(adtype, result);
        }
        if (!unsortedCategorisedData.has(category)) {
            unsortedCategorisedData.set(category, new Map());
        }
        unsortedCategorisedData.get(category)!.set(model_name, resultsMap);
    }
    let categorisedData = new Map(
        [...unsortedCategorisedData.entries()].sort(),
    );

    // Search/filter
    let searchQuery = $state("");

    const filteredData = $derived.by(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return categorisedData;

        const filtered = new Map<string, CategoryData>();
        for (const [category, modelData] of categorisedData) {
            const filteredModels: CategoryData = new Map();
            for (const [modelName, results] of modelData) {
                if (modelName.toLowerCase().includes(query)) {
                    filteredModels.set(modelName, results);
                }
            }
            if (filteredModels.size > 0) {
                filtered.set(category, filteredModels);
            }
        }
        return filtered;
    });

    import Manifest from "./lib/Manifest.svelte";
    import ResultsTable from "./lib/ResultsTable.svelte";
    import HeatmapLegend from "./lib/HeatmapLegend.svelte";
</script>

<div id="main-wrapper">
    <main>
        <div class="header">
            <div class="title-area">
                <h1>Turing AD tests</h1>
                <nav class="nav-links">
                    <a href="https://turinglang.org/docs">Turing.jl Docs</a>
                    <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a>
                    <a href="https://github.com/TuringLang/ADTests">ADTests GitHub</a>
                </nav>
            </div>
            <button
                class="theme-toggle"
                onclick={toggleTheme}
                aria-label="Toggle Dark Mode"
                title="Toggle theme"
            >
                {#if theme === "dark"}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                {/if}
            </button>
        </div>

        <p class="intro">
            A comparison of how different AD backends perform on
            <a href="https://turinglang.org/docs">Turing.jl</a> models.
            This does not imply any endorsement; for general AD comparisons see
            <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.
        </p>

        <div class="info-card">
            <h4>Reading the table</h4>
            <ul>
                <li>Click model names to see their definitions.</li>
                <li>
                    <b>Numbers</b> = gradient time / primal time.
                    <b>Smaller is faster.</b>
                </li>
                <li>
                    <span class="wrong">wrong</span> = AD ran but gave an incorrect result
                    (compared against FiniteDifferences).
                </li>
                <li>
                    <span class="error">error</span> = AD failed to run.
                </li>
                <li>
                    <span class="issue-example">(?)</span> links to a GitHub issue describing the problem.
                </li>
            </ul>
        </div>

        <div class="warning">
            Note: Results are from Julia 1.11.
        </div>

        <div class="results-header">
            <h2>Results</h2>
            <a class="download-link" href="adtests.json" target="_blank" download>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                JSON
            </a>
        </div>

        <div class="controls">
            <input
                type="search"
                class="search-input"
                placeholder="Filter models..."
                bind:value={searchQuery}
            />
            <HeatmapLegend {theme} />
        </div>

        {#each filteredData.entries() as [category, modelData]}
            <h3 class="category-heading">{category}</h3>
            <ResultsTable data={modelData} {modelDefinitions} {theme} />
        {:else}
            <p class="no-results">No models match "{searchQuery}".</p>
        {/each}

        <h2>Manifest</h2>
        <p class="secondary-text">Package versions used for the tests above:</p>
        <Manifest />
    </main>
</div>

<style>
    div#main-wrapper {
        display: flex;
        align-items: center;
        padding: 0px 40px 50px;
        width: min-content;
    }

    main {
        margin: auto;
        width: min-content;
        max-width: calc(100vw - 80px);
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-bottom: 8px;
        border-bottom: 2px solid var(--table-border);
        margin-bottom: 16px;
    }

    .title-area {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .title-area h1 {
        margin: 0;
        font-size: 1.75rem;
        letter-spacing: -0.02em;
    }

    .nav-links {
        display: flex;
        gap: 24px;
        font-size: 0.85rem;
    }

    .nav-links a {
        color: var(--text-secondary);
        transition: color 0.2s ease;
    }

    .nav-links a:hover {
        color: var(--link-color);
        text-decoration: none;
    }

    .nav-links a:visited {
        color: var(--text-secondary);
    }

    button.theme-toggle {
        background: transparent;
        color: var(--text-secondary);
        border: 1px solid var(--table-border);
        width: 34px;
        height: 34px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-top: 4px;
    }

    button.theme-toggle:hover {
        background-color: var(--btn-hover);
        color: var(--text-primary);
    }

    p.intro {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.5;
        max-width: 700px;
    }

    .info-card {
        background-color: var(--bg-secondary);
        border: 1px solid var(--table-border);
        border-radius: 8px;
        padding: 12px 20px;
        margin: 16px 0;
        max-width: 700px;
    }

    .info-card h4 {
        margin: 0 0 6px;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-secondary);
    }

    .info-card ul {
        margin: 0;
        padding-left: 18px;
        display: flex;
        flex-direction: column;
        gap: 3px;
        font-size: 0.9rem;
    }

    .info-card li {
        line-height: 1.5;
    }

    div.warning {
        width: fit-content;
        background-color: var(--warning-bg);
        border: 1px solid var(--warning-border);
        color: var(--warning-text);
        border-radius: 8px;
        padding: 8px 16px;
        font-size: 0.9rem;
        font-weight: 500;
        margin: 16px 0;
    }

    span.wrong {
        color: var(--wrong-color);
        background-color: var(--wrong-bg);
        padding: 0 4px;
        border-radius: 3px;
        font-family: "Fira Code", monospace;
        font-size: 0.85em;
    }

    span.error {
        color: var(--error-color);
        font-family: "Fira Code", monospace;
        font-size: 0.85em;
    }

    span.issue-example {
        color: var(--issue-color);
        font-weight: 600;
    }

    .results-header {
        display: flex;
        align-items: baseline;
        gap: 12px;
    }

    .results-header h2 {
        margin-bottom: 4px;
    }

    .download-link {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 0.8rem;
        color: var(--text-secondary);
        padding: 3px 10px;
        border: 1px solid var(--table-border);
        border-radius: 6px;
        transition: all 0.2s ease;
    }

    .download-link:hover {
        background-color: var(--btn-hover);
        text-decoration: none;
        color: var(--text-primary);
    }

    .download-link:visited {
        color: var(--text-secondary);
    }

    .controls {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
        flex-wrap: wrap;
    }

    .search-input {
        padding: 7px 12px;
        border: 1px solid var(--table-border);
        border-radius: 8px;
        background-color: var(--bg-primary);
        color: var(--text-primary);
        font-family: "Fira Sans", sans-serif;
        font-size: 0.9rem;
        width: 200px;
        outline: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .search-input:focus {
        border-color: var(--link-color);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .search-input::placeholder {
        color: var(--text-primary);
        opacity: 0.35;
    }

    h3.category-heading {
        font-size: 1.1rem;
        margin: 20px 0 8px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--table-border);
    }

    .no-results {
        color: var(--text-secondary);
        font-style: italic;
    }

    .secondary-text {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
</style>
