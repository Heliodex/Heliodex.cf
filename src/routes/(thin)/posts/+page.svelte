<script lang="ts">
	import Head from "$lib/components/Head.svelte"
	import Post from "$lib/components/Post.svelte"

	const { data } = $props()

	const posts = data.posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	)
</script>

<Head title="Posts" />

<h1>Posts</h1>

<div class="flex flex-col gap-4">
	{#each posts as post}
		<Post {post} />
	{/each}
</div>

{#if posts.length == 0}
	<h2 class="font-300 mt-35vh text-center tracking-wide">
		No blog posts yet. Watch this space!
	</h2>
{/if}

