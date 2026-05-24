---
{
	"title": "Heliodex project update – December 2025",
	"summary": "Updates for Heliodex projects in December 2025",
	"created": "2026-01-12 23:09 GMT",
	"updated": "2026-01-12 23:09 GMT",
	"tags": ["monthlyupdate"]
}
---

Welcome, all, to 2026. I ended last year with an ostensibly more relaxed schedule of work, though I had plenty of real-life stuff to deal with over the winter holidays as well. Here's a bit of what I was able to get done over the past month.

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

Mercury's sprint of speedy development seems to have ended. We're back to normal "development pace" of various bug fixes only when enough people clamour for them.

Since last update we've hosted 2 more Mercury News sessions, the 2nd of which I failed to attend. We didn't have particularly much to talk about anyway though. Some more giveaways have been held by taskmanager, presumably in order to generate hype for the project. A video trailer is also being worked on, which I'm not involved with.

The [catalogfixes](https://github.com/tp-link-extender/MercuryCore/tree/catalogfixes) branch was merged recently, including (slightly) improved pagination and improved loading with SvelteKit's experimental remote functions system. Afterwards, and an option to take assets offsale was added, allowing asset owners to prevent others from purchasing the asset.

The [design](https://github.com/tp-link-extender/MercuryCore/tree/design) branch now includes an unfinished document on the history of Mercury development, including some of its various predecessors.

Some technical difficulties were encountered and fixed, including a number of updates to attempt to fix variable reactivity in Svelte resulting in forum likes no longer updating correctly without a page refresh, and an inability to join places at all. The forum likes were updated to use remote functions as well, so the UI will update correctly when it receives a response from the server, rather than just assuming that the request to interact with the post was successful.

Soon, we would like to bring back the automation we had for deployments of Mercury 2, to allow for the website to be updated whenever a push is made to the main branch. This will also allow others to make updates available to all users without needing me to manually deploy them. This may mean we have to bring back the old [dev](https://github.com/tp-link-extender/MercuryCore/tree/dev) branch for testing before pushing to main, or maybe we should invert it and have a **prod** branch instead, and use **main** for development.  
It would also be nice to use my Azure API key to allow others to start and stop the VM without me having to log into the dashboard too, as this has caused the gameserver's uptime to drop to a pretty terrible level.

Hopefully I'll also be able to find time to respond to some of the open issues on the repository within the next month.

## [Sprig](https://github.com/Heliodex/sprig)

I made a small projectile simulation program in my custom Grips firmware. It's not bad, and like most of the other things I've made with Grips, it runs out of memory pretty quickly.

---

This update marks the end of [year 3 of Heliodex project updates](https://gist.github.com/Heliodex/7f306ee2142111ad4f2f2fb862006282). Thank you to all readers (of which I have no evidence there are or have ever been any...) for sticking around for this long. To everyone who did/didn't celebrate Christmas, Hogmanay, or Public Domain Day, I hope you had a good time. See you next month for the first update of 2026!
