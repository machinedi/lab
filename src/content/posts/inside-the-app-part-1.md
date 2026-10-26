---
title: "Inside the app, part 1: where the day goes in"
dek: What I can actually turn and tune in my work agent, starting with how chat, meetings and mail become tasks, projects and memory.
date: 2026-10-22
readingTime: "~10 min"
topic: agent-building
---

*This is part 1 of a two-part series, Inside the app: what I can actually turn and tune in my work agent. [Part 2](/agent-building/inside-the-app-part-2/) is about what runs without me.*

For a while now I've been building Tony, a work partner that runs on my laptop. In [an earlier post](/agent-building/building-a-work-partner/) I wrote about how it's put together. This one is about what's actually in the app: the screens I open every day, what I can change on them, and what happens behind them when I don't.

I think of Tony less as a chat bot and more as a small operating system for my work life. The left rail is the whole map: **Chat, Tasks, Projects, Transcripts, Memory, Log**, and Settings at the bottom. The chat is the least interesting part. The interesting part is how talk, meetings and mail turn into work that is tracked, and what Tony knows when he does it.

The app is real. The images are mockups of the current version, and every name, company and number in them is made up.

There's one idea that runs through this whole post, so I'll say it up front. **Everything that comes in writes on its own, except two things from a meeting: what I committed to out loud, and anything that would go into memory.** Those wait for me.

<figure><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 500" role="img" aria-labelledby="d2t d2d" font-family="Source Serif 4, Iowan Old Style, Palatino, Georgia, serif"><title id="d2t">Two inputs, one gate</title><desc id="d2d">Mail, routines, Slack and customer requests flow straight into tasks, memory and project pages, with Undo in the Log. A meeting goes through a scribe; decisions and other people's to-dos go to the project page. Memory items from the meeting wait for me, by my choice for now, together with my own to-dos and stated rules, on one checklist that I tick.</desc><defs><marker id="d2-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#2c261f"/></marker></defs><text x="40" y="48" font-size="22" fill="#2c261f">Two inputs, one gate</text><text x="40" y="72" font-size="13.5" fill="#5c554c" font-style="italic">Everything writes on its own, except what I committed to in a meeting, and memory from it.</text><line x1="480" y1="96" x2="480" y2="470" stroke="#d9cdb6" stroke-dasharray="4 5"/><!-- left lane --><text x="40" y="112" font-size="15" fill="#2c261f">Mail · routines · Slack · customer requests</text><g font-size="13" fill="#2c261f"><rect x="40" y="132" width="400" height="60" rx="10" fill="#fbf8f1" stroke="#2c261f" stroke-width="0.8"/><text x="56" y="158">Tony reads, files by topic</text><text x="56" y="177" font-size="12" fill="#5c554c">into a project or an ongoing item; "Unsorted" if nothing fits</text><path d="M240 192v26" stroke="#2c261f" marker-end="url(#d2-arrow)"/><rect x="40" y="224" width="126" height="54" rx="9" fill="#dfe7d6" stroke="#8ea486"/><text x="54" y="256">Tasks</text><rect x="177" y="224" width="126" height="54" rx="9" fill="#dfe7d6" stroke="#8ea486"/><text x="191" y="256">Memory</text><rect x="314" y="224" width="126" height="54" rx="9" fill="#dfe7d6" stroke="#8ea486"/><text x="328" y="249">Project</text><text x="328" y="266">lines</text><text x="40" y="306" font-size="12" fill="#5c554c">A project nobody asked for: Tony offers one (a card).</text><path d="M240 318v24" stroke="#2c261f" marker-end="url(#d2-arrow)"/><rect x="40" y="348" width="400" height="48" rx="10" fill="#fbf8f1" stroke="#2c261f" stroke-width="0.8" stroke-dasharray="3 3"/><text x="56" y="377">Log, every write with Undo</text></g><!-- right lane --><text x="520" y="112" font-size="15" fill="#2c261f">A meeting (recorded with consent)</text><g font-size="13" fill="#2c261f"><rect x="520" y="132" width="400" height="60" rx="10" fill="#fbf8f1" stroke="#2c261f" stroke-width="0.8"/><text x="536" y="158">Local transcript → the scribe (one AI call)</text><text x="536" y="177" font-size="12" fill="#5c554c">gist, decisions, to-dos with owners, rules stated, the project</text><path d="M583 192v26" stroke="#2c261f" marker-end="url(#d2-arrow)"/><path d="M720 192v26" stroke="#2c261f" marker-end="url(#d2-arrow)"/><path d="M857 192v26" stroke="#2c261f" marker-end="url(#d2-arrow)"/><rect x="520" y="224" width="126" height="64" rx="9" fill="#dfe7d6" stroke="#8ea486"/><text x="532" y="248">Decisions,</text><text x="532" y="265">others' to-dos</text><text x="532" y="281" font-size="11.5" fill="#5c554c">→ project page</text><rect x="657" y="224" width="126" height="64" rx="9" fill="#f1e2bf" stroke="#c99a3e" stroke-width="1.4"/><text x="669" y="248">Names, roles,</text><text x="669" y="265">owners</text><text x="669" y="281" font-size="11.5" fill="#5c554c">→ waits for me</text><rect x="794" y="224" width="126" height="64" rx="9" fill="#efd3c5" stroke="#b8694a" stroke-width="1.4"/><text x="806" y="248">My to-dos,</text><text x="806" y="265">rules stated</text><path d="M720 288v30" stroke="#2c261f" marker-end="url(#d2-arrow)"/><path d="M857 288v30" stroke="#2c261f" marker-end="url(#d2-arrow)"/><rect x="660" y="324" width="260" height="62" rx="10" fill="#f1e2bf" stroke="#c99a3e" stroke-width="1.4"/><text x="676" y="349" font-weight="600">The gate: one checklist</text><text x="676" y="368" font-size="12" fill="#5c554c">"Tick what's right"; Edit first; Not these</text><path d="M730 386l-40 26" stroke="#2c261f" marker-end="url(#d2-arrow)"/><path d="M850 386l20 26" stroke="#2c261f" marker-end="url(#d2-arrow)"/><text x="560" y="434">Ticked → task / memory fact</text><text x="790" y="434">Unticked → Not kept</text><text x="520" y="466" font-size="12" fill="#5c554c">Everything on this side is also in the Log with Undo.</text></g></svg></figure>

### Chat: the front door

Chat is home. At the top sits a short **Needs you** strip: the few cards Tony may not decide alone, each with real buttons. Under his avatar a status line says what he's doing ("reading this morning's mail…", "all clear"). Every morning starts a new chat, with an **Earlier chat** link back to yesterday's.

Above the message box there's a small line that changed how I use it: **"About: …"**. Whatever I have open, a task, a transcript line, a memory record, is what Tony is working on. I don't paste context anymore; I click it.

Asking in chat is still the main control. "Every Monday, list the release tasks without an owner" is a request and a configuration at the same time. Drafts get a Send button, and that button is mine. Tony has no send tool at all.

The newest thing here is small: under every answer there's a **Note for next version** button.

<figure><img src="/images/inside-the-app/1-02-note-next-version.png" alt="A Tony answer about what is still open on a project, with the sources he checked and the Note for next version box open" width="1440" height="900" loading="lazy" decoding="async"><figcaption>One answer, with the sources Tony checked, and the note box open: "What should be different?" and "Try a fix now too".</figcaption></figure>

I click it when an answer is wrong in a way that isn't about this answer, it's about how Tony works. I'll come back to it in part 2, because it turned out to be the most useful knob in the app.

### Transcripts: my Granola replacement

This is the screen I'm most attached to, and the one I keep expanding. I wanted what a meeting notetaker gives you, but with a different output: not notes, but proposed changes to my tasks and projects.

#### Recording

The recorder is its own small service on the laptop, so a recording survives closing the app. When a call takes the microphone it **asks**: *Record* or *Not this one*. It never starts on its own, and there's a hotkey. If the call ends it gives me a grace period with a *Keep recording* button before it stops.

It captures two lanes, me and the call audio, and transcribes on the laptop's GPU with a Hebrew and an English model, because my meetings switch languages mid-sentence. The list says it plainly: **On this PC · audio never leaves**. Only the text goes to the model when Tony reads a transcript. Audio can be deleted automatically (never, or after 1, 7, 30 or 90 days); the transcript and Tony's notes stay.

<figure><img src="/images/inside-the-app/1-03-transcripts-list.png" alt="The Transcripts list with a Record button and three meetings, and an open transcript page with In short, Decided and What came out of it" width="1440" height="900" loading="lazy" decoding="async"><figcaption>The list, with today's meeting still waiting for my tick, and its page: In short, Decided with the moment each was said, and what came out of it.</figcaption></figure>

#### From meeting to work

When a transcript is ready, one AI call, the scribe, reads it. It returns the gist, the decisions with the moment they were said, the to-dos with their owners, any rule someone stated, and which project the meeting belongs to.

Then the results split, and this is the part I designed most carefully:

- **Decisions, and to-dos that other people took on, go straight onto the project page** as lines. Nobody has to tick them; they're a record of what was said.
- **Slow facts from the meeting, names, roles, who owns what, wait for me.** That is my choice for now, not a limit of the app. They sit on the same checklist, with Undo in the Log once I tick them.
- **My own to-dos and any rule stated wait on one checklist card** in Needs you: *Tick what's right: Billing migration review*.

<figure><img src="/images/inside-the-app/1-04-tick-card.png" alt="The checklist card Tick what's right: Billing migration review, with five ticked items tagged Task or Saved to memory" width="1440" height="900" loading="lazy" decoding="async"><figcaption>One card per meeting. Items come ticked, tagged Task or Saved to memory, with Add the tasks, Edit first and Not these.</figcaption></figure>

The card keeps each line short: what it is and, for a task, when it's due. Behind each item Tony keeps the quote it came from, because a transcriber can mishear. *Edit first* turns every line into a text field. Ticked items become tasks under the project, with the quote attached, or a memory fact; unticked ones are marked *Not kept*. All of it can be undone from the Log.

Why is this the one place with a gate? Because meetings are where people think out loud. "Let's do X" is often not a decision, and not everything said in a room is final or even serious. Mail and requests are written to be acted on; a meeting is a conversation. So for the things that would land on *my* list, Tony proposes and I decide. Memory items from the meeting wait on that same card.

After the card is answered, the transcript page reads top to bottom: **In short**, **Decided** (each with a ▸ timestamp that jumps into the transcript), and **What came out of it**: my tasks, what others took on, what was saved, and a folded *Not kept*. There's a project picker and a *Draft follow-up email* button that opens one draft in Outlook and never sends it.

<figure><img src="/images/inside-the-app/1-06-transcript-page.png" alt="A transcript page after ticking, with Your tasks, Others, Saved, Not kept and a project picker" width="1440" height="900" loading="lazy" decoding="async"><figcaption>The same kind of page after ticking: my tasks, others' items, what was saved, what wasn't kept, and the project picker.</figcaption></figure>

Before a meeting, Tony posts one small panel 10 to 20 minutes ahead, only if someone attending has open items with me: what's still open between us.

**What's next here:** today a meeting attaches to a project and creates new tasks; it doesn't yet go through my *existing* open tasks and update or close the ones the meeting settled. That's the next thing I want this screen to do.

#### Compared with Granola

Granola does a lot of this well, and it's a fair comparison. Like Tony, no bot joins the call, it captures mic and system audio, you start it yourself, and the audio isn't kept. The differences: Granola sends the audio to cloud transcription providers and keeps the transcript and notes in its cloud; Tony transcribes on the laptop. Granola's output is AI-enhanced notes you can ask questions about; Tony's output is a checklist that becomes tasks and project lines. And Granola runs on Mac, Windows and phones, with any meeting platform, and lets you share notes. Mine runs on one Windows laptop, for one person. Granola is a product; this is a lab. (Sources: [Granola transcription docs](https://docs.granola.ai/help-center/taking-notes/transcription), [Granola security](https://www.granola.ai/security).)

**What doesn't work yet:** I have no accuracy measure; the model choices were made by ear in side-by-side tests. The other side of the call is one speaker, with no speaker separation. And it's Windows only.

### Tasks and projects: where it lands

Tasks are calm rows grouped Overdue, Today, This week, Later and No date, with filters for *Made by Tony* and *Made by you*. Each row now carries a small grey chip for where it came from: **Email, Meeting, Chat, Jira, Slack, Teams**. Open one and it sits beside the list, with *Where it came from* (the email itself, or the meeting quote).

Projects got the biggest change in this version. There are now two kinds: a **project** ends; an **ongoing** item is work that keeps coming, like customer escalations, and its row shows how much came in this week. Tasks Tony can't place go to an amber **Unsorted** tray instead of being forced somewhere.

<figure><img src="/images/inside-the-app/1-08-projects.png" alt="The Projects list with Unsorted, Projects and Ongoing, and a project page with its goal, Where it stands, Next up and drawers" width="1440" height="900" loading="lazy" decoding="async"><figcaption>The list (Unsorted, Projects, Ongoing) and one project page: the goal, Where it stands, Next up with where each task came from, and the drawers.</figcaption></figure>

A project page keeps its top short: the goal, **Where it stands** (Tony keeps it to three lines), **Next up** (the top three tasks), then drawers for Decisions, Tasks, Notes, Meetings and Memory.

This is the automatic side of the gate. From mail, routines, Slack and customer requests, Tony makes tasks, closes what was answered elsewhere, and files each one by topic into a project or an ongoing item, without asking. When nothing fits, he **offers a new project** as a card, or leaves the task in Unsorted. Every write is a row in the Log with Undo.

And my edits win. If I change a task's date, Tony doesn't silently change it back; if he disagrees, he says so in chat.

### Memory: what Tony knows

Memory is four shelves: **People, Clients, Knowledge, Preferences**, with a search box. Each shelf starts with *+ New person*, *New client*, *New topic*, and a topic starts with its first fact. Preferences also holds Tony's own brief: his charter, **Voice & format** (tone, length, language, with a *Preview* that writes a sample), *Writing for others*, *Write like me* and *About you*.

<figure><img src="/images/inside-the-app/1-12-memory-person.png" alt="A People record in Memory with five facts, each with its source, and chips for Pinned, an end date and Only in Tony's chat" width="1440" height="900" loading="lazy" decoding="async"><figcaption>One person's record: each fact with where it came from, and the chips for Pinned, an end date and Only in Tony's chat.</figcaption></figure>

Every fact says where it came from ("You told Tony", "From an email"). I can edit it, pin it (Tony reads it first and it never goes stale), forget it, or give it an end date: *Stop using it after…*. A fact marked **Only in Tony's chat** is personal: he knows it when we talk, but it never goes into a routine, a draft or a card. New in this version: click a record's name to rename it (the old name stays as an alias, so Tony still finds it), merge two records that turned out to be the same person, and keep a real table inside a fact, pasted from Excel.

<figure><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 400" role="img" aria-labelledby="d3t d3d" font-family="Source Serif 4, Iowan Old Style, Palatino, Georgia, serif"><title id="d3t">How a fact lives in memory</title><desc id="d3d">A fact comes from a source, passes a save rule (slow facts only; dates and to-dos go to tasks), is checked for duplicates and contradictions, lands on a shelf with a scope, is used in runs, and is merged, expired or renamed at night or by hand. Every change goes to the Log with Undo.</desc><defs><marker id="d3-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#2c261f"/></marker></defs><text x="40" y="48" font-size="22" fill="#2c261f">How a fact lives in memory</text><text x="40" y="72" font-size="13.5" fill="#5c554c" font-style="italic">Two clocks: slow facts here, dates and to-dos on tasks.</text><g font-size="13" fill="#2c261f"><rect x="40" y="110" width="140" height="70" rx="10" fill="#fbf8f1" stroke="#2c261f" stroke-width="0.8"/><text x="54" y="138">A source</text><text x="54" y="157" font-size="11.5" fill="#5c554c">mail, chat, meeting,</text><text x="54" y="171" font-size="11.5" fill="#5c554c">"remember that…"</text><path d="M180 145h26" stroke="#2c261f" marker-end="url(#d3-arrow)"/><rect x="212" y="110" width="150" height="70" rx="10" fill="#f1e2bf" stroke="#c99a3e"/><text x="226" y="138">Slow fact?</text><text x="226" y="157" font-size="11.5" fill="#5c554c">no → it becomes a task</text><text x="226" y="171" font-size="11.5" fill="#5c554c">or a date on one</text><path d="M362 145h26" stroke="#2c261f" marker-end="url(#d3-arrow)"/><rect x="394" y="110" width="150" height="70" rx="10" fill="#fbf8f1" stroke="#2c261f" stroke-width="0.8"/><text x="408" y="138">Same as one</text><text x="408" y="155">we have?</text><text x="408" y="171" font-size="11.5" fill="#5c554c">dedupe, contradiction</text><path d="M544 145h26" stroke="#2c261f" marker-end="url(#d3-arrow)"/><rect x="576" y="110" width="160" height="70" rx="10" fill="#dfe7d6" stroke="#8ea486"/><text x="590" y="138">A shelf + a scope</text><text x="590" y="157" font-size="11.5" fill="#5c554c">People · Clients ·</text><text x="590" y="171" font-size="11.5" fill="#5c554c">Knowledge · Preferences</text><path d="M736 145h26" stroke="#2c261f" marker-end="url(#d3-arrow)"/><rect x="768" y="110" width="152" height="70" rx="10" fill="#fbf8f1" stroke="#2c261f" stroke-width="0.8"/><text x="782" y="138">Used in a run</text><text x="782" y="157" font-size="11.5" fill="#5c554c">"Only in Tony's chat"</text><text x="782" y="171" font-size="11.5" fill="#5c554c">never in a draft or card</text><path d="M844 180v40H120v-14" stroke="#2c261f" stroke-dasharray="3 4" fill="none" marker-end="url(#d3-arrow)"/><text x="360" y="240" font-size="12" fill="#5c554c" font-style="italic">and back, when a fact changes</text><rect x="40" y="262" width="270" height="58" rx="10" fill="#dfe7d6" stroke="#8ea486"/><text x="54" y="287">At night (Code, no model)</text><text x="54" y="306" font-size="11.5" fill="#5c554c">merge duplicates · expire · rebuild one-pager</text><rect x="330" y="262" width="270" height="58" rx="10" fill="#fbf8f1" stroke="#2c261f" stroke-width="0.8"/><text x="344" y="287">By hand</text><text x="344" y="306" font-size="11.5" fill="#5c554c">edit · pin · forget · rename · merge into…</text><rect x="620" y="262" width="300" height="58" rx="10" fill="#efd3c5" stroke="#b8694a"/><text x="634" y="287">Rename or merge → an alias</text><text x="634" y="306" font-size="11.5" fill="#5c554c">the old name still finds the topic</text></g><rect x="40" y="342" width="880" height="34" rx="8" fill="none" stroke="#2c261f" stroke-width="0.8" stroke-dasharray="3 3"/><text x="56" y="364" font-size="13" fill="#2c261f">Log: every save, change and forget is a row with Undo</text></svg></figure>

Behind the screen, memory is plain markdown files with history. The save rule is what I'd copy first: **two clocks**. Slow facts, who someone is, how a client likes to work, how something is done, go to memory. Dates, statuses and to-dos go on tasks. Before saving, Tony checks for duplicates and contradictions. At night, plain code merges duplicates, expires old facts and rebuilds the one-page summary that every run starts with.

When I wrote [the first post](/agent-building/building-a-work-partner/), Tony was in the experiment on purpose. Every decision came through me, so I could check there was no flaw in what he chose to bring me. He could not write to memory on his own, and review was the bottleneck. It obviously doesn't scale. The point was that check, not a way to work forever.

After a while I handed him more and more to do on his own. Sorting items into memory is one of them. He does that himself now, from mail, chat, routines, and the other signals he already reads. Each of those writes is a row in the Log. A meeting is the exception I kept. Memory from one still comes through me. That is my choice at this stage, not a technical limit.

**What doesn't work yet:** search is keywords and aliases, with no semantic search, so it's only as good as the names. Rename and merge help, because every old name becomes an alias for free.

### What I'd copy

If you're building something like this: one checklist per meeting, not one card per item. A source and a scope on every fact. And a tray for what doesn't fit, so the agent never has to guess.

In [part 2](/agent-building/inside-the-app-part-2/): what runs without me, routines, skills and the log, and how I keep track of things I set up once and then forgot.
