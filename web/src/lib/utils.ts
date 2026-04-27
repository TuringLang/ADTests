function getOrderInTable(m: string): number {
    switch (m) {
        /* Finite differences */
        case "FiniteDifferences":
            return 1;
        /* Forward mode */
        case "ForwardDiff":
            return 11;
        case "EnzymeFwd":
            return 12;
        case "MooncakeFwd":
            return 13;
        /* Reverse mode */
        case "ReverseDiff":
            return 21;
        case "ReverseDiffCompiled":
            return 22;
        case "EnzymeRev":
            return 23;
        case "MooncakeRev":
            return 24;
        /* Everything else gets shoved to the end */
        default:
            return 500;
    }
}

export function compareADBackends(b1: string, b2: string): number {
    const m1 = getOrderInTable(b1);
    const m2 = getOrderInTable(b2);
    if (m1 < m2) {
        return -1;
    }
    else if (m1 > m2) {
        return 1;
    }
    else {
        return b1.localeCompare(b2);
    }
}

export function getSortedEntries(m: Map<string, any>) {
    return [...m.entries()].sort(([k1, _v1], [k2, _v2]) =>
        compareADBackends(k1, k2)
    );
}
