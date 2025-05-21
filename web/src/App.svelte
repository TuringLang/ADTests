<script lang="ts">
    import data from "./data/adtests.json";
    import manifest from "./data/manifest.json";
    import modelDefinitions from "./data/model_definitions.json";

    const models = Object.keys(data);
    const adtypes = Object.keys(data[models[0]]);

    console.log("Models: ", models);
    console.log("AD types: ", adtypes);

    // return object entries sorted by key
    function getSortedEntries(obj: object) {
        return Object.entries(obj).sort(([a, _x], [b, _y]) =>
            a.localeCompare(b),
        );
    }

    // Known errors
    const ENZYME_FWD_BLAS = "https://github.com/EnzymeAD/Enzyme.jl/issues/1995";
    const MOONCAKE_THREADED =
        "https://github.com/chalk-lab/Mooncake.jl/issues/570";
    const ENZYME_DEMO_INCORRECT =
        "https://github.com/EnzymeAD/Enzyme.jl/issues/2387";
    const KNOWN_ERRORS = {
        assume_mvnormal__EnzymeForward: ENZYME_FWD_BLAS,
        assume_wishart__EnzymeForward: ENZYME_FWD_BLAS,
        multithreaded__Mooncake: MOONCAKE_THREADED,
        dot_assume_observe_index__EnzymeForward: ENZYME_DEMO_INCORRECT,
        dot_assume_observe_index__EnzymeReverse: ENZYME_DEMO_INCORRECT,
    };
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
                                <pre>{modelDefinitions[model_name]}</pre>
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

        <h2>Manifest</h2>
        <p>The tests above were run with the following package versions:</p>

        <table id="manifest">
            <thead>
                <tr>
                    <th>Package</th>
                    <th>Version</th>
                </tr>
            </thead>
            <tbody>
                {#each getSortedEntries(manifest) as [packageName, version]}
                    <tr>
                        <td>{packageName}</td>
                        <td>{version === null ? "" : `v${version}`}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
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
    }

    table#results {
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
