---
{
	"title": "Heliodex project update – May 2025",
	"summary": "Project update for May 2025",
	"created": "2025-06-13 14:43 GMT+1",
	"updated": "2025-06-13 14:43 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Hello all, here's another monthly project update. The summer holidays have started, so I'm away at the moment, but I've still had lots of time to code some cool things.

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

The jokes, hoaxes, and memes have all turned out to be true. There will be a Mercury 3.

Mercury 3 will be hosted on the domain [xtcy.dev](https://xtcy.dev). We have a working DLL hook for the 2013 client & studio (same as previous Mercuries) and a Windows Server VPS for running Mercury Core, RCCService, and related services.

The communication system rewrite has been completed, and it's now easier to comment and vote on things, managed by one system instead of 3 or 4. Mercury Core has been deployed to the website, though similarly to early Mercury 2, it's rather unstable at the moment. We're planning to redo the site's design with a more minimalist aesthetic, as well as giving out registration keys soon.

We're also planning to backport most of our improvements into Mercury Core, including hopefully some improved client/launcher communication and RCCService improvements, such as upgrading the proxy to be version-agnostic.

The use of a DLL hook means that patching is no longer required, but complicates the already complicated setup, deployment, and launcher process. Because of this, we'll probably build a custom setup deployer and launcher in the coming weeks, perhaps based on [the one I wrote last year while learning F#](https://github.com/Heliodex/F-sharp-testing).

The "twist" for Mercury 3 is that we plan to announce the release date and the shutdown date at the same time &ndash; that is, the project will run for a preset period of time (I've jokingly called it a "disposable revival" because of this, but it could also be recycled in future...). Afterwards, we'll nuke the site and publish a video (I know we have a reputation for failing to produce these on time, but we'll try) showcasing what the project was like while it was running.

## [Coputer](https://github.com/Heliodex/coputer)

I recently discovered Go's code coverage testing tool, so have added more VM tests to improve coverage. In terms of VM internals, the E register is no longer used to save memory, and each iteration no longer spawns a new goroutine.

A future idea I had was to write a bytecode transpiler to move some VM implementation and optimisation work over to a build step. However, this doesn't fit so cleanly with the rest of Coputer's design, eg. programs being distributed as source code rather than bytecode, and would reduce compatibility with Luau. I'll consider this more if we have multiple execution system implementations, which probably won't happen for a while given that the execution system is the most complicated part of the network.

At the moment I should be prioritising work on the communication system instead of the VM, but I have managed to uncover and fix some new VM bugs after recent testing. Oh well.

Indexing programs based on public key + name instead of by hash is nearing completion. In all the designs I've made for Coputer, this is the most common way of accessing programs. Therefore, I'm wondering if it should be the *only* way of indexing programs, and hash-based indexing being kept as an implementation detail.

Some hurdles will need to be overcome if this is desirable. A signature will need to be stored alongside the program as well as the public key, as currently the sender of the Store message is considered the program's creator.

Wallflower now has a cool fractal-like logo. Gateways will happen soon™.

## [Sprig](https://github.com/Heliodex/sprig)

I'm experimenting with writing custom firmware for the Sprig console with TinyGo, which has been an awesome learning experience. It would be great to write some improved screen-drawing routines for the console's st7735 display, as redrawing the whole screen and setting 1 pixel at a time are both rather slow methods.

I'm considering writing a basic game engine to it, maybe so I can port a game like Sprig Shooter as a proof of concept, or write a small demo.

## [Execxorcist](https://github.com/Heliodex/execxorcist)

New project! The name is a mouthful &ndash; don't worry, it can be shortened to **xc**.

Execxorcist aims to be a tool for managing processes running in the background. It was created out of spite of all the other tools that don't quite do this well enough:
- Container managers like Docker and Podman are popular but are slow and discrepancies exist between specified and unspecified volume locations, also having restrictive virtualisation requirements
- OS-specific process managers are.. OS-specific, and tend to have idiosyncratic designs
- PM2 is fine and works well for Node projects, though struggles with some dependencies and non-Node projects
- Permission issues are everywhere

I don't think I can write a better general process management tool, though I might be able to write one that's better for my specific use case. I'd like to generate a project schema based off a configuration file for easy setup as well.

---

Fun fact &ndash; this is monthly update #30! Writing these updates has been surprisingly good for my productivity, as I can look back on previous updates to see what I need to focus on, and review my progress over a longer term, such as a year.

Even though nobody reads them, I'll probably keep writing them for a while to come. The next update, even if it isn't published at exactly the start of the month, is always a motivator for me to regularly work on interesting stuff. I'm planning to also post the updates to a potential 'blog' section on my website sometime soon to make them more visible.
