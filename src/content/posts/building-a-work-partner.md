---
title: Building a work partner, one loop at a time
dek: A systems view of the agent I work with every day, and how my decisions, its memory and its routines shape each other.
date: 2026-10-10
readingTime: "~5 min"
topic: agent-building
---

I didn't set out to build an assistant. I set out to stop losing track of my own day. Mail, meetings, tasks that other people owe me, small things I promised and forgot. The first attempt was a crew of agents, each with a role and a fixed flow from research to plan to review. It worked for building things. It didn't fit the rest of the day, which is mostly mail, meetings and follow-ups. I wrote that down in my plan as plainly as I could: the crew fits build work, not daily work.

So I started again with one agent. Not a tool I open when I remember, but something closer to a partner that sits next to my work, notices things, and talks to me about them. This post is the map of how it's put together. The next ones go into each part.

### The one narrow door

Everything the agent wants to do leaves through one place: a decision that comes back to me. It reads my mail, follows my tasks, listens to meeting notes, and all of that ends as a proposal I can accept, change, postpone or refuse. Nothing goes out in my name. It can prepare a draft for me, and that's where it stops.

This narrow door turned out to be the most important part of the whole thing, not because of safety, but because every other part learns from what happens there. When I say yes, change the wording, or push something to later, that's the signal the rest of the system feeds on.

### What I own and what it owns

I split the agent's definition into pieces with clear owners. I own the charter (who it is and the lines it doesn't cross), its voice, what it knows about me, its goals, and the rules for how far it may go alone with each kind of action. It owns its memory, but it can't write to it on its own.

The prompt itself is thin. Most of what makes the agent behave like it does is in those pieces, they have versions, and I can undo a change. When I want it to behave differently, I usually don't rewrite the prompt. I change one of the pieces.

### How my decisions shape it

A few things grow directly from my decisions:

- When I mark something as urgent, important or later, it remembers who it came from and what kind of thing it was, and next time it guesses the same way. Recent decisions weigh more.
- When I approve the same low-risk action five times in a row, and it actually ran, the agent asks if it can do that one thing without me. An edit or a no resets the count.
- Once a week it looks at what it proposed and what I decided. If I keep rejecting one kind of proposal, it asks to add a line to its own charter.

None of this happens silently. Each change to itself comes back to me as one more decision.

### How memory shapes it

The agent notices things during the day, from our conversations or from a routine reading my mail, and puts them aside as candidates. I go over them once: keep, not true, correct, skip. Early every morning it "dreams": it merges what I kept, turns contradictions into dated corrections instead of a second fact, retires things that expired, and rebuilds a short summary it starts every run with.

Every fact has a source, a date and a scope, which decides where it may be used. Some things it's allowed to know when we talk, but never to use in something it writes or proposes. Old facts aren't deleted, they're kept as history, so I can see what it used to believe.

### How routines shape the rest

Routines are the agent's habits. A morning pass over mail, a follow-up on tasks that are late, a short note after each meeting, a weekly check on goals, the nightly dreaming. Each one produces proposals, and each one feeds memory candidates. So routines decide a lot about what I'm asked to decide on, and what the agent ends up knowing.

The agent can suggest new routines too, for example when I ask it for the same thing a third time. A new routine can only read, runs three times as a trial, and then asks whether to keep it. If I don't answer in two weeks, it's archived.

I also count what each routine costs against the proposals I actually accept. One routine ran every fifteen minutes and produced one approved draft in 103 runs. I removed it.

### The bottlenecks

Looking at it as a system, three places decide how everything else behaves:

1. **My decisions.** Every output passes through them, and every lesson comes from them. If what I'm asked is unclear, or I'm asked too often, nothing downstream learns well. Asking me too much is still the problem I spend most time on.
2. **The review of memory.** The agent can only know what I confirmed. That keeps it honest, and it also means memory grows at the speed of my attention.
3. **The permission rules.** They decide which ideas can become actions at all. Most new abilities started as "it should be able to do X", and ended as a new rule plus one more kind of decision for me.

Most of the later stages in the project were born from one of these three.

### Where we are

It's a single-person setup, built around how I like to work, and it shows. Some parts are still rough. What I can say is that the way it manages my day is shaped by me, through small decisions, and I can see each of those decisions in the system afterwards.

In the next posts I'll go into each part: the decision as the only way out and why sending is off the table, memory and the nightly dreaming, routines and when to kill them, and what happens when an email tries to give the agent instructions.
