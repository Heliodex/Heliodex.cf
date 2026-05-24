---
{
	"title": "Heliodex project update – July 2025",
	"summary": "July 2025 Heliodex project update",
	"created": "2025-08-12 23:48 GMT+1",
	"updated": "2025-08-12 23:48 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Another project update! I never know what to write in the first paragraph of these things. Here's what I've worked on over the last month.

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

The documentation site on the [docs branch](https://github.com/tp-link-extender/MercuryCore/tree/docs) has been updated with articles on installation of certain tools and further integration guides.

I've been experimenting with different ways to start up and manage Mercury's external services, mainly the Database and Economy service. This has usually been done with Docker, which is great when it works though often has issues on machines with poor support for virtualisation. Starting each process independently is difficult to manage. I tried using [my own tool](https://github.com/Heliodex/execxorcist) for this, which worked surprisingly well, but would shut down if its parent terminal was closed. Recently I tried [Nomad](https://developer.hashicorp.com/nomad), which worked better than Docker but still seems overkill for a project like Mercury.  
The solution I'm beginning to explore is simply having the Site start up the Database and Economy services directly, or whenever it needs them. This seems like the most straightforward option and will simplify a lot of documentation relating to their usage in both development and production environments.

A rewrite of some of the Site's backend functions is due, given that SvelteKit's [remote functions](https://svelte.dev/docs/kit/remote-functions) feature has just been fully released. This will likely make loading data to the client-side a lot easier and simplify the logic for doing so. Big thanks to the SvelteKit team for this!

In terms of the Mercury 3 client, its development is effectively complete, with a number of small patches still to be finished. After this, Mariner (the DLL hook) will be further worked on with aims to re-enable features in the client and allow them to work with Mercury Core.

## [Coputer](https://github.com/Heliodex/coputer)

Coputer's first gateway is hosted at [coputer.heliodex.cf](http://coputer.heliodex.cf), and the first program at [first-h2lk2orlh-cctfxch0x-5yd7n93mg-zxmn64hy4-wfe6s2l9z.coputer.heliodex.cf](https://first-h2lk2orlh-cctfxch0x-5yd7n93mg-zxmn64hy4-wfe6s2l9z.coputer.heliodex.cf). The first program uses a custom layout system based on HTML and inline CSS to integrate nicely with Luau's syntax, and also shows some information on how different parts of the Coputer system interact with each other.

More VM optimisations have been made to Litecode, mainly starting by benchmarking basic functions in the standard library. Through this, I found that some custom functions, notably float32 mathematics, were actually slower than simply using the standard library and converting between number types. I hope to keep benchmarking larger functions until some noticeable performance improvements are made.  
Some fixes have also been made to error messages in files which require other files, which previously sometimes resulted in every point in the error stack erroneously referring to the same file.

Interesting experiments are being carried out in the [ast branch](https://github.com/Heliodex/coputer/tree/ast) of the repository, with an implementation of Luau's AST node structure, parsing the JSON output of `luau-ast` (During this, I found [an issue](https://github.com/luau-lang/luau/issues/1932) with Luau's JSON serialisation which was fixed in 685. Pretty cool!). The node structure still needs some more refinement to have enough detail to be useful for anything.

While waiting for release 685 to come out, I also wrote a working Luau lexer, passing all of the reference implementation's tests. I planned to work on a parser implementation next, though this would be a significantly more complex undertaking.

## [Sprig](https://github.com/Heliodex/sprig)

I've had some fun writing more on my custom Sprig firmware, which now handles button presses and screen rendering through an event loop, with improved screen drawing routines. One of the problems with the Pi Pico used to power the Sprig is its low RAM, and allocations larger than a few kilobytes regularly cause crashes. I've been considering souping up the Sprig with a Pico 2/Orpheus Pico/other microcontroller to help with this, which would be a fun project.

I'd like to write a small game engine for native (probably in TinyGo) games. I could also look into whether it would be possible to embed an interpreter such as Litecode, given that Spade, the reference Sprig firmware, did this with JerryScript. AtomVM using Erlang/Elixir/other BEAM languages could also work instead of TinyGo, though I'd need to write an st7735 driver before being able to get display output.

---

I've also been learning Erlang over the past month at [Heliodex/erl](https://github.com/Heliodex/erl), which is a surprisingly cool language. The project I'm writing is a Luau VM similar to Litecode, though only the deserialiser is finished at the moment. Currently I'm writing everything in a very procedural style like using recursion for loops, so I'll try to incorporate more of the built-in library functions as I continue learning.

Eh that's kind of it. For a bit I wasn't feeling like working on any of my projects and was considering looking for a new one, but Mercury 3 has recently popped back out of its "on hold" state, so I'll hopefully be able to do some more work on it soon.
