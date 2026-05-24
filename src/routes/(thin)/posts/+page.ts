import { getMetadata, type PostEvent, type PostType } from "$lib/types"

const allPostFiles = import.meta.glob("../../../../posts/events/*.json") as {
	[key: string]: () => Promise<unknown>
} as {
	[key: string]: () => Promise<{ default: PostEvent }>
}

export async function load() {
	const promises = Object.keys(allPostFiles).map(async path => {
		const data = (await allPostFiles[path]()).default
		const metadata = getMetadata(data)

		return {
			...metadata,
			content: data.content,
		} as PostType
	})

	return {
		posts: await Promise.all(promises),
	}
}
