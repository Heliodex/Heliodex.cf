---
{
	"title": "Heliodex project update – July 2026",
	"summary": "List of changes made to the projects I worked on during July 2026",
	"created": "2026-08-13 21:42 GMT+1",
	"updated": "2026-08-13 21:42 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Ahh, another monthly update. It's always nice to take a short break from work and write one of these things. Here's a collection of the most interesting things I've done since the last one!

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

As expected, even more beta testers were removed this month, almost all were users who weren't active on the event team. The beta tester team is now about half of the size it was at peak size during Mercury 3. We actually seemed to have removed a few too many testers, and have ended up having to reinstate some mistakenly removed beta testers. Whoops! oh well

2 community members were selected to take on some more responsibilities as well. These include Noman as moderator & catalog assistant, and TroyTES as community manager. Both are beta testers which have contributed greatly to the project, and I'm sure they'll do a great job in their roles!

We're now actively working on integrating the new 2016 Client and Studio with Mercury. Once it's fully available, we plan to make it usable alongside the existing 2013 client. Configuration options have already been added in place settings for selecting a client era, and these are shown to users on the game page.

Taskmanager is working on compiling the 2016 Client, Studio, and RCCService, with Visual Studio 2012. We'd use the Aya source for this so we could compile with clang, if it hadn't already disappeared off the face of the earth, and also if taskmanager didn't hate it so much. These will be compiled for Windows to start with, so our Linux server deployments and Linux users will still need to use a compatibility layer.

We're already making some improvements to the 2016 source, including adding a dark mode (Thanks Qwen 3.8 Max!). Previously we were considering updating the included webview system so that the WIP Studio Site service for serving legacy browsers would no longer be required. However, this would necessitate an upgrade from Qt 4.8.5 to Qt 5 or 6, which we'd estimate to be a herculean task.

Once 2016 support is working, we plan to update the Orbiter or make a new system combining it and the RCCService proxy together. That is, it will handle both place launching (no longer with Studio) and image rendering, including place thumbnails in future. We'll probably discontinue the existing RCCService proxy at the same time, because it would be weird to have 2 different RCCService instances runinng on 2 different servers in the Mercury stack.

We moved the server hosting the Orbiter to a new server, again: 6 vCPUs / 16 GB ram / 160 GB disk. This should greatly increase the performance of gameservers, and be a stronger foundation for the future deployment of the 2016 RCCService. We were recommended Datalix and DataWagon as VPS providers by our community members, and Datalix was out of stock for the VPS size we needed, so thank you DataWagon!

I added a new item to the [Mercury 3 release roadmap](https://github.com/tp-link-extender/MercuryCore/issues/448), relating to issue [#463](https://github.com/tp-link-extender/MercuryCore/issues/463) on the state of image caching on the Site, or rather, the lack of it. Navigating to the homepage makes about 70-80 requests, every single time. I was originally considering some basic cache timeouts to fix this, though I'd like a more robust solution by indexing images by their file hash.

A couple other bugs were fixed, like [#464](https://github.com/tp-link-extender/MercuryCore/issues/464) with the user->created->asset relation in the database. This is a temporary fix for naw and won't apply any more after the updated Economy service currently as a draft in [#454](https://github.com/tp-link-extender/MercuryCore/pull/454) is merged.  
We'd also like to do a database reset to clear some data such as old user accounts for users who are no longer beta testers.

Some updates were made to the [Launcher](https://github.com/tp-link-extender/MercuryLauncher). We updated it to use AvaloniaUI 12 and FuncUI 2.0.0, fixing issue [tp-link-extender/MercuryLauncher#6](https://github.com/tp-link-extender/MercuryLauncher/issues/6) and checking off item 4/18 on our release roadmap! The launcher also now includes support for a new URI format, which includes the client era, allowing it to choose which joinscript to load and, in future, which client to launch.

Also the 2016 client uses a JSON payload to specify to the client which game to load. By convention it's still called a joinscript, though I don't like the term given that it's not a script, so I've been calling it the join configuration instead. We'll probably add similar payloads to the site soon for game serving and visits. I don't know what will happen to self-hosted servers after 2016 is made available on the Site.

---

After my [experiments with Gleam](https://github.com/Heliodex/gleamtest) last month, I continued thinking about the idea of client-server communication, by compiling the frontend to JS and the backend to BEAM. I then realised that I would probably be more likely to make this happen with a language I knew better, and that compiling the frontend to WebAssembly could be a better idea. As such, I did some [experiments with Go](https://github.com/Heliodex/goweb), and ended up with successful client-server communication.

After that I decided to implement a [simple reactive UI library](https://github.com/Heliodex/goweb/blob/main/client/main.go), during which I relearned a lot about the nature of reactivity and reminded me of how my little 14-year-old mind was blown by [Fusion](https://elttob.uk/Fusion/0.4/) almost 5 years ago.

Also I did end up going through some really old repos and adding screenshots, logos, or other information in the descriptions or READMEs.

Welp, it was mainly just work on Mercury this month. However, I promise I'll have at least a few more interesting projects to put in next month's update ;). Have a good (rest of your) August!
