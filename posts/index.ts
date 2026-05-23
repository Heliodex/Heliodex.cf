import fs from "node:fs"

type Metadata = {
	title: string
	image?: string
	summary: string
	created_at: Date
	published_at: Date
	tags: string[]
}

function validateMetadata(json: unknown): Metadata {
	if (typeof json !== "object" || json === null)
		throw new Error("Metadata must be an object.")

	const { title, image, summary, created_at, published_at, tags } = json as {
		[Key in keyof Metadata]: unknown
	}

	if (typeof title !== "string")
		throw new Error("Metadata 'title' must be a string.")
	if (image !== undefined && typeof image !== "string")
		throw new Error("Metadata 'image' must be a string if provided.")
	if (typeof summary !== "string")
		throw new Error("Metadata 'summary' must be a string.")

	if (typeof created_at !== "string" || Number.isNaN(Date.parse(created_at)))
		throw new Error("Metadata 'created_at' must be a valid date string.")
	if (
		typeof published_at !== "string" ||
		Number.isNaN(Date.parse(published_at))
	)
		throw new Error("Metadata 'published_at' must be a valid date string.")

	if (!Array.isArray(tags) || !tags.every(tag => typeof tag === "string"))
		throw new Error("Metadata 'tags' must be an array of strings.")

	return {
		title,
		image,
		summary,
		created_at: new Date(created_at),
		published_at: new Date(published_at),
		tags,
	}
}

type Post = {
	id: string
	content: string
	metadata: Metadata // metadata, metadata, have you seen the metadata? meta-ing all the data it can seee
}

function readPosts(): Post[] {
	const posts: Post[] = []

	const postsDir = fs.readdirSync("./md").filter(file => file.endsWith(".md"))

	for (const post of postsDir) {
		const f = fs.readFileSync(`./md/${post}`, "utf-8")

		const [, frontmatterText, content] = f.split("---").map(s => s.trim())
		if (!frontmatterText || !content) {
			console.error(`Post ${post} is missing frontmatter or content.`)
			process.exit(1)
		}

		posts.push({
			id: post.replace(".md", ""),
			content,
			metadata: validateMetadata(JSON.parse(frontmatterText)),
		})
	}

	return posts
}

const posts = readPosts()

console.log(posts)
