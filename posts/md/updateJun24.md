---
{
	"title": "Heliodex project update – June 2024",
	"summary": "big June 2024 update for projects with Heliodex yeah",
	"created": "2024-07-12 05:34 GMT+1",
	"updated": "2024-07-12 05:34 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Can't put this one off any longer... you'll see. Here's the update for June, it'll be a long one this time.

## [Mercury](https://mercury2.com)

The Mercury 2 website has been replaced with a memorandum titled "The Future of Mercury 2". The short and not-sweet gist of it is that we ran into a whole host of effectively insurmountable technical issues regarding communication between the client and DLL hooks, and we didn't have the time, resources, experience, or incentive to solve them. Dare I say this is one of the "great filters" of any Revival project &ndash; and we've fallen to it.

We made the decision to close down the Mercury 2 website, services, and branding abruptly (as is taskmanager's forte), specifically to avoid the late-stage burnout and neglect that we've seen in other projects. Instead, we'll be using the time and resources we have left to rebuild and rescope the project by splitting it into multiple component parts. We're honing our focus on the eponymous "core" of the project: this being the site, client APIs, and communication with external services.

This system will, from now on, be known as **Mercury Core**.

## Mercury Core

Mercury Core is being developed as a leaner, meaner, community-driven revival web platform with excellent documentation and support. It will soon be made available to the public, and I want to make some sort of comprehensive video tutorial to go alongside its release.

For now, think of the setup process of Mercury Core as similar to WordPress: able to be installed with a simple setup process, heavily modified as needed through a wide range of customisation options, and open-source to allow it to be completely overhauled, extended, or improved by the community. It will remain the best supported portion of the Mercury 2 codebase, and will be hosted in the original Mercury 2 monorepo.  
Though Mercury Core only consists of between 1/3 and 1/2 of the Mercury 2 codebase. What's happening to the rest?

## [tp-link-extender/2013](https://github.com/tp-link-extender/2013)

2013 contains a set of refactored and rewritten December 2013-related scripts
and tools, as well as 200+ commits of history. This includes overhauled corescripts, improved utilities, better terrain plugins, render scripts (well, these are actually 2015), and a few ported external libraries. It's the largest portion of the Mercury 2 codebase, and is useful as a drop-in replacement for the stock December 2013 scripts.

## [tp-link-extender/bot](https://github.com/tp-link-extender/bot)

The bot is a Discord bot that was originally created to manage the Mercury 2 Discord server. It features registration, review, and verification of applications.

## [Heliodex/RCCService.go](https://gist.github.com/Heliodex/639fea9aa7808a7d9cf9c1ed4cfc4eff)

RCCService.go is a proxy that allows access between Mercury Core and a compatible XML-based RCCService (tested with 2015). It heavily simplifies the job tracking and communication processes, and also applies MSAA before sending the results back to Mercury Core.

## [Heliodex/Client deployer.go](https://gist.github.com/Heliodex/4d61155476ccd002f2e900d2f09ab461) <small>(previously already available)</small>

Client deployer.go is Mercury Setup Deployer version 3, and features multithreaded deployment of staged client updates to 2016 launchers/bootstrappers. Nothing much you haven't seen before.

## [Heliodex/applicationSettings.json](https://gist.github.com/Heliodex/06dcb03db5d4259dcd6a6eff6b5768fe)

applicationSettings.json includes the Mercury client, shared, and application settings, alongside a load of other irrelevant and redundant settings. It may be useful as a reference for client configuration.

## [Melt](https://github.com/Heliodex/melt)

If you remember, Melt also includes the Mercury Sync plugin, shown off to critical acclaim in various episodes of Mercury News. It also includes a wide variety of tools used for transforming Luau scripts into Mercury-compatible Lua files. However, a few complexities involved with upgrading Luau versions make it difficult to keep up with the latest changes, and after what happened with Mercury 2, it'll probably stay pretty dead unless some other miracle use case appears for it or if someone else openly finds it useful.

---

Mercury Core effectively started from a subset of Mercury 2. Everything not in that subset is listed as the 6 repositories above, and likely won't be maintained or developed nearly as much as Mercury Core.

Other than all that, nothing else much of interest happened since the last update. Cya next time.
