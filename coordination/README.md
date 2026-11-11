# Ship's Log coordination repository

This directory is the shared memory between topic-specific chats. It lives in
the same Git repository as the site so a lesson, its progress record, and its
connections can be committed atomically. A second repository would make those
three records drift.

## What belongs here

- Stable topic identity and scope: `../Ships-Log/topics.js`
- Principles every topic chat must preserve: `principles.md`
- Cross-topic relationships worth investigating: `connections.md`
- One independently editable state file per topic: `topics/<topic-id>.md`
- The required handoff format: `handoff-template.md`

## What stays local to a chat

Unless Liam asks to preserve it, do not write a chat's tone, narrator, running
allegory, internal lesson order, favorite examples, or speculative backlog into
global files. Those choices can give a channel its character without becoming
requirements for every future author.

## Topic-chat workflow

1. Read the root `AGENTS.md`, `principles.md`, `../Ships-Log/topics.js`, the chosen
   topic state file, and relevant entries in `connections.md`.
2. Read the live lesson catalog and any learning record Liam supplies.
3. Before implementation, put a concise proposal under **Active work** in only
   the chosen topic state file. Do not reserve a lesson during brainstorming.
4. Create and validate the lesson using the repository contract.
5. In the same commit, move the item from **Active work** to **Published**, add
   observed calibration evidence, and record cross-topic proposals.
6. Add a connection to a published lesson only when both endpoints and the
   relationship are concrete. Otherwise leave it as a proposal.

The state files deliberately avoid numeric completion percentages. Progress is
evidence: published ideas, demonstrated tools, recurring misunderstandings,
timing calibration, and useful connections.
