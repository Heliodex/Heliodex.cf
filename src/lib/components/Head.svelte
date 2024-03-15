<script lang="ts">
	export let title = "Heliodex"
	export let description = ""
	export let ogImage = ""
</script>

<svelte:head>
	{#if title}
		<title>{title} - Heliodex</title>
	{:else}
		<title>Heliodex</title>
	{/if}
	{#if description}
		<meta name="description" content={description} />
	{/if}
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}
</svelte:head>
