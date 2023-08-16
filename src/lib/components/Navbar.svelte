<div
	class="bg-#080808 @light:bg-white lg:w-90 lg:h-a z-1 fixed flex w-full
	flex-wrap lg:static lg:flex-col border-solid border-0 lg:border-e border-b
	border-#fff1 @light:border-#0003">
	<div class="banner lg:block hidden -z-5">
		<img
			src="/gradientBeam.svg"
			class="w-full"
			alt="Gradient of red-orange Heliodex logo with a colourful beam" />
	</div>
	<span class="me-12 lg:mt-8 my-1 hidden sm:inline-block lg:me-0 ps-6">
		<a href="/" class="txt heliodex lg:text-3.2rem text-2xl">Heliodex.cf</a>
	</span>
	<nav
		class="lg:mt-3 mt-1.5 box-border flex ps-6
		flex-wrap justify-self-center lg:flex-col">
		<a href="/">Home</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>

	<p class="ms-a mt-a pe-3">3.0.1</p>
</div>

<style lang="stylus">
	nav a
		@apply no-underline me-5 rounded-1 transition

		margin 5px 1rem auto 0

		font-size 1.3rem
		+-lg()
			font-size 1rem

		color white
		+lightTheme()
			color black

		+lg()
			&::before
				color #aaa
				transition 0.25s
				content "• "
				opacity 0

	.banner
		background url("/gradientBackground.svg")
		background-size contain
		background-repeat no-repeat
		background-position bottom

		border-bottom 1px solid #fff1

		+lightTheme()
			filter invert(1)
			border-bottom 1px solid #fff3
			img
				filter invert(1)

	a
		&:hover
			color #aaa
			&::before
				margin-right 0.5rem
				opacity 1

		&:active
			color #7f7f7f

	.heliodex
		background linear-gradient(180deg, #FF8500 30%, #F00 70%)
		background-clip text
		-webkit-background-clip text
		-webkit-text-fill-color transparent

		transition filter 0.15s
		&:hover
			filter brightness(0.85)
		&:active
			filter brightness(0.65)
</style>
