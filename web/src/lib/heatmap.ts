import type { ResultValue } from "./types";

/**
 * Green → Yellow → Red gradient.
 * t=0 → green (fast), t=0.5 → yellow, t=1 → red (slow).
 */
function heatmapColor(t: number): [number, number, number] {
    let r: number, g: number, b: number;
    if (t < 0.5) {
        // green → yellow
        const s = t * 2;
        r = Math.round(34 + s * (200 - 34));
        g = Math.round(197 + s * (180 - 197));
        b = Math.round(94 + s * (0 - 94));
    } else {
        // yellow → red
        const s = (t - 0.5) * 2;
        r = Math.round(200 + s * (220 - 200));
        g = Math.round(180 - s * 180);
        b = Math.round(0 + s * 30);
    }
    return [r, g, b];
}

/**
 * Get the heatmap background-color CSS string for a numeric cell value,
 * normalized per-row (i.e. relative to the other values in the same model row).
 * Returns empty string for non-numeric values or rows with fewer than 2 numeric values.
 */
export function getHeatmapStyle(
    value: ResultValue,
    rowValues: Map<string, ResultValue>,
    theme: string,
): string {
    if (typeof value !== "number") return "";

    const nums = [...rowValues.values()].filter(
        (v): v is number => typeof v === "number",
    );
    if (nums.length < 2) return "";

    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const logMin = Math.log(Math.max(min, 0.001));
    const logMax = Math.log(Math.max(max, 0.001));

    if (logMax === logMin) return "";

    const logVal = Math.log(Math.max(value, 0.001));
    const t = Math.max(0, Math.min(1, (logVal - logMin) / (logMax - logMin)));
    const [r, g, b] = heatmapColor(t);
    const alpha = theme === "dark" ? 0.3 : 0.25;
    return `background-color: rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Generate an array of CSS color strings for the legend gradient.
 */
export function getLegendGradientStops(theme: string, steps = 10): string[] {
    const alpha = theme === "dark" ? 0.5 : 0.4;
    const stops: string[] = [];
    for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const [r, g, b] = heatmapColor(t);
        stops.push(`rgba(${r}, ${g}, ${b}, ${alpha})`);
    }
    return stops;
}
