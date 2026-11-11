# Ship's Log

Ship's Log is Liam's personal learning environment: a set of stable, finite
lessons organized into recognizable channels and connected by a shared learning
history.

## Repository map

- [AGENTS.md](AGENTS.md) — authoring, stability, validation, and publication contract
- [coordination/](coordination/) — shared memory between topic-specific chats
- [Ships-Log/topics.js](Ships-Log/topics.js) — canonical channel identities and scope
- [coordination/connections.md](coordination/connections.md) — proposed and confirmed cross-topic relationships
- [Ships-Log/](Ships-Log/) — the GitHub Pages application and local assets
- [scripts/validate-repository.mjs](scripts/validate-repository.mjs) — contract validation used locally and in GitHub Actions

Topic chats should begin with the root instructions and their own file under
`coordination/topics/`. Tone and internal sequence remain chat-specific unless
Liam asks to preserve them.
