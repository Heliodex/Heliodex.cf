<script lang="ts">
	import type { PostType } from "$lib/types"
	import when from "$lib/when"

	const {
		post,
	}: {
		post: PostType
	} = $props()
</script>

<a
	href="/post/{post.id}"
	class={[
		"txt backdrop-blur-4px rounded-4 border-#fff1 @light:border-#0003 w-full border border-solid p-2",
		(() => {
			if (post.tags.includes("monthlyupdate"))
				return "bg-#0008 @light:bg-#fffb"

			return "bg-#3008 @light:bg-#fddb"
		})(),
	]}>
	<article class="px-4 py-2">
		<h3>{post.title}</h3>
		<p class="pl-2">
			{post.summary}
		</p>

		<small class="block pb-1">
			{when(post.created)}
		</small>
		{#if post.tags.length > 0}
			<small class="block pb-1">
				Tags: {post.tags.join(", ")}
			</small>
		{/if}
	</article>
</a>

<style>
	.monthlyupdate {
		border-color: #ffb100;
	}
</style>
