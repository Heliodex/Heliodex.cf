---
{
	"title": "Heliodex project update – November 2024",
	"summary": "Update for projects by me for November 2024",
	"created_at": "2024-12-14 07:15 GMT",
	"published_at": "2024-12-14 07:15 GMT",
	"tags": ["monthlyupdate"]
}
---

Sup. Hope you're all excited for this epic completely regular post about the progress of what I'm working on.

## [litecode](https://github.com/Heliodex/litecode)

I've been steadily stabilising litecode's interpreter and continued work on the standard library. math and table libraries are now complete, and I have some functions working on the string library.

However, I'm unsure I'll be able to match the compatibility of the reference implementation, especially given that what I'm building might not even be considered Luau anymore. Most deprecated functions have been removed, math.random/randomseed have also been taken out, and the string library, the most complex so far, I'm only planning on implementing about half of.  
Relating to randomness &ndash; I'd like determinism to be a priority, as this would be extremely useful for the larger project I intend for it to be a part of. Relating to the string library &ndash; A lot of the stuff relating to iterators I just don't like that much, string packing/unpacking can be done with buffers instead, and the (actually really good) reasons why pattern matching exists in both Lua and reference Luau aren't relevant in litecode. I plan to replace patterns with some improved matching system (regex would be nice but not enough of an improvement).


Performance optimisations still need to be made. litecode is, give or take, 5-20 times slower than the reference implementation. I don't know how close I'll be able to get to it, but there are some easy low-hanging fruit to grab here (eg. loads of use of reflection, no fastcall optimisations, unnecessary type conversions, etc).  
I'll try getting some real benchmarks for this done as well, so I can start work on optimisations.

## [Heliodex.cf](https://heliodex.cf)

The website still has plenty of egregious spelling mistakes that I'll get around to fixing, uh, eventually. However, the new font and branding have been applied to all of the [banners](https://files.heliodex.cf/img/HeliodexBanner3.png) on my active profiles. Mostly was just waiting until this was finished before publishing this update.

---

I also ended up doing a bit of work on Mercury Core, though the lack of care I've given to the project and its dependencies has meant it's finnicky at best to get working. I'd love a simpler system to get it working, as was the original goal for the project, though I can't really envision any better ways at the moment.  
For my [FA Software Development](https://github.com/Heliodex/FA-Software-Development) course, I did a little bit of Go web development which was very interesting, and beginning to learn Flutter for mobile development.

Anyway thank you all for the final update of 2024, and I'll see yous next month (year)!
