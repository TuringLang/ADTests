export type ADType =
    | "EnzymeFwd"
    | "EnzymeRvs"
    | "FiniteDifferences"
    | "ForwardDiff"
    | "MooncakeFwd"
    | "MooncakeRvs"
    | "ReverseDiff"
    | "ReverseDiffCompiled"
    | "Zygote";

interface KnownIssue {
    url: string;
    affects: [string, ADType][];
}

const KNOWN_ISSUES: KnownIssue[] = [
    {
        url: "https://github.com/EnzymeAD/Enzyme.jl/issues/1995",
        affects: [
            ["assume_mvnormal", "EnzymeFwd"],
            ["assume_wishart", "EnzymeFwd"],
        ],
    },
    {
        url: "https://github.com/chalk-lab/Mooncake.jl/issues/570",
        affects: [
            ["multithreaded", "MooncakeFwd"],
            ["multithreaded", "MooncakeRvs"],
        ],
    },
];

// Value overrides for stochastically incorrect results, etc.
// These replace the displayed value in the table.
interface ValueOverride {
    value: "wrong" | "error";
    affects: [string, ADType][];
}

const VALUE_OVERRIDES: ValueOverride[] = [
    // Example:
    // {
    //     value: "wrong",
    //     affects: [
    //         ["some_model", "EnzymeFwd"],
    //     ],
    // },
];

// Build lookup maps
const knownIssuesMap = new Map<string, string>();
for (const issue of KNOWN_ISSUES) {
    for (const [model, adtype] of issue.affects) {
        knownIssuesMap.set(`${model}__${adtype}`, issue.url);
    }
}

const overridesMap = new Map<string, string>();
for (const override of VALUE_OVERRIDES) {
    for (const [model, adtype] of override.affects) {
        overridesMap.set(`${model}__${adtype}`, override.value);
    }
}

export function getKnownIssueUrl(
    model: string,
    adtype: string,
): string | undefined {
    return knownIssuesMap.get(`${model}__${adtype}`);
}

export function getOverrideValue(
    model: string,
    adtype: string,
): string | undefined {
    return overridesMap.get(`${model}__${adtype}`);
}
