---
{
	"title": "Heliodex project update – August 2023",
	"summary": "",
	"created_at": "2023-09-03 00:26 GMT+1",
	"published_at": "2023-09-03 00:26 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Now entering Autumn, here's the updates to the projects I've worked on over the past month.

## [Mercury](https://banland.xyz/)

Mercury's site has had some generic fixes. You know, fixing styling issues, optimisations, reducing bundle size, that sort of thing. What's more interesting is the updates to the client.

As Mercury uses a 11 or 12 December 2013 build of the client, lack of many many features, improvements, and documentation results in a degraded development experience compared to modern Lua and Luau. This is the main reason why similar projects that use newer clients usually have more original content created for them, and why older clients are often filled with copies of games from their era.

There may be a way to solve this. Using modern development tooling, development is made far easier and more enjoyable, spurring creativity. We've ported the 2013 corescripts from [Yuescript](https://yuescript.org/) to Luau, which adds helpful information for types, warnings, and errors. Transformers such as [darklua](https://darklua.com/) are crucial for allowing code in Luau and other languages to work in Mercury.

Modern tooling can also be ported or replicated to older clients, like [Fusion](https://elttob.uk/Fusion/0.3/), which is now available in Mercury via `LoadLibrary "RbxFusion"`, with some features modified or removed to work on the older environment. Due to TweenService not existing until 2017, it's currently the only way to get good-looking animations on Mercury. We're planning to work on porting more modules for networking, datastores, UI, and more.

We're also working on other methods such as DLL hooking, which lets us unlock features that aren't normally available. By using this, services like HttpService could be enabled, which at the moment would be the only way to reliably store data or communicate with the outside world. We're working on a plugin called Mercury Sync, that synchronises scripts in a place with a local folder, possibly allowing build steps in the future too.

## [Heliodex.cf](https://heliodex.cf/)

My website has been revamped for version 3, and now works as a static SvelteKit multi-page site rather than a Svelte single-page app. The design has been updated (inspired by the [Revival Archive](https://archive.banland.xyz/) site), the Projects and Contact pages has been updated, and I might finally get around to adding something to the About page.

---

It's been one of those months where I started a lot of projects, but didn't finish many. There are a few things that I'm not ready to mention yet or are still in the planning stages, though I'll be able to talk about if I go through with them. I also forgot to mention the updates I made to [UpmanshipData](https://github.com/Heliodex/UpmanshipData/) last month, so I'll update the previous post in a bit.
