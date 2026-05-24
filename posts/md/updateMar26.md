---
{
	"title": "Heliodex project update – March 2026",
	"summary": "March 2026 issue of the Heliodex project update",
	"created_at": "2026-04-06 21:18 GMT+1",
	"published_at": "2026-04-06 21:18 GMT+1",
	"tags": ["monthlyupdate"]
}
---

I return with another monthly update. Mostly with information on Mercury, as usual. Hope you're having a great easter if you celebrate that, or otherwise having a more relaxed holiday than I am if you have one at the moment. Here's what I was doing throughout March:

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

Mercury 3 has [105 user accounts](https://mercs.dev/statistics). As is tradition for the first day in April, we did a lovely CSS rewrite for the website, including plenty of new fonts, crazy animations, and rainbow colour scheme. I was only able to put in about an hour of work for this, so not as full on as the 2024 April Fools design & rebrand, but still fun nonetheless. It was of course reverted after a day. Some users requested that we bring it back as a website theme, though we already have that feature in [Custom CSS](https://mercs.dev/settings?tab=Styling) (funnily enough that page 500s for some reason, must fix...) I suppose.

Work is still going ahead on the [forms](https://github.com/tp-link-extender/MercuryCore/tree/forms) branch to fix and rewrite all of the forms on the site, since they currently don't work in development mode due to incompatibilites between 2 of our dependencies: [ArkType](https://arktype.io) and [Superforms](https://superforms.rocks). My goal is to replace Superforms, which has served us well for a long time, with a system built on SvelteKit's Remote Functions, which we have already been using for some site forms that don't require a lot of validation. We're still running into issues with this (mainly with validating file uploads) so we don't yet have a timeline for when this will be completed.

I wrote a [roadmap](https://github.com/tp-link-extender/MercuryCore/issues/448) as an issue on the Mercury Core repository, detailing which components need to be completed before the release of Mercury 3. This isn't final, and will absolutely change as development continues, though should still give a good idea of the project's general direction and priorities. The roadmap currently includes 2 database resets, 1 upon the release of the new Economy service, and 1 upon the full public release of Mercury 3. There might be more or fewer than this, though 2 are to be expected.

In the recent Mercury News, we confirmed that the plan for moving to the 2016 client will be executed, and that 2016 will be available alongside the 2013 client for at least until the migration is complete. This isn't yet on the aforementioned roadmap since I don't quite know where it fits in the larger scheme.

A few issues with Mercury have been discovered by our beta testers. 1 is that the [Launcher](http://github.com/tp-link-extender/MercuryLauncher) installs Mercury to the root user by default on Linux, and asks for permission to elevate on every launch unless running as root. This is the intended behaviour, as I didn't want to risk installing Mercury multiple times if it was installed for multiple users on the same machine, though this is unlikely and also not really a big problem. A [patch](https://github.com/tp-link-extender/MercuryLauncher/pull/5) was contributed to fix this, and was merged by Taskmanager. It hasn't yet been deployed as I haven't been able to test it myself yet, and I'll probably modify it a bit before deployment, then mark off what is now item 2 on our roadmap. Thank you Lanternoric for the contribution!

Another problem is the ability for a Studio instance serving a game to log the IP addresses of joining users. At the moment, we're investigating a fix using the DLL hook which should also prevent the issue on self-hosted servers. Obviously I don't think this is as much of a problem as other people think it is due to my belief that IP addresses aren't personally identifiable information, though it improves our reputation as a revival platform to have safeguards in place against vulnerabilities similar to this. The attack is carried out with a script similar to the following:

```lua
game.DescendantAdded:connect(function(e)
    if string.match(tostring(e), "%d+%.%d+%.%d+%.%d+") then
        print(e)
    end
end)
```

Note the lowercase `:connect()` because it's 2013, and the pattern match that only matches IPv4 addresses for the same reason. This was an issue up until [December 2016](https://devforum.roblox.com/t/script-that-gets-players-ip-addresses/30999/33?u=lewin4) assumedly due to Roblox forgetting to not add the relevant NetworkClient or whatever to the DataModel in a way that it's hidden from regularly-privileged scripts. This was fixed in the Orbiter by adding a custom UDP proxy system, marking off item 1 on the roadmap list as completed. However, recently I noticed a crash due to a panic caused by a race condition in concurrent map access (I had previously never observed this problem and yesterday found it both here and in [Litecode](https://github.com/Heliodex/coputer/tree/main/litecode), which was also running at the time), so that will need a fix soon too. Thank you Zanryth for the discovery and testing! Both Zanryth and Lanternoric have been awarded a new exclusive avatar item, the [Red Banded Top Hat](https://mercs.dev/catalog/494723861/Red-Banded-Top-Hat), for their efforts.

Another is the request hanging when requesting /api/avatar/{username}?wait when not currently waiting for a character rerender, which was fixed in [672a39e](https://github.com/tp-link-extender/MercuryCore/commit/672a39ebbcfb7b7243160fccf182ebedf53aa9cf). This also took down the whole site if enough requests were made simultaneously, in a kind of self-inflicted [Slowloris attack](https://en.wikipedia.org/wiki/Slowloris_(cyber_attack)). Thank you stan for the discovery and testing!

Finally, the runtime find-and-replace or other regular expression-based search and replace features used for interpolating values into served Loadscripts have the potential to be used for code injection if the input is not properly sanitised. This doesn't really have the full threat triangle (actor, model, & incentive) though still is worth fixing, so I'm working on a simple custom file format at [Heliodex/substitution](https://github.com/Heliodex/substitution) to allow for safer substitution of values. Thank you Kyle Wagness for the discovery and reporting!

Miscellaneous fixes to assets and other problems relating to TLS and BaseURL configuration have also been made, both in setup deployments and in Loadscripts & Corescripts. Mercury 3 still uses [www.mercs.dev](http://www.mercs.dev) as the URL for insecure requests, so trying to visit the website from this domain won't work for submitting any forms or similar and thus this domain isn't recommended for anything except for Client/Studio endpoints.

On the documentation at [docs.mercs.dev](https://docs.mercs.dev), we've added new setup guides for [RCCService](https://docs.mercs.dev/guides/rccsetup/) & the [Launcher](https://docs.mercs.dev/guides/launchersetup/), a guide for [installing the .NET SDK](https://docs.mercs.dev/install/dotnet/), new design pages on [use of TLS in the Client](https://docs.mercs.dev/design/client-tls/) & the [relationship between Mercury 3 and Mercury Core](https://docs.mercs.dev/design/mercury3/), and finally an architecture document on different [types of revival platforms](https://docs.mercs.dev/architecture/launchers/), mainly covering the difference between launchers and web-based platforms, though also identifying some other experiments in the space. Some more information has also been added on a variety of other pages.

Keep a lookout for the features currently on our roadmap! It's nice to have a clear plan for the next several months or year of development, since the only times we really had a plan as clear as this were the original plan documents for Mercury 3, the shutdown document ([The Future of Mercury 2](https://web.archive.org/web/20250331074009/https://mercury2.com/)), and the ancient [Mercury 2 development Trello board](https://trello.com/b/3n6vf9fv/mercury-2-development-roadmap).

## [Dex Display](https://github.com/Heliodex/Font)

Yes, this is the repository for my font, the same one used in my branding and on [heliodex.cf](https://heliodex.cf). For a while I've tried to use font editors, and was never able to learn or get used to them. Instead, I've written some code to generate a [UFO](https://unifiedfontobject.org) format from a set of SVG files, then convert this into OpenType and from there into pretty much any font format. It's most definitely hacky at the moment, with the SVG to UFO conversion in JS and the UFO to OpenType conversion in Python.

In addition, it doesn't actually work properly, with the final font having very noticeable display issues. This seems to be due to layers not properly working with each other, eg. being merged instead of cutting out the shape, or vice versa. Maybe this is because of the order of the points in each line or contour. Chirality? I'm not entirely sure since all of this is new to me. However if I do end up getting it working properly, it'll be a whole lot easier than manual importing into a font editor, though my implementation might cut me off from future features like variable weights if I want to add them in future.

I'm still drawing the glyphs for the font in Figma. Honestly I'd love if there was some AI-powered font tool that could improve or build upon my basic glyphs, though most of the ones I've found either focus on creating entirely new fonts or are cloud-based and don't offer a self-hosted solution. A while ago I attempted to switch to my favourite open-source alternative design application, [Penpot](https://penpot.app), though Penpot still is missing the ability to move SVG path points manually or edit their positions, which makes font glyph editing difficult. However, Penpot has definitely handled everything else I've tried it with quite well.

---

Some random file formatting and fixes, including updates for Go 1.26, were done for [Coputer](https://github.com/Heliodex/coputer), though nothing particularly worth talking about.

As far as I can tell, with the Mercury roadmap and a load of other things stacked up for me to do, the next few weeks or month is going to be pretty busy for me. Usually I don't feel like a month has really begun until I write one of these updates for the previous month, though it definitely feels like April has had quite a running start already. I suppose it's now time to get back to working. Thanks for reading, see you at the beginning of May for the April update!
