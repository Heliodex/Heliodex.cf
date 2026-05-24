import { error } from "@sveltejs/kit"
import md from "$lib/md"
import { getMetadata, type PostEvent } from "$lib/types"
import { load as loadBlog } from "../../posts/+page"

export async function load({ params }) {
	let data: PostEvent
	try {
		data = await import(`../../../../../posts/events/${params.post}.json`)
	} catch {
		error(404, "Post not found")
	}

	const { posts } = await loadBlog()
	const metadata = getMetadata(data)

	return {
		...metadata,
		content: await md(data.content),
		// remove the current post from the list
		posts: posts.toSpliced(
			posts.findIndex(post => post.id === params.post),
			1
		),
	}
}
