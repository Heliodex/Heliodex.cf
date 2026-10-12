---
{
	"title": "Heliodex project update – September 2026",
	"summary": "September 2026 update to Heliodex's projects",
	"created": "2026-10-11 23:19 UTC-4",
	"updated": "2026-10-11 23:19 UTC-4",
	"tags": ["monthlyupdate"]
}
---

Sup, and here we go again. Another monthly update has arrived, in which I discuss what's been going on in and around the projects I've been working on throughout September.

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

The updates to Mercury's Economy service are complete! The `ledgertests` branch should be ready to merge soon.

A working version of packages are now implemented. This allows you to buy a single asset from the catalog and receive its components as multiple assets in your inventory. You may also equip the package to your avatar, and all of its components are equipped at once. This means we finally have different body types too, w00t! Rendering for body part thumnails is working, and also packages can include any type of asset. This was added on the main branch after the work on the Economy service was complete, so it will need to be properly integrated.

Taskmanager finished the updating of the gameserver VPS to Windows (😔), and development of the 2016 Client and Studio continues. Gameservers have been set up with the new RCCService, and we'll probably merge the Orbiter and RCCService proxy into a new Orbiter system in the near future. Testing for 2016 has officially been opened to the cohort of beta testers

Asset reuploading has been implemented too, so users can replace existing assets. Since we don't implement our own version history, this replaces the existing asset, and puts it back in the moderation review queue.

Oh yeah, and Mercury 3 is now at 142 users on site.

## [Defector](https://github.com/Heliodex/Defector)

Defector has now ended and all review has been completed, apart from a few people who didn't resubmit their projects when changes were requested. It received 27 submissions, 24 of which were approved (totalling 39.53 hours after deflation), and had a final NPS of 63. At the time of turning off the battle system, 2173354 battles had been fought (with an ~108 rounds per battle, that's 234 million individual rounds), and the database totalled nearly 70 fucking gigabytes. That's why it's not on [Orchard](https://orchard.infra.hackclub.com), and converting this thing to be hosted statically will be hell.

[$198.17](https://hcb.hackclub.com/ysws-defector) was paid out to participants in video game grants. Since all time was tracked with [Lapse](https://lapse.hackclub.com) and needed review (despite the Lapse team's pivot to avoid using it for tracking time writing code), I built a tool to help me review them.

## [Peaks](https://github.com/Heliodex/Peaks)

Peaks is a timelapse review tool &ndash; it allows you to paste in timelapse IDs from [Lapse](https://lapse.hackclub.com), organise them into projects, and surgically select, annotate, deflate, and remove sections of time down to the frame. Then, it generates a text-based description of the project which can be used as a deflation justification for anyone that doesn't use Peaks. It's written in SvelteKit, though almost everything apart from OAuth requirements is done in the frontend.

It has a video editor-like interface with resizeable panels and a timeline, though it doesn't feature any video editing features. It has good performance, project share links, and I think a pretty nice UI without sacrificing on density. I suppose it sacrifices on intuitiveness instead, though it has a user base of 1 so I'm not worried about this yet.

Automatic idle time scanning is a useful feature, though it's difficult to get working correctly and at a decent sensitivity. Someone could be doing valid work, except it's only 1 line in their code editor that is changing, so it's counted as idle. I added an idle sensitivity option slider to help with this, though I generally use the automatic idle time as a template to manually mark idle time over myself.

There are a ton of quality-of-life features the app has that I just wouldn't have implemented out of sheer laziness, or just not wanting to add extra lines of code to the codebase, unless I had access to the LLMs I do now. There's timeline zooming & thumbnail previews; context menus on projects, timelapses, & timeline selections; drag-to-reorder for projects & timelapses; useful hotkeys; nice animations; and, possibly the best feature, a graphically visualised and fully time-travellable undo/redo history tree for the entire workspace.

I'm just glad that a better Lapse review experience exists now, because the previous experiences for reviewing timelapses through software like Telescreen (seriously, who names a video review tool that?) and Lapse's own timelapse page have been seriously suboptimal. Peaks is live at [peaks.heliodex.cf](https://peaks.heliodex.cf), though I don't know what the ratelimits and latency are like on the hosted version. To be honest, I've been using it entirely out of the dev server.

## [Half Life](https://halflife.hackclub.com)

I'm now on the team for Half Life, a 10-week programme by Hack Club where participants spend the first 5 weeks designing hardware projects of specific themes, and then the next 5 building those projects. Participants earn funding for their projects based on the tier they've selected and the hours submitted, and they earn coins for any verified hours worked beyond their selected tier. The coins can then be spent on other prizes, principally 3D printers. Working 10 verified hours a week for 10 weeks will net participants $30 of funding for their 5 projects and a 3D printer, specifically an [Ender 3 V3 SE](https://www.creality.com/products/creality-ender-3-v3-se). Working more hours can earn more funding, more prizes, or a better printer!

Half Life is now the largest project I've worked on in terms of user count, with over 6750 signups at the time of writing, as Week 1 is about to close. It's legitimately scary to have work on something like this with this many users, solely out of fear of breaking something, especially given that we don't have enough compute resources at the moment to set up a proper staging environment without compromising on the stability of the production instance.

It's the 1st time I've worked on a project using a Next.js stack, so I've been writing and encountering plenty of bugs (in my experience, Next doesn't play as nicely with Bun as it does with Node). The database used is Postgres with Prisma, which I am familiar with from the old double-database days of Mercury 2. It's also hosted on Orchard, so I've spent some time trying to optimise the painfully slow Orchard build times to get them below 2 minutes.

## [Coputer](https://github.com/Heliodex/coputer)

Litecode has been updated to support the latest Luau bytecode version &ndash; 14 (not including the experimental bytecode version 100 used for the classes RFC)! Some new tests have been added, and the VM test suites (conformance, benchmark, and error) now, once again, fully pass. After this, one of Litecode's reference implementations, Fiu, also ended up being [updated to support bytecode version 14](https://github.com/rce-incorporated/Fiu/commit/6cc8887847cf336073e5a8017330d3988844a62f#diff-6831323c21a007c3a511aaa4bcdae8d7e78d8ffd5c8f3a3fa3e940b6fbe10a18), which is great since I can resume using it as a reference.

These updates include implementations of the new integer number type and a few new opcodes. Once classes come out I'll try to implement them as well, though the current RFC for these implements features like constructors and operator overloading in a metamethod-like way. I know that classes are planned to be implemented as a separate VM type, though litecode offers no support for metatables due to my opinion that they're "considered harmful". The way the planning is heading at the moment, classes seem like they're better than metatables; I just don't know if they'll be better *enough* to be worth implementing.

The previously work-in-progress parser has now been updated to support the latest Luau syntax, as of release 742. This includes integer literals with the `i` suffix, constant declarations, `if local`/`if const` statements & expressions, and explicit generic type instantiation. I ported the formatter from the legacy **ast** module to the new **parse** module, and added some formatting tests. This then allowed me to tweak the formatter to print in a style I prefer more. What I ended up with is a remarkable mix of somewhat uncommon features (omitting function call parens where possible, rewriting function assignments to function declarations) and some rather insane ones (`end` stacking, source code production from the AST alone). Again, I'm having the same power-mad feeling I did when first implementing litecode almost 2 years ago. I've long been a user of formatters with few or no configuration options, and which are opinionated in ways that don't quite line up with my own preferences (Prettier & Biome, gofmt & gofumpt, Stylua, etc). Finally, I have a formatter that I can freely mold and aligns with my own opinionation exactly, and enforce it on my own code unilaterally.

After working on this formatter which is so vastly superior to any other formatting experience I've had before, I got to work on a minifier as well, and moved some operations from just writing source code differently into a AST transformation step so they could work for both the minifier and the formatter. A nice end goal would be to one day replace the use of [darklua](https://darklua.com) for minification of Mercury's 2013 Client scripts. This minifier could be updated to include most of the features of darklua pretty easily, however it's things like the [retain_lines generator](https://darklua.com/docs/generators/#retain_lines) which remain extremely useful and may not be able to be implemented properly with my AST-only model.

---

The programmes I've been running at Hack Club have been an awesome experience, I'm getting happier with the engagement they're receiving, and I hope I'll be able to make a great positive impact on the teens participating in them. That said, the amount of time I've spent working on these projects has somewhat diminished my free time and the time I have for other projects.

The best part of software development for me at the moment is the fact that at the same time as my free time is starting to dip, agentic LLM tools are on the rise which have pretty much given me back my free time. I've steadily been experimenting with deploying them across my projects and codebases, and closely monitoring their work (and my usage limits).

Additionally, I could now [get access to Mythos 5.1](https://www.anthropic.com/news/cyber-verification-program) through a work Claude plan 👀. There are multiple layers of Mythos, and this is the one with the most safeguards, though still less than Fable. I may consider this at some point, as though Anthropic is crazy proprietary, a 60% discount on a plan that's already basically a loss leader can't go without consideration.

Now for the formulaic closing. See all you readers in the next monthly update, and have a great rest of your October!
