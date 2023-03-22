<script lang="ts">
	import "./Navbar.css"
    let data = [
    ["/", "Home"],
    ["/projects", "Projects"]
]
</script>
<nav class="m-0 p-4 top-0 inset-x-0 w-full bg-gray-300 text-black dark:bg-black dark:text-white">
	<ul class="flex flex-row">
		{#each data as [url, title]}
			<li class="inline-block mx-2 max-w-fit"><a href={url} class="link cursor-pointer">{title}</a></li>
		{/each}
	</ul>
</nav>