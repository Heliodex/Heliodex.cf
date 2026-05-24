---
{
	"title": "Heliodex project update – April 2026",
	"summary": "Project update for Heliodex projects in April 2026",
	"created_at": "2026-05-03 03:02 GMT+1",
	"published_at": "2026-5-06 14:46 GMT+1",
	"tags": ["monthlyupdate"]
}
---

It's time again. As we now move into (what feels like, at least for my part of the northern hemisphere) summer, I present the April issue of my project update. Here's all the interesting (and uninteresting) things I've done in the past month!

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

Mercury 3 has [107 beta tester user accounts](https://mercs.dev/statistics), along with 543 members in the Discord server. We are still officially in hiatus for the next week and a bit due to Taskmanager's exams, though that doesn't mean I can't continue work on random aspects of the project.

The forms rewrite on the [forms](https://github.com/tp-link-extender/MercuryCore/tree/forms) branch may slow down for a bit, as I'm experincing problems with making new forms work properly, as well as the ever-present typing issues, especially with file uploading. For example, I tried to rewrite the /report form, and upon selecting a report type in the dropdown, the form suddenly submits itself. Furthermore, the existing forms system currently deployed in production and on the main branch has seemed to fix itself (likely due to a dependency update) and is no longer broken, so I guess we can continue with that for now.

On the [ledgertests](https://github.com/tp-link-extender/MercuryCore/tree/ledgertests) branch, the new Economy service API is being constructed. One of the challenges I ran into is which serialisation format should be used. The previous Economy service implementation used JSON, though the entire system used JSON throughout, so that was a fairly easy choice. This time there's a custom serialisation format used for the ledger database, so I came to the idea of re-implementing the necessary serialisation and deserialisation code for the API in Typescript, so that it could be used as a client library from Mercury Core. This is a work in progress at the moment, however is able to serialise and deserialise basic data types and communicate with the API correctly. This is likely what will be moved forward with.

The [Launcher](https://github.com/tp-link-extender/MercuryLauncher) has also been hit with some dependency difficulties, given the recent upgrade to [Avalonia 12](https://docs.avaloniaui.net/docs/avalonia12-breaking-changes), the .NET UI library used by the Launcher. This is made more challenging by the fact that we consume it through [FuncUI](https://funcui.avaloniaui.net), a functional wrapper around Avalonia for F#. However, they've recently released a [preview version](https://www.nuget.org/packages/Avalonia.FuncUI/2.0.0-preview1) to work with the breaking changes, so I'll see if I can modify the Launcher to work with that.  
Before any of these dependency issues arose, the new Launcher that doesn't run as root on Linux was deployed successfully, so at least there aren't any major modifications blocked by this. However, the Launcher won't reinstall itself if it doesn't see a new client deployment, so users will have to do this manually. Maybe we should base the Launcher executables on separate hashes as well.

The production gameserver and website seem to be running fine with no major issues or downtime this month. Woohoo!

## [OpenBlox](https://github.com/Heliodex/OpenBlox)

This is a project (with an admittedly recycled name) that attempts to showcase a possible programme to engage high school students in developing Roblox games in public. Previously, the site simply featured an explanatory homepage and no backend functionality at [ysws.heliodex.cf](https://ysws.heliodex.cf). This month it's been updated with a dashboard to log in and add projects to, as well as integrating with Roblox's Open Cloud APIs to display project data and allow users to connect their Roblox accounts.

I doubt the project will go any further than this demo stage, however it was a fun experience to work with Roblox's OAuth APIs and try to figure out what would be most useful and engaging for participants. The whole project is a more polished and complete version of a very similar idea I had 11 months ago.

## [Sprig](https://github.com/Heliodex/sprig)

I ordered and received a Raspberry Pi Pico 2 compatible microcontroller, running an RP2350 chip to replace the RP2040-based Pico (1) that came with the original Sprig. However, while programming for it, my code no longer seems to run properly on the RP2040. Whatever, the bonus RAM and extra flash space and USB-C connector is great to have, though running out of memory is still a regular problem.

I began writing ~~an isomorphic~~ ~~an isometric~~ a dimetric voxel game, with 2.5D terrain graphics. I implemented a lot of optimisation for rendering by splitting each voxel cube into 6 triangular faces (since those on the back are not visible), and not drawing those that are occluded. This turned out to be more efficient than a previous occlusion culling algorithm that worked on whole cubes, due to the culilng of the previous algorithm resulting in the algorithm that was applied afterwards not occluding enough. It seems to work pretty perfectly now, that is that every pixel in the screen is only drawn once, and the demo runs at a decent 30 or so FPS on the console (when overclocked to 300MHz, on one of the ARM cores, not the RISC-V ones).

Afterwards, I tried implementing a movement system for player controls and collisions, however at the moment this is rather buggy since the visible voxels don't align with the collision boxes.

---

Welcome to the usual random-stuff-appendix-section. Really this content should be separate posts, though I usually just write them at the end of the monthly updates since that's the only thing I write regularly. Maybe I should just write more in general.

I've been trying out the [Zed](https://zed.dev) code editor, which hit its 1.0.0 release recently. Previously I've experimented with it, however was disappointed with its small extension ecosystem and not-great font rendering. Trying again now, these issues are both drastically improved and a load of cool features (multibuffers) & high performance make it a serious contender for my main editor against Visual Studio Code.

Of course, I still have thousands of hours of experience in VSCode and a ridonkulous number of extensions, so I'll still write things like this update (using a Markdown preview which I haven't yet found an analogue for in Zed) in VSCode. In fact, I have so much time sunk into VSCode that writing code in anything else doesn't even really "feel" like programming. However, this gives me a lot of hope for how much better I'll be able to get with Zed if I just stick with it for a while. Overall, it's clearly an awesome project with a huge amount of work and potential.

I heard about CVE-2026-31431 and tried an exploit on a number of Linux servers I had access to, being successful to gain root access on some of them and warn their admins. I'm trying to secure my own servers against this, however it isn't a huge deal for me as I don't have any servers with untrusted users with non-root access.

In the process of updating my openSUSE server to fix this, I ended up breaking some critical commands during a package update because of lack of disk space. I moved some backed-up files and cache to the system's larger HDD, and attempted to fix some broken dynamic libraries. Shoutout to GPT-5 mini and Claude Haiku 4.5 for their help, and I now understand the benefits of immutable distributions a little more. MicroOS is looking quite attractive at the moment, even if I won't use it for running any containers.

Thanks for reading this far, and I hope to see you in the next update!
