<script lang="ts">
	let { children } = $props()
</script>

<div
	class="sm:mx-a box-border h-screen w-full ps-5 pe-2.5 pt-18 sm:w-155 sm:pt-24 md:w-190 lg:w-170 lg:pt-12 xl:w-230 2xl:w-280">
	<main class="pb-12">
		{@render children()}
	</main>
</div>
