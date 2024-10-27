<script lang="ts">
	let { children } = $props();
</script>

<main class="h-screen w-full">
	{@render children?.()}
</main>
