<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte"

	import "/src/global.css"
	import "uno.css"

	let { children } = $props()
</script>

<svelte:head>
	<title>Heliodex.cf</title>
</svelte:head>

<div class="flex flex-col lg:flex-row">
	<Navbar />

	<div class="h-full w-full overflow-y-scroll">
		{@render children()}
	</div>
</div>

<style>
	div div {
		background-size: 3rem;
		background-color: #050505;
		background-image: url(/bgpattern.svg);
		@media (prefers-color-scheme: light) {
			background-color: #eee;
			background-image: url("/bgpattern light.svg");
		}
	}
</style>
