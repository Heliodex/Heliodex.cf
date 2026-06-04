---
{
	"title": "Heliodex project update – May 2026",
	"summary": "May 2026 updates for Heliodex projects",
	"created": "2026-06-04 18:01 GMT+1",
	"updated": "2026-06-04 18:01 GMT+1",
	"tags": ["monthlyupdate"]
}
---

If all goes well, it looks like it's going to be a busy summer. Welcome again, I hope your summer is off to a good start, and here's all the things I've been working on throughout May.

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

The recent hiatus has ended for Mercury 3, which now has [114 beta tester user accounts](https://mercs.dev/statistics), as well as 562 members in the Discord server.

On 31 May we hosted a call with the event team (consisting of most of the current beta testers) detailing our plans for the trailer event, which has been in-progress for some time. The event team has been split into 5 sub-teams: Editors, Scripters, Builders, Writers, and Filmers. Each is headed by an administrator. I will lead the Filming team, which was previously the largest team by far until Taskmanager moved some people around for balance. It's now the 2nd-largest team to the Building team, led by Delightful.

The part of the trailer that has most of the work done on it is a scene that's a remake of a part of the music video for *Otis* by JAY-Z & Kanye West. The finished trailer should be about 2 minutes 30 seconds in duration, and will feature a few different skits as well as an introduction via the Mercury 3 website, possibly running on an old VM for that ✨ retro ✨ effect. I might revive [Mercury Sync](https://github.com/Heliodex/melt/tree/main/Sync) for helping Scripters with development, or create a similar tool for syncing builds. I'm just glad to have a better idea of what's going on with the event now, since I'm probably the member of the admin team that has been least involved with its development.

As for the [ledgertests](https://github.com/tp-link-extender/MercuryCore/tree/ledgertests) branch, the API and client library for the new Economy service is complete. Serialisation and deserialisation matches between both the TS and Go implementations, and is done between the Site and the Economy service as well as between the frontend and backend of the site (yes, it's done 2 times for most requests, that allows us to validate on the server rather than on the client).

Implementations of the different Item types in TS was originally going to be done with classes, however it's not possible to extend multiple base classes in JS, and `implements` is a TS-only feature and doesn't work with `instanceof`. I ended up using classes for the concrete items and interfaces (rather than abstract classes) for the abstract ones, using void functions to specify abstract types, just like how it's done in the Go implementation.

The currently working features of the site using the new Economy service are stipends and the user transactions page. Most pages will require lots of work to transform, because the new transfer format, owner system, and currency system are all quite different from the previous Economy service. Maybe I should give it an official name, something like "Economy service 2" or whatever. At least that will help differentiate between the old and new versions when I update the associated documentation.

Work on the [substitution file format](https://github.com/Heliodex/substitution) continues. It's obviously very simple, and has libraries in both Go and TS. I plan to integrate the Go library into the compiler at [tp-link-extender/2013](https://github.com/tp-link-extender/2013) and the TS library into the Site. The compiler will find string replacements in the compiled scripts and output a .sub file, which will be read by the Site when serving scripts to allow values to be dynamically substituted without the risk of (1) forgetting to substitute something (it will just error), or (2) a malicious substitution &ndash; since substitutions are done in an order (which normally isn't important), an earlier substitution could add a string identical to that of a later substitution, and cause multiple replacements (with replaceAll()) or fail to replace (with replace()). I do hope that explanation makes sense.

Gameservers always seem to be unstable. I [fixed](https://github.com/tp-link-extender/RCCService/commit/4f5ae567b48e505f12586a9a48a98ebbdea50a48) the race condition causing the Orbiter to shut down randomly, though I still honestly think it would be much better off just running on real hardware.

The [roadmap](https://github.com/tp-link-extender/MercuryCore/issues/448) is still stuck on 2/17 items completed. Each one is a lot of work, though we're steadily making progress on the highest priority items.

## [Heliodex.cf](https://github.com/Heliodex/Heliodex.cf)

The monthly updates &ndash; yes, including the one you're reading right now &ndash; have finally been made available on the 'Posts' section of my website ([heliodex.cf/posts](https://heliodex.cf/posts))! No further posts will be made available on my [GitHub Gists](https://gist.github.com/Heliodex) page. I detailed more on how the posts are published in my [Welcome!](https://heliodex.cf/post/welcome) post.

Some of the Markdown formatting isn't quite working correctly yet, things like ~~strikethrough~~ (if you're seeing that struck-through on my site, then I've fixed it), blockquotes (which are fine, though might need adjusting), and `code sections` (which look too similar to the surrounding text at the moment).

I also removed some outdated information from the About page. It still has plenty though, so likely needs a bigger update in future.

## [Dex Display](https://github.com/Heliodex/Font)

I eventually figured out a much much easier way to build the font from the set of SVG glyphs, which is to use [FontForge](https://fontforge.org) via a Python script. FontForge is actually able to convert the glyphs correctly, so there's no need to manually try and figure out a correct layering order for each shape in the vector file. Kerning is also doable via the script, and at the moment is parsed from a JSON file with manual kern pairs. I might change this to use a YAML (not StrictYAML) file or something so I can add references and deduplicate some sections, or just actually use the recommended method of kern groups.

The newly exported font has better kerning, more punctuation, and now has number glyphs. It has slightly different metrics to previous versions though I think they're similar enough.

---

I haven't done any work on [Coputer](https://github.com/Heliodex/coputer) lately. One of the reasons for this is that Luau is a very different language to Lua &ndash; Lua seems to be slowing down its development and making rare breaking changes, like the recent Lua 5.5, while a lot of new code is written to support legacy versions like 5.1 which are still in wide use. In contrast, Luau is dead set on making no breaking changes from Lua 5.1, however the team is taking the areas where they can make changes very seriously, and is iterating on the language's design at a very fast pace.

Check out Luau's [recent RFCs](https://github.com/luau-lang/rfcs/commits/master/): The Const keyword hopefully won't require any changes, a few new Math library additions won't be difficult to add, the 64-bit Integer types and new Classes will require a bit of reworking to the VM, same with new cyclic requires. For the work-in-progress parser, I assume it will be difficult to implement support for Classes, Integers, and Const. It seems like the language is adding [new syntax... every Friday](https://www.youtube.com/watch?v=qfsBWjJGeAE).  
Remember when [selene](https://github.com/Kampfkarren/selene) didn't support the compound floor division assignment operator `//=` for a while? Yeah, Coputer is going to be like that for a bit until I regain the confidence to update it. I think this is a small price to pay to have a brilliant language that's moving so fast.

Thanks for your time. That's all for this month, so see you in the July update!
