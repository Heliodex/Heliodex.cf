<script lang="ts">
	import { fly } from "svelte/transition"
	import Head from "$lib/components/Head.svelte"

	const links = [
		[
			"Github",
			"@Heliodex",
			"https://github.com/Heliodex/",
			"github.com/Heliodex",
		],
		[
			"Youtube",
			"@lwinklly",
			"https://youtube.com/@lwinklly/",
			"youtube.com/@lwinklly",
		],
		[
			"Reddit",
			"u/Heliodex",
			"https://reddit.com/user/Heliodex/",
			"reddit.com/u/Heliodex",
		],
		[
			"Developer Forum",
			"@Lewin4",
			"https://devforum.roblox.com/u/lewin4/summary/",
			"devforum.roblox.com/u/lewin4",
		],
		[
			"Roblox",
			"@Lewin4",
			"https://roblox.com/users/77663253/profile/",
			"roblox.com/users/77663253/profile",
		],
		[
			"StackOverflow",
			"Heliodex",
			"https://stackoverflow.com/users/12576382/",
			"stackoverflow.com/users/12576382",
		],
		[
			"Guilded",
			"u/Heliodex",
			"https://guilded.gg/u/Heliodex/",
			"guilded.gg/u/Heliodex",
		],
		[
			"Discord",
			"@Heliodex",
			"https://discord.com/users/290622468547411968/",
			"discord.com/users/290622468547411968",
		],
		["Telegram", "@Heliodex", "https://t.me/heliodex/", "t.me/heliodex"],
		[
			"Nostr",
			"Heliodex.cf",
			"/.well-known/nostr.json",
			"npub1lllllll9xdgqvp5l3drml7kwrre9u5ma6je7ey8r0578dfqq8l8qrjujua",
		],
		["Email", "Heli@odex.cf", "mailto:heli@odex.cf", "heli@odex.cf"],
	]
	const deadlinks = [
		[
			"X formerly Twitter",
			"@lwinklly",
			"https://twitter.com/lwinklly/",
			"twitter.com/lwinklly",
		],
		[
			"Bluesky",
			"npub1lllllll9xdgqvp5l3drml7kwrre9u5ma6je7ey8r0578dfqq8l8qrjujua.nostr.heliodex.cf",
			"https://bsky.app/profile/npub1lllllll9xdgqvp5l3drml7kwrre9u5ma6je7ey8r0578dfqq8l8qrjujua.nostr.heliodex.cf",
			"bsky.app/profile/npub1lllllll9xdgqvp5l3drml7kwrre9u5ma6je7ey8r0578dfqq8l8qrjujua.nostr.heliodex.cf",
		],
		[
			"Instagram",
			"@heliodex",
			"https://www.instagram.com/heliodex/",
			"instagram.com/heliodex",
		],
	]
</script>

<Head title="Contact" />

<h1>Contact</h1>
<p>
	Here's a list of a few of the websites/media that you are able to contact me
	via.
</p>
<table
	in:fly={{ y: 40 }}
	class="bg-#0008 @light:bg-#fffb backdrop-blur-4px rounded-4 border-#fff1 @light:border-#0003 w-full border border-solid p-4">
	<tbody>
		{#each links as [name, user, href, link]}
			<tr>
				<td class="min-w-10rem max-w-10rem overflow-hidden">{name}</td>
				<td class="min-w-8rem max-w-8rem overflow-hidden">{user}</td>
				<td class="min-w-44rem max-w-44rem overflow-hidden">
					<a {href} target="_blank" rel="noopener noreferrer">
						{link}
					</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
<p>
	For reference, here are some media that I have abandoned or no longer use.
	<br />
	I'm very unlikely to respond to queries through these contacts.
</p>
<table
	in:fly={{ y: 40 }}
	class="bg-#0008 @light:bg-#fffb backdrop-blur-4px rounded-4 border-#fff1 @light:border-#0003 w-full border border-solid p-4">
	<tbody>
		{#each deadlinks as [name, user, href, link]}
			<tr>
				<td class="min-w-10rem max-w-10rem overflow-hidden">{name}</td>
				<td class="min-w-8rem max-w-8rem overflow-hidden">{user}</td>
				<td class="min-w-44rem max-w-44rem overflow-hidden">
					<a {href} target="_blank" rel="noopener noreferrer">
						{link}
					</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	td {
		padding-right: 1rem;
	}

	@media screen and (max-width: 480px) {
		td {
			display: block;
		}
		tr {
			height: 5rem;
		}
	}
</style>
