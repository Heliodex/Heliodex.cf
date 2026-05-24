---
{
	"title": "Heliodex project update – December 2024",
	"summary": "Changes to Heliodex projects for the end of 2024",
	"created": "2025-01-14 23:55 GMT",
	"updated": "2025-01-14 23:55 GMT",
	"tags": ["monthlyupdate"]
}
---

Happy new year! Small update from the end of last year here.

## [litecode](https://github.com/Heliodex/litecode)

Litecode is, solely for the purposes of the larger project I would like to use it in, nearing completion. I ought to change the tagline to something other than "Semi-working Luau bytecode interpreter" at this point lol

I'm taking full advantage of the fact I can break compatibility with the reference implementation in a couple of places. The interpreter now features a faster, simpler, and lighter implementation of tables, at the cost of a few tiny edge cases being different with vanilla Lua/Luau. Bugs are sometimes difficult to track down because of little debugging/error handling support at the moment, though the steadily growing test suite helps a lot with this.

We also now have some benchmark programs to test the speed of the interpreter for optimisations, though I haven't been able to make much progress on that front yet, apart from the aforementioned table implementation, which improves the interpreter from 10-20x slower to more like 1-2x slower than the reference implementation for big tables.

---

Thank you all for [a second year of project updates!](https://gist.github.com/Heliodex/7f306ee2142111ad4f2f2fb862006282) (a month late? I'm not sure) I hope to have a lot more to show in 2025, and find a new 'large' project to work on after Mercury Core.

Not much else I really worked on this month. The only other thing I can think of is the prototypes for a revival server-listing site that was mentioned in the Mercury Core Discord server, which are still in their early stages. I'm still working on learning Flutter for the apprenticeship I'm doing, which works the best out of all the libraries/frameworks I've used previously for desktop user interfaces, though the library itself does feel very 'heavy' to me.
