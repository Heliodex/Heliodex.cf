import type { Component } from "svelte"

type PostMetadata = {
	title: string
	date: Date
	author: string
	updated?: Date
}

export type PostType = {
	metadata: PostMetadata
	default: Component
}
