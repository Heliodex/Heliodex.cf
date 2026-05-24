import fs from "node:fs"
import type { EventTemplate, VerifiedEvent } from "@nostr/tools"
import { finalizeEvent as finaliseEvent, nip19 } from "@nostr/tools"
import { NostrTypeGuard } from "@nostr/tools/nip19"

type Metadata = {
	title: string
	image?: string
	summary: string
	created: Date
	updated: Date
	tags: string[]
}

function validateMetadata(json: unknown): Metadata {
	if (typeof json !== "object" || json === null)
		throw new Error("Metadata must be an object.")

	const { title, image, summary, created, updated, tags } = json as {
		[Key in keyof Metadata]: unknown
	}

	if (typeof title !== "string")
		throw new Error("Metadata 'title' must be a string.")
	if (image !== undefined && typeof image !== "string")
		throw new Error("Metadata 'image' must be a string if provided.")
	if (typeof summary !== "string")
		throw new Error("Metadata 'summary' must be a string.")

	if (typeof created !== "string" || Number.isNaN(Date.parse(created)))
		throw new Error("Metadata 'created' must be a valid date string.")
	if (typeof updated !== "string" || Number.isNaN(Date.parse(updated)))
		throw new Error("Metadata 'updated' must be a valid date string.")

	if (!Array.isArray(tags) || !tags.every(tag => typeof tag === "string"))
		throw new Error("Metadata 'tags' must be an array of strings.")

	return {
		title,
		image,
		summary,
		created: new Date(created),
		updated: new Date(updated),
		tags,
	}
}

type Post = {
	id: string
	content: string
	metadata: Metadata // metadata, metadata, have you seen the metadata? meta-ing all the data it can seee
}

type WithId<T> = {
	id: string
	data: T
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

		try {
			posts.push({
				id: post.replace(".md", ""),
				content,
				metadata: validateMetadata(JSON.parse(frontmatterText)),
			})
		} catch (e) {
			console.error(
				`Error processing post ${post}: ${(e as Error).message}`
			)
			process.exit(1)
		}
	}

	return posts
}

const postData = (post: Post) => ({
	created_at: Math.floor(post.metadata.updated.getTime() / 1000), // created_at should be the updated date
	tags: [
		["d", post.id],
		...post.metadata.tags.map(tag => ["t", tag]),

		["title", post.metadata.title],
		...(post.metadata.image ? [["image", post.metadata.image]] : []),
		["summary", post.metadata.summary],
		[
			"published_at",
			Math.floor(post.metadata.created.getTime() / 1000).toString(), // published_at should be the original creation date
		],
	],
	kind: 30023, // https://github.com/nostr-protocol/nips/blob/master/23.md
	content: post.content,
})

const createEventTemplates = (posts: Post[]): WithId<EventTemplate>[] =>
	posts.map(post => ({
		id: post.id,
		data: postData(post),
	}))

// THE SIGNATURE IS DIFFERENT EVERY TIME IN BIP340 BECAUSE IT INCLUDES A NONCE!!!!
const finaliseEvents = (
	ts: WithId<EventTemplate>[],
	sk: Uint8Array
): WithId<VerifiedEvent>[] =>
	ts.map(t => ({
		id: t.id,
		data: finaliseEvent(t.data, sk),
	}))

// scary part
async function getNsec(): Promise<Uint8Array> {
	console.log("pls input nsec")

	// read from stdin
	for await (const line of console) {
		console.clear()
		if (NostrTypeGuard.isNSec(line)) return nip19.decode(line).data
		console.log("Invalid secret key, please try again.")
	}

	throw new Error("Unexpected end of input while waiting for secret key.")
}

async function getEvents(): Promise<WithId<VerifiedEvent>[]> {
	const sk = await getNsec()

	const posts = readPosts()
	const templates = createEventTemplates(posts)
	return finaliseEvents(templates, sk)
}

async function writeEventsToFile(events: WithId<VerifiedEvent>[]) {
	const outdir = "./events"

	for (const event of events)
		await Bun.write(
			`${outdir}/${event.id}.json`,
			JSON.stringify(event.data, null, "\t")
		)
}

writeEventsToFile(await getEvents())
