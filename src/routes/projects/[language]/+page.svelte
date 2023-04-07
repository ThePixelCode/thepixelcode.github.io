<script>
    import { getContext } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data

    const projects = getContext("projects")
    console.log()
</script>
{#each $projects(data.language) as project}
    Project: {project.name}
{/each}