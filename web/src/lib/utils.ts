export function getSortedEntries(m: Map<string, any>) {
    return [...m.entries()].sort(([k1, _v1], [k2, _v2]) =>
        k1.localeCompare(k2),
    );
}
