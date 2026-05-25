import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"
import type { Literal, Parent } from "unist"

// seems to work lel
const addHeadingIds = (n: Parent) => {
	const node = n as Parent & {
		data?: { hProperties?: { id?: string } }
	} // correct maybe??

	if (node.type === "heading") {
		const text = node.children
			.filter(child => child.type === "text")
			.map(child => (child as Literal).value)
			.join(" ")

		node.data ||= {}
		node.data.hProperties ||= {}
		node.data.hProperties.id = text
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace(/[^\w-]/g, "")
	}

	if (node.children) for (const child of node.children) addHeadingIds(child as Parent)
}

export default async (md: string): Promise<string> => {
	const file = await unified()
		.use(remarkParse)
		.use(() => tree => {
			addHeadingIds(tree as Parent)
		})
		.use(remarkRehype)
		.use(rehypeStringify)
		.process(md)

	return file.toString()
}
