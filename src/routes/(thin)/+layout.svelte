<script lang="ts">
	let { children } = $props()
</script>

<div
	class="sm:mx-a sm:w-155 md:w-190 lg:w-170 xl:w-230 2xl:w-280 pt-18 box-border h-screen w-full pe-2.5 ps-5 sm:pt-24 lg:pt-12">
	<main class="pb-12">
		{@render children()}
	</main>
</div>
