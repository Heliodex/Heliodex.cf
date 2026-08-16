---
{
	"title": "So you've been Hackatime banned",
	"summary": "Details on what to do once you get banned from Hack Club's programmes by the Fraud Squad",
	"created": "2026-08-14 18:30 GMT",
	"updated": "2026-08-14 18:30 GMT",
	"tags": []
}
---

*Need urgent assistance? Skip directly to the [guide](#how-to-get-your-account-back)*

So you've just been banned from [Hackatime](https://hackatime.hackclub.com/) due to "suspicious activity", principally fraud. Calm down. Calm down! Cal- YOU CALM THE FUCK DOWN!! Okay, okay, after your ban you were probably also sent a direct message on the Hack Club Slack from an app/bot titled "Fraud Squad" (or in some older cases, "Fraud Department") similar to the following:

> "This is the fraud team. An investigation into your projects and hours was conducted, and we've found clear evidence of hour manipulation and inflation. As such, you have been banned from Hackatime and all current and future Hack Club YSWS programs."

or something similarly scare-worthy. You've probably had some orders for prizes in a YSWS programme get rejected. Finally, you've probably been sent a link to [fraud.hackclub.com](https://fraud.hackclub.com), which basically just informs you that you apparently did fraud and that's bad. However, it does contain this section at the end:

> "It's completely possible that this ban was done in error. We're all humans, and sometimes we misjudge Hackatime data. If this was the case, we would like to see some proof that you were truly working honestly."

detailing the fact that the Fraud Squad "occasionally" makes mistakes, as they've done with you. Well, if they didn't make a mistake and you have actually done fraud, this post probably won't be very helpful for you, see the [What to do if you actually did fraud](#what-to-do-if-you-actually-did-fraud) section near the end of this document for more information.

You never thought it would happen to *you*. So what to do now? You've been given a ban and sent strikingly little information on what to do to get your ban lifted and your account returned to its normal state. Since you're reading this, you're clearly interested in getting your account back rather than just giving up and immediately leaving the Hack Club community, or at least you want to let the Fraud Squad know their mistake before you exit on your own terms.  
Moreover, if you ask anybody for help, they'll just tell you to "contact the Fraud Squad", probably also assuming you're one of those dirty good-for-nothing fraudsters. They won't help you, because nobody wants to be seen as someone who helps fraudsters, right?

No more! This is a (possibly the *only*) guide on exactly how to recover your Hackatime account from a fraud allegation and bring your status in Hack Club back to its former glory. It's a list of everything I and some others I've talked to wish we'd known before our encounters with the Fraud Squad. Nothing is withheld from this guide, nor need it be given that it's all public information anyway.

## How to get your account back

The first few steps of this guide are extremely time-sensitive.

**YOU MUST** follow these instructions immediately, *strongly* preferably within 5 or 10 minutes of receiving the message from the Fraud Squad. If you're at your PC at the time you receive the ban, you'll have an advantage in these steps.

### Step 1: Damage control

**DO NOT** send *any* messages in the Slack during the first few steps. I would also recommend setting your slack status to "away", which you can currently do by pressing your profile picture in the bottom left corner and selecting "Set yourself as **away**" in the context menu that appears.

**DO NOT** log into Hackatime, HCA, or any Hack Club services yet, including any YSWS programmes, especially so if you were banned from one specific YSWS, and do not navigate to any pages for these programmes if you are logged in.

**DO NOT, ESPECIALLY DO NOT** message or respond to the Fraud Squad **at all** until I say it's safe to do so!

It's likely that most of your Hackatime projects are hosted in Git repositories. See if you can find a list of them, without logging into Hackatime of course. If you can't, you can access your Hackatime profile if it's public at **hackatime.hackclub.com/@{username}** or **hackati.me/@{username}** in a private window or similar.

Once you have the list, head to the forge where each is hosted. This will probably be GitHub, GitLab, or whatever selfhosted nonsense you have. Check if any of them are private, and if they are, make them public immediately, even if you make them private again after this whole ordeal is over. In fact, I'd recommend making as many of your projects public as possible even if they're not connected to Hackatime, to ensure that no projects you've submitted to any programmes are hidden or private, so your profile/projects list can be seen more as a place for credible evidence, and also for a super secret 2nd reason I'll explain later.

**DO NOT** make *any* new commits to these projects yet! If you have existing commits on your local machine that haven't been pushed yet, push them (unless you have the GitHub app enabled on a Slack channel, which will track that you've done this). Withhold from pushing any commits that were made after the time of your ban for now.

If your projects are hosted online, though not in Git repos, still make them public.

Stop reading and do this **NOW**. If you have 2FA enabled on your account for whatever forge you use, grab your 2FA device too because you'll probably need it. Come back here when you're done. GO!

### Step 2: Retain project proof

The project pages and their history, whether in Git or another version control system (VCS), are extremely valuable evidence and you need some more proof to back these up.

Head to your favourite public web page archiving tool, probably [web.archive.org/save](https://web.archive.org/save), and save the project pages of all your projects, or at least as many as you can until you hit any ratelimits.

That's basically it, come back when you've completed this.

### Step 3: Gather evidence

The evidence that's most valuable to the Fraud Squad is file edit history, also sometimes called file timelines, not to be confused with Git/VCS history. If you use VSCode or a VSCode-based editor, head to the path of your history folder. As mentioned on the [fraud.hackclub.com](https://fraud.hackclub.com) page, this is located at:

- Windows: **C:\\Users\\{username}\\AppData\\Roaming\\Code\\User\\History**
- Linux: **~/.config/Code/User/History**
- MacOS: **~/Library/Application Support/Code/User/History**

Replace "Code" in these paths with the name of your editor. If you're using Code Insiders, it's "Code - Insiders". Zip the directory (normal zip, not 7z/gz/xz) and give it a name like **History-{editor name}-{pc name}.zip**. Move this file into a new folder to collect it. Do this for all editors you use on that machine, regardless of whether you have Hackatime installed on them or not. Now do this for all machines you've edited code on. If you can't access a machine you've coded on to get the history, ignore it for now and we will deal with it later.

If you use a different editor, find out how to collect the local file history data if it's supported. If it isn't, don't worry, there's other evidence you can use.

Next, any videos or screenshots of you writing code which you have saved locally will be useful to collect. If you use Lapse and have your timelapses public, download them from there, of course without logging in. Your lapse profile can be found at **lapse.hackclub.com/user/@{username}**, again through a private window or different browser.

Finally, due to how WakaTime/Hackatime labels statistics for code written/edited when an AI agent or chat editor is working, it's useful to collect as many transcripts of your agent sessions as possible. This will of course depend on your agent harness. Collecting these as Markdown files with accurate timestamps should be enough.

Editor history and videos will be the most useful forms of evidence. The Fraud Squad may refuse to review screenshots and agent sessions based on the case, though I suggest gathering them anyway. Collect all the evidence you have into a folder, with zip files for each editor instance's history, one for your screenshots, one for your videos, and one for any agent sessions. Return when you're done!

### Step 4: Send the evidence

Find your DMs with the Fraud Squad bot, write a message saying simply "Hi, here's the editor history, screen recordings, screenshots, and agent sessions to prove the legitimacy of my tracked time." or something very similar based on what evidence you have. Then attach all of your zip files. If you don't use VSCode or a derivative editor, append "I use {editor} instead of VSCode, is there any evidence from it which I can provide?". Keep your messages as close as possible to the formats I've given here.

Now hit send. Do it.

Lean back, take a breather. Check your posture and fix it. That's all the immediately urgent stuff done. The Fraud Squad won't respond to you immediately, or they will send you a generic "We’ll take a look soon and get back to you". The rest of this process will take some time.

Set your Slack presence back to normal. Look out your window; gosh, is it supposed to be that bright now? Get some food, drink plenty of water, get some sleep or otherwise rest if you can. Feel free to write some code for your projects and go back to making commits again &ndash; if you've got a streak to keep up, you don't want it to break because of some dumb false ban; Hackatime will keep recording data even if your account is suspended.

You can log back into Hack Club services now, check the websites for any YSWS programmes you're participating in and see which ones you're banned from. You can send some messages in the Slack now.

**DO NOT** talk about your ban or suspension in public/private channels on the Slack while your case is ongoing. Anything you say can and will be used against you, even things that are obviously not confessions or incriminating.  
Other people might question why you haven't added a devlog to your project today (because you can't cuz you're banned); you don't have to explain yourself to anyone other than the Fraud Squad. Why not say something like "I was busy with other stuff" or "I'm on a camping trip with bad signal" or "I got lost in a cave with amazing WiFi though it blocks *.hackclub.com domains"?

**DO NOT** interact with any people whom you know are members of the Fraud Squad or working on the event you were primarily banned from beyond the minimum necessary during your case. Only ever talk about fraud with the Fraud Squad bot for now.

**DO NOT** spend any money from grant cards you have. It's recommended to log into HCB and freeze all of them for now as well.

**DO NOT** question anyone else regarding any other delayed or disrupted fulfilments for prizes you've ordered.

### Step 5: Know your opponent

The tone of this guide will change to be a bit more light-hearted now, though you're still playing a serious and pretty high-stakes game here. This requires strategy.

The job of the Fraud Squad is not to be fair or just or even to investigate your case at all. Though these often do happen, they're just instrumental goals to their actual primary job. Their primary job is to save Hack Club money by preventing fraudsters from claiming prizes and grants. In their view, you're a fraudster because you haven't been proven innocent yet. They do actually catch real time tracking hijackers; you're not alone in being caught in the crossfire. The definition of the word "fraud" in Hack Club is principally controlled by the responsible department, that is, the Fraud Squad. That's why I've been careful to use terms like "actual fraud" in this document.

The secondary job of the Fraud Squad is to keep people in the Hack Club community. This is also (not coincidentally) the primary job of the Fire Department, it's just that the fact is less well-known about the Fraud Squad. This is obviously because if people see fraudsters getting rewarded more than their own legitimate work gets rewarded, they'll become discouraged and leave the community. Equally, however, if some innocent person is a regular contributor and they get banned permanently or leave, Hack Club will have lost a valuable community member.

Before I was unbanned from Hackatime, I was told by the Fraud Squad that they still wanted me to be a part of Hack Club due to my "significant efforts in open source projects" (the sentence which is effectively the sole reason why I'm so vocal about the problems of the Fraud Squad to this very day). It's been 9 months since then and I'm still trying to figure out what on earth they meant by that. Regardless, it's clear that the Fraud Squad gives significant leniency to community members with stronger reputations, and perhaps this could even be considered favouritism; the good news is that it's easy to exploit this for your own benefit.  
Remember what I said earlier about a super secret 2nd reason for making all your projects public? Yeah, having a more stacked list of public projects is going to add to your reputation and correspondingly your perceived credibility.

All of the problems with the Fraud Squad are caused by their process and policy, not by the people that compose it. All of their staff are volunteers doing the best they can in an environment that's misaligned with their actual goals. As mentioned previously, seeking out these people and messaging them directly to request more information is a bad idea, because it will elicit nothing more than cookie-cutter template responses and warnings from the Fire Department for suspected harassment. This is why, when you're in a battle with the Fraud Squad for your account back, I don't think it's helpful to think of them as a team of individuals as much as a single entity. The team is so tightly constrained by the process that, when they talk to you, all you will hear is the process itself speaking. It's you versus the machine.

Soon enough you'll receive a response from the Fraud Squad bot, whether they've made a final decision or whether they need more information.

### Step 6: Responding

I don't know exactly what the Fraud Squad is going to tell you, so from this point I can no longer give you the exact text of responses to send. Instead, this step will focus on teaching you what they want to hear and what style to write in to best appease them. Your goal is to match the format of their process, and to make it as easy as possible for them to give you your account back.

**YOU MUST** send the minimum number of messages necessary to give them the information they request. Keep everything in one message per interaction if possible.

**YOU MUST** keep messages as concise as possible, bordering on curt. Leave no room for misinterpretation.

**YOU MUST** use correct and formal punctuation and grammar. This is going to be an extremely hard ask for most Hack Clubbers. Just do it. It's for your account, so make it seem like you're actually serious on getting it back.

**YOU MUST** keep your messages completely and utterly devoid of any emotion or semblance of such. Give minimal courtesy and only when required. If they give you some new information, nothing more than a "Thanks" at the beginning of your response is necessary.

**DO NOT** give them *any* details or files you haven't been asked for in these stages of the process. If you've followed these instructions exactly, you should have already given them everything they need.

The Fraud Squad may be clear about what their goal is and how they operate, however they are infamously cagey and secretive about the tools they use (most of which are not open source) and what information they use to make their decisions. I will get to why later on.

**DO NOT** ask for information on why you were banned or what patterns specifically were suspicious. If you get as little as a "discrepancies in the evidence provided" or "matched patterns strongly indicative of fraud", consider yourself lucky and don't question further.

**DO NOT** tell them that you know they can't give you any more information than they've already given you. Both you and them already know this, and it comes off as if you're trying to compromise, which will only work against you.

Once you send your messages, you'll receive details back in the usual form of weird kafkaesque sonnets with uninformative information. If they ask for more information, collect and send it immediately, matching previous formats and file naming schemes. If you need to, you can log into any Hack Club services hosting private/encrypted data (for example, unpublished Lapse timelapses) to download and send it.

**DO NOT** give the Fraud Squad any information they already know. This includes VCS commit history, devlogs on YSWS websites (you might not even be able to access these anyway), repo contents, and especially Hackatime heartbeats. You will clutter up the conversation & make them more annoyed with you, and they will tell you if you try to provide information they don't need or already have access to.

**DO NOT** use Slack reactions on any messages from the Fraud Squad bot. If they send you a confirmation that they're looking into something, don't acknowledge their acknowledgement at all.

If it's a particularly busy time for the Fraud Squad and they have a lot of cases to review, they will give you a timeframe for you to notify them in case they forget.

**YOU MUST** notify the Fraud Squad bot **immediately** upon this timeframe expiring. If they say it might be over 24 hours until they respond and it's been 24 hours and 1 minute since then or since your last notification, respond with a simple "Is there an update on the status of this case?" or similar. I'd recommend setting an alarm or a timed automated message to do this.

**DO NOT** make excuses about why your time tracking might look suspicious, since that will make you look suspicious. If you happened to have accidentally signed into the same Hackatime account on multiple editors or left your automatic keypresser on accidentally to keep your laptop from going to sleep or think your editor has a bug and is misreporting your heartbeats or someone is sending replay attacks to Hackatime while you code, don't tell them.

**DO NOT** comment on your own behaviour during the case. The classic "would a fraudster do what I did?" question is pointless and fallacious because anything that you do or say could also be done or said by an actual fraudster. Your answer will just be "yes". Why do you think the Fraud Squad even exists? Surprise, it's because people put great effort into defrauding Hack Club.  
The prizes given out by Hack Club give a strong incentive for bad actors to lie or try to deceive the Fraud Squad into unbanning them, and contrary to popular belief (as well as how much easier it would make their job), the Fraud Squad does not have a lie detector. The only actual way that the Fraud Squad has to differentiate between a real fraudster and an innocent contributor is the data you've already given them.

**DO NOT** try to threaten the person on the other side of the bot with anything, like claiming you can deanonymise them, saying you'll take legal action, planning to "hack this club"/bring up "very incriminating information" about Hack Club's "dark past", or saying you'll make an uncatchable fraud script and release it upon the community. Out of all the "do not"s here, this one's probably the easiest way to make your ban indefinite/permanent, regardless of whether the threat you're making is actually feasible.

**DO NOT, ESPECIALLY DO NOT** ever admit to committing fraud, even if they try to convince you to make a confession or apologise. If they ask you to send the script you used to manipulate your hours so they can analyse it, tell them there is no such script because *you didn't actually commit fraud*.

For you, it's now a game of waiting.

### Step 7: The decision

Eventually, the Fraud Squad will make up their minds and tell you whether your account is reinstated or not. There are a few possibilities of what can happen here.

1. All of your accounts get fully reinstated, including your hours, your trust level gets restored, and the Fraud Squad admits their mistake. If this happens to you, congratulations! You've survived the labyrinthine fraud ordeal and emerged unscathed. I'm so proud of you.

2. All of your accounts except for certain YSWSs get reinstated, though your hours, credits, prizes, and pending orders for those YSWSs are not reinstated. It means you'll remain banned on those specific YSWS programmes. This one's tougher.

3. Your accounts remain indefinitely unable to participate in any YSWS programmes, and your access to any unclaimed credits/prizes disappears along with this. You probably won't be removed from the Slack, though you will no longer be eligible for YSWS participation.

In the event of possibility 2, you may be told that your future projects will be held to increased levels of scrutiny. If this happens, make it clear that you are fine with your projects being held up to as much scrutiny as is needed. Additionally, if you still remain banned from any YSWS programmes excluding the ones that have been mentioned by the Fraud Squad, make sure to let them know to unban you from them as well, or alternatively contact those programmes' organisers for this.

In the event of possibilities 2 or 3, the Fraud Squad will explain what has happened and what they have reviewed, and ask if you understand the penalties and why they were given. The correct answer here is **no**, since the penalties aren't warranted for someone who didn't commit real fraud. State clearly that you can provide more evidence in future for proof of innocence if required and would like to keep the case open.

**YOU MUST** make it clear that you wish to continue following up on the case if the ruling made isn't in your favour.

After the decision and any other discussion and unbanning has been completed, the thread with the Fraud Squad bot will notify you it's gone stale and marked as resolved after 4-7 days. Once you receive this resolution message, wait an additional 7 days. If your accounts and hours haven't been fully recovered by this time, send a message asking for an update on the case status. Repeat through the previous steps as appropriate.

**DO NOT** request any more updates on your case or your ban decisions. This would just make you look desperate and uncooperative. Request exactly one (1) update, 7 days after the closure of the first thread, and do not follow up beyond this for the same case.  
Never be obstinate for the sole purpose of obstinateness. This will, perhaps somewhat predictably, not get you anywhere.

---

Okay, that's the end of the guide. The remaining parts of this post are a collection of other concerns that I personally think are strong contributing factors or at least somewhat relevant to why situations of false fraud accusation are still so common, and perhaps also some ideas on how to improve the situation.

## Why this process is the way it is

This isn't [#hc-members-againts-fraud-department](https://hackclub.enterprise.slack.com/archives/C09A4DV7ZRT), we all have an interest in improving the Fraud Department. I don't think it's the department of Hack Club that could cause the most potential damage if left unrepaired, though I do think it's the one most urgently in need of improvement.

### The bot

The Fraud Squad bot is the only point of most users' communication with the Fraud Squad. It's like Prox2 except evil, because it (sometimes) hides the identity of the reviewer instead of the submitter, and it sends messages to a private channel instead of a public one.

It's needed because indicting people for manipulation of hours is dangerous business. People tend to get angry or frustrated when they get hundreds of hours of work suddenly taken away from them, as you probably are right now, and team members tend to get threatened or harassed or worse relatively often, even still compared to other staff members. Obviously the safety of Fraud Squad staff is a good thing, so the bot is a pretty good solution.

One of the downsides is that a lot of people see contact with the Fraud Squad's bot as being dehumanising, or at least impersonal. The talking-in-identical-styles thing is necessary for anonymisation of whichever Fraud Squad member you're talking to, so this problem is partially unsolvable.

### Transparency

This is a distinct problem to the potential issue of anonymity created by the bot, and is the most consequential problem with the Fraud Squad. They have always been covert about their operations and unwilling to reveal even the most basic information about their methods/processes/tools. Who do they think they are, the Illuminati? Well, their reasoning is that providing such information would allow fraudsters to game the system and get away unpunished with fraud. This is borderline true though pretty much completely meaningless.

If the information used by the Fraud Squad to enact bans were to be public, then it would become clear that Fraud Squad are making the best decisions that they're able to, though with hopelessly incomplete information and insufficient tools. My guess is that eventually it would transpire that a significant portion of the apparent fraudsters banned by the Fraud Squad are actually innocent. It should be clear already that security through obscurity is no security at all.

### Speed of responses

Usually, fraud cases take a while for the Fraud Squad to review or get around to reviewing/responding, so often you have to follow up a few times before getting a response. The fact that decisions take so long to be made can affect users' participation in other programmes, since users are banned from all programmes by default during the review of a case. A lot of YSWS programmes are hard on deadlines, so if you can't get your account back in time to submit your project, buy/meet requirements for a ticket for an in-person event, finish a week/section, or keep up a streak, you may be effectively forced to leave that YSWS entirely regardless of whether the Fraud Squad thinks you committed or submitted fraud for that programme. They also might just entirely forget to unban you from some programmes afterwards, which does happen occasionally.

Decreasing response time of the Fraud Squad to ongoing cases, even by 10%, would have a huge positive impact on the opportunity cost of the Fraud Squad making decisions on cases, and also reduce the prevalence of other issues like those mentioned above in the event where they do eventually rule to reinstate an account.

### Hackatime and other time tracking systems

Hackatime, as it stands today, is not a suitable or high-integrity enough time tracking system to be powering the core review workflow for as many YSWS programmes as it does. I do consider myself to be the #1 Hackatime h8r, though for plenty good reason.

At points during my time in Hack Club I've had the opportunity to speak with several members of staff and ask questions about the various time tracking and review systems, including on what plans they have to evolve these systems in the future. I don't have recordings or transcripts of any of the discussions I've had, though I do have some details based solely on what I remember from during these discussions. The opinions of these staff members have likely changed since then, and they could have been giving their own opinion rather than speaking on behalf of Hack Club, though I've elected to add them to this document because what they've said has taught me a lot.
I talked about my concerns regarding Hackatime with Max Wofford, who echoed my concerns and also detailed the state of integration between Hackatime and Lapse, including how the 2 systems are used to ensure time matches when cross-checked between each. Additionally, I asked Zach Latta which time tracking systems are easiest to integrate and review across different types of YSWS programmes, whose answer was pretty clear: "100% Hackatime". That's the point at which it started to click with me that the problems with Hackatime are deeper than I ever imagined.

Hackatime is built upon WakaTime, a coding analytics tool. It's brilliant for providing metrics on time spent writing code or managing agents or debugging. Hack Club has modified it to work as a system to track time targets for their programmes. Hey, that sounds familiar. Have you ever heard of Goodhart's law?

> "When a metric becomes a target, it ceases to be a good metric."

There's a bigger discussion to be had here about whether this holds for other aspects of Hack Club's reward model as a whole, notably the system of weighted projects correlating too strongly with prize levels; as well as the system of voting having the opposite problem of distorting this so that they correlate too weakly. However, I'm not the one who's going to make that discussion here, and if you know where to find it there's already plenty of points made on this (including by me) elsewhere in the Hack Club community.

The smallest unit of analytics in Hackatime is the heartbeat, sent by your editor or other WakaTime-compatible client to the Hackatime API server. The format of the heartbeat is such that basically, while they *can* contain a lot of information about things like cursor position, file size, or whether edits were carried out by an AI or a human, most of the properties are optional. You can see this by checking in the source code for Hackatime or your editor extension, or just by downloading your heartbeats from the Hackatime website and seeing how many nonexistent or null fields there are.

Heartbeats don't contain enough information for the Fraud Squad to make useful or informed decisions from. Don't believe me? Ask the Fraud Squad. Or, well, there's no need to ask them, because it's clear what their opinion is because *they* ask *you* for as much other information as you can provide once you receive the ban message.

So what can be done to improve Hackatime? Adding more information to heartbeats would be a great start &ndash; let's say that they should include a small snippet of the actual code written or a minimal diff of what files were changed over the course of 30 seconds. This is already available to the public and, by extension, to the Fraud Squad from any project that is public, it's just hard to match up heartbeats with commit history, which additionally can also be easily forged. Well, that's a breaking change from the WakaTime API, so it would necessitate a change to the Hackatime server software as well as *all* of the clients or editor extensions, both in forking original WakaTime ones and modifying already-forked Hackatime ones.

If the team were to only focus on editing the few most-used extensions, like the VSCode one, to support the new protocol and tracking features, then that would leave out official support for hardware people using the browser extension to track time on searching for parts, developers building apps in Xcode/Android Studio, gamedevs building in Godot, and Monster-chugging Neovim tryhards. If we were to try and support as many editors as possible with a combined team & community effort, that would be a massive (minimum multi-month) undertaking and would require tons of coordination to make sure different systems were all compatible, equally high-integrity, and correct in time reporting.  
It's clear that moving entirely away from Hackatime is not happening any time soon, especially with the large user-base, community familiarity from both users & reviewers, speed & simplicity of reviewing tracked time, and set-and-forget-level ease-of-use. Therefore I think it's worthwhile to begin planning a breaking migration from WakaTime's API sooner rather than later, and much rather than never and leaving the Fraud Squad to continue making decisions with insufficient & incomplete data for evermore.

I detailed more about this in my submission to the Hackatime user survey, where I also strayed into talking about the Fraud Squad and other topics I thought were related (as I've done here to an even greater extent :P). If you receive any messages or emails with links to surveys about time tracking software to complete, I highly recommend you fill them out to make your views known and seen by the teams at Hack Club who are responsible for improving these systems.

My favourite time tracking system I've seen used is Hack Hour, used in the Arcade event of Summer 2024. Haven't heard of it? It's brilliant, and super simple too. The [#hack-hour](https://hackclub.enterprise.slack.com/archives/C06SBHMQU8G) Slack channel holds the Hakkuun bot, which you can message to start an hour. During the hour, you post evidence in its associated thread, and it lets you know when it's completed. Normally, the evidence is screenshots or Git commits, and the nature of actively choosing to start work for an hour helps users get into the flow state more easily and also encourages them to record more of such evidence.

Unfortunately, Hack Hour seems to be looked on as a relic of a bygone era, since it wasn't used for any other YSWS programmes after Arcade, it looks like it might not adapt too well to the era of agentic coding, and these days I hear that Heidi the Hakkuun has since gone on to do bigger things than scrounging rubbish while watching people work. I'd really love to see the system brought back to its former glory and used for some newer YSWS programmes. At minimum, it could be a more selective alternative to Lapse for use alongside Hackatime to improve time tracking integrity, for example for people that don't want to record their entire editor/screen while working for long periods of time.

I haven't gone into much detail on what I think about Lapse in this document, mainly because I don't have many issues with it. It's a little buggy, though otherwise excellent. Timelapses not saving correctly used to be a common problem, though this is less common now and the timelapse recovery system can help if it does happen.

### Hour deflation

Hour deflation is a newer separate technique used instead of bans, when it appears that only some of the time submitted as a project for a YSWS programme is inflated or inaccurate. YSWS organisers still generally deflate hours at the first hint of suspicion, though I guess it's better than banning people at the first hint of suspicion. Moreover, it can be carried out by YSWS organisers before the project is submitted to final checking by the Fraud Squad, spreading out the power of fraud review and meaning it isn't entirely bound to people who have to be ultra-secretive with their dark magical ways and closed-source Palantir-ahh fraud review software.

Though usually, if hours have been deflated a significant amount, the YSWS organisers tend to ban the project or user entirely from their projects and then report the incident to the Fraud Squad anyway, who will do their thing, probably banning the user outright. At least this means they'll receive communication from both the Fraud Squad and the YSWS organisers (unless the communication is only accessible on the site they've just been banned from).

Hour deflation is also very different from banning for suspected fraud in that it can be used for more innocuous purposes, such as a misbehaving time tracking system or accidentally double-counted time. Note that a bad time tracking system is not your problem as a participant, so I suggest not telling the Fraud Squad about this (this comes under my previous suggestion of "don't make excuses about why your time tracking might look suspicious"). If you do, either you'll be wrong and you'll just look suspicious, or it's something that they will tell you instead upon the resolution of their case, or it's something you can prove later on to vindicate yourself (the time tracking systems should all be open source anyway).

## How to prevent getting banned again in future

If you have the time and ingenuity, you can red-team yourself by downloading your heartbeats from Hackatime and inspecting them for any odd patterns, missing fields, or anomalies. Even if you don't have the time or ingenuity, download them anyway for safe-keeping, since during the time you're suspended from Hackatime, you won't be able to access the download option in settings.

**YOU MUST** make commits to your VCS repositories as often as you can. I've found that if you make fewer than 1 commit for every hour of coding work (more than 1 hour of work per commit), then your risk of being banned tends to increase due to less evidence that the Fraud Squad will have to make a decision. Make a commit for every small change you do, and keep them as atomic as possible &ndash; for example, a Git client that allows you to stage/unstage changes at the level of individual lines of code rather than just files can help a lot with this.  
This is just good practice in general too. You don't have to write good commit messages (or any at all) though I think they're useful for searching & personal reference.

**YOU MUST** also make devlogs as often as possible. Most YSWS programmes have a 10-hour limit on the maximum time you can spend without giving a written update with screenshots or a video. Don't hit the 10-hour limit on every devlog since it might look suspicious. I know they're sometimes difficult to remember what you've done (a good commit history will help with this) or to write, though they will likely turn out to be helpful for you. If you were doing something that doesn't leave a commit history, like workflows for CAD/other IDEs, planning, reading documentation, or searching for hardware parts online, your best play here will be to track it with Lapse and mention that you did this in the devlog.

**YOU MUST** use Lapse alongside Hackatime as often as possible, since the screen recordings provide valuable additional data and, due to how the systems are linked, never results in doubly-recorded time.

Of course it's still possible to get banned for fraud from submitting manipulated or synthetic timelapses, it's just much less likely to happen accidentally than Hackatime on its own, and even more less likely ("more less" lol) when using both at the same time. Additionally, even if you keep using Hackatime, this means you'll also be able to submit your hours to YSWS programmes that use Lapse, making it easier to move between them.

**DO NOT** share a Hackatime account between multiple people. This seems obvious, though can happen accidentally if you let someone use your PC to edit files while you're writing code. Boom, double heartbeats, instant suspicion.

Finally, the most effective way to avoid Hackatime bans is to avoid using Hackatime entirely. However, it's often required for a lot of YSWS programmes since they don't use any other alternative time tracking tools. That's why my continued prevailing advice is as follows:

**DO NOT** participate in any Hack Club YSWS programmes that use or recommend Hackatime as their primary or only method of time tracking! Hackatime is already the most commonly used time tracking system, and continuing to join programmes that use it will only entrench a broken tool further as The One True Time Tracking System.

## What to do if you actually did fraud

Uh, this post is more about reversing false Hackatime bans than it is about apologising to lessen real ones. [fraud.hackclub.com](https://fraud.hackclub.com) will have more of the information you're looking for in the "If you truly violated the rules" section. I don't particularly want to go over advice for after committing actual fraud, mainly because it's much more commonly talked about elsewhere (and false bans, the main focus of this document, aren't), though also not least because this document is already beyond essay-length.

## Why this document exists

So, why'd I do it? Who would write 6000 words of actual half-reasonable advice, and maybe even some rambling ideas on improving things somewhat, when one could just repeat "I FUCKING HATE THE FRAUD SQUAD!!!" 1000 times over in a [#meta](https://hackclub.enterprise.slack.com/archives/C0188CY57PZ) post and probably end up with a similar actual effect?

Because I care deeply about the Hack Club community and the people in it, and I want people to stay and keep making awesome stuff. If you wanted to fulfill the opposite goal, the quickest way to make someone leave the community and never return (even if they aren't banned permanently) is to say that the hundreds of hours of work they've done for a programme is now not only worthless, it also actively contributed to their removal from the community.

My purpose with this document isn't primarily to invoke improvements to time tracking systems or structure/processes of the Fraud Squad itself, though as I've made pretty clear already, it would be brilliant to see either of those. I want to educate people on how to deal with the Fraud Squad so they'll have the knowledge to handle their own current or future cases correctly, and more importantly, the confidence to prove their innocence and continue participating in Hack Club's programmes and the community.

Also I think it'll just be useful to have this document to look back on as a retrospective in about a year so I can at least remember where we started from as improvements are made, and as I learn more about the internals of time tracking systems and fraud procedures. I've made plenty of statements about time tracking systems, fraud detection, and preventing false bans before; it's nice & more convenient to have a single document to reference.

As a final piece of advice:

**DO NOT** be discouraged from working on projects, running/travelling to events, or even aiming to apply for Hack Club staff positions in the future. Your ban is not a reflection of your worth as a Hack Clubber and will not be looked upon as such in future, but rather a reflection of the current state of the fraud system.

---

Oh, and [one more thing](https://www.youtube.com/watch?v=Cc7U47IYRz0)...

If you feel like it, you can publicly share chat logs sent to the Fraud Squad bot for discussion of false bans, so that the community can analyse them to prevent similar cases and help others in the future. I'd just suggest summarising or redacting any personal information or other info you feel is sensitive or identifying for either you or the team on the other side.

Anyway if you ran into any problems not listed here, copy everything here into the context window of your favourite agent and have them help you out. This post was anonymised with AI, I guess.
