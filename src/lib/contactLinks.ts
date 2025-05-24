export const links = [
	[
		"Github",
		"@Heliodex",
		"https://github.com/Heliodex",
		"github.com/Heliodex",
	],
	[
		"Youtube",
		"@lwinklly",
		"https://youtube.com/@lwinklly",
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
		"https://roblox.com/users/77663253/profile",
		"roblox.com/users/77663253/profile",
	],
	[
		"StackOverflow",
		"Heliodex",
		"https://stackoverflow.com/users/12576382/heliodex",
		"stackoverflow.com/users/12576382",
	],
	[
		"Urbit",
		"~rinmex-ritlys",
		"https://rinmex-ritlys.heliodex.cf/~/login",
		"rinmex-ritlys.heliodex.cf",
	],
	[
		"Guilded",
		"u/Heliodex",
		"https://www.guilded.gg/u/Heliodex/",
		"guilded.gg/u/Heliodex",
	],
	[
		"Nostr",
		"Heliodex.cf",
		"nostr:npub1lllllll9xdgqvp5l3drml7kwrre9u5ma6je7ey8r0578dfqq8l8qrjujua",
		"npub1lllllll9xdgqvp5l3drml7kwrre9u5ma6je7ey8r0578dfqq8l8qrjujua",
	],
	["Email", "Heli@odex.cf", "mailto:heli@odex.cf", "heli@odex.cf"],
]

// convert to object with name as key and url as value
export const linksKeys = links
	.map(link => [link[0], link[2]])
	.reduce(
		(acc, [key, value]) => {
			acc[key] = value
			return acc
		},
		{} as { [_: string]: string }
	)
