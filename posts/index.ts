import fs from "node:fs"
import type { EventTemplate, VerifiedEvent } from "@nostr/tools"
import { finalizeEvent as finaliseEvent, generateSecretKey } from "@nostr/tools"

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

const createEventTemplates = (posts: Post[]): EventTemplate[] =>
	posts.map(post => ({
		created_at: Math.floor(post.metadata.created_at.getTime() / 1000),
		tags: [
			["d", post.id],
			...post.metadata.tags.map(tag => ["t", tag]),

			["title", post.metadata.title],
			...(post.metadata.image ? [["image", post.metadata.image]] : []),
			["summary", post.metadata.summary],
			[
				"published_at",
				Math.floor(
					post.metadata.published_at.getTime() / 1000
				).toString(),
			],
		],
		kind: 30023, // https://github.com/nostr-protocol/nips/blob/master/23.md
		content: post.content,
	}))

const finaliseEvents = (ts: EventTemplate[], sk: Uint8Array): VerifiedEvent[] =>
	ts.map(t => finaliseEvent(t, sk))

const sk = generateSecretKey()

const posts = readPosts()
const templates = createEventTemplates(posts)
const events = finaliseEvents(templates, sk) // TODO: use real sk

console.log(JSON.stringify(events))
