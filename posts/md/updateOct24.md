---
{
	"title": "Heliodex project update – October 2024",
	"summary": "actual October 2024 update",
	"created": "2024-11-13 00:13 GMT",
	"updated": "2024-11-13 00:13 GMT",
	"tags": ["monthlyupdate"]
}
---

Eh. Welcome back, fellow monthly update viewer! Here's the October one.

## [litecode](https://github.com/Heliodex/litecode)

litecode is a bytecode interpreter for Luau, modelled after [Fiu](https://github.com/rce-incorporated/Fiu). It's semi-functional at the moment, though handles a lot of stuff I've thrown at it. Building it ended up being a huge ~~pain~~ learning experience (even though it was still *way* easier than attempting to embed Luau itself).

Implementing this has given me loads of insight into how Luau works, and interest about what I can use it for as well. It's also given me some crazy ideas like "hey, what if metatables were bad?" and "what if I made tables index starting at 0?" and "what if I made if-conditions only work with booleans?" and so on. I'll see if I can keep those out of my head or if I'll power trip and let them stay there.

This is supposed to be part of a larger project, but I'm unsure of what that is at the moment. Next step will be to implement portions of the standard library, because an interpreter like this isn't much use if there's no functions to call.

## [Heliodex.cf](https://heliodex.cf)

My website now uses a new and improved font for headers! I call it Dex Display, and it will probably replace the venerable Heliodex (formerly 2berSans) (formerly UberSans) font, which will be over 5 years old now, in the near future. I'll begin to use it for all of my branding in the coming weeks.

I would have liked to make it variable-weight, but that ended up being too difficult so it'll just be one weight for now. I'm just glad it finally has a slightly more decent weight, much better curves, and actual kerning now, because all the kerning work I did in the previous font never ended up exporting properly.

---

The number of commits I've made in the last month is drying up a little, mainly due to the difficulty of implementing a lot of the features I've wanted to add. Maybe it'll go back to normal soon, or maybe it'll be the end of the big streak I had since the beginning of last year. Who knows? Ha, leaving you on a cliffhanger this time. Cya
