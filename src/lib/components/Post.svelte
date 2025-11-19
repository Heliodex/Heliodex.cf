<script lang="ts">
	import when from "$lib/when"

	const { post }: {
		post: {
			path?: string
			title: string
			date: Date
		}
	} = $props()
</script>

<a
	href="/post/{post.path}"
	class="txt bg-#0008 @light:bg-#fffb backdrop-blur-4px rounded-4 border-#fff1 @light:border-#0003 w-full border border-solid p-2">
	<article class="px-6 py-4">
		<h3>{post.title}</h3>
		<small class="block pb-1">
			{when(post.date)}
		</small>
	</article>
</a>
