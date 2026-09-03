---
title: Almost-correct agents are worse than no agent
description: "If an agent is allowed to do real work, almost-correct is not a cute failure mode. Precision is a design problem: structure, a learning loop, an update routine, and a live process with somewhere to say no."
pubDate: 2026-09-03
status: published
listing: full
---

If an agent is allowed to do real work, almost-correct is not a cute failure mode. It is a new kind of mess. You spend the evening checking what it did, rebuilding the parts it skipped, treating every output as a rumor. The work changed shape, and it got harder to see.

I would rather have no agent than one that is mostly right. This is not an argument against agents. It is an argument against treating a fluent answer as a finished job. If the system will touch a live process, design it for accuracy the way you would design a ledger, not a demo.

## What a knowledge engine is for

People point an agent at a folder of notes and call it a knowledge base. Retrieval is not the same as being able to act. Quoting last week's shopping list is not placing an order. Summarizing a training week is not changing the plan.

A knowledge engine is the structured layer that makes action possible. It holds the objects the work is about, the rules that constrain those objects, the current state of the process, and the actions that are allowed. It is not a pile of documents. It is a model of the work.

Take a household, because the household is honest. Ask an agent to "handle groceries" with only a chat log and a few old receipts, and it will produce something that looks like a list. Some of it will be right. Some of it will be a confident guess. Let it talk to a store, and you have given a guess the power to spend money.

The engine would know: this household does not buy cow milk. This person is out on Thursdays. The rice brand we actually use. The food budget this month. What is already in the pantry, as last recorded. None of that is glamorous. It is the difference between retrieve and act.

## Structure first

Before a learning loop, before a model, you need a shape.

Start with objects. Household: person, constraint, inventory item, budget line. Trainer's notes: trainee, session, lift, set, pain flag, plan block. Name them. Give them fields a program can check, not paragraphs a model can paraphrase.

Then rules. Not "be helpful." Do not add an item that violates a constraint. Do not progress a lift if the last two sessions underperformed and pain was flagged. Do not mark a task done unless the output was recorded.

Then state: what is true right now, not what was true in a document from March. Current inventory. Current plan week. Current budget remaining. If the agent cannot see state, it will invent it.

Then allowed actions. An action has a name, inputs, a check against rules and state, and a place the result is written. "Add to shopping list" is an action. "Buy" is a different action, with a harder check. "Suggest" is not an action on the world. Mixing those three is how almost-correct gets into production.

If you cannot draw those four layers on one page, you do not have a knowledge engine. You have a prompt.

## The learning loop

A static structure goes stale. The household changes. The trainee's knee complains. The store is out of the usual brand. Something has to be allowed to write back.

The learning loop is not "the model remembers." Memory in a chat window is a fog. The loop is: an observation comes in, it is classified, it is written to a specific field or it is rejected, and a person can see the write.

Writes should be small and typed. "Out of stock: brand X, substituted brand Y, date" is a write. "User seemed unhappy" is not. "Sets completed: 5x5 at 80kg, last set slow" is a write. "Workout felt off" can attach to a session. It should not quietly rewrite the plan.

Treat writes as claims with a source: typed by a person, confirmed by a trainer, taken from a receipt, or inferred by the agent. Inference is the weakest claim. If an inferred write can change a live process, it needs a gate. A suggestion queue is a gate. A required confirm is a gate. Silence is not a gate.

This is slower than letting the model update whatever it wants. Speed that pollutes state is a mess you will pay for later.

## The update routine

Even with a loop, truth decays on a schedule. People forget to log. Constraints change and nobody tells the system. A plan that was right in week two is wrong in week six if you never look.

An update routine is a checklist with a cadence. Household: once a week, walk the inventory that ruins a shop if it is wrong, confirm constraints, glance at the budget line. Training: after each block, review what was performed against what was prescribed, and only then move the plan.

The agent can help. It can show what is stale, what was inferred and never confirmed, what actions ran without a recorded output. It should not run the routine by itself. The person who owns the process still has to touch the truth.

Skip this and you get a familiar failure. The system looks detailed. The details are from last month. You will call it a model problem. It is a maintenance problem.

## Connect to the process, or do not bother

A knowledge engine that sits next to the work is a reference. Wired into a live process, it is a participant.

Wiring in means the agent's actions are the same objects the process already uses. The shopping list the agent writes is the list you take to the store, not a second list in a chat. The session the trainee logs is the session the trainer sees. Outputs live where the workflow lives.

It also means you can stop the agent. A person sees the proposed shop before money moves. A trainer sees the suggested deload before the plan changes. If you cannot point to the moment someone can say no, you did not wire it into a process.

Drift is a private version of the world: chat memory, a scratchpad the process cannot see. Keep one state. Make the agent read and write that state through the same actions everyone else uses. That is not a trick. It is refusing to let the model keep a second set of books.

## Precision is the product

I do not care if an agent can talk. I care if I can leave it on a repeating job and trust the output without redoing the job.

That trust is not a feeling you prompt into existence. It is structure, a small learning loop, an update routine, and a live process with somewhere to stand and say no. Until those exist, you have a demo. Demos are fine on a Sunday. They are a liability on a Tuesday, when the list is wrong and you are debugging a helper instead of doing the work.

Almost-correct agents are worse than no agent because they spend your attention. A precise system gives attention back. That is the only reason to build one.
