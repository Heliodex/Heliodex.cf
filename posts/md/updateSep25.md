---
{
	"title": "Heliodex project update – September 2025",
	"summary": "Another montly update for September 2025",
	"created": "2025-10-07 13:58 GMT+1",
	"updated": "2025-10-07 13:58 GMT+1",
	"tags": ["monthlyupdate"]
}
---

September doesn't seem to have been eternal this year. However, given how much I'm already seeing about the upcoming Halloween, it almost seems like October will be. Here's another monthly update!

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

Mercury 3 has entered its private beta testing phase, and now has 28 users on site, all creating status & forum posts, places, assets, and spending currency. An RCCService instance is set up on my dedicated server, accessed from the site running on the Windows VPS, so the reverse of the architecture of Mercury 2. This probably won't stay this way for long though, and we're practising site backups in preparation for another server migration.

The RCC is used for avatar and clothing rendering at the moment, with shirt renders recently being fixed to work properly. Since it's running on OpenSUSE it has to run over a compatibility layer. We're using Wine, which did require a lot of configuration especially around display servers (RCC needs one to use as a buffer to render to), though after this was surprisingly stable.

We are currently in the process of possibly moving to a new domain name (again...), as well as a replacement Windows server host for dedicated gameservers, which we have a basic implementation of at the moment. This and the updated RCCService proxy will be released soon to help with others setting them up themselves.

Development on the Site might have slowed down a bit due to some issues with the editor environment, mainly the fact that the TS language server (and yes, even with ts-go) is very slow under some circumstances. This is an issue I'm not experienced in debugging, so I guess I'll try to poke around and learn as much as I can until it starts working again. My suspicion is that it's a problem with schemas in Superforms or one of its validation libraries.

2 more big pull requests were merged: the **assets** branch in [#409](https://github.com/tp-link-extender/MercuryCore/pull/409), and the **docs** branch in [#410](https://github.com/tp-link-extender/MercuryCore/pull/410). The **assets** branch contains most of the fixes for assets, integration with the Economy service, and numerous other things we've been working on over the past few months, while the **docs** branch releases the new documentation site, which is now live at [docs.xtcy.dev](https://docs.xtcy.dev). The docs still need some refinement, though at the moment it still holds plenty of useful information that people were previously asking about in issues and discussions.  
In future the documentation should cover more tutorials and guides on modification, details on Mercury's inner workings, and information on systems like the Economy service and Mariner DLL hook.

Some new configuration options have been introduced to Mercury Core, such as setting whether emails are required for user account registration. This was useful for creating [staging.xtcy.dev](https://staging.xtcy.dev), a testing environment for Mercury with free signups (no invite keys or emails).

## [Coputer](https://github.com/Heliodex/coputer)

Some updates to Luau have been made to fix unintended behaviour, mainly regarding multiple returns from modules. Litecode has been updated to abide by this new behaviour and some more tests have been added to ensure this works as intended.

The **ast** branch was merged into main in [#4](https://github.com/Heliodex/coputer/pull/4), and I was able to set up a simple VSCode extension to allow for formatting files with the work-in-progress formatting tool, as well as providing simple syntax highlighting. The extension still relies on the `luau-ast` tool to work, so it relies on having that and the formatter binary installed and configured correctly.  
The next problem to tackle is the formatting of type aliases, as while the AST is typechecked and includes type information, it doesn't show which variables actually have types assigned to them in the source code.

The 'first' [demo site](https://first-h2lk2orlh-cctfxch0x-5yd7n93mg-zxmn64hy4-wfe6s2l9z.coputer.heliodex.cf) contains some more info about the design of the network, how different parts of it communicate with each other, as well as how programs are written & bundled, the choice of Luau as a language, and how they can interact with other parts of the system through basic IO. Of course we're still pretty far away from any kind of tutorial or setup documentation due to the level of fragmentation in the system, but at least less far.

Next up will probably be some system in Wallflower for detecting when one of its peers is disconnected. If a program is not found and the node has no peers, it will respond with an error message immediately, which is good. If the node does have peers, it will contact all of them and wait for either a response that another peer has the program, or a response from *every* peer that they don't have it. For example, if a user requests a nonexistent program from a node that has 1 peer, if the node can't connect to its peer then it will hang forever.  
The communication protocol for this is based on top of QUIC, which is very much connection-orientated, so it should be simple enough to detect when a peer is disconnected, or at least when the network implementation has stopped trying to connect to it.

---

Hack Club's [Summer of Making event](https://summer.hackclub.com) has now concluded, for which I submitted both of these projects and won a few prizes. About 1/4 of my prize value came from the 110 hours I spent on Coputer, and the other rather unbalanced 3/4 from the 70 hours I spent on Mercury.

Mercury Core also hit 41 GitHub stars, and Coputer reached 11. I know stars might not actually mean anything at all, especially when compared with how many repositories I've starred myself (over 12000...). Anyway, I hope you have a great October, and see you next month!
