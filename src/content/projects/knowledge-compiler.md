---
title: Knowledge compiler
summary: A method for compiling knowledge at build time, with provenance, a zero-guess rule, and read-only serving. Built for real work. Details sanitized.
status: Built for real work, details sanitized
kind: project
featured: true
order: 1
---

I needed answers that stayed inside a known set of facts. Searching a pile of documents at answer time is convenient. It is also how a model fills gaps and sounds sure.

The method I landed on is to compile knowledge before anything is asked. Sources go in. A structured set of claims comes out. Each claim keeps provenance: where it came from, when it was compiled, and what it does not cover.

If a fact is not in the compiled set, the answer is that it is not there. Guessing is treated as a bug.

The compiled set is served read-only over MCP. Agents can query it. They cannot edit it in the same motion as answering. When the knowledge needs to change, it goes back through the compile step, with the same provenance rules as the first time.

I built this for real work. Names, domain details, and outcomes stay off this page on purpose.
