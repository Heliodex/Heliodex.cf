---
{
	"title": "Heliodex project update – July 2023",
	"summary": "",
	"created_at": "2023-08-04 05:14 GMT+1",
	"published_at": "2023-08-04 05:14 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Almost forgot about this one! Here's the monthly project update again, I have several updates to existing projects and a new announcement.

## [Mercury](https://banland.xyz/)

Several updates have been made to Mercury's website. Error pages are improved, the design of the landing page has been updated, and we moved from Sass to Stylus for styling, which allows multiline statements with a cleaner indented syntax. A couple of client bugs have been fixed as well.

Navigation for the site has been improved, with a much simpler bottom navigation bar for smaller screens. This allows us to get rid of the cumbersome hamburger menu, and alongside it, a significant amount of bloat from Bootstrap's CSS and JS. The top navbar has also been improved on larger screens.

Asset thumbnails/icons are now visible on their respective pages, and we're continuing work on the catalog/avatar shop/marketplace. This is probably the last major step for the website before we move from a closed beta into a public testing release.

## [Elemental](https://github.com/heliodex/elemental/)

Few updates to this project have been made in this month, as I've been questioning which architecture is best for the project too much, particularly authentication/authorisation and the database. EdgeDB has a nice web interface but coming from Prisma, its Typescript client is a step down in experience and usability (though almost nothing is as good experience as Prisma, especially since v5) and the benefits of EdgeQL's nice syntax aren't usable.

ORMs are popping up for other bleeding-edge databases such as SurrealDB now too though. If I choose anything exotic I know I'll have to write something custom for auth, but having two databases is a bit of a pain (as I've learned from Mercury).

## [Revival Archive](https://archive.banland.xyz/)

The Revival Archive is a new, community-driven site for keeping track of both active and defunct nostalgic-style and newer-style brickbuilding servers. It hosts blog posts and information about Revivals, and will soon be introducing reviews and ratings for them too. The project will be an extension of the [Revival Archive Discord server](https://discord.gg/zfC3VH2WBa/).

It's a simple static Sveltekit site superbly served by Netlify. Contributions to posts and reviews are welcome, and the site is open source [on Github](https://github.com/tp-link-extender/revival-archive/).

---

I hope to work more on Elemental over the next few months, and hopefully get Mercury into a public testing state or release phase.

Also, I'm on Nostr now, as I believe social media has become a bit of a pain and federated alternatives don't fit well either. You can find me at NIP-05 [heliodex.cf](https://heliodex.cf/.well-known/nostr.json). I post to most popular relays, but if you don't like the community and culture on most of them, I run my own relay at [nostr.heliodex.cf](https://nostr.heliodex.cf/) which anyone can use. Filter it for notes by me, and at that point it's just RSS but better.
