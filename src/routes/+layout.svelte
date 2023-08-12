<script lang="ts">
	import { navigating } from "$app/stores"
	import nprogress from "nprogress"

	import "/src/nprogress.styl"
	import "/src/global.styl"
	import "uno.css"

	// Settings for nprogress, the loading bar shown
	// at the top of the page when navigating
	nprogress.configure({ showSpinner: false })

	let timeout: number | undefined
	// 100ms is the minimum time the loading bar will be shown
	$: if ($navigating && !timeout) timeout = setTimeout(nprogress.start, 100)
	else {
		clearTimeout(timeout)
		timeout = undefined

		nprogress.done()
	}
</script>

<svelte:head>
	<title>Heliodex.cf</title>
</svelte:head>

<div class="flex flex-col lg:flex-row">
	<Navbar />

	<div class="w-full overflow-y-scroll h-full">
		<slot />
	</div>
</div>

<style lang="stylus">
	div div
		background-size 2rem 2rem
		background-position 1rem 1rem
		// static background
		background-attachment fixed

		background-image linear-gradient(90deg, #090908 1px, transparent 1px), 
			linear-gradient(0deg, #090908 1px, transparent 1px)

		+lightTheme()
			background-image linear-gradient(90deg, #f9f7f6 1px, transparent 1px),
				linear-gradient(0deg, #f9f7f6 1px, transparent 1px)
</style>
