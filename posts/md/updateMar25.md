---
{
	"title": "Heliodex project update – March 2025",
	"summary": "Another monthly update to Heliodex projects for March",
	"created_at": "2025-04-10 20:27 GMT+1",
	"published_at": "2025-04-10 20:27 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Happy holidays! The year is Marching on, so I hope everyone is doing well; here's some updates on the projects I've been working on.

## [Coputer](https://github.com/Heliodex/coputer)

Coputer now features a number of 'program types' for programs to accept and return certain values. Current program types are as follows:

- Test programs, which take no arguments and return nothing, for the purposes of debugging Litecode
- Web programs, which take a few web request parameters and return a web response

Maybe library programs, to be `require()`d by other programs, would be cool as well, though type-safety may be difficult there. I'll mainly focus on web programs for the next while as they're a rare tangible use case. They should be accessible through 'gateways' that interact with the communication server, for example at {program hash}.gateway.example.com. The program hash would have to be in the subdomain for [cookie security reasons](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#security), though this makes things slightly more difficult for local environments.

This system comes with some qualms regarding updating a program once it is put live, so some system based on public keys could be used instead, for example {public key (part after the ':')}.gateway.example.com/{program name}, allowing for a program to be updated without changing its identifier while keeping similar security properties.

In the coming month, I hope to get further testing for web programs, and a basic implementation of the gateway system so that the web programs can be tested in a real environment. A development mode would also be nice to have to allow for programs to be reloaded whenever a file is changed. Hot reloading would obviously be awesome to have for Litecode, though since the Luau compiler isn't incremental, this might not be entirely feasible. Impact of this should be minimal though as each web program only serves one request in its lifetime.

## [confetti-go](https://github.com/Heliodex/confetti-go)

This is an implementation of the [Confetti](https://confetti.hgs3.me) configuration language I got nerdsniped into writing during one lunchtime, mainly due to the language's remarkably simple typeless design and extremely flexible syntax. All [specification annexes](https://confetti.hgs3.me/specification/#_annex_a_comment_syntax_extension) are supported, and the implementation passes the comprehensive test suite.

At the moment, the implementation isn't particularly usable as either a library or standalone tool, though I plan to improve on these in the near future. I'd also like to expand this with other aspects, such as a formatter, syntax highlighter, or schema-based checker. Implementations in alternative languages like Typescript or Luau would be cool to work on too.

---

Enjoy 4/20 and the rest of your holidays, if you have them. I'll have another update baked in (about) a month!
