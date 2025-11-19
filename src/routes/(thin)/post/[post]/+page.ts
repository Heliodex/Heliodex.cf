import { error } from "@sveltejs/kit"
import type { PostType } from "$lib/types"
import { load as loadBlog } from "../../posts/+page"

export async function load({ params }) {
	let data: PostType
	try {
		data = await import(`../../../../posts/${params.post}.md`)
	} catch {
		error(404, "Post not found")
	}

	const { posts } = await loadBlog()

	return {
		...data.metadata,
		content: data.default,
		// remove the current post from the list
		posts: posts.toSpliced(
			posts.findIndex(post => post.path === params.post),
			1
		),
	}
}
