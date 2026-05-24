---
{
	"title": "Heliodex project update – May 2023",
	"summary": "information about projects by Heliodex for May",
	"created": "2023-06-03 03:46 GMT+1",
	"updated": "2023-06-03 03:46 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Hello again! My qualifications for this year are complete, so I'll be able to put more work into more projects throughout the upcoming holidays.

## [Mercury](https://banland.xyz/)

Mercury has recently introduced a new asset management system, and we're phasing out the original "Items" system previously present in the Avatar shop/Catalog. A basic avatar picture system was added, though we're working on a better system that allows rendering via the RCCService.

We've recently accepted new beta testers, and will likely be doing so monthly from now on.

## [Reviso](https://reviso.ml/)

I haven't touched the project in a while until recently, when I reworked question handling to use simpler formatting in the questions YAML file.

Obviously it would be nicer to have more questions and subjects, but adding better categorisation and filtering would also be great. I possibly could make the entire website an SPA, which would probably be a better option (it's currently on Netlify, so every request uses an edge function).

## [Elemental](https://github.com/heliodex/elemental)

This is a new project I've begun work on, as a revival of [Elemental Android by GoVed](https://github.com/GoVed/elemental/), which in turn was based off [Elemental 3 by Carykh](https://htwins.net/elem3/), itself inspired by [Doodle God](https://doodlegoduniverse.com). I'll probably rename my version to "Elemental Re(born/vived/loaded/furbished)" to avoid confusion.

The project will be smaller in scope than Mercury, but it's my first time releasing a project for desktop, web, and mobile, so hopefully everything works out.

I'm building it with [SvelteKit](https://kit.svelte.dev) as well as [Tauri](https://tauri.app/), which I've been wanting to try for a while. I'm still undecided on what the backend will be written in, though tRPC or GraphQL would be cool for an API layer, and SurrealDB would be epic to use as a database if it's production-ready.

---

I've even started some other projects that I will hopefully be able to talk about soon too. Hopefully I'll be able to keep up my Github contributions streak too!
