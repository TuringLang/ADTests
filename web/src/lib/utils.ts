export function getSortedEntries(obj: object) {
    return Object.entries(obj).sort(([a, _x], [b, _y]) =>
        a.localeCompare(b),
    );
}
