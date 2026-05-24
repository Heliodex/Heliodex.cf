---
{
	"title": "Heliodex project update – June 2025",
	"summary": "Monthly Heliodex project update for June 2025",
	"created_at": "2025-07-13 18:45 GMT+1",
	"published_at": "2025-07-13 18:45 GMT+1",
	"tags": ["monthlyupdate"]
}
---

Hey all, welcome to another project update. I've been inside drinking plenty of water and writing plenty of code recovering from the unbearable Scottish summer heat of over 15°C.

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

At the moment, I'm working on 2 branches in the Mercury Core repository: [assets](https://github.com/tp-link-extender/MercuryCore/tree/assets) and [docs](https://github.com/tp-link-extender/MercuryCore/tree/docs). The **assets** branch contains some updates to the Economy service, allowing it to handle asset transactions for limited and unlimited assets. It also reduces the complexity of currency by making stipends constant and removing fees, which may destabilise the economy somewhat, but we'll find that out in the future. The **docs** branch contains a basic documentation site for Mercury Core and related services, which is still a work in progress. As outlined in [#389](https://github.com/tp-link-extender/MercuryCore/issues/389), I'd like to continue adding to the site over the course of Mercury 3's development in terms of documentation, guides, and tutorials.

As for client development, we have more progress done on the DLL hook, however client development will be on hold for a bit until we can fix some technical issues.

## [Mercury Launcher](https://github.com/tp-link-extender/MercuryLauncher)

After 11 months I revived my F# learning project, and we now have an installer and launcher for the Mercury client. The repository also features a basic setup deployer, which might not be as fast as previous iterations but is a lot simpler and easier to use, as well as actually working on platforms other than Windows! On first launch, the launcher registers a URI that can be launched from the site, and installs the latest version of the client if it is not already installed. Updating and removal of old versions is also implemented.

The deployed client folder is tar.gzipped, which seems to work okay, with a total final size of about 80MB per deployment. I've been interested in using an alternative compression method/format, though they each come with their various tradeoffs.

The project is designed to be fairly configurable, and in future should allow easy changing of URLs and window styling to support multiple revival platforms.

## [Coputer](https://github.com/Heliodex/coputer)

Gateways are finally happening! A basic implementation is complete, requesting programs from the communication system and allowing Coputer to serve its first ever webpage. This makes the Coputer network the most overengineered web server ever.

Gateway URLs have been changed to {program name}-{creator PK}.gateway.example.com, instead of the previous possible double-subdomain approach. This is to prevent issues with TLS wildcard certificates. Dynamically generated certificates could have been used, but they added a significant amount of latency for the first request to each program, and may have introduced security issues.

Wallflower now features a transfer protocol between other communication systems, based on QUIC. It was originally intended to be based on UDP, but it turns out that this would have been more difficult due to the 64KiB datagram size limit and lack of reliable packet ordering. QUIC streams, with length-prefixed messages (yeah, we can hide their size in future), ended up being a lot more flexible and reliable.

There's also some potential here to use TLS 1.3 as the only encryption for the network, as currently each node uses a (slightly scuffed) self-signed certificate on top of the encryption of every message. Bidirectional QUIC streams could also be used, as currently each stream is unidirectional, responding to messages by streaming it to the addresses included in the message rather than the QUIC-specified sender.

Program storage messages include the creator and a signature, so that a program can be distributed by anyone rather than just the creator, and at the moment this signature is verified but not stored by the execution system.

Upon requesting a program from a communication system (and by extension, a gateway), it will ask its peers for the program if its execution system doesn't have it. The peers can now all respond with an empty **RunResult** message if they don't have the program, allowing the communication system to return an error to the client rather than just hanging forever. However, this situation still happens if a peer fails to connect or respond, as the Net implementation (in production, the new QuicNet) has no way to notify the communication system of this, as the raw message receive channel only allows encrypted and signed messages to be sent. This could be solved with a timeout mechanism, an additional error/local communication channel, or marking messages in the existing channel as internal or external. 

There haven't been any major changes to the VM this month. Hopefully I'll be able to get the first ever Coputer program hosted soon, likely through a gateway hosted at [coputer.heliodex.cf](https://coputer.heliodex.cf).

## [Execxorcist](https://github.com/Heliodex/execxorcist)

Achieving my goal of running processes in the background will probably be a bit more of a challenge than I thought, as in Windows, subprocesses are also killed if a terminal containing the main process is killed.

Commands can now be given names, and listed in a configuration file for easier starting/stopping/killing. The working directory for commands can also be set.

---

It's been a slower month for Mercury Core, but quite a lot of progress has been made with Coputer and the Mercury Launcher. Once I get Coputer's services hosted I'll be able to show it off to others, so perhaps some people in the Luau space will find it interesting. See you all in the July update!
