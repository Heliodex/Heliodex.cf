<script lang="ts">
	import { fly } from "svelte/transition"
	import Head from "$lib/components/Head.svelte"
</script>

<Head title="Projects" />

<div
	class="pt-18 sm:mx-a sm:w-155 md:w-190 lg:w-170 xl:w-230 2xl:w-280 pb-4 pe-2.5 ps-5 sm:pt-24 lg:pt-12">
	<h1>Projects</h1>
	<p>
		Here's a list of many of the projects that I've worked on and teams I've
		worked in, in no particular order.
	</p>
</div>

<div
	in:fly={{ y: 40 }}
	class="projects mx-6 sm:grid-cols-none md:grid md:grid-cols-2 lg:grid-cols-none xl:grid-cols-2">
	<!-- Left column -->
	<div class="pe-6">
		<div>
			<h2>Litecode</h2>

			<p>
				Litecode is a deterministic virtual machine, execution server,
				and library toolkit for <a
					href="https://luau.org"
					target="_blank"
					rel="noopener noreferrer">
					Luau.
				</a>
				It's useful as a server for remotely running Luau scripts or as a
				VM library to hook into and offer custom functionality, similarly
				to a runtime.
			</p>
			<p>
				Litecode is part of the Coputer project, a decentralised and
				collaborative network for Luau execution. It's available at
				<a
					href="https://github.com/Heliodex/coputer/tree/main/litecode"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/coputer/litecode.
				</a>
			</p>
			<p>
				<img src="litecode.svg" alt="Litecode logo" width="400" />
			</p>
		</div>

		<div>
			<h2>Mercury Core</h2>

			<p>
				Mercury Core is the ultimate community-driven secure, flexible,
				and stable foundation for the future of your MMO game creation
				platform, allowing for easy customisation or complete overhaul
				and possible integration with multiple clients and external
				services.
				<br />
				If you don’t know what any of those things are, Mercury Core is a
				build-your-own-Roblox.
			</p>
			<p>
				Built from the foundations of Mercury 2, Mercury Core is set up
				by cloning the repository. Check it out at
				<a
					href="https://github.com/tp-link-extender/MercuryCore"
					target="_blank"
					rel="noopener noreferrer">
					github.com/tp-link-extender/MercuryCore!
				</a>
			</p>
			<p>
				<img
					src="core.png"
					class="wide"
					alt="Mercury Core logo banner"
					width="400" />
			</p>
		</div>

		<div>
			<h2>Mercury</h2>

			<p>
				Mercury 2 is a project built to revive and recreate the
				experience of old versions of a popular MMO game. Similar to the
				previous version of Mercury, though with a completely rewritten
				website and backend, providing more stability and security, as
				well as a whole host of new features.
			</p>
			<p>
				Mercury 2 is the largest project I've worked on, and concluded
				in June 2024 with the announcement of its pivot and rebranding
				to Mercury Core. It was previously accessible at
				<a
					href="https://web.archive.org/web/20250314095908/https://mercury2.com/"
					target="_blank"
					rel="noopener noreferrer">
					mercury2.com.
				</a>
				<small>(archive link)</small>
			</p>
			<p>
				<img
					src="mercury.png"
					class="wide"
					alt="Screenshot of the Mercury landing page"
					width="400" />
			</p>
		</div>

		<div>
			<h2>eChat</h2>

			<p>
				eChat is a messaging application built as the successor to a
				previous project, DocSocial, and also designed to be used during
				school without getting caught. It was built with <a
					href="https://svelte.dev"
					target="_blank"
					rel="noopener noreferrer">
					Svelte
				</a>
				and
				<a
					href="https://centrifugal.dev"
					target="_blank"
					rel="noopener noreferrer">
					Centrifugo.
				</a>
			</p>
			<p>
				The app was made to work in a bookmarklet, and the popup would
				appear on the page upon clicking the bookmark.
			</p>
			<p>
				The original server will no longer be online, but both server
				and client have been made open source at
				<a
					href="https://github.com/Heliodex/eChat"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/eChat.
				</a>
				It was previously available at
				<a
					href="https://echat.cf"
					target="_blank"
					rel="noopener noreferrer">
					echat.cf.
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
				DocSocial was a simple messaging application. It was designed to
				appear like a Google document from a quick glance, or from a
				look at your browser history.
			</p>
			<p>
				DocSocial used
				<a
					href="https://scaledrone.com"
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
			</p>
			<p>
				DocSocial was previously available at <a
					href="https://docsocial.tk"
					target="_blank"
					rel="noopener noreferrer">
					docsocial.tk
				</a>
				and
				<a
					href="https://docsocial.cf"
					target="_blank"
					rel="noopener noreferrer">
					docsocial.cf.
				</a>
				Its (very disorganised and minified) code can be found at
				<a
					href="https://github.com/DocSocial/DocSocial"
					target="_blank"
					rel="noopener noreferrer">
					github.com/DocSocial/DocSocial.
				</a>
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
				It was programmed in about a week for a Computer Science class (the
				assignment was "make anything you want") where a video had to be
				recorded explaining the project.
				<br />
				The project was started on 23 September 2021, and submitted 11 days
				later.
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
					href="https://www.roblox.com/games/7557207546/Crazy-Calculations"
					target="_blank"
					rel="noopener noreferrer">
					roblox.com/games/7557207546.
				</a>
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
					href="https://pfcalc.heliodex.cf"
					target="_blank"
					rel="noopener noreferrer">
					pfcalc.heliodex.cf.
				</a>
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
			<h2>Sprig Shooter</h2>

			<p>
				Sprig shooter is a game for the <a
					href="https://sprig.hackclub.com/"
					target="_blank"
					rel="noopener noreferrer">
					Hack Club Sprig,
				</a>
				a small handheld game console. While the engine usually uses a tile-based
				approach, the game uses a raster-based renderer for more graphical
				freedom. Creating the game was a fun challenge, and the console was
				delivered to me shortly after it was complete.
			</p>
			<p>
				Shoot enemies while avoiding them to get the highest score, and
				the game steadily gets more difficult with higher scores. Sprig
				Shooter is playable at
				<a
					href="https://sprig.hackclub.com/gallery/Sprig_Shooter"
					target="_blank"
					rel="noopener noreferrer">
					sprig.hackclub.com/gallery/Sprig_Shooter.
				</a>
				<br />

				<img
					src="sprig shooter.png"
					alt="The play screen and thumbnail for Sprig Shooter"
					class="wide mt-4" />
			</p>
		</div>

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
					href="https://elttob.uk/Fusion/0.3/"
					target="_blank"
					rel="noopener noreferrer">
					Fusion,
				</a>

				<a
					href="https://sleitnick.github.io/Knit/"
					target="_blank"
					rel="noopener noreferrer">
					Knit,
				</a>
				and
				<a
					href="https://madstudioroblox.github.io/ProfileService/"
					target="_blank"
					rel="noopener noreferrer">
					ProfileService.
				</a>
			</p>
			<p>
				The game is playable at
				<a
					href="https://www.roblox.com/games/10061236122/Typing-Tester"
					target="_blank"
					rel="noopener noreferrer">
					roblox.com/games/10061236122.
				</a>
				<br />

				<img
					src="typingtester.png"
					alt="The thumbnail for Typing Tester"
					class="wide mt-4" />
			</p>
		</div>

		<div>
			<h2>Reviso</h2>

			<p>
				Reviso is a website that gives random SQA past paper questions
				for revision purposes, providing answers and marking schemes for
				each question. Levels and subjects can be chosen for targeted
				revision.
			</p>
			<p>
				It's inspired by other great revision sites, including the <a
					href="https://dynamicmaths.co.uk/QuestionBank/"
					target="_blank"
					rel="noopener noreferrer">
					Dynamic Maths Question Bank.
				</a>
			</p>
			<p>
				Reviso is accessible at

				<a
					href="https://reviso.netlify.app"
					target="_blank"
					rel="noopener noreferrer">
					reviso.netlify.app
				</a>
				or previously at
				<a
					href="https://reviso.ml"
					target="_blank"
					rel="noopener noreferrer">
					reviso.ml,
				</a>
				and the source code is visible at
				<a
					href="https://github.com/Heliodex/Reviso"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/Reviso.
				</a>
				The site doesn't have many questions or subjects at the moment, but
				more will be added in future.
				<br />

				<img
					src="reviso.png"
					alt="The Reviso website, showing N5 Chemistry 2022 paper 1, question 20, alongside a diagram for the question"
					class="wide mt-4" />
			</p>
		</div>

		<div>
			<h2>Heliodex.cf</h2>

			<p>
				The website you're browsing right now!
				<br />
				The current version of the website is a static site using
				<a
					href="https://svelte.dev"
					target="_blank"
					rel="noopener noreferrer">
					Svelte
				</a>
				and SvelteKit.
			</p>
			<p>
				The website's source code can be found at
				<a
					href="https://github.com/Heliodex/Heliodex.cf"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/Heliodex.cf.
				</a>
				<br />
				Older versions of the website can be seen at
				<a
					href="https://old.heliodex.cf"
					target="_blank"
					rel="noopener noreferrer">
					old.heliodex.cf.
				</a>
				<iframe
					title="This website"
					src="/"
					width="100%"
					height="500px"
					frameborder={0}
					class="mt-4">
				</iframe>
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
					href="https://github.com/Heliodex/PythonCalculators"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/PythonCalculators.
				</a>
				<br />
				<img
					src="pythoncollection.png"
					alt="A list of several of the Python programs"
					class="wide mt-4" />
			</p>
		</div>

		<div>
			<h2>HybridOS</h2>

			<p>
				HybridOS is a collection of experimental operating systems,
				written in a variety of languages and using many different
				methods.
			</p>
			<p>
				The first version (v2) of HybridOS was worked on throughout 2019
				as a fusion of 2 similar programs, BlakBird by me, and Vortex by
				Taskmanager. We had the desire to build an operating system <i>
					long
				</i>
				before developing the skills necessary to do so, but we tried anyway.
			</p>
			<p>
				HybridOS 2 totalled 1100 lines of Python, and had features such
				as a multi-user signup and login system, a number of games and
				useful applications, plenty of colourful ASCII art, and a root
				admin system.
				<br />
				As we developed more skills, HybridOS was ported to many different
				languages, including C, C++, Java, C#, and Batch. Linux distros were
				made as well, and basic bootloaders and kernels were built as our
				skills advanced.
			</p>
			<p>
				HybridOS 2 was largely abandoned after the beginning of 2020,
				and the code for this version can be found at
				<br />
				<a
					href="https://github.com/Heliodex/HybridOS"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/HybridOS.
				</a>
				A recreation in JS of this version, for our own nostalgia, is available
				at
				<a
					href="https://github.com/Heliodex/HybridJS"
					target="_blank"
					rel="noopener noreferrer">
					github.com/Heliodex/HybridJS.
				</a>
				<br />
				<a
					href="https://www.youtube.com/watch?v=aDnko4d1wdk/"
					target="_blank"
					rel="noopener noreferrer">
					Something big may be coming soon, though...
				</a>
				<br />
				<img
					src="hylogos.png"
					alt="6 different HybridOS Logos throughout the versions"
					width={300}
					class="mt-4" />
			</p>
		</div>
	</div>
</div>

<style>
	div div div {
		padding: 1.5rem;
		margin: 0 0 1.5rem 0;

		/* backdrop-filter: blur(3px); */ /* performance */

		background: rgba(0, 0, 0, 0.533);
		@media (prefers-color-scheme: light) {
			background: rgba(255, 255, 255, 0.733);
		}
	}

	h2 {
		text-align: center;
		margin-top: 0;
	}

	div div div,
	iframe,
	img {
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.067);
		@media (prefers-color-scheme: light) {
			border: 1px solid rgba(0, 0, 0, 0.2);
		}
	}
	img {
		width: 40%;
	}
	.wide {
		width: 75%;
	}
</style>
