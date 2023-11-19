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

	<div class="h-full w-full overflow-y-scroll">
		<slot />
	</div>
</div>

<style lang="stylus">
	div div
		background-size 3rem

		background-color #05
		background-image url("../../../../../bgpattern.svg")

		+lightTheme()
			background-color #e
			background-image url("../../../../../bgpattern light.svg")
</style>
