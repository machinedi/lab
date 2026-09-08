---
title: Compile knowledge at build time
description: Runtime search invites guessing. Compiling claims before anything is asked, with provenance and a hard unknown, is the more honest design.
pubDate: 2026-09-03
status: published
listing: full
---

If you let a model search a pile of documents at answer time, it will fill the gaps. That looks fluent. It is also how invented facts get into a real process.

I compile knowledge before anything is asked. Sources go in. A structured set of claims comes out. Each claim keeps its source, its date, and a boundary for what it does not cover.

When the compiled set does not contain an answer, the system says it does not know. Guessing is a bug, not a fallback.

The compiled set is served read-only. Agents can query it. They do not edit it while answering. If the knowledge needs to change, it goes back through the compile step, with provenance, the same as the first time.

This is slower than pointing a model at a folder. It is also the only way I have found to leave a system on a repeating job without spending the evening checking what it invented.
