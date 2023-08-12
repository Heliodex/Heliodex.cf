import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import autoImport from "sveltekit-autoimport"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
			stylus: {
				prependData: '@import "src/variables.styl"',
			},
		}),
		autoImport({
			components: ["./src/lib/components"],
			module: {
				svelte: ["onMount"],
				"svelte/store": ["writable"],
				"$app/forms": ["enhance", "deserialize"],
			},
			mapping: {
				fade: 'import fade from "$lib/fade"',
			},
			include: ["**/*.svelte", "**/*.ts"],
		}),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},

	vitePlugin: {
		inspector: {
			toggleKeyCombo: "control-i",
		},
	},
}

export default config
