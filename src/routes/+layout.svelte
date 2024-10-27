<script lang="ts">
	import "/src/nprogress.styl"
	import "/src/global.styl"
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

<style lang="stylus">
	div div
		background-size 3rem

		background-color #05
		background-image url("/bgpattern.svg")

		+lightTheme()
			background-color #e
			background-image url("/bgpattern light.svg")
</style>
