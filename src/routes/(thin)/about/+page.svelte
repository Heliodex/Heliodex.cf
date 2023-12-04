<script lang="ts">
	import { fly } from "svelte/transition"
</script>

<Head title="About" />

<h1>About</h1>

<div in:fly={{ y: 40 }}>
	<div class="text-xl">
		<span>Heliodex</span>
	</div>
	<div class="text-xl">
		<!-- Mix and match letters with the nearest looking font
		for phonetic characters. Not a good way of doing it. -->
		<span>/'hiliə</span>
		<span class="ipa">ʊ</span>
		<span>d</span>
		<span class="ipa">ɛ</span>
		<span>ks/</span>
	</div>

	<div
		class="bg-#0008 @light:bg-#fffb backdrop-blur-4px rounded-4
		border-#fff1 @light:border-#0003 w-full border border-solid px-4">
		<p>
			I'm Lewin Kelly, a software developer from Scotland, better known
			online by my alias <strong>Heliodex.</strong>
		</p>
		<p>
			I work with a wide variety of technologies, from frontend and
			backend web apps to embedded and game development:
		</p>
		<ul>
			<li>
				I use <a
					href="https://svelte.dev/"
					target="_blank"
					rel="noopener noreferrer">
					Svelte
				</a>
				as my frontend web framework of choice, as it provides excellend
				developer experience and performance, with many features built in
				that make it enjoyable to work with. I usually pair this with
				<a
					href="https://kit.svelte.dev/"
					target="_blank"
					rel="noopener noreferrer">
					SvelteKit
				</a>
				for encapsulating both frontend and backend code, as it makes communication
				between the two a breeze and allows for ultra-fast iteration velocity.
			</li>

			<li>
				For server-side <a
					href="https://developer.mozilla.org/docs/Web/javascript/"
					target="_blank"
					rel="noopener noreferrer">
					Javascript
				</a> and <a
					href="https://typescripts.org/"
					target="_blank"
					rel="noopener noreferrer">
					Typescript
				</a>
				development,
				<a
					href="https://bun.sh/"
					target="_blank"
					rel="noopener noreferrer">
					Bun,
				</a>
				<a
					href="https://deno.land/"
					target="_blank"
					rel="noopener noreferrer">
					Deno,
				</a>
				and
				<a
					href="https://nodejs.org/"
					target="_blank"
					rel="noopener noreferrer">
					Node
				</a>
				are all amazing projects that I use regularly.
			</li>

			<li>
				<a
					href="https://lua.org/"
					target="_blank"
					rel="noopener noreferrer">
					Lua
				</a>
				was my first ever programming language, and is remains a favourite
				of mine due to its simplicity, flexibility, and speed. At risk of
				sounding like a heretic, I find it most useful when enhanced with
				compilers or preprocessors such as
				<a
					href="https://yuescript.org/"
					target="_blank"
					rel="noopener noreferrer">
					Yuescript,
				</a>
				<a
					href="https://moonscript.org/"
					target="_blank"
					rel="noopener noreferrer">
					Moonscript,
				</a>
				and
				<a
					href="https://darklua.com/"
					target="_blank"
					rel="noopener noreferrer">
					Darklua.
				</a>
			</li>

			<li>
				<a
					href="https://luau-lang.org/"
					target="_blank"
					rel="noopener noreferrer">
					Luau
				</a>
				further improves on Lua with better performance, newer syntactic
				features, a wider standard library, and gradual typing. This, alongside
				the ecosystem of tooling available for the language and compatible
				tools from Lua, makes for a far better development experience.
			</li>

			<li>
				<a
					href="https://go.dev/"
					target="_blank"
					rel="noopener noreferrer">
					Go
				</a>
				is a language I've been learning and loving more recently, a compiled
				language that strikes a great balance of high performance, dead simplicity,
				and a great standard library. I often use it when I need a native
				application, or when I something a bit more performant than my usual
				favourite languages.
			</li>
		</ul>

		<p>
			I'm a forever fan of all truly free and open source software, and I
			try to make as much of my work available and build in the open as
			much as possible. I'm also a big fan of all AI, machine learning,
			and crypto technologies which help me hugely while building
			software, both as tools and as components of my projects.
		</p>

		<p>
			For me, programming is the perfect mix of logic and real-world
			problem solving, and I'm always looking for new and exciting
			projects and ideas to work on or contribute to!
		</p>
	</div>
</div>

<style lang="stylus">
	.ipa
		margin 0 -0.3rem
		font-family Helvetica, Arial, sans-serif // support for phonetic chars

	li
		margin-bottom 1rem
</style>
