<div
	class="bg-#000 @light:bg-#f6f6f6 lg:w-90 lg:h-a z-1 border-#fff1 @light:border-#0003 fixed flex w-full flex-wrap border-0 border-b border-solid lg:static lg:flex-col lg:border-e">
	<div class="banner -z-5 hidden lg:block">
		<img
			src="/gradientBeam.svg"
			class="w-full"
			alt="Gradient of red-orange Heliodex logo with a colourful beam" />
	</div>
	<span class="hidden pb-1 pe-12 ps-6 sm:inline-block lg:me-0 lg:mt-8">
		<a href="/" class="txt heliodex lg:text-3.8rem text-2xl">Heliodex.cf</a>
	</span>
	<nav
		class="box-border flex flex-wrap justify-self-center ps-6 pt-1 pt-1.5 lg:mt-3 lg:flex-col">
		<a href="/">Home</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>

	<p class="ms-a mt-a pe-3">
		<span class="text-neutral-500">Updated</span>
		18 March 2025
	</p>
</div>

<style>
	nav a {
		@apply rounded-1 me-5 no-underline transition;

		margin: 5px 1rem auto 0;

		font-size: 1.3rem;
		@media (max-width: 1023px) {
			font-size: 1rem;
		}

		color: #fff;
		@media (prefers-color-scheme: light) {
			color: #000;
		}

		@media (min-width: 1024px) {
			&::before {
				color: #aaa;
				transition: 0.25s;
				content: "• ";
				opacity: 0;
			}
		}
	}

	.banner {
		background: url(/gradientBackground.svg);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom;
		border-bottom: 1px solid rgba(255, 255, 255, 0.067);
		@media (prefers-color-scheme: light) {
			filter: invert(1);
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
			& img {
				filter: invert(1);
			}
		}
	}

	a {
		&:hover {
			color: #aaa;
			&::before {
				margin-right: 0.5rem;
				opacity: 1;
			}
		}
		&:active {
			color: #7f7f7f;
		}
	}

	.heliodex {
		background: linear-gradient(180deg, #ff8500 20%, #f00 60%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: filter 0.15s;
		&:hover {
			filter: brightness(0.85);
		}
		&:active {
			filter: brightness(0.65);
		}
	}
</style>
