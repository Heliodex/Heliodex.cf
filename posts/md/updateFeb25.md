---
{
	"title": "Heliodex project update – February 2025",
	"summary": "Heliodex monthly project update for February 2025",
	"created": "2025-03-10 01:08 GMT",
	"updated": "2025-03-10 01:08 GMT",
	"tags": ["monthlyupdate"]
}
---

Spring has sprung, the grass is ris. I wonder where the monthly project update is? Welcome back all.

## [litecode](https://github.com/Heliodex/coputer/tree/main/litecode)

Litecode is in the process of being rebranded! The name "litecode" will now only be used for the VM, standard libraries, and execution system. This means that the rest of the project, what I'm coining the "communication system", will be separate, and will communicate with the litecode execution system over a(n internal) network. Litecode will handle the execution and return of programs and their results, and should cancel them if they run for too long.

The combination of the execution system, the communication system, the protocols they rely on, and the network of these systems communicating with each other is being rebranded as follows.

## [Coputer](https://github.com/Heliodex/coputer)

Coputer is (well, hopefully will be) a collaborative execution environment for Luau programs. This is the end goal I had in mind for the litecode VM.

Anyone should be able to run a coputer and anyone should be able to request coputation (lol) resources from coputers. More specifically, users (identified with a public key) should be able to submit Luau source code to any coputer with mutual trust, and the coputer should be able to execute the code and return the result. All communications will be encrypted and authenticated, with minimal (preferably no) metadata leakage. Coputers will store submitted programs so they can be executed again without retransmission by any user who has the program's hash, and also cache the results of executed programs.  
Management of trust could be done manually through, for example, a web admin interface, or by automatically balancing the amount of coputational resources used.

We'll need to sacrifice determinism in litecode at some point, as the system won't be useful if it can't interact with the outside world. Coputers should also be able to function as gateways, so that program execution results can be requested from people outside the network (eg. to build a web service, where the results of a program are returned as a response to a HTTP request). The simplest way to do this would to have request parameters be passed as arguments to the program, and the result be returned as the program's return value. Serialisation also needs to be worked on, as it would be nice to have something to losslessly convert between litecode values and raw bytes.

Overall, the system seems exciting though a lot is still to be designed and implemented. Yes, it's a solution to problems that don't exist, but it's a cool solution.

---

Coputer is the main project I've worked on this month. It's strange put this much work into something that doesn't have a use case, until I realise that none of the projects I've worked on have ever had a use case. Oh well, see yous next month!
