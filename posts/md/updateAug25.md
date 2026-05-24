---
{
	"title": "Heliodex project update – August 2025",
	"summary": "Heliodex's monthly project update, for August 2025!",
	"created_at": "2025-09-09 18:38 GMT+1",
	"published_at": "2025-09-09 18:41 GMT+1",
	"tags": ["monthlyupdate"]
}
---

It's that time of the month again. The summer and its holidays are finally over, so here's a quick update on what I've been up to over August (and the first few days of September).

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

Work on Mercury 3 is getting back up to speed, and the site is now hosted again, albeit unreliably, for a basic alpha test. Taskmanager wants a beta testing phase to begin within the next week or 2. A new system for management of assets has been introduced, separating a few different categories of asset:

- **Builtins**: Assets bundled with the client or studio. These are not requested from the site. (animations, humanoid scripts, studio plugins to an extent)
- **Privileged assets**: Assets loaded directly or indirectly by scripts sent to the client. This includes:
	- **Loadscripts**: Initialisation scripts sent to the client or studio (join, host, visit, studio)
	- **Corescripts**: Scripts loaded by the client to provide UI functionality (chat, backpack, ui, loadLibraries, etc). We have control over these IDs
	- **Hardcoded IDs**: Assets which we have no control over the IDs of, but are still loaded by the client (health model)
	- **Dependecies**: Anything loaded by the above scripts (images, meshes). We have control over these IDs
- **User assets**: Assets uploaded to Mercury through the site's interface and stored in the database.. These are assigned a (currently random) ID
- **Open Cloud assets**: Assets loaded from Roblox via their [Open Cloud API](https://create.roblox.com/docs/cloud/api/asset-delivery), and cached by the site

These changes are all available on the [assets branch](https://github.com/tp-link-extender/MercuryCore/tree/assets), alongside the previously-made improvements to the Economy service, which will in future handle limited/unlimited assets and keep track of asset ownership.  
One of the problems here is that the asset IDs for different categories could clash, so we may choose to change the IDs we have control over to avoid this. Alternatively, we could use multiple asset endpoints for different categories, but this would be difficult to manage or require extra machinery in the DLL hook. Another option may be to change the asset format entirely &ndash; using string IDs for User assets, though the main problem with this is that it wouldn't work at all for functions that take asset IDs as arguments instead of URLs (these are also limited to about 2 billion IDs, so we can't just use a different range of numbers. However, negative IDs seem to be possible, which would be hilarious to try).

Many of the required privileged assets have been archived at [tp-link-extender/2013](https://github.com/tp-link-extender/2013), making it easier to manage and update them, especially for anyone setting up a Mercury Core-based revival. This also comes alongside a new compiler, signing corescripts and loadscripts and bundling libraries, plugins, and archived dependent assets into clearly categorised directories for easy distribution. (Working on the code from that repository is now giving me a strange nostalgia, even though it's decidedly the worst code I've ever written and worst experience writing code I've ever had. Maybe I'm just a masochist for this kind of stuff.)

Process management has been improved with the merging of [#402](https://github.com/tp-link-extender/MercuryCore/pull/402), with the site starting the Economy and Database services automatically when they're needed. The installation guides will be updated soon to reflect this, or we'll just release the work-in-progress documentation site.

For a short while, the client seemed to have stopped working correctly, but is back up and running after some DLL hook fixes. The Mercury launcher hasn't been touched in a while, but should have all the necessary features for until we get a place up and running.

## [Coputer](https://github.com/Heliodex/coputer)

As part of the main branch of the repository, some more tests have been added, alongside a (gnarly) bugfix for table indices when breaking out of for loops. A set of diagrams were also added to the demo page to describe the architecture of the Coputer network. I'd like to add more to this page to detail or demonstrate some of Coputer's capabilities, though I'm not sure exactly what to add yet.

On the [ast branch](https://github.com/Heliodex/coputer/tree/ast), there are some more intriguing developments. I begn adding Source() methods to most nodes, allowing them to be transformed back into source code. Initially, these simply used the Node.Location parameter to get from the source documents, so they were gradually replaced with functions that would generate well-formatted source code. Now, after various fixes relating to indentation and string/number source reconstruction, the system is now bundled up and accessible in a basic command-line tool for formatting Luau files.

If this sounds a lot like my previous [melt/Luau](https://github.com/Heliodex/melt/tree/main/Luau) project, that's because it is, except a whole lot more complete, robust, and easier to maintain. This is also where I got the idea of using the AST to reconstruct source code from, as most formatters use a lot more information than just the AST to do this. At times, this makes the formatter fairly annoying to work with, as it has no care for any of the original whitespace or indentation formatting, but it does produce more consistent results.  
Melt's Luau tool also did a basic compatibility conversion, where non-Luau features were transformed into Lua 5.1 equivalents. Once Coputer's formatter implements this as well, Melt's Luau tool will be deprecated in favour of Coputer's, and we'd potentially even be able to use it for Mercury if we added a few more features like minification.

---

Some more work was also done on my alternative Luau VM for learning Erlang, at [Heliodex/erl](https://github.com/Heliodex/erl). Enough is implemented to run Hello World, alongside a basic web UI for submitting scripts to run as a demo. This project was done as part of learning a new (to me) programming language for Hack Club's [Dummies event](https://dummies.hackclub.com).

Other than that, it's mostly been the main 2 projects I've been working on. As an aside, I'm also working on these for Hack Club's [Summer of Making event](https://summer.hackclub.com), so you can check out/follow the [Mercury](https://summer.hackclub.com/projects/6980) and [Coputer](https://summer.hackclub.com/projects/6853) project pages there if you're interested. Keep buidling, and see you next month.

