---
{
	"title": "Heliodex project update – April 2025",
	"summary": "Monthly update for Heliodex's projects, April 2025",
	"created_at": "2025-05-10 05:19 GMT+1",
	"published_at": "2025-05-10 05:19 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Welcome, again, to another monthly update. This one's right in the middle of my exam season! How convenient.

## [Mercury Core](https://github.com/tp-link-extender/MercuryCore)

Mercury Core is back to life now, after a few months of inactivity. The codebase has been given some much needed TLC & dedusting and I'm working on improving many of its parts &ndash; at the moment the 'communication' branch contains a rewrite of the forum, status updates, and asset comments into a single system, as well as improvements for likes/dislikes.

The database schema has also been significantly improved, the auth system has been rewritten without the need for Lucia v3 (thank you lucia!), all components have been migrated to use Svelte 5 syntax and features, fixes have been applied to the economy service, and many miscellaneous formatting and styling fixes have been made, as usual.

The reason this work is being done is because the Mercury Core team is also working on another project. I can't reveal much about it yet (mainly because I also don't have many details at the moment), but it will have a fairly unique and interesting twist to it compared to anything else we've done before.

## [Coputer](https://github.com/Heliodex/coputer)

Coputer now has an icon/logo! It's a cute little SVG flower. Moving on.

I spent most of the month messing around with optimising the Litecode VM instead of working on the communication system. Whatever, there were some bugs in the VM I found and fixed anyway, and it has a few more important tests now. The VM types have been extracted into new types and internal/types packages, allowing for them to be used more easily without having to import the entire VM package.  
Some of the VM optimisations include use of unsafe methods (in a safe way, of course, and with safe fallbacks), though since they mainly help with bytecode deserialisation I don't have a way of testing their improvement at the moment. Tables and Coroutines have received optimisations and fixes too.

The communication system implementation has been renamed to Wallflower, and a system for indexing programs via a name and public key is being worked on. I'd like to package Wallflower up into an executable soon so that it can be tested (perhaps with automated integration tests) alongside Litecode.

The gateway system should also probably be implemented soon so that we can visualise program results more easily. 

## [confetti](https://github.com/Heliodex/confetti)

My confetti-go repository was renamed to confetti, as it now also includes a Typescript implementation. This one passes most of the reference implementation's conformance suite, though I'm having trouble with the rest of them due to some not-sane unicode/UTF-8 character handling behaviour in Javascript.

The Go implementation has also been improved slightly to act better as a library, with tests for exported functions.

---

I hope I'll have more information to share about the new Mercury Core-based project within the next month or so. It's something you *might* want to be hyped for. Until next time!
