<script lang="ts">
	import { fly } from "svelte/transition"
</script>

<Head title="Projects" />

<main
	class="pt-18 sm:mx-a sm:w-155 md:w-190 lg:w-170 xl:w-230
	2xl:w-280 pe-2.5 ps-5 sm:pt-24 lg:pt-12">
	<h1>Projects</h1>
	<p>
		Here's a list of many of the projects that I have worked on, and teams I
		have worked in, in no particular order.
	</p>
</main>

<div
	in:fly={{ y: 40 }}
	class="projects md:grid xl:grid-cols-2 lg:grid-cols-none md:grid-cols-2 sm:grid-cols-none mx-6">
	<!-- Left column -->
	<div class="pe-6">
		<div>
			<h2>eChat</h2>

			<p>
				eChat is a messaging application, built as the successor to a
				previous project, DocSocial, and also designed to be used during
				school without getting caught. It was built with <a
					href="https://svelte.dev/"
					target="_blank"
					rel="noopener noreferrer">
					Svelte
				</a>
				and
				<a
					href="https://centrifugal.dev/"
					target="_blank"
					rel="noopener noreferrer">
					Centrifugo
				</a>
				.
			</p>
			<p>
				The app was made to work in a bookmarklet, and the popup would
				appear on the page upon clicking the bookmark.
			</p>
			<p>
				The original server will likely no longer be online, but both
				server and client have been open-sourced at
				<a
					href="https://github.com/Heliodex/eChat"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/eChat
				</a>
				.
				<br />
				<a
					href="https://echat.cf/"
					target="_blank"
					rel="noopener noreferrer">
					echat.cf
				</a>
			</p>
			<p>
				<img
					src="echat.png"
					alt="Screenshot of an eChat popup"
					width="400" />
			</p>
		</div>

		<div>
			<h2>DocSocial</h2>

			<p>
				DocSocial is a free, simple messaging application. It was
				designed to appear like a Google document from a quick glance,
				or from a look at your browser history.
				<br />
				<br />
				DocSocial uses
				<a
					href="https://scaledrone.com/"
					target="_blank"
					rel="noopener noreferrer">
					Scaledrone
				</a>
				for its backend and for transferring messages.
			</p>
			<p>
				It was designed to work best with one specific device and OS,
				our school-assigned chromebooks, so pupils could chat with
				others in class and not be caught by a teacher.
				<br />
				<a
					href="https://docsocial.tk/"
					target="_blank"
					rel="noopener noreferrer">
					docsocial.tk
				</a>
				<br />
				<a
					href="https://docsocial.cf/"
					target="_blank"
					rel="noopener noreferrer">
					docsocial.cf
				</a>
			</p>
			<p>
				Its (very disorganised and minified) source code can be found at
				<a
					href="https://github.com/DocSocial/DocSocial"
					target="_blank"
					rel="noopener noreferrer">
					github.com/DocSocial/DocSocial
				</a>
				.
			</p>
			<p>
				<img src="docsocial.png" alt="DocSocial Logo" width="300" />
			</p>
		</div>

		<div>
			<h2>Crazy Calculations</h2>

			<p>
				Crazy Calculations is a simple maths game that tests you through
				10 levels of increasingly difficult maths questions.
				<br />
				It was programmed in about a week for a Computer Science class assignment,
				where a video had to be recorded explaining the project.
				<br />
				The project was started on 23 September 2021, and submitted on 4
				October 2021.
			</p>
			<p>
				The game was inspired by (and much of the code ported from)
				<a
					href="https://www.tomscott.com/usvsth3m/maths/"
					target="_blank"
					rel="noopener noreferrer">
					You Can't Do Simple Maths Under Pressure
				</a>
				by UsVsTh3m.
			</p>
			<p>
				Crazy Calculations is playable at
				<a
					href="https://www.roblox.com/games/7557207546/"
					target="_blank"
					rel="noopener noreferrer">
					roblox.com/games/7557207546
				</a>
				.
			</p>
			<p>
				<img
					src="crazycalc.png"
					alt="Screenshot of the game"
					width="300" />
			</p>
		</div>

		<div>
			<h2>PF Range Calculator</h2>

			<p>
				This is a small web tool designed to calculate how far weapons
				in the game Phantom Forces by StyLiS Studios deal a certain
				amount of damage to.
				<br />
				You can input some values provided by the in-game statistics, and
				the tool will calculate how far it will deal that damage to.
			</p>
			<p>
				This was created by me in a few days, after I realised how long
				it would take to calculate all the range values manually.
				<br />
				I remade the site a few months later, being my first time using Svelte.
				<br />
				You can find the calculator at
				<a
					href="https://pfcalc.heliodex.cf/"
					target="_blank"
					rel="noopener noreferrer">
					pfcalc.heliodex.cf
				</a>
				.
				<br />
				The older version can be seen at
				<a
					href="https://oldpfcalc.heliodex.cf/"
					target="_blank"
					rel="noopener noreferrer">
					oldpfcalc.heliodex.cf
				</a>
				.
			</p>
			<p>
				<img
					src="pfcalc.png"
					alt="Screenshot of the calculator page"
					width="300" />
			</p>
		</div>
	</div>

	<!-- Right column -->
	<div>
		<div>
			<h2>Typing Tester</h2>

			<p>
				Typing Tester is a game that helps to improve your typing
				accuracy, stamina, and speed. It was released on 25 December
				2022 after sixteen months of feature creep.
				<br />
				Type words to earn experience and typing tokens, level up and earn
				ranks, and use typing tokens to buy new wordlists!
			</p>
			<p>
				Typing tester uses several frameworks, including
				<a
					href="https://elttob.uk/Fusion/"
					target="_blank"
					rel="noopener noreferrer">
					Fusion
				</a>
				,
				<a
					href="https://sleitnick.github.io/Knit"
					target="_blank"
					rel="noopener noreferrer">
					Knit
				</a>
				, and
				<a
					href="https://madstudioroblox.github.io/ProfileService/"
					target="_blank"
					rel="noopener noreferrer">
					ProfileService
				</a>
				.
			</p>
			<p>
				The game is playable at
				<a
					href="https://www.roblox.com/games/10061236122/"
					target="_blank"
					rel="noopener noreferrer">
					roblox.com/games/10061236122
				</a>
				.
				<img
					src="typingtester.png"
					alt="The thumbnail for Typing Tester"
					class="wide mt-4" />
			</p>
		</div>

		<div>
			<h2>Heliodex.cf</h2>

			<p>
				The website you're browsing right now!
				<br />
				The current version of the website is a single-page app using
				<a
					href="https://svelte.dev/"
					target="_blank"
					rel="noopener noreferrer">
					Svelte
				</a>
				.
			</p>
			<p>
				The website's source code can be found at
				<a
					href="https://github.com/Heliodex/Heliodex.cf"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/Heliodex.cf
				</a>
				.
				<br />
				Older versions of the website can be seen at
				<a
					href="https://old.heliodex.cf/"
					target="_blank"
					rel="noopener noreferrer">
					old.heliodex.cf
				</a>
				.
				<iframe
					title="This website"
					src="/"
					width="100%"
					height="500px"
					frameborder="0"
					class="mt-4" />
			</p>
		</div>

		<div>
			<h2>Python Calculator Collection</h2>

			<p>
				This is a collection of calculator programs I wrote on my
				calculator's python interpreter during maths classes.
				<br />
				There are programs for calculating interest over time, areas or volumes
				of polytopes, angles of arcs of circles, and much more.
			</p>
			<p>
				I cannot guarantee the accuracy of these programs, but while
				they
				<em>should</em>
				be decently accurate, please submit an issue to the repo if you find
				an error in any of the programs.
				<br />
				They are available at
				<a
					href="https://github.com/Heliodex/PythonCalculators/"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/PythonCalculators
				</a>
				.
				<img
					src="pythoncollection.png"
					alt="A list of several of the Python programs"
					class="wide mt-4" />
			</p>
		</div>

		<div>
			<h2>HybridOS</h2>

			<p>
				HybridOS was an open-source Python3 'meta-program'.
				<br />
				I avoid calling it an operating system, because it's not an operating
				system, it was originally written in Python.
			</p>
			<p>
				HybridOS was worked on from mid- to late-2019 as a fusion of two
				similar programs, BlakBird by me, and Vortex by Taskmanager. (
				<a
					href="https://taski.ml/"
					target="_blank"
					rel="noopener noreferrer">
					taski.ml
				</a>
				)
				<br />
				The program has a total line count of more than 1,100, and had features
				such as a multi-user signup and login system, a number of games and
				useful applications, plenty of colourful ASCII art, and a root admin
				system.
				<br />
				HybridOS was ported to many different languages, including C, C++,
				Java, C# (twice), and Batch. Even linux distros were made as well!
			</p>
			<p>
				HybridOS was largely abandoned after the beginning of 2020, and
				the code for the first Python version has been released on my
				Github page.
				<br />
				<a
					href="https://github.com/Heliodex/HybridOS/"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/HybridOS
				</a>
				<br />
				<a
					href="https://www.youtube.com/watch?v=aDnko4d1wdk/"
					target="_blank"
					rel="noopener noreferrer">
					Something big may be coming soon, though...
				</a>
				<img
					src="hylogos.png"
					alt="6 different HybridOS Logos throughout the versions"
					width={300}
					class="mt-4" />
			</p>
		</div>
	</div>
</div>

<style lang="stylus">
	main div div div
		padding 1.5rem
		margin 0 0 3rem 0
		border-radius 1rem

		background #0c0b0a
		border 1px solid #fff1

		+lightTheme()
			background white
			border 1px solid #0003

	h2
		text-align center
		margin-top 0

	iframe
	img
		border-radius 1rem
	img
		width 40%
	.wide
		width 75%
</style>
