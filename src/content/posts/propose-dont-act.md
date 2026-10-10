---
title: Propose, don't act
dek: Why the most useful thing my work agent does is prepare decisions it is not allowed to make.
date: 2026-10-10
readingTime: "~4 min"
topic: agent-building
---

My first work dashboard had three places where it asked me to approve things. One for agent jobs, one for audio notes, one for incoming mail. Each was reasonable on its own. Together they meant I never knew where the next decision was waiting, so I stopped trusting all of them.

When I rebuilt the system as a single desktop agent, I started from one rule: the agent proposes, and nothing else leaves it.

### One output

Every worker in the agent, whether it is reading mail, following up on tasks or summarising a meeting, produces the same thing: a proposal card. A card says what the agent wants to do, the evidence behind it (the message, the task, the line in the meeting), how confident it is, and what will happen if I press the button. The button text is the outcome, not "Approve".

If the same request shows up twice, the card is updated, not duplicated. One card per thing.

### Some actions are never on the menu

Behind the cards is a table of every action the agent can take, and how far it may go with each one: free, ask first, or never. Sending is never. The agent can write a draft into my mail client and open it for me. It cannot press send. The same goes for public comments in other tools: it drafts, I post.

This is not a line in a prompt asking the model to be careful. It is the shape of the code. A write that the policy would refuse is checked before a card is even created, so I never see a card that approving could not actually run.

### Approving is not the end

An approved card runs through an executor that records what happened. If something fails, the card says so and offers one retry. If I change my mind, most actions have a one-step undo that puts back the old name, date or owner. Cards that were approved but did not run are listed, not hidden.

"Not now" is a snooze, not a rejection, so the agent never learns a wrong lesson from "later".

### Earning more reach

The agent can ask for more freedom, but it has to earn it. For a low-risk action, it counts my real decisions. Only an approval that actually executed counts. An edit, a rejection or a "no" resets the count. After five in a row, it files an ordinary card asking whether it may do that one thing on its own. I decide. Whatever I answer, the count starts again.

### Where an instruction came from matters

The agent reads mail. Mail can contain instructions. So every card carries where it came from. If outside text led to a card that would change the agent itself, its routines or its permissions, that card always waits for me, whatever the table says.

### What this changed

I have one queue instead of three. Each card tells me exactly what will happen. Trust grows from history instead of being granted on day one. And the one line in the table that never moves is the one I care about most: the agent does not send anything in my name.

Human in the loop is not an Approve button. It is a source for every card, a check that the world has not changed since the card was written, a real undo, and an honest list of what did not happen.
