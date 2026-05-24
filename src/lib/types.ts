type PostMetadata = {
	id: string
	title: string
	summary: string
	created: Date
	updated: Date
	tags: string[]
	image?: string
}

export type PostEvent = {
	kind: number
	tags: string[][]
	content: string
	created_at: number
	pubkey: string
	id: string
	sig: string
}

export type PostType = PostMetadata & {
	content: string
}

export function getMetadata(event: PostEvent): PostMetadata {
	const metadata: Partial<PostMetadata> & { tags: string[] } = {
		updated: new Date(event.created_at * 1000),
		tags: [],
	}

	for (const tag of event.tags) {
		const [key, value] = tag
		switch (key) {
			case "d":
				metadata.id = value
				break
			case "title":
				metadata.title = value
				break
			case "summary":
				metadata.summary = value
				break
			case "published_at":
				metadata.created = new Date(+value * 1000)
				break
			case "t":
				metadata.tags.push(value)
				break
			case "image":
				metadata.image = value
				break
		}
	}

	if (!metadata.id) throw new Error("Invalid post event: missing id")
	if (!metadata.title) throw new Error("Invalid post event: missing title")
	if (!metadata.summary)
		throw new Error("Invalid post event: missing summary")
	if (!metadata.created)
		throw new Error("Invalid post event: missing published_at")
	if (!metadata.updated)
		throw new Error("Invalid post event: missing created_at")
	if (!metadata.tags) throw new Error("Invalid post event: missing tags")

	return metadata as PostMetadata
}
