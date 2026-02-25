<script module lang="ts">
    // Shared across all instances: close any other open tooltip when a new one opens
    let activeHideCallback: (() => void) | null = null;
</script>

<script lang="ts">
    import Highlight from "svelte-highlight";
    import { julia } from "svelte-highlight/languages/julia";
    import "svelte-highlight/styles/atom-one-light.css";

    interface Props {
        name: string;
        definition: string;
    }
    const { name, definition }: Props = $props();

    let copied = $state(false);
    let showTooltip = $state(false);
    let tooltipStyle = $state("");
    let tdElement: HTMLTableCellElement | undefined = $state();
    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    function copyToClipboard() {
        navigator.clipboard.writeText(definition);
        copied = true;

        setTimeout(() => {
            copied = false;
        }, 2000);
    }

    function cancelHide() {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
    }

    function hideImmediately() {
        cancelHide();
        showTooltip = false;
        if (activeHideCallback === hideImmediately) {
            activeHideCallback = null;
        }
    }

    function scheduleHide() {
        cancelHide();
        hideTimeout = setTimeout(hideImmediately, 100);
    }

    function onMouseEnter() {
        // Close any other open tooltip immediately
        if (activeHideCallback && activeHideCallback !== hideImmediately) {
            activeHideCallback();
        }
        cancelHide();
        if (!tdElement) return;
        showTooltip = true;
        activeHideCallback = hideImmediately;
        const rect = tdElement.getBoundingClientRect();
        const tooltipWidth = 350;
        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;

        let left: string;
        if (spaceRight >= tooltipWidth) {
            left = `${rect.right}px`;
        } else if (spaceLeft >= tooltipWidth) {
            left = `${rect.left - tooltipWidth}px`;
        } else {
            left = `${rect.left}px`;
        }

        tooltipStyle = `left: ${left}; top: ${rect.top}px`;
    }
</script>

<td
    bind:this={tdElement}
    onmouseenter={onMouseEnter}
    onmouseleave={scheduleHide}
    >{name}
    {#if showTooltip}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
            class="model-definition"
            style={tooltipStyle}
            onmouseenter={cancelHide}
            onmouseleave={scheduleHide}
        >
            <div class="code-wrapper">
                <Highlight language={julia} code={definition} />
            </div>
            <button
                class="copy-btn"
                onclick={copyToClipboard}
                aria-label="Copy to clipboard"
                title="Copy code"
                disabled={copied}
            >
                {#if copied}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                {/if}
            </button>
        </div>
    {/if}
</td>

<style>
    td {
        font-family: "Fira Sans", sans-serif;
        font-weight: 700;
        position: relative;
        text-align: right;
        transition: background-color 0.3s ease;
        background-color: var(--table-sticky-col-bg);
        border: 1px solid var(--table-border);
        padding: 0px 10px;
        white-space: nowrap;
        cursor: help;
    }

    div.model-definition {
        position: fixed;
        z-index: 50;
        min-width: 300px;
        max-width: 600px;

        background-color: var(--model-def-bg);
        border: 1px solid var(--table-border);
        border-radius: 6px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        font-size: 0.85rem;
        text-align: left;
        font-weight: normal;
        pointer-events: auto;
    }

    :global([data-theme="dark"]) div.code-wrapper {
        filter: invert(0.93) hue-rotate(180deg);
    }

    div.code-wrapper :global(pre) {
        border-radius: 6px;
        margin: 0;
        padding: 8px !important;
    }

    button.copy-btn {
        position: absolute;
        top: 4px;
        right: 4px;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 24px;
        height: 24px;
        padding: 0;

        background-color: var(--bg-primary);
        border: 1px solid var(--table-border);
        border-radius: 4px;
        color: var(--copy-btn-text);

        cursor: pointer;
        transition: all 0.2s ease;
        opacity: 0.6;
        z-index: 10;
    }

    button.copy-btn:hover {
        opacity: 1;
        background-color: var(--btn-hover);
        color: var(--link-color);
    }

    button.copy-btn:disabled {
        color: var(--link-visited);
        border-color: var(--link-visited);
        opacity: 1;
        cursor: default;
    }
</style>
