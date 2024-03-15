// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	// sveltekit-autoimport types

	declare const fade: typeof import("$lib/fade").default

	declare const Head: typeof import("$lib/components/Head.svelte").default
	declare const Navbar: typeof import("$lib/components/Navbar.svelte").default
}

export type {}
