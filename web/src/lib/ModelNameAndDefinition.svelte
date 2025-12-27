<script lang="ts">
    import Highlight from "svelte-highlight";
    import { julia } from "svelte-highlight/languages/julia";
    import "svelte-highlight/styles/atom-one-light.css";

    interface Props {
        name: string;
        definition: string;
    }
    const { name, definition }: Props = $props();

    let copyButton: HTMLButtonElement;
    function copyToClipboard() {
        navigator.clipboard.writeText(definition);
        let width = copyButton.offsetWidth;
        copyButton.style.width = width + "px"; // prevent button from resizing
        copyButton.textContent = "Copied!";
        copyButton.disabled = true;
        setTimeout(() => {
            copyButton.textContent = "Copy to clipboard";
            copyButton.style.width = null;
            copyButton.disabled = false;
        }, 2000);
    }
</script>

<td
    >{name}
    <div class="model-definition">
        <Highlight language={julia} code={definition} />
        <button bind:this={copyButton} id="copy" onclick={copyToClipboard}
            >Copy to clipboard</button
        >
    </div></td
>

<style>
    td {
        font-family: "Fira Sans", sans-serif;
        font-weight: 700;
        position: relative;
        text-align: right;
        transition: background-color 0.3s ease;
        background-color: #ececec;
        border: 1px solid black;
        border-collapse: collapse;
        padding: 0px 10px;
        white-space: nowrap;
    }

    td:hover > div.model-definition {
        display: block;
    }

    div.model-definition {
        background-color: #f6f6f6;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px 0 0 0;
        z-index: 5;
        font-size: 0.9em;
        text-align: left;
        font-weight: normal;
        position: absolute;
        left: 100%;
        top: 0;
        display: none;
    }

    button#copy {
        position: absolute;
        font-family: inherit;
        top: 5px;
        left: 10px;
        color: #555555;
        cursor: pointer;
    }
</style>
