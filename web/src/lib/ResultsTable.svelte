<script lang="ts">
    import ModelNameAndDefinition from "./ModelNameAndDefinition.svelte";
    import { getSortedEntries } from "./utils";
    import { getHeatmapStyle } from "./heatmap";
    import knownIssues from "./known_issues.json";
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
                    definition={modelDefinitions[model_name]}
                />
                {#each getSortedEntries(results) as [adtype, result]}
                    {#if typeof result === "number"}
                        <td style={getHeatmapStyle(result, results, theme)}>
                            {result.toFixed(3)}
                        </td>
                    {:else}
                        <td>
                            {#if knownIssues[`${model_name}__${adtype}` as keyof typeof knownIssues]}
                                <a
                                    class="issue"
                                    href={knownIssues[`${model_name}__${adtype}` as keyof typeof knownIssues]}
                                    target="_blank">(?)</a
                                >
                            {/if}
                            <span class={result === "NaN" ? "nan" : result}>{result}</span>
                        </td>
                    {/if}
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border: 1px solid var(--table-border);
        border-collapse: collapse;
        background-color: var(--table-cell-bg);

        tr > td:first-child,
        tr > th:first-child {
            font-family: "Fira Sans", sans-serif;
            font-weight: 700;
            position: relative;
            text-align: right;
            transition: background-color 0.3s ease;
        }
        tr > td:first-child {
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
</style>
