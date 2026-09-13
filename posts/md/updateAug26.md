---
{
	"title": "Heliodex project update – August 2026",
	"summary": "Updates to my projects for August 2026",
	"created": "2026-09-12 20:16 UTC-4",
	"updated": "2026-09-13 02:09 UTC-4",
	"tags": ["monthlyupdate"]
}
---

Goodness, I could barely even find time to write this update. My summer holidays had been cut short for various reasons, and the summer has now ended along with it. Here's a smattering of projects which I was working on throughout August.

## [Mercury](https://github.com/tp-link-extender/MercuryCore)

Development of Mercury's 2016 Client and Studio continues. We are planning to move the gameserver VPS to Windows (😒) to fix some stability issues with Wine. We've also been considering getting the client working on the PS Vita, which would be hilarious. Apparently it's possible to get running on the PS4 as well, though neither I nor Taskmanager have a PS4 to test on.

The trailer is continuing to be worked on with various new scenes and additions, albeit slowly.

Given the shortest section on Mercury in a while, you may be able to tell that I haven't had as much time as I'd like to work on it. Nothing much else I have to say here.

## [Power Tools](https://github.com/Heliodex/PowerTools)

Power Tools is a Hack Club programme which I ran for a few days starting on 18 August. Any users who built a simple Javascript framework, frontend tool, or something else to help them work in web dev would win a grant in cloud credits as a prize, $5 per hour they spent on their project.

I advertised the event in certain advertising areas for You Ship, We Ship (YSWS) programmes, as well as in a few Discord servers including Mercury's. The programme received some attention from people interested in participating, though ended with no submissions. I received some valuable advice from other programme creators as to why, including:

- Marketing could have been better
- Event too short for the given task
- Landing page & hook should have been more engaging
- Friction introduced by tracking time with [Lapse](https://lapse.hackclub.com)
- Task seeming like it would be difficult to know where to start

This final point was despite the fact that the website featured a [guide](https://github.com/Heliodex/PowerTools/blob/main/src/routes/(any)/guide/%2Bpage.svelte) intended for people with some experience in Javascript.

However, what I did end up with is a decent website frontend and backend which I could use as a foundation for future projects. I took some pieces from [OpenBlox](https://github.com/Heliodex/openblox) to make this (since there's no hope for OpenBlox anymore), and now I can steal pieces from this for future projects. As such it's a Mercury Site-style stack with SvelteKit & SurrealDB as well as Tailwind.

Power Tools was live at [powertools.hackclub.com](https://powertools.hackclub.com).

## [Defector](https://github.com/Heliodex/Defector)

Defector is another Hack Club programme which began on 28 August and is ongoing. It is an online Prisoner's Dilemma-style tournament where users submit Javascript bots and battle each other with a live-updating leaderboard. Users can then submit their bots and tracked time to win $4 per hour spent working on bots, and up to double that for higher positions on the leaderboard!

I chose the idea partially because I thought it would be interesting and because it would be cool to run a Prisoner's Dilemma competition of my very own, though mainly because an AI agent pointed it out specifically as the most likely to generate engagement out of a long list of ideas. This seemed to work, with dozens of users, submitting hundreds of bots, battling hundreds of thousands of times.

I'm really happy with the engagement it's getting, especially compared to Power Tools, and am honoured by the comments of people encouraging for me to run similarly exciting programmes in future or saying they want the website to stay up after the programme ends.

The [live leaderboard](https://defector.hackclub.com/leaderboard) was painful to implement and get working decently well, though this paid off as it's the centrepiece of the site and strongly influences the rewards of participants.

Most of the calculations for scoring and battle wins are done directly in SurrealQL. Due to how dynamic the original implementation of this was, it resulted in many instances of eating 32 GB of ram and pages getting very slow after about 5000 battles. With many optimisations and caching improvements, the site is now still relatively snappy with over 500 000 battles. It is causing a high level of strain on my server at the moment, though.

The first implementation of scoring was an Elo system based on which bots won a match. This ended up with always-defect bots (which never lose a match, only winning or tying) dominating the leaderboard. Then I changed it based on expected outcome and continued tweaking the Elo system, eventually landing on something decent though confusing, since winning a match against a bad bot could cause your score to decrease if you didn't win by as big a margin as expected. There were also difficulties with keeping the Elo around 1000 rather than heavily inflating or deflating over time.  
Eventually this was replaced with a usual average score system, then the average score over the last 200 played rounds. I'm considering shaking up the score matrix, since participants are looking for more competition, and the system allows this easily.

Originally there was just [1 guide](https://defector.hackclub.com/guide/writing-a-bot) on writing a bot, though I later added [a 2nd](https://defector.hackclub.com/guide/js-for-bots) due to popular demand (for real this time). The 1st focusses on basic strategies and building a bot that meets the required format, whereas the 2nd focusses on more advanced strategies by taking apart more complicated bots, and also teaches some useful JS syntax constructs for those coming from other programming languages.

Participants are submitting their hours and tracked time for review, which I will need to complete sometime this week. It's supposed to have already ended, so I'm extending it for a week or so to allow more time for people to submit their hours and bots, or fix their submissions once I review them.

You can check out Defector now at [defector.hackclub.com](https://defector.hackclub.com)!

---

The main reason for my increased busyness, and also my number of Hack Club-related projects, is that I now work at Hack Club! (yes, I actually got a j*b) If you know anyone who is (1) aged 13-18, and (2) interested in making things, then refer them to Hack Club, since it's a great place for them to learn, grow, and connect with other like-minded teens. If you know anyone who has money burning a hole in their pockets, why not ask them to [donate to Hack Club](https://hackclub.com/philanthropy)? A portion of proceeds goes towards paying my salary!

I've replaced GitHub Copilot with [OpenCode Go](https://opencode.ai/go) as my main agentic programming tool, and it's undoubtedly the best set of crutches I've ever used. Yes, Hack Club has a heavily discounted non-profit Claude subscription, though I still think OpenCode Go is a better deal with the variety of models it provides. The main models I use are:

- DeepSeek V4.1 Flash, if I want something good and fast
- GLM 5.3 Flash, if I want something clever though slow
- Muse Spark 1.3, if I want maximum intelligence at the cost of all of my data for Meta AI training runs

With these models it's actually difficult for me to hit usage limits on normal tasks, so I share API keys for my account with a couple of other trusted (read: too dumb to do any damage) people.

That's what I've been doing over the last month. Seeya in the next one, and hope you have a good rest of your September!

