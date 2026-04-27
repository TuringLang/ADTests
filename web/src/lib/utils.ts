import type { ADResults, ModelData, SortState, ResultValue } from "./types";

const AD_BACKEND_ORDER: Record<string, number> = {
    /* Finite differences */
    FiniteDifferences: 1,
    /* Forward mode */
    ForwardDiff: 11,
    EnzymeFwd: 12,
    MooncakeFwd: 13,
    /* Reverse mode */
    ReverseDiff: 21,
    ReverseDiffCompiled: 22,
    EnzymeRev: 23,
    MooncakeRev: 24,
};

function compareADBackends(a: string, b: string): number {
    return (AD_BACKEND_ORDER[a] ?? 500) - (AD_BACKEND_ORDER[b] ?? 500)
        || a.localeCompare(b);
}

export function getADTypes(data: Map<string, ModelData>): string[] {
    const first = data.values().next().value;
    if (!first) return [];
    return [...first.results.keys()].sort(compareADBackends);
}

export function sortedADResults(results: ADResults): [string, ResultValue][] {
    return [...results.entries()].sort(([a], [b]) => compareADBackends(a, b));
}

export function alphabetical<V>(map: Map<string, V>): [string, V][] {
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
}

export function sortModelEntries(
    data: Map<string, ModelData>,
    sort: SortState,
): [string, ModelData][] {
    const entries = alphabetical(data);
    if (!sort.column || !sort.direction) return entries;

    const col = sort.column;
    const dir = sort.direction === "asc" ? 1 : -1;

    return entries.sort(([, a], [, b]) => {
        const av = a.results.get(col);
        const bv = b.results.get(col);
        if (typeof av !== "number" && typeof bv !== "number") return 0;
        if (typeof av !== "number") return 1;
        if (typeof bv !== "number") return -1;
        return dir * (av - bv);
    });
}
