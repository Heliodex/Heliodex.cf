---
{
	"title": "Heliodex project update – November 2025",
	"summary": "November 2025 Heliodex project update",
	"created_at": "2025-12-12 20:17 GMT",
	"published_at": "2025-12-12 20:17 GMT",
	"tags": ["monthlyupdate"]
}
---

It is the season... of Mercury, of course. I'm recovering from the mental whiplash of Mercury 3 shifting into higher development velocity. Here's some of the things that have been happening with my projects recently.

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

On 9 December 2025, we hosted the first session of Mercury News in a while, alongside a giveaway 400 Robux for everyone who attended. It was intended to last around 45 minutes, and actually did last that long, despite my rambling on about the prospects of the upcoming new Economy service.  
Mercury 3 now has [over 50](https://mercs.dev/statistics) registered beta testers on site, making it the same size as Mercury 2 was in [March 2023](https://gist.github.com/Heliodex/bbb69f3aa30a283eccd0601a8372f0df#mercury). We've been irregularly terminating some of the inactive accounts, though this user count number includes those which have been moderated.

On the [ledgertests](https://github.com/tp-link-extender/MercuryCore/tree/ledgertests) branch, I've been working on a rewritten (AGAIN, because it's fun) version of the Economy service. This was mainly prompted by the unintuitive fee & stipend system and the strange NaN currency errors. The previous economy service had some problems with controlling things that didn't need to be controlled in an effort to keep the economy stable, resulting in over-correction and users being confused by wildly varying fees and stipends. The new economy service currently uses fixed fees and stipends to hopefully reduce some of this confusion.  
The updated ledger also now only consists of transfers (each transfer with 2 sends, each send with an owner and a set of items) rather than splitting them into mints, burns, and transactions. Mints and burns are handled by transferring to and from the Nil owner. The difference between asset owners (as in purchasers) and asset owners (as in creators) is now much more clear with the new asset source system, where all assets are owned by their respective source, and purchasing an asset from a source sends the transaction items (usually just currency) to the source owner. It deliberately doesn't store the current price of the assets, or any other metadata, as this was a pain point that occurred with the previous ledger design.

At the moment, the updated Economy service works pretty solidly in tests, though doesn't yet have a networked API or integration with the Site. Next steps are to finish up some abstractions, such as functions for buying and trading assets, and then to link it up with the rest of Mercury Core. Functions for things like checking for ownership in the main database will be replaced with calls to find these from the ledger instead. The new ledger system is flexible enough to handle some things like groups owning assets, and crazy stuff like groups owning other groups or trading a limited asset for a place or something.

On the [catalogfixes](https://github.com/tp-link-extender/MercuryCore/tree/catalogfixes) branch, we finally have the fix available for the vile catalog pagination issue that I [planned to fix](https://github.com/tp-link-extender/MercuryCore/commit/ef06b73393f038da6f5de76ed2a11a94037c27dc#diff-6c3a6f751c6d26b7625cfb99b1a6ed8fad56cb9e819ff82a0b93c1bd75c589f3R5) approximately 7 months ago. At present, the catalog loads 20 assets at a time, and splits them across each category, instead of loading 20 assets per category. This meant an uneven number of assets per page, misleading page numbers, and sometimes errors where the page would show no assets available at all. The issue has been described as "so fucking bad" and "the cause of global warming", so I'm glad to have it fixed.  
The branch also uses SvelteKit's experimental [remote functions](https://svelte.dev/docs/kit/remote-functions) feature, which has been fun to play with. Initially, they seemed to fail when awaiting remote them while rendering, though this was fixed by upgrading our SvelteKit version (the Site was stuck on an old version due to the "Error -1" issue on some error pages, which seems to suddenly have resolved itself). Another problem I've run into is with error handling, as if a remote function runs is called on the clientside and it errors, it's easy to catch and resolve with a `<svelte:boundary>`, whereas if it's called on the serverside and errors it usually results in the fallback error page being displayed, which is a bad experience for users. Apparently this will be improved when SvelteKit 3 is released, so I can't wait for that.

On the [design](https://github.com/tp-link-extender/MercuryCore/tree/design) branch, there are some work-in-progress documents detailing how some architecture decisions were made for Mercury. For starters, this includes a document on the design of the Economy service, and another on the reasoning behind why string/numeric IDs were chosen for certain categories of entities. More documents will be added in the future, as these are important to justify why many decisions are made and to prevent future confusion or Chesterton's Fence-type arguments.

A number of issues were encountered with asset loading in the Client and Studio, for example with the often-used Stamper tool not working correctly, and InsertService loading empty models or producing strange errors. These were tracked down to a problem with the BaseUrl not containing a scheme, as well as the ScriptState returned from the Site's corresponding API endpoint not being correct.  
In the Client and Studio, we'd like to work on more things being unlocked by the Mariner DLL hook, most notably HttpService, for which it not working is a major pain point for developers and a blocker for lots of Mercury Studio plugins. Mariner will be made open source whenever Taskmanager thinks it's ready.

The Orbiter now handles dual-stack networking correctly, with 2 IP address fields in the .env file (eh, it works) so that the occasional strange IPv4 request doesn't cause the server to fail. We also have an improved method of checking whether the server has started yet, by trying to start a UDP network server on the same port and seeing if it fails. There's a [section on the docs](https://docs.mercs.dev/services/orbiter/#management) regarding the alternative management methods, as well as why we chose this one. It's now also possible for a server owner (or moderator/administrator) to close a running server manually.

The Mercury 3 [status page](https://github.com/tp-link-extender/status) is back up at [status.mercs.dev](https://status.mercs.dev), using the same [Upptime](https://upptime.js.org) system as was used for the Mercury 2 status page. This also lets me know when the Orbiter goes down due to VM deallocation (we're using free Azure credits with the spot discount, so we've sacrificed uptime for cost and VM performance), as I check GitHub a whole lot more often than I check the Mercury Discord server for someone notifying me about it.

Next up for the site, we've been pondering the idea of direct messages (as long as people understand they're not *actually* private), or perhaps a new logo or site design to replace the holdovers from Mercury 2.

The basic roadmap we have at the moment for Mercury 3 is that we aim for a release candidate in Q1 of 2026, a private server release in Q2, and a public release later on in Q2. No promises though, you know what we're like with deadlines. After that we might work on the video tutorial that we promised would come out by around Q3 2024, or release the 2021 Tadah Christmas event (turned 2022 Easter event) that never happened.

## [Sprig](https://github.com/Heliodex/sprig)

I wrote a little [n-body problem simulation](https://github.com/Heliodex/sprig/releases/tag/nbp) program on the Sprig. Yeah, I'm doing all of my [Accelerate](https://accelerate.hackclub.com) submissions on the Sprig using my own firmware ("Grips", it's an anagram of Sprig if you didn't see it). The memory restrictions have been fun I guess.

---

Attempts to get the Mercury Launcher working correctly on Linux have so far been unsuccessful, mainly due to the extreme difficulty of registering a URI scheme/protocol handler correctly and having it open correctly from the site in a web browser. Testing has shown that unlike the Studio, the Client doesn't actually start correctly on Linux anyway, so whatever.

I could have split the Mercury section up into bits about the Gameservers, Orbiter, and 2013 scripts. At the moment, we have Mercury Core, and we have a number of other related tools in the [tp-link-extender](https://github.com/tp-link-extender) organisation, as well as a number of other tools under my own account. This means that outside of the main repo there isn't really a clear line for what is and isn't part of Mercury Core. Perhaps a different name for the wider array of tools ("Mercury Suite"?) would be useful or appropriate.

And yeah, despite my promises it's only really been Mercury I've worked on this month. There's probably some reason I have for not wanting to deal with Mercury's Site as much, and therefore more motivation to split things off into external services (kind of Coputer-style, but less fragmented), which are also easier to test on their own. Maybe it's the degraded development experience? The number of editor tools needed to work on the Site often means strange errors and constant editor reloading. I did say previously that I'd like to improve that, I just haven't found out how.

I don't know how long these updates are supposed to be, though this one seems pretty long despite the small number of distinct projects. Anyway, I hope you all have a great rest of your year. See you in 2026!
