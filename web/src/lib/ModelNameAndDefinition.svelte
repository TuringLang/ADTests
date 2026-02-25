<script lang="ts">
    interface Props {
        name: string;
        onToggle: () => void;
    }
    const { name, onToggle }: Props = $props();
</script>

<td class="model-name" onclick={onToggle}>{name}</td>

<style>
    td.model-name {
        font-family: "Fira Sans", sans-serif;
        font-weight: 700;
        position: relative;
        text-align: right;
        transition: background-color 0.3s ease;
        background-color: var(--table-sticky-col-bg);
        border: 1px solid var(--table-border);
        padding: 0px 10px;
        white-space: nowrap;
        cursor: pointer;
    }

    td.model-name:hover {
        background-color: var(--btn-hover);
    }
</style>
