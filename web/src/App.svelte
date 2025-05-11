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
        return Object.entries(obj).sort(([a, _x], [b, _y]) => a.localeCompare(b));
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

<main>
    <h1>Turing AD tests</h1>

    <p>
        <a href="https://turinglang.org/docs">Turing.jl documentation</a> |
        <a href="https://github.com/TuringLang/Turing.jl">Turing.jl GitHub</a>
        |
        <a href="https://github.com/TuringLang/ADTests"
            >Source code for these tests</a
        >
    </p>

    <p>
        This page is intended as a brief overview of how different AD backends
        perform on a variety of Turing.jl models. Note that the inclusion of any
        AD backend here does not imply an endorsement from the Turing team; this
        table is purely for information.
    </p>

    <ul>
        <li>
            The definitions of the models and AD types below can be found on <a
                href="https://github.com/TuringLang/ADTests"
                target="_blank">GitHub</a
            >.
        </li>
        <li>
            <b>Numbers</b> indicate the time taken to calculate the gradient of
            the log density of the model using the specified AD type, divided by
            the time taken to calculate the log density itself (in AD speak, the
            primal). Basically:
            <b>smaller means faster.</b>
        </li>
        <li>
            '<span class="wrong">wrong</span>' means that AD ran but the result
            was not correct. If this happens you should be very wary! Note that
            this is done by comparing against the result obtained using
            ForwardDiff, i.e., ForwardDiff is by definition always 'correct'.
        </li>
        <li>'<span class="error">error</span>' means that AD didn't run.</li>
        <li>
            Some of the 'wrong' or 'error' entries have question marks next to
            them. These will link to a GitHub issue or other page that describes
            the problem.
        </li>
    </ul>

    <h2>Results</h2>

    <p>
        (New: You can also hover over the model names to see their definitions.)
    </p>

    <table id="results">
        <thead
            ><tr>
                <th class="right">Model name \\ AD type</th>
                {#each adtypes as adtype}
                    <th class="right">{adtype}</th>
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
                            <td>{result}</td>
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
