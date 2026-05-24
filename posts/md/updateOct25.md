---
{
	"title": "Heliodex project update – October 2025",
	"summary": "Monthly update for October 2025",
	"created": "2025-11-09 06:21 GMT",
	"updated": "2026-03-03 18:19 GMT",
	"tags": ["monthlyupdate"]
}
---

Ah, yeah, this again. Welcome back to my monthly Heliodex project update! This month has still been plenty busy, though it's the first update in a year that I didn't significantly work on Coputer. You'll see where I spent most of my time instead below.

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

The Mercury 3 website is now available at [mercs.dev](https://mercs.dev), with documentation at [docs.mercs.dev](https://docs.mercs.dev). Its hosting has been moved to my own dedicated server, living alongside the RCCService instance. This is done with PM2, and its configuration file has been added back to the repository. Dedicated gameservers are running on a Windows VM hosted on Azure (burning through my free credits, not paying them anything yet lol).

The implementations of the [new RCCService proxy](https://github.com/tp-link-extender/RCCService/tree/main/Proxy) and [gameserver arbiter](https://github.com/tp-link-extender/RCCService/tree/main/Orbiter) are now available, and the gameserver arbiter (or, as we've been calling it, the 'Orbiter') has reached a functional state, allowing players to connect to gameservers through it. We're now working on the ability to launch servers via the Site. This works at the moment, though sometimes attempts to join the game before the server is fully ready, leading to connection failures. The server also doesn't shut down properly after a period of inactivity, which is something that may be difficult to fix without weird round-trip networking hacks.  
The Orbiter and RCCService proxy both need improvements to how they handle IP addresses, as they currently each only allow one IP address to be used for access, as specified in the **.env** file. This obviously doesn't work for anyone with dynamic IP addresses or dual-stack networking, so we'll probably move these to an allowlist-based system soon.

One cool PR we merged this month was [#416](https://github.com/tp-link-extender/MercuryCore/pull/416), allowing for account recovery by email. I just ended up getting fed up with people asking for password resets, and the "reset your password to your invite key" method wasn't user-friendly, intuitive, easy, or secure, so we're not doing it that way this time around.

Taskmanager is currently working on a rebuild of the Discord bot, as the chat server platform is (to me, regrettably so) the central hub of the Mercury community. This will probably be used to manage user access to the chat server as well as giving out registration keys for the Mercury 3 site.

I also found out about [Thermal](https://thermaz.online) recently, another hosted platform based on Mercury Core. Shoutout to them for doing cool stuff, giving us feedback, and helping to grow the Mercury Core community!

## [Mercury Launcher](https://github.com/tp-link-extender/Mercurylauncher)

The Mercury Launcher is undergoing a rewrite to run on Linux, currently on the [linux](https://github.com/tp-link-extender/MercuryLauncher/tree/linux) branch of the repository. At the moment it doesn't quite work properly, as the URL protocol handler registration is still using the Windows registry. It also won't start the Mercury client itself as it's a Windows executable, though we can probably fix this the same way we got Studio for the gameservers and RCCService working on Linux, using Wine. However, the launcher does seem to work fine running on Windows.  
There were some problems we encountered while trying to build the project as a single executable, as .NET *really* wants to have its DLLs separate, but after some trial and error we managed to get it working using the correct command-line (or .fsproj file) options.

Next up is improving the [setup deployer](https://github.com/tp-link-extender/MercuryLauncher/tree/linux/Deployer), as the setup deployment currently includes the launcher binary, which would bloat its size significantly if we included binaries for every supported platform. We'll probably distribute the launcher binaries separately and automatically place them in the same folder as the rest of the deployment. I've had some fun implementing some experiments with the deployer, including using IPFS for deployment hosting, despite the fact I originally called this setup deployer "not overengineered".

The UI of the launcher has been rewritten using [Avalonia FuncUI](https://funcui.avaloniaui.net), allowing it to be dual-platform, more declarative, and also look a whole lot better, fitting with the ["purple glowy shit everywhere"](https://www.youtube.com/live/fAPFsRP-mbc?si=9nucddqrUfqyjnyb&t=12847) theme of Mercury 2, Mercury Core, and (for now) Mercury 3.

## [Sprig](https://github.com/Heliodex/sprig)

I've written a number of simple demos in my Sprig engine, including basic graphics, line drawing, simple 3D rendering and an environment with a movement system, and a double pendulum physics simulation &ndash; as well as the existing text rendering and input handling systems.

The engine now also works in a desktop simulator, showing a screen display, button presses, and LED indicator status. This is useful for testing code without needing to flash it to the microcontroller every time, massively speeding up development time. The simulator doesn't accurately reflect the actual hardware behaviour (most notably it runs much faster and doesn't crash as often), though it does provide a good approximation for most use cases. Upgrading my sprig with a Pi Pico-compatible microcontroller is still on my to-do list &ndash; I'm just concerned about the firmware support or compatibility, more so with the more powerful though rarer and less well-supported boards.

---

I didn't do enough work on Coputer to warrant a full section here, probably due to the amount of work that went into Mercury 3 recently. Be rest assured that there will probably be something to talk about regarding it next month.  
Some other ideas I had this month but didn't act on included a music generator for Litecode, similar to [Sonic Pi](https://sonic-pi.net/) though with Luau instead of Ruby.

Of course my [VM](https://github.com/Heliodex/VM) project is still ongoing. I don't talk about it in the monthly updates because it's extremely theoretical research purely for my own learning, is moving at an extremely slow pace compared to my other projects, and doesn't contain a single line of code yet. However, it is still a great procrastination tool whenever I don't feel like working on anything practical or useful. To an extent, if Coputer is a means to and ends, then this project is the ends.

(Un)relatedly, I've also taken an interest in learning [Lojban](https://mw.lojban.org/index.php?title=Lojban). I'm only a week or so into learning the language, though it's probably the most fun I've had learning *anything* in the past year at least. Of course I've known about its existence for ages and have even cracked a couple of jokes about it, but now in my current beginning stages of learning it I only have positive things to say. Maybe I'll even be able to keep up with it.

See you all in December, since that's all I have to say for this month!
