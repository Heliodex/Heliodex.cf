---
{
	"title": "Heliodex project update – January 2025",
	"summary": "irst 2025 monthly Heliodex project update",
	"created": "2025-02-13 17:38 GMT",
	"updated": "2025-02-13 17:38 GMT",
	"tags": ["monthlyupdate"]
}
---

Hello again! Your monthly update is here once again, with the usual side of assorted sections of rambling.

## [litecode](https://github.com/Heliodex/litecode)

Some bug fixes and a better external API have been added, alongside four string library functions I was hesitant to implement: find, match, gmatch, and gsub. Pattern matching was, as I had suspected, a pain in the ass to get working. What next, maybe metatable support? Eh, perhaps if they actually turn out to be useful someday.

Pretty much all standard library functions apart from the *really naughty ones* have been implemented now, so I'll call it ready for further battle-testing as part of a larger-scale system. If any bugs crop up that I haven't caught yet, they'll probably be really insane time-sink ones.

At some point in the far future I'd like to make some tools for litecode to supersede [melt](https://github.com/Heliodex/melt) too, espcially if I can make use of Luau's `luau-ast`.

## [nocte](https://github.com/Heliodex/nocte)

If you can even remember what this project is, of course. After careful deliberation between whether to go with Lune or Zune for nocte's runtime, I have of course decided to build a custom runtime for it based on litecode.

This at least shows it's possible to send and accept HTTP/Websocket connections through litecode, and easily map over any functions that are available in the Go standard library but are unavailable in litecode's, without having to use the traditional (& weird) push/pop stack-based API.

---

I did some [strange blockchain experiments](https://github.com/Heliodex/neo) with Ethereum and Neo this month, though they didn't amount to much. At least I can finally call myself a web3 developer now.

Sometime later this month I'll take another crack at setting up a lightning wallet & node so I can accept payments and donations more easily, I promise. I might also try setting up my domain as a remote import path for my Go projects, so perhaps one could import "go.heliodex.cf/litecode" or something.

Until next time folks, and enjoy your Valentine's day.
