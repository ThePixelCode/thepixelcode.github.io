<script>
	import { getContext } from "svelte";
    //import type { Card } from "$lib/cards";

	const cards = getContext("cards")

</script>
<div class="w-full h-half-screen text-center text-black pt-[20vh]">
    <h1 class="text-3xl">Hi 👋, I'm ThePixelCode</h1>
    <p>I'm a programmer and this are my projects:</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
    {#each $cards as card}
        <a href="/projects{card.link}"><div class="bg-neutral-300 p-2">
            <div>{card.title}</div>
            <div>{card.desc}</div>
            <div>{card.getCountAsString()}</div>
        </div></a>
    {/each}
</div>