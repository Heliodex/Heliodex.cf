<script lang="ts">
	import Head from "$lib/components/Head.svelte"
	import Post from "$lib/components/Post.svelte"
	import fade from "$lib/fade"
	import when from "$lib/when"

	const { data } = $props()

	const date = (() => {
		const d = when(data.date)
		if (d === "Not yet published") return d
		return `${d} by ${data.author}`
	})()

	const Content = data.content
</script>

<Head title={data.title} />

<div class="flex flex-col xl:max-w-300 xl:flex-row">
	<article class="pt-8 xl:w-180">
		<a href="/posts">← Back to all posts</a>
		<h1 class="text-10">{data.title}</h1>
			<div class="text-right">
					{date}
					{#if data.updated}
						<br />
						<em>
							{when(data.updated, true)}
						</em>
					{/if}
				</div>

			<div
				in:fade|global
				class="content bg-#0008 @light:bg-#fffb backdrop-blur-4px rounded-4 border-#fff1 @light:border-#0003 w-full border border-solid p-4">
				<Content />
			</div>
	</article>

	{#if data.posts.length > 0}
		<section class="w-120 xl:max-w-100 pt-6 xl:ps-12 xl:pt-22">
			<h2>Other posts</h2>
			<div class="flex flex-col gap-4">
				{#each [...data.posts, ...data.posts] as post}
					<Post {post} />
				{/each}
			</div>
		</section>
	{/if}
</div>

<style>
	.content {
		text-align: justify;

		:global(h2) {
			font-size: 1.35rem;
		}

		:global(blockquote) {
			margin-left: 0.5rem;
			padding: 0.5rem 0 0.5rem 1rem;
			border-left: 0.2rem solid rgba(136, 136, 136, 0.667);
			font-style: italic;
		}

		:global(blockquote) :global(blockquote) {
			margin-left: 0rem;
		}

		:global(blockquote) :global(p) {
			margin: 0;
			opacity: 0.8;
		}
	}
</style>
