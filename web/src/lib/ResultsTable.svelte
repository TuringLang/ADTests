<script lang="ts">
    import Highlight from "svelte-highlight";
    import { julia } from "svelte-highlight/languages/julia";
    import "svelte-highlight/styles/atom-one-light.css";
    import { getSortedEntries } from "./utils";

    interface Props {
        data: object;
        modelDefinitions: object;
    }
    const { data, modelDefinitions }: Props = $props();

    const models = Object.keys(data);
    const adtypes = Object.keys(data[models[0]]);

    // Known errors
    const ENZYME_FWD_BLAS = "https://github.com/EnzymeAD/Enzyme.jl/issues/1995";
    const MOONCAKE_THREADED =
        "https://github.com/chalk-lab/Mooncake.jl/issues/570";
    const KNOWN_ERRORS = {
        assume_mvnormal__EnzymeForward: ENZYME_FWD_BLAS,
        assume_wishart__EnzymeForward: ENZYME_FWD_BLAS,
        multithreaded__Mooncake: MOONCAKE_THREADED,
    };
</script>

<table id="results">
    <thead
        ><tr>
            <th>Model name \\ AD type</th>
            {#each adtypes as adtype}
                <th>{adtype}</th>
            {/each}
        </tr></thead
    >
    <tbody>
        {#each getSortedEntries(data) as [model_name, results]}
            <tr>
                <td
                    >{model_name}
                    <div class="model-definition">
                        <Highlight
                            language={julia}
                            code={modelDefinitions[model_name]}
                        />
                    </div></td
                >
                {#each getSortedEntries(results) as [adtype, result]}
                    {#if typeof result === "number"}
                        <td>{result.toFixed(3)}</td>
                    {:else}
                        <td>
                            {#if KNOWN_ERRORS[`${model_name}__${adtype}`]}
                                <a
                                    class="issue"
                                    href={KNOWN_ERRORS[
                                        `${model_name}__${adtype}`
                                    ]}
                                    target="_blank">(?)</a
                                >
                            {/if}
                            <span class={result}>{result}</span>
                        </td>
                    {/if}
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border: 1px solid black;
        border-collapse: collapse;

        tr > td:first-child,
        tr > th:first-child {
            font-family: "Fira Sans", sans-serif;
            font-weight: 700;
            position: relative;
            text-align: right;
            transition: background-color 0.3s ease;
        }
        tr > td:first-child {
            background-color: #ececec;
        }
        tr > th:first-child {
            background-color: #d1d1d1;
        }
        td,
        th {
            border: 1px solid black;
            padding: 0px 10px;
            white-space: nowrap;
        }
        th {
            background-color: #ececec;
        }
        td {
            font-family: "Fira Code", monospace;
        }

        td,
        th {
            text-align: right;
        }
        div.model-definition {
            background-color: #f6f6f6;
            border: 1px solid black;
            border-radius: 5px;
            padding: 0 10px;
            z-index: 5;
            font-size: 0.9em;
            text-align: left;
            font-weight: normal;
            position: absolute;
            left: 100%;
            top: 0;
            display: none;
        }
        tr > td:first-child:hover {
            background-color: #f8f8f8;
        }
        tr > td:first-child:hover > div.model-definition {
            display: block;
        }

        span.error {
            color: #ff0000;
        }
        span.incorrect,
        span.wrong {
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
    }
</style>
