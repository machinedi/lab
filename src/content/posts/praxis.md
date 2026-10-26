---
title: "Praxis: what several months of my own AI sessions showed me"
dek: I froze a copy of everything my coding assistant kept on disk, filtered out what I shouldn't read, and counted what was left. Mostly it taught me about my own habits.
date: 2026-10-22
readingTime: "~7 min"
topic: agent-building
---

*An experiment journal, not a product.*

One Sunday I copy the folder where my coding assistant keeps its history and freeze it, so nothing changes while I look. Several months of my own sessions. Before I read a single line, I write down what I'm not allowed to keep.

<figure><img src="/images/praxis/01-sessions.svg" alt="My own sessions per month after filtering, month 1 to month 6: 6, 34, 54, 32, 54, 45. 225 in total." width="672" height="226" loading="lazy" decoding="async"><figcaption>My own sessions per month, after filtering. 225 in total.</figcaption></figure>

I've written before about [how small daily tasks turned into routines, and the routines into a work agent](/knowledge/one-thing-led-to-another/). That story is how I remember it.

This is the check. Claude Code saves every session as a file. I wanted to know how I actually work with it, and the files are a better witness than my memory.

I called the project Praxis. It isn't a new kind of tool. [AgentsView](https://kenn.io/devlog/projects/agentsview) already does session analysis properly, and if you want a ready tool, start there. Mine is smaller and built around one question and one constraint.

The question: what do I do over and over without noticing? The constraint: a lot of these sessions touch my day job, so most of the work was deciding what not to look at.

### What I kept, and what I didn't

The backup is a frozen copy: 5,574 files, about 1.79 GB. Most of it is session transcripts.

To do the counting I wrote a few small scripts that run on my own machine, against the frozen copy only, and send nothing anywhere. Before counting anything I wrote the rules into one file. Its first line says what it's for: "Edit here, rerun, same output." Every choice below lives there, so I can change it and run again.

<figure><img src="/images/praxis/02-filter.svg" alt="A funnel. 2,256 session files. 281 are mine, because 1,975 were my work agent's engine calling the model. 225 kept, after 56 day-job sessions that only looked things up and never edited a file. 1,390 prompts I typed; 152 touching security were counted but never stored, and a secret was masked in 17 of the rest." width="672" height="430" loading="lazy" decoding="async"><figcaption>What the filter lets through. Most of the work was deciding what not to look at.</figcaption></figure>

The biggest cut surprised me. 1,975 of the 2,256 sessions weren't me at all. They were my work agent calling the model on its own. Machine traffic, so it goes.

Next, day-job sessions where I only looked things up and never edited a file. Those are my work, not my building, so no text from them is kept. Only the month and the reason are recorded.

Then the prompts themselves. A prompt that mentions anything near security (keys, passwords, sign-in, permissions) is never stored. It is only counted: 152 of them. The list is deliberately broad, and it's written in both languages I type in.

As a second net, anything shaped like a secret is masked inside whatever is stored. That happened in 17 prompts.

For tool calls I keep the name, whether it failed, and how big the output was. Not the output.

The filter runs while the copy is being read, not afterwards. Whatever it drops is never written down, so nothing later in the process can leak it. The backup step also skips the assistant's credentials file entirely. I never read the transcripts by hand for this. Everything here comes from counts and from my own prompts after filtering.

### The shape of it, in four phases

<figure><img src="/images/praxis/03-projects.svg" alt="Sessions per project per month, month 1 to month 6. General work from the start, peaking at 34 in month 2. Context Layer Model from month 3 on. The web app, months 3 to 5. Tony, my work agent, 7 in month 5 and 30 in month 6. meetrec, the note taker, 4 in month 6. Turning points: 1, approved as a real project; 2, Tony split into its own project; 3, the reset." width="672" height="322" loading="lazy" decoding="async"><figcaption>Sessions per project per month, with three turning points: approved as a real project, Tony on its own, and the reset.</figcaption></figure>

**Early on: asking.** Short prompts, small analyses, a lot of "no" and "stop". I was learning what to ask for.

**A few months in: writing knowledge down.** Projects multiplied. The biggest was the [Context Layer Model](/knowledge/context-layer-model/), a model of how a complex product is set up and where its knowledge ends. Subagents appeared. Around then it was approved as a real project at work.

**Later: Tony on its own.** The web app I'd built for my routines had grown a crew of agents, and they weren't coordinated. So I started Tony, my work agent, as a separate project, so I could learn without breaking what I used every day.

**Most recently: releases.** Versions, installers, tests. A small meeting note taker, meetrec, became its own project too. It runs only when everyone in the meeting agrees. Then I stopped and reset Tony, after counting approvals of mine that never ran. How the agent fits together now is in [Building a work partner, one loop at a time](/agent-building/building-a-work-partner/).

### Long prompts, then short again

Two numbers moved more than I expected.

<figure><img src="/images/praxis/04-prompts-and-delegation.svg" alt="Average prompt length by month, month 1 to month 6: 329, 256, 684, 790, 322, 324 characters. Tool calls split between the main session and subagents; in the last month subagents made 7,586 calls against 3,238 in the main session." width="672" height="432" loading="lazy" decoding="async"><figcaption>Prompt length by month, and who made the tool calls. In the last month, subagents made more than twice as many as the main session.</figcaption></figure>

In the middle months my prompts got about three times longer. I was explaining everything, every time, because the context lived in my head.

By the last month they were short again. The context hadn't gone away. It had moved into the project itself: specs, a rules file, memory notes, a project log. A prompt could say "finish the build" because everything else was already written.

At the same time the work moved off the main session. In the last month subagents made more than twice as many tool calls as the session I was talking to. I had stopped being the one who asks and become the one who checks.

### What kept repeating

Reading my own rules files and memory notes side by side, the same few rules show up in project after project, at work and at home.

<figure><img src="/images/praxis/05-principles.svg" alt="Seven recurring rules in three groups. What counts as true: zero guessing, one source of truth. Who acts: propose, don't act; preparer, not advisor. How it gets better: loops that improve, a written decision book, the builder never grades itself. All point to me, as the gate." width="672" height="360" loading="lazy" decoding="async"><figcaption>Seven rules that kept coming back, in three groups. All of them point to me, as the gate.</figcaption></figure>

**Zero guessing.** Every fact gets a label: verified, documented, observed, or inferred and unconfirmed. Unknowns go to a gaps list instead of into an answer. "Not found, looked in X" counts as a real answer.

**One source of truth.** When two sources disagree, there's a written order of who wins. The real export beats the documented default. In Tony, its own tasks are the truth, and the task tracker is only a mirror.

**Propose, don't act.** Anything outward-facing is a draft. I send. The note taker only proposes. My work agent can prepare a draft, and that is where it stops.

**Preparer, not advisor.** A METR study found experienced developers were about 19% slower with AI help. I took from it that my agent should put the context together and leave the call to me.

**Loops that improve.** I keep choosing a loop over a one-off: a queue of open questions, past work mined for patterns, a model that should know more over time.

**A written decision book.** Every project has a log a person can read, and a list of locked decisions. After the reset, every release also gets a table that traces each approved request to what was actually built.

**The builder never grades itself.** The strongest model plans and reviews. A smaller one builds. A separate pass checks the real result. Two failed attempts at the same fix means stop and tell me.

### What it taught me about myself

I think in brain dumps. I write everything I know, then ask for a better prompt, then use that. My rules file ended up with a fixed shape for a request: goal, context, deliverable, constraints, done-when.

I ask to be challenged. "Don't be afraid to grill me" appears more than once, and the reset of Tony came out of a long list of hard questions.

My role changed. My reading of the numbers: I started by asking for things, then wrote a constitution, and now I mostly supervise a small team of models.

Praxis itself is the same method I use at work: filter, label, count, write it down. I just pointed it at myself.

Corrections didn't go away. 63 of my prompts were corrections, spread across every phase. Faster work didn't mean fewer corrections. I'm not sure yet what that says about me.

### What the numbers can't tell me

The counts show what happened, not why. I didn't read the summaries inside the transcripts, so the reasons are still my memory.

Nothing older than the first month survived on disk. Whatever I did earlier happened elsewhere, and it's not in here.

Some things can't be measured at all. The app keeps only the final path of a session, so I can't see where I rewound and tried again.

The correction count is a set of patterns, like a prompt starting with "no". It's rough. I'd trust the direction more than the exact number.

I'm still unsure how much of this is about me and how much is just what several months with any assistant looks like. One person's history isn't a sample. If you've done something similar with your own sessions, I'd like to compare notes.
