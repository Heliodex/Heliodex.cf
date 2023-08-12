<div
	class="bg-#0c0b0a @light:bg-white lg:w-90 lg:h-a lg:pt-42
	z-1 fixed flex w-full flex-wrap pb-3 ps-6 lg:static lg:flex-col">
	<span class="me-12 mt-3 hidden sm:inline-block lg:me-0">
		<a href="/" class="txt heliodex lg:text-3.2rem text-2xl">
			Heliodex.cf
		</a>
	</span>
	<nav
		class="mt-3 box-border flex
		flex-wrap justify-self-center lg:flex-col">
		<a href="/">Home</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</nav>
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

	a
		&:hover
			color #aaa
			&::before
				margin-right 0.5rem
				opacity 1

		&:active
			color #7f7f7f
</style>
