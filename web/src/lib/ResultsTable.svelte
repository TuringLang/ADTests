<script lang="ts">
    import ModelNameAndDefinition from "./ModelNameAndDefinition.svelte";
    import Highlight from "svelte-highlight";
    import { julia } from "svelte-highlight/languages/julia";
    import "svelte-highlight/styles/atom-one-light.css";
    import { getSortedEntries } from "./utils";
    import { getHeatmapStyle } from "./heatmap";
    import { getKnownIssueUrl, getOverrideValue } from "./annotations";
    import type { SortState, ResultValue } from "./types";

    interface Props {
        data: Map<string, Map<string, ResultValue>>;
        modelDefinitions: Record<string, string>;
        theme: string;
    }
    const { data, modelDefinitions, theme }: Props = $props();

    const models = $derived([...data.keys()]);
    const adtypes = $derived(data.size > 0 ? [...data.get(models[0])!.keys()] : []);

    let sortState = $state<SortState>({ column: null, direction: null });
    let expandedModel = $state<string | null>(null);
    let copied = $state(false);

    function copyToClipboard(definition: string) {
        navigator.clipboard.writeText(definition);
        copied = true;
        setTimeout(() => { copied = false; }, 2000);
    }

    function cycleSortDirection(column: string) {
        if (sortState.column !== column) {
            sortState = { column, direction: "asc" };
        } else if (sortState.direction === "asc") {
            sortState = { column, direction: "desc" };
        } else {
            sortState = { column: null, direction: null };
        }
    }

    const sortedEntries = $derived.by(() => {
        const entries = getSortedEntries(data);
        if (!sortState.column || !sortState.direction) return entries;

        const col = sortState.column;
        const dir = sortState.direction;

        return [...entries].sort(([, aResults], [, bResults]) => {
            const a = aResults.get(col);
            const b = bResults.get(col);
            const aNum = typeof a === "number";
            const bNum = typeof b === "number";

            // Non-numeric values always sort to bottom
            if (!aNum && !bNum) return 0;
            if (!aNum) return 1;
            if (!bNum) return -1;

            return dir === "asc"
                ? (a as number) - (b as number)
                : (b as number) - (a as number);
        });
    });
</script>

<div class="table-scroll">
<table>
    <thead>
        <tr>
            <th>Model name \ AD type</th>
            {#each adtypes as adtype}
                <th
                    class="sortable"
                    onclick={() => cycleSortDirection(adtype)}
                    title="Click to sort"
                >
                    {adtype}
                    <span class="sort-indicator">
                        {#if sortState.column === adtype}
                            {#if sortState.direction === "asc"}
                                ▲
                            {:else}
                                ▼
                            {/if}
                        {/if}
                    </span>
                </th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each sortedEntries as [model_name, results]}
            <tr>
                <ModelNameAndDefinition
                    name={model_name}
                    onToggle={() => expandedModel = expandedModel === model_name ? null : model_name}
                />
                {#each getSortedEntries(results) as [adtype, result]}
                    {@const displayValue = getOverrideValue(model_name, adtype) ?? result}
                    {#if typeof displayValue === "number"}
                        <td style={getHeatmapStyle(displayValue, results, theme)}>
                            {displayValue.toFixed(3)}
                        </td>
                    {:else}
                        <td>
                            {#if getKnownIssueUrl(model_name, adtype)}
                                <a
                                    class="issue"
                                    href={getKnownIssueUrl(model_name, adtype)}
                                    target="_blank">(?)</a
                                >
                            {/if}
                            <span class={displayValue === "NaN" ? "nan" : displayValue}>{displayValue}</span>
                        </td>
                    {/if}
                {/each}
            </tr>
            {#if expandedModel === model_name}
                <tr class="definition-row">
                    <td colspan={adtypes.length + 1}>
                        <div class="definition-content">
                            <div class="code-wrapper">
                                <Highlight language={julia} code={modelDefinitions[model_name]} />
                            </div>
                            <button
                                class="copy-btn"
                                onclick={() => copyToClipboard(modelDefinitions[model_name])}
                                aria-label="Copy to clipboard"
                                title="Copy code"
                                disabled={copied}
                            >
                                {#if copied}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                {:else}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                {/if}
                            </button>
                        </div>
                    </td>
                </tr>
            {/if}
        {/each}
    </tbody>
</table>
</div>

<style>
    table {
        border: 1px solid var(--table-border);
        border-collapse: collapse;
        background-color: var(--table-cell-bg);

        tr:not(.definition-row) > td:first-child,
        tr > th:first-child {
            font-family: "Fira Sans", sans-serif;
            font-weight: 700;
            position: relative;
            text-align: right;
            transition: background-color 0.3s ease;
        }
        tr:not(.definition-row) > td:first-child {
            background-color: var(--table-sticky-col-bg);
        }
        tr > th:first-child {
            background-color: var(--table-sticky-header-bg);
        }
        td,
        th {
            border: 1px solid var(--table-border);
            padding: 0px 10px;
            white-space: nowrap;
        }
        th {
            background-color: var(--table-header-bg);
        }
        td {
            font-family: "Fira Code", monospace;
        }

        td,
        th {
            text-align: right;
        }

        span.error {
            color: var(--error-color);
        }
        span.incorrect,
        span.wrong {
            color: var(--wrong-color);
            background-color: var(--wrong-bg);
        }
        span.nan {
            color: var(--error-color);
            font-style: italic;
            opacity: 0.6;
        }

        a.issue {
            color: var(--issue-color);
            text-decoration: none;
        }

        a.issue:hover {
            background-color: var(--issue-hover-bg);
            transition: background-color 0.3s ease;
        }

        a.issue:visited {
            color: var(--issue-color);
        }
    }

    th.sortable {
        cursor: pointer;
        user-select: none;
    }

    th.sortable:hover {
        background-color: var(--btn-hover);
    }

    .sort-indicator {
        font-size: 0.7em;
        margin-left: 2px;
        display: inline-block;
        width: 1em;
    }

    .table-scroll {
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 12px;
    }

    tr.definition-row td {
        padding: 0;
        border: 1px solid var(--table-border);
        background-color: var(--model-def-bg);
        text-align: left;
        font-size: 0.85rem;
    }

    .definition-content {
        position: relative;
    }

    :global([data-theme="dark"]) .code-wrapper {
        filter: invert(0.93) hue-rotate(180deg);
    }

    .code-wrapper :global(pre) {
        margin: 0;
        padding: 4px 8px 4px 34px !important;
    }

    button.copy-btn {
        position: absolute;
        top: 4px;
        left: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 0;
        background-color: var(--bg-primary);
        border: 1px solid var(--table-border);
        border-radius: 4px;
        color: var(--copy-btn-text);
        cursor: pointer;
        transition: all 0.2s ease;
        opacity: 0.6;
        z-index: 10;
    }

    button.copy-btn:hover {
        opacity: 1;
        background-color: var(--btn-hover);
        color: var(--link-color);
    }

    button.copy-btn:disabled {
        color: var(--link-visited);
        border-color: var(--link-visited);
        opacity: 1;
        cursor: default;
    }
</style>
