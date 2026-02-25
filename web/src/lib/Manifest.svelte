<script lang="ts">
    import manifestObj from "../data/manifest.json";

    // convert manifest to a Map
    let manifest = new Map<string, string | null>();
    for (const [packageName, version] of Object.entries(manifestObj)) {
        manifest.set(packageName, version === "" ? null : version);
    }

    import { getSortedEntries } from "./utils";
</script>

<table>
    <thead>
        <tr>
            <th>Package</th>
            <th>Version</th>
        </tr>
    </thead>
    <tbody>
        {#each getSortedEntries(manifest) as [packageName, version], i}
            <tr class:alt={i % 2 === 1}>
                <td>{packageName}</td>
                <td class="version">{version === null ? "" : `v${version}`}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border: 1px solid var(--table-border);
        border-collapse: collapse;
        background-color: var(--table-cell-bg);
        box-shadow: var(--shadow-sm);

        td,
        th {
            border: 1px solid var(--table-border);
            padding: 2px 10px;
            white-space: nowrap;
            text-align: left;
        }

        th {
            background-color: var(--table-header-bg);
            font-size: 0.85rem;
            font-weight: 600;
            padding: 6px 10px;
        }

        td.version {
            font-family: "Fira Code", monospace;
            font-size: 0.9rem;
        }

        tr.alt > td {
            background-color: var(--table-row-alt);
        }
    }
</style>
