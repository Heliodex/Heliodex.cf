---
{
	"title": "Heliodex project update – April 2024",
	"summary": "update 4 for 2024 for Heliodex projects in April",
	"created_at": "2024-05-14 05:09 GMT+1",
	"published_at": "2024-05-14 05:09 GMT+1",
	"tags": ["monthlyupdate"]
}
---

I ended up writing this update, forgetting to post it, and then losing it. That's my excuse, anyway welcome back.

## [Mercury](https://mercury2.com)

The domain migration (for the site, at least) is complete, and the site is now hosted on [mercury2.com](https://mercury2.com). Subdomains should be working as expected and redirect to their new locations (apart from [status.banland.xyz](https://status.banland.xyz), for some reason).

Other than that, little has changed. Mercury will remain on hiatus for the next two weeks, and the client will be re-released soon after.

## [nocte](https://github.com/Heliodex/nocte)

Brand new project! As I'm writing this, the repo is basically empty and with no information. It'll be a basic proof-of-concept nostr relay written in Luau. Due to the nature of the Luau ecosystem, it'll have very few external dependencies, which means I'll have to write a lot of code for low-level concepts myself. This is looking to be a bit of a challenge, though I'm making some progress on the first hurdle &ndash; a tiny piece of the secp256k1 signing algorithm.

I'm only planning to implement the bare minimum [NIP-01](https://github.com/nostr-protocol/nips/blob/master/01.md) to start with, and then I'll see where I can go from there, as I said about being a proof-of-concept and all.

---

I've been trying out a number of desktop UI systems and libraries to revive and old project with (including [F#](https://github.com/Heliodex/F-sharp-testing), of which I tried out several UI libraries for).

Overall, it's clear I'll need more experience in this area before I can effectively work in the desktop UI space. For now I'll be going defeatedly back to [Wails](https://wails.io), though it is ideal since I'll also be writing the backend in Go.
