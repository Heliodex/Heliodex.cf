---
{
	"title": "Heliodex project update – September 2024",
	"summary": "September* 2024 Heliodex projects update",
	"created_at": "2024-10-08 01:31 GMT+1",
	"published_at": "2024-11-11 06:49 GMT",
	"tags": ["monthlyupdate"]
}
---

Hello again. Here's another monthly update to show what I've been working on.

## [Sprig Shooter](https://sprig-git-fork-heliodex-main-gamer.vercel.app/gallery/Sprig_Shooter)

The [Heliodex/sprig](https://github.com/Heliodex/sprig) repository includes a set of tools and the Sprig Shooter game for the [Hack Club Sprig](https://sprig.hackclub.com) game console. While the engine was designed to work with tile-based games, Sprig Shooter is a bitmap-based arcade-style game. Shoot enemies and avoid crashing into them to gain score, and the game gets harder as you progress.

The limited capabilities of the Sprig was a fun challenge to work around, and making bitmap graphics and music alongside custom engine behaviour and collision detection was a great learning experience. I've applied to get my hands on the real hardware, and I can't wait to see how the game runs on it.

## [nostaking](https://github.com/Heliodex/nostaking)

For notetaking in general, my weapon of choice over the past few years has been [MindMup](https://www.mindmup.com), chiefly with their top-down hierarchical view, short atomic descriptions, and *huge* maps (~3000 nodes). However I've always had some gripes with its performance, UI, and display density, so I've been working on a custom notetaking tool.

A MindMup-like tree view ended up being difficult to write, so I'm going for a column-based layout instead, which may make parents/children of nodes difficult to parse, but provides a much denser information view. The project was named nostaking because I was planning to store notes on Nostr, though for the time being it'll be local-first.

---

A number of other features have been requested for Mercury Core, so I'll likely work on those next. I'm also considering porting [Nocte](https://github.com/Heliodex/nocte) to work with the [Zune](https://scythe-technology.github.io/zune-docs/) runtime, but initial tests show that some features are still more stable in Lune.
