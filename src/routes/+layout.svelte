<script lang="ts">
	import "../app.css"
	import Navbar from "$lib/Navbar.svelte";
	import Footer from "$lib/Footer.svelte";
	import type { LayoutData } from "./$types";
	import { writable } from "svelte/store";
	import { setContext } from "svelte";

	export let data: LayoutData

	const cards = writable()
	$: cards.set(data.cards)

	setContext("cards", cards)

	const projects = writable()
	$: projects.set(data.projects)

	setContext("projects", projects)
</script>
<Navbar/>
<div>
	<slot />
</div>
<Footer/>