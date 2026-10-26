---
title: "Inside the app, part 2: what runs without me"
dek: What I can actually turn and tune in my work agent, continued, with routines, skills, the log, and the fixed lines around them.
date: 2026-10-26
readingTime: "~7 min"
topic: agent-building
---

*This is part 2 of Inside the app: what I can actually turn and tune in my work agent. [Part 1](/agent-building/inside-the-app-part-1/) covered where the day goes in.*

Part 1 was about what comes in: chat, meetings, mail, and how they become tasks and memory. He files memory from mail, chat and routines on his own now. Memory from a meeting still waits for me, by choice, not because it has to. This part is about the rest of what runs without me: routines, skills, the log, and the settings around them. Same as before, the app is real and the images are mockups with made-up details.

### Routines: I wrote it once, then forgot what it does

Here's the problem I kept running into. You write a routine once, it runs on its schedule, and it works. A few weeks later you don't remember exactly what it runs, or whether it's doing it the cheapest and most reliable way. Being able to see every process isn't the same as understanding it.

Settings › Routines lists Tony's rhythm of the day: **Morning, Midday, Nightly and a Weekly review**, plus one that wakes when a meeting ends. Each row says when it runs, how the last run went (when, and how many tokens), and, the part I added for myself, a one-line count of its steps by type: *5 steps: Code ×2, AI call ×2, Agent ×1*. There's an on/off switch and *Change times*.

<figure><img src="/images/inside-the-app/2-01-routines.png" alt="Settings, Routines tab, listing Morning, Midday, Meeting ended, Nightly, Weekly review and one routine made by Tony, each with its last run, tokens and step counts by type" width="1440" height="900" loading="lazy" decoding="async"><figcaption>The routines list: when each runs, its last run and tokens, its steps by type, and one routine Tony made, on trial 1 of 3.</figcaption></figure>

Some routines Tony makes himself. When I say "every week, check X", or ask for the same thing a third time, he builds one from a fixed recipe: one step, read-only tools, a cap of 12 rounds, and three trial runs before it counts. It shows up with a **Made by Tony** chip and *Trial 1 of 3*, and the Log has a row for it with Undo.

#### The steps screen

My fix for forgetting was a screen. Click any routine and its steps open beside the list, with a small legend on top:

- **Code**: a plain program, no AI.
- **AI call**: one model call, no tools.
- **Agent**: a model with tools that decides its own actions.

<figure><img src="/images/inside-the-app/2-03-steps-multi.png" alt="The Morning routine's five steps open beside the list, each with its type, model, time and tokens, one marked Failed, carried on" width="1440" height="900" loading="lazy" decoding="async"><figcaption>Morning's five steps: two Code, two AI calls, one Agent. One failed and the routine carried on; one is Sundays only and was skipped.</figcaption></figure>

Every step shows its name, its type, a plain-words line on what it does, which model it uses (Haiku or Sonnet, none for Code), "up to N rounds" for an Agent step, any day limit ("Sundays only"), and whether the routine keeps going if it fails. And it shows **how the step went last time**: a tick with its time and tokens, *Failed, carried on* with the reason, or *skipped on the last run*. At the bottom: what the routine **needs, reads and writes**, in plain words.

The types are marked by an icon and the weight of the tag, not by colour alone.

<figure><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 330" role="img" aria-labelledby="d1t d1d" font-family="Source Serif 4, Iowan Old Style, Palatino, Georgia, serif"><title id="d1t">One routine, step by step</title><desc id="d1d">The demo Morning routine has five steps: collect new mail (Code), sort mail by project (AI call), check the calendar (Code), weekly team summary on Sundays (AI call), and write the morning message (Agent).</desc><defs><marker id="d1-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#2c261f"/></marker></defs><text x="40" y="48" font-size="22" fill="#2c261f">One routine, step by step</text><text x="40" y="72" font-size="13.5" fill="#5c554c" font-style="italic">The question the steps screen makes visible: which part of this needs a model at all?</text><text x="40" y="114" font-size="15" fill="#2c261f">Morning · 5 steps (from the mockup below)</text><g stroke="#2c261f" stroke-width="1" fill="none"><path d="M200 182h14" marker-end="url(#d1-arrow)"/><path d="M380 182h14" marker-end="url(#d1-arrow)"/><path d="M560 182h14" marker-end="url(#d1-arrow)"/><path d="M740 182h14" marker-end="url(#d1-arrow)"/></g><g font-size="13" fill="#2c261f"><rect x="40" y="134" width="160" height="96" rx="10" fill="#dfe7d6" stroke="#8ea486"/><text x="54" y="160" font-weight="600">Collect new mail</text><text x="54" y="212" font-size="12" fill="#5c554c">Code · no model</text><rect x="220" y="134" width="160" height="96" rx="10" fill="#f1e2bf" stroke="#c99a3e" stroke-width="1.2"/><text x="234" y="160" font-weight="600">Sort mail by project</text><text x="234" y="212" font-size="12" fill="#5c554c">AI call · Haiku</text><rect x="400" y="134" width="160" height="96" rx="10" fill="#dfe7d6" stroke="#8ea486"/><text x="414" y="160" font-weight="600">Check the calendar</text><text x="414" y="212" font-size="12" fill="#5c554c">Code · no model</text><rect x="580" y="134" width="160" height="96" rx="10" fill="#f1e2bf" stroke="#c99a3e" stroke-width="1.2"/><text x="594" y="160" font-weight="600">Weekly team</text><text x="594" y="177" font-weight="600">summary (Sun)</text><text x="594" y="212" font-size="12" fill="#5c554c">AI call · Haiku</text><rect x="760" y="134" width="160" height="96" rx="10" fill="#efd3c5" stroke="#b8694a" stroke-width="1.4"/><text x="774" y="160" font-weight="600">Write the morning</text><text x="774" y="177" font-weight="600">message</text><text x="774" y="212" font-size="12" fill="#5c554c">Agent · Sonnet, up to 8 rounds</text></g><text x="40" y="258" font-size="12.5" fill="#5c554c" font-style="italic">Two of five steps need no model; only the last one decides its own actions.</text><g font-size="12.5" fill="#2c261f"><rect x="40" y="290" width="18" height="14" rx="3" fill="#dfe7d6" stroke="#8ea486"/><text x="66" y="302">Code: a plain program, no AI</text><rect x="290" y="290" width="18" height="14" rx="3" fill="#f1e2bf" stroke="#c99a3e"/><text x="316" y="302">AI call: one model call, no tools</text><rect x="560" y="290" width="18" height="14" rx="3" fill="#efd3c5" stroke="#b8694a" stroke-width="1.4"/><text x="586" y="302">Agent: a model with tools that decides its own actions</text></g></svg></figure>

Here's what the screen makes visible. In this Morning, two steps run no model at all. Two are single calls to the smaller model, Haiku. Only the last step is an Agent: it runs Sonnet for up to eight rounds and uses most of the tokens. Seeing that, "is this the cheapest and most reliable way?" stops being a vague worry. It becomes a question I can ask one step at a time: why is this step an Agent, and not Code? Does this one need a model call, or only a rule? The screen doesn't answer that for me, but it puts the question on every row.

A routine Tony made looks the same, with one more line.

<figure><img src="/images/inside-the-app/2-05-steps-tony-made.png" alt="The steps of a routine Tony made: one Agent step that lists release tasks without an owner, with the line It only reads; it changes nothing" width="1440" height="900" loading="lazy" decoding="async"><figcaption>A routine Tony made: one Agent step, up to 12 rounds, and "It only reads; it changes nothing."</figcaption></figure>

**Still open:** there's no per-step "what did this change" view yet (the Log has that per action), and no "is this still worth running" view. The *Slowest steps* chart in the Log and the per-step token counts are the start of it.

### Skills: defaults now, self-made later

A skill is a written recipe for one kind of work. Settings › Skills has four tabs: **Abilities, Library, Brand kits, Runs**. Each ability is a kind of work, UI design, Web page, Presentations, Infographics, Documents, Diagrams, Research, Motion, Accessibility review, Writing and editing, and for each one I choose the skill Tony uses.

Only the chosen skill is loaded, so two similar skills never compete, and it's pinned to the exact copy I approved: an outside update can't silently change what runs. *Check for updates* files a review card instead. If there's no skill for a job, Tony shows a *Choose a skill* card rather than guessing how I want it done.

When I correct work made with a skill, Tony notes a lesson. If it repeats, or I say it's a rule, it's written into the skill, and the ability shows it under **What Tony learned**. Under *Runs*, each piece of work asks "How did it go?": *Used as it was*, *I had to edit it*, *Not usable*.

Where this is going: Tony already creates routines for himself from how I work. In upcoming versions he'll also create skills for himself, the same way. Today he writes or changes a skill only when I ask.

### The log: what Tony did

The Log has three tabs: **Action, Activity, Notes for next build**.

*Action* is every change, by Tony, by a routine, or by me, filterable by who and by what (tasks, memory, projects, drafts, cards). Each row has an **Undo**, "put it back the way it was". There's one writer for every action and every kind of action has a matching undo; what was already sent is marked as not undoable. My own changes are in there too, which turned out to matter: when something looks wrong, the first question is usually "did I do that?"

*Activity* is the dashboard.

<figure><img src="/images/inside-the-app/2-09-activity.png" alt="The Log's Activity view with when routines ran over 14 days, tokens per day, the share of each model and the slowest steps" width="1440" height="900" loading="lazy" decoding="async"><figcaption>Activity: when each routine ran over two weeks, tokens per day, how the tokens split between Sonnet and Haiku, and the slowest steps.</figcaption></figure>

It shows when each routine ran and which runs failed or were paused, tokens per day, how the tokens split between the models, and the slowest steps. Tokens only, no money.

The Log is also the answer to the question I started this part with. The steps screen tells me what a routine *does*; the Log tells me what it *changed*.

### Settings: fixed lines, moving harness

Settings has six tabs: **Routines, Skills, Connections, Agents, Work hours, Rules**. *Work hours* sets my week, an **Away** mode that can pause every routine until I'm back, a backup folder, and a **weekly token budget** ("at 80% of it Tony drops optional work and says so"). *Agents* lists the helpers inside the routines and how each one thinks: "Plain code, no AI", "One quick AI call", "Thinks it through, with tools". *Connections* shows what Tony depends on, Outlook and Teams, Jira, Asana, the recorder, and whether each one works.

*Rules* is read-only, on purpose. Three lines decide what Tony may do: **what he does alone** (logged, with Undo), **what he asks first** (a card), and **what only my click does** (sending an email or an invite, posting in Teams or Slack, commenting in Jira; Tony has no tool for these). The screen says it in one sentence: neither Tony nor a setting can move a line.

So what changes, if the lines don't? Everything around them. The routines, their times and the ones Tony makes on trial. The standing rules in my preferences. The skills and their lessons. And the loop that started with that button under every answer.

<figure><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 420" role="img" aria-labelledby="d4t d4d" font-family="Source Serif 4, Iowan Old Style, Palatino, Georgia, serif"><title id="d4t">Fixed lines, moving harness</title><desc id="d4d">Three loops change how Tony works: a repeated ask becomes a routine with three trial runs; a note for the next version can try a fix that comes back for a verdict after two working days; a correction becomes a lesson in a skill. Skills Tony makes himself are the next step. The three permission lines stay fixed in the middle.</desc><defs><marker id="d4-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#2c261f"/></marker></defs><text x="40" y="48" font-size="22" fill="#2c261f">Fixed lines, moving harness</text><text x="40" y="72" font-size="13.5" fill="#5c554c" font-style="italic">The permission lines don't move. Everything around them does.</text><g font-size="13" fill="#2c261f"><rect x="360" y="170" width="240" height="96" rx="12" fill="#fbf8f1" stroke="#2c261f" stroke-width="1.2"/><text x="380" y="196" font-weight="600">Three fixed lines</text><text x="380" y="217" font-size="12">Alone, logged, Undo</text><text x="380" y="234" font-size="12">Asks first (a card)</text><text x="380" y="251" font-size="12">Only my click (send, post)</text><!-- loop 1 --><rect x="40" y="104" width="270" height="74" rx="10" fill="#dfe7d6" stroke="#8ea486"/><text x="54" y="128">Same ask a third time</text><text x="54" y="147" font-size="12" fill="#5c554c">→ a routine Tony makes himself</text><text x="54" y="164" font-size="12" fill="#5c554c">→ 3 trial runs → keep or archive</text><!-- loop 2 --><rect x="650" y="104" width="270" height="92" rx="10" fill="#f1e2bf" stroke="#c99a3e" stroke-width="1.3"/><text x="664" y="128">"Note for next version"</text><text x="664" y="147" font-size="12" fill="#5c554c">→ Try a fix now: Tony proposes a rule</text><text x="664" y="164" font-size="12" fill="#5c554c">→ 2 working days later: Keep it /</text><text x="664" y="181" font-size="12" fill="#5c554c">Undo the rule / Change it</text><!-- loop 3 --><rect x="40" y="262" width="270" height="74" rx="10" fill="#efd3c5" stroke="#b8694a"/><text x="54" y="286">A correction to work from a skill</text><text x="54" y="305" font-size="12" fill="#5c554c">→ a lesson; repeated or "it's a rule"</text><text x="54" y="322" font-size="12" fill="#5c554c">→ written into the skill</text><!-- next --><rect x="650" y="262" width="270" height="74" rx="10" fill="none" stroke="#5c554c" stroke-dasharray="5 4"/><text x="664" y="286" fill="#5c554c">Next: skills Tony makes himself,</text><text x="664" y="305" font-size="12" fill="#5c554c">from how I work, the way he</text><text x="664" y="322" font-size="12" fill="#5c554c">already makes routines</text></g><text x="40" y="384" font-size="12.5" fill="#5c554c">Every change in every loop is a row in the Log with Undo, and the notes list is what the next build reads first.</text></svg></figure>

**Note for next version** saves what should be different, with the answer it's about. If I tick *Try a fix now too*, Tony proposes one standing rule or memory change and shows it to me before saving it. Two working days later a small panel comes back, *Checking in on a change*, with **Keep it**, **Undo the rule** or **Change it**. Every note also lands in the Log's *Notes for next build* tab with a status (New, In next spec, Rule on trial, Built, Dropped), and in a file that the next build session reads first.

<figure><img src="/images/inside-the-app/2-10-notes-next-build.png" alt="The Log's Notes for next build tab with two notes, one marked Rule on trial and one New" width="1440" height="900" loading="lazy" decoding="async"><figcaption>Notes for next build: what I asked to change, where it came from, and its status, here one rule on trial and one new note.</figcaption></figure>

That's what I mean when I say the harness improves the more I work with it. It's not a feeling; it's a list, with dates and verdicts.

### What I'd copy

A type and a last run on every step, so a routine can be read at a glance. One log for everything, with an Undo on every row. And a note button on every answer, wired to the next version.

What's still open: a per-step "is this still worth it" view, meetings that reconcile with the tasks I already have, and skills Tony makes himself. Those are the next versions.

The first part, on chat, meetings, tasks and memory, is [here](/agent-building/inside-the-app-part-1/).
