---
{
	"title": "Heliodex project update – June 2023",
	"summary": "update for June on Heliodex projects",
	"created_at": "2023-07-02 08:12 GMT+1",
	"published_at": "2023-07-02 08:12 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Welcome back! Summer has begun, and I'll be able to work on projects more often over the coming weeks. Here's a summary of what's happened in June:

## [Mercury](https://banland.xyz/)

Improvements to the asset system have been added, and we're working on a more cohesive moderation system for admins to allow users to upload their own assets to the website.

As always, many optimisations have been added to parts of the client and website. I and many other of the developers will be much more active in the near future, so expect more updates soon!

## [Elemental](https://github.com/heliodex/elemental/)

I have begun remaking the original UI from Elemental Android, and have started work on a basic backend. I'm looking at several database options, especially [EdgeDB](https://edgedb.com/).

I've also added [tRPC](https://trpc.io/) to communicate between backend and frontend (both in TypeScript), and it works brilliantly. The backend will be run with [Bun](https://bun.sh/), though EdgeDB's client doesn't seem to work correctly with it.

---

I managed to keep a Github contribution streak of 125 days from February 17 until June 21! Over the next several weeks we'll continue work on Mercury, with a goal of releasing it to the public sometime soon. Stay tuned!
