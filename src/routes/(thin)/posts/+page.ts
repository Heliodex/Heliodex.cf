import type { PostType } from "$lib/types"

const allPostFiles = import.meta.glob("../../../posts/*.md") as {
	[key: string]: () => Promise<PostType>
}
export async function load() {
	const promises = Object.keys(allPostFiles).map(async path => {
		const data = await allPostFiles[path]()

		return {
			...data.metadata,
			content: data.default,
			path: path.match(/(\w+)\.md/)?.[1],
		}
	})
	const posts = await Promise.all(promises)

	return {
		posts,
	}
}
