<script lang="ts">
	type Props = {
		title?: string
	}

	let { title = "Heliodex" }: Props = $props()
</script>

<svelte:head>
	{#if title}
		<title>{title} - Heliodex</title>
	{:else}
		<title>Heliodex</title>
	{/if}
</svelte:head>
