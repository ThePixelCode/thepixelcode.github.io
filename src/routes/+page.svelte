<script lang="ts">
	import type { PageData } from "./$types";


    export let data: PageData
</script>
<div class="w-full h-half-screen text-center text-black">
    <h1 class="pt-40 text-3xl">Hi 👋, I'm misterbug</h1>
    <p>I'm a programmer and this are my projects:</p>
</div>
<div class="grid grid-cols-4 gap-4 m-4">
    {#each data.cards as card}
        <a href="{card.link}"><div class="bg-neutral-300 p-2">
            <div>{card.title}</div>
            <div>{card.desc}</div>
            <div>{card.Count}</div>
        </div></a>
    {/each}
</div>