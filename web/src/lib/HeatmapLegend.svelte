<script lang="ts">
    import { getLegendGradientStops } from "./heatmap";

    interface Props {
        theme: string;
    }
    const { theme }: Props = $props();

    const gradient = $derived(() => {
        const stops = getLegendGradientStops(theme);
        return `linear-gradient(to right, ${stops.join(", ")})`;
    });
</script>

<div class="legend">
    <div class="gradient-section">
        <span class="label">Faster</span>
        <div class="gradient-bar" style="background: {gradient()}"></div>
        <span class="label">Slower</span>
    </div>
    <div class="status-labels">
        <span class="status error">error</span>
        <span class="status wrong">wrong</span>
        <span class="status nan">NaN</span>
    </div>
</div>

<style>
    .legend {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 8px 14px;
        border: 1px solid var(--table-border);
        border-radius: 8px;
        background-color: var(--table-cell-bg);
        font-size: 0.85rem;
        width: fit-content;
    }

    .gradient-section {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .gradient-bar {
        width: 120px;
        height: 14px;
        border-radius: 3px;
        border: 1px solid var(--table-border);
    }

    .label {
        font-size: 0.8rem;
        color: var(--text-primary);
        opacity: 0.7;
    }

    .status-labels {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .status {
        padding: 1px 6px;
        border-radius: 3px;
        font-family: "Fira Code", monospace;
        font-size: 0.8rem;
    }

    .status.error {
        color: var(--error-color);
    }

    .status.wrong {
        color: var(--wrong-color);
        background-color: var(--wrong-bg);
    }

    .status.nan {
        color: var(--error-color);
        opacity: 0.6;
        font-style: italic;
    }
</style>
