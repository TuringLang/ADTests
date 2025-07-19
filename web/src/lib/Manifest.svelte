<script lang="ts">
    import manifestObj from "../data/manifest.json";

    // convert manifest to a Map
    let manifest = new Map<string, string | null>();
    for (const [packageName, version] of Object.entries(manifestObj)) {
        manifest.set(packageName, version === "" ? null : version);
    }

    import { getSortedEntries } from "./utils";
</script>

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
                <td class="version">{version === null ? "" : `v${version}`}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border: 1px solid black;
        border-collapse: collapse;

        td,
        th {
            border: 1px solid black;
            padding: 0px 10px;
            white-space: nowrap;
            text-align: left;
        }

        th {
            background-color: #ececec;
        }

        td.version {
            font-family: "Fira Code", monospace;
        }
    }
</style>
