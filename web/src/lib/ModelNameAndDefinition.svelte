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

    function copyToClipboard() {
        navigator.clipboard.writeText(definition);
        copied = true;
        
        setTimeout(() => {
            copied = false;
        }, 2000);
    }
</script>

<td
    >{name}
    <div class="model-definition">
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

    td:hover > div.model-definition {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        pointer-events: auto;
    }

    div.model-definition {
        position: absolute;
        left: 100%;
        top: 0;
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
        
        opacity: 0;
        visibility: hidden;
        transform: translateY(5px);
        pointer-events: none;
        transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
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
