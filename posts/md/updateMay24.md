---
{
	"title": "Heliodex project update – May 2024",
	"summary": "May 2024: more updates for projects by Heliodex",
	"created": "2024-06-07 23:10 GMT+1",
	"updated": "2024-06-07 23:10 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Once again that time of the year has arrived, I'm now finished with my qualifications and will be working throughout the upcoming holidays on various projects. Welcome back!

## [Mercury](https://mercury2.com)

Mercury has returned from its hiatus! New applications are being accepted, albeit at a slow rate as we are a little swamped with the backlog.

Highly anticipated client development is continuing, with more focus on DLL hooking. This may take a while, estimated at 1-4 weeks, but will bring additional QoL improvements and anti-cheat. In the meantime, for the website we'll soon be merging a number of commits improving integration between the backend and database into production.

Once the client and studio are back up and running, further development for the Melt toolchain is probably in order. Stay tuned for more updates!

## [nocte](https://github.com/Heliodex/nocte)

I tried making elliptic curve cryptography in Luau, it ended up very slow so for the time being I'm interfacing with a small external Go program to do the heavy lifting. For the rest of the system, NIP-01 integration is going well. We have validating of `EVENT` and `REQ` messages, and soon we'll need streaming `EVENT` messages to clients and data persistence.

> "Building dreams has always been my way, making time and living for the day  
> Burning bridges never made me cry, I could walk away with no goodbye..."

I've wanted to give back to the Nostr ecosystem even before I posted my first event, which come to think of it was just under a year ago. Nostrversary soon, keep on BUIDLing!

## [ORC Document Archive](https://orchives.heliodex.cf/)

The ORC Document Archive has also returned from its (checks notes) 4 month removal, and it will stay returned as long as you nerds can behave yourselves. Expect a couple more documents in the near future.

---

If you've noticed activity in the [F-sharp-testing](https://github.com/Heliodex/F-sharp-testing) repository, that's me now actually finding F# really interesting and nice to work with, despite my inexperience in .NET UI. I'm still waiting to see if what's happening there will go anywhere, though I'm still using the more familiar Wails-based Go + Browser UI for a tangentially related project.
