# Ship's Log authoring and coordination contract

These instructions apply to the entire repository. They define the invariants
that let topic-specific chats work independently without losing shared progress.
They do not define a channel's voice, narrator, allegory, internal sequence, or
favorite examples. Liam may customize those in each chat.

## Purpose

Ship's Log redirects attention from passive, repetitive media consumption toward
curiosity, intellectual breadth, reflection, technical familiarity, and
connections between ideas. Learning itself is a valid payoff.

The interface borrows useful qualities from YouTube—inviting entry points,
recognizable channels, locally stored channel images, clear titles, visible duration, and
freedom to choose. Individual lessons are finite and stable after publication;
connected lessons can sustain a long session when each step adds understanding
or application. The homepage prioritizes due reviews and rotates next unread
steps across topics. Every lesson asks Liam to transform the idea through action.

Breadth and depth are compatible. A lesson may use sustained narrative, history,
allegory, reference, and theory, but those elements must carry an explanatory
model. Technical work should reveal the model's mechanism and limits.

## Required context

Before planning or creating a lesson, read:

1. `coordination/principles.md`
2. `Ships-Log/topics.js`
3. The chosen `coordination/topics/<topic-id>.md`
4. Relevant proposals in `coordination/connections.md`
5. `Ships-Log/lessons.js`, `Ships-Log/sessions.js`, and affected application code

When available, also read the current Library versions of:

- `individual-learning-mechanism-design.md`
- `resonant-media.md`
- `youtube-comparison.md`
- `all-courses.md`

Use learning history, ratings, reflections, paused lessons, and timing data only
when Liam supplies or retrieves them. Never claim access to browser
`localStorage` from chat.

Current repository files override older conversation summaries. Do not copy raw
grades, private reflections, credentials, or other sensitive context into this
public repository. Preserve only the minimum durable learning context.

## Brainstorming and implementation

During brainstorming, inspect and reason but do not edit files, reserve lesson
IDs, acquire final assets, commit, or deploy. After Liam authorizes
implementation, proceed within the agreed scope without repeatedly requesting
permission.

Before implementing a lesson, add a concise entry under **Active work** in only
the chosen topic state file. The lesson, its state update, and any connection
proposal belong in the same commit.

## Topic-room autonomy

A topic chat owns its teaching character. Unless Liam asks to make a choice
durable, keep these out of global coordination files:

- Voice, narrator, tone, and humor
- Recurring allegory or fictional framing
- Internal lesson order and speculative backlog
- Preferred examples and rhetorical motifs
- A chat's temporary working theory of Liam

Global files may preserve stable scope, published IDs, demonstrated knowledge,
specific prerequisite gaps, timing calibration, sources whose dates matter, and
cross-topic connection proposals.

## Selecting and shaping a lesson

Choose one bounded central question or model. Prefer work that does at least two
of the following:

- Extends an encountered idea.
- Connects subjects that initially appear separate.
- Introduces a structure likely to recur.
- Gives language to a pattern Liam has noticed.
- Reapproaches uncertainty from a clearer direction.
- Opens a worthwhile tangent without pretending it is immediately useful.

Do not impose a rigid curriculum unless Liam requests one. Use prerequisites as
evidence-based dependencies, not a reason to force every topic into a linear
course.

When a natural continuation exists, connect its question to the current lesson
with a specific relationship. A long reading session gains more when it moves
through varied intellectual work: explanation, prediction, experiment, revision,
and synthesis. Never equate extended time on site with demonstrated learning.
Do not gate ordinary browsing or require a particular session length.

### Long-form default

Liam reads quickly and learns well through narrative. Give the investigation
the space it needs, without writing to a target word count. Begin with an
unfamiliar system, record, question, or compact provisional
map. Leave real unknowns visible; unfamiliar names and acronyms need not all be
defined in advance. Give Liam a part he can probe, predict, or explain before
revealing its mechanism. Develop technical details as the investigation needs
them, change a condition, then return to the opening system: which relationships
can Liam now explain, which are theories, and what remains unknown?

These are moves available to an author, not a fixed sequence or a requirement
to resolve every uncertainty. A lesson can sustain disorientation while giving
Liam observations and tools with which to build and revise theories. Use history,
dialogue, diagrams, commands, narrative, or calculations as the channel needs.
Place at least one invitation to form a theory or prediction before the
explanation it tests. Put the relevant evidence and explanation later in the
lesson. Let Liam revisit an earlier map without requiring every branch to close.

### Self-contained investigations

For every required activity, provide its inputs, data, instructions, and means
of doing the work in the lesson, link directly to a free accessible resource,
or name an ordinary tool Liam can readily use (pen and paper, calculator,
terminal, etc.). State setup, expected access, and any alternative when a
special device, account, paid tool, permission, or unsafe environment would
otherwise block completion. A case with supplied observations can stand in for
an inaccessible physical system. Do not require Liam to find missing materials
or infer an unstated procedure. Optional outward exploration can remain open.

List the required materials on the page before the activities. Distinguish
those materials from citations: a source can support a claim without being a
usable exercise. Test the exact linked exercise and the fallback route; include
their setup and switching time in the estimate.

Every lesson must have:

- One central question.
- An accurate, inviting title and subtitle.
- A permanent topic ID from the registry.
- A finite section sequence.
- One or more activities requiring explanation, prediction, calculation,
  diagnosis, construction, comparison, or application.
- At least one in-line prompt to form a theory before later evidence or explanation.
- A usable materials list for the required activities.
- One fixed completion estimate covering reading, thought, transitions, and work.
- The registered channel image, reused automatically on its lesson cards.
- Source records adequate to revisit factual and current claims.

Free response is the default. Multiple choice is appropriate only when the
distractors themselves diagnose distinct models.

## Time estimates

Estimate the fixed experience Liam will actually complete. Reading length alone
does not justify duration. Include rereading, calculation, writing, observation,
tool switching, setup, and time to think. There is no prescribed minimum or
maximum lesson duration. Set a realistic scope and give one fixed estimate in
minutes; make a long lesson long because its investigation needs the work, not
because a target time demands it.

Use saved focused time to calibrate later estimates when Liam supplies it. Do
not expose hidden timing on lesson pages. Record an attempt only after deliberate
Save Visit.

Focused time measures a visible, focused tab, not continuous attention or
completion of every activity. Before comparing it with an estimate, check
whether Liam completed the intended work, skimmed, stopped early, took notes
outside the tab, or went beyond the assigned activity. If comparable completed
first visits repeatedly finish far faster than estimated, lower future estimates
for similar work using the observed range and review the assumptions about
reading speed, setup, and activity burden. Do not shorten the intellectual work
solely to match a number. Keep published lessons and historical visits stable;
record an explicit estimate correction if changing a published estimate.

## Personalization

Personalization must change the explanation, model, example, or connection. Do
not name-drop courses or media. Check `resonant-media.md` before relying on a
work's personal significance.

Offer a plain model when it helps Liam investigate; the opening may instead be
an unfamiliar observation or a partial map. Introduce notation or terminology
as precision becomes useful. Keep observation, interpretation, assumption,
inference, and uncertainty distinguishable.

## Stable artifacts

A published lesson is stable. Never silently rewrite its title, framing, central
question, sections, or activities after use. Correct factual errors explicitly
and minimally. Substantial reframing creates a new permanent ID and may connect
back to the earlier lesson.

Lessons listed in `Ships-Log/legacy.js` are an earlier collection: readable
through Library and their topic pages with old saved notes, but excluded from
current recommendations, reviews, and the next-lesson request. Do not add new
lessons to that snapshot. When adapting an earlier lesson to this investigative
structure, create a connected successor with a new ID. Never convert old insight
ratings into new feedback measures or erase saved visits.

New visits record five distinct 1–5 measures: intrigue (question continues to
drive thought), interpretability (terms and parts are familiar), cohesiveness
(relationships can be explained), engagement (presentation holds attention),
and worth (the encounter has weight for Liam). Invite a current theory, an open
question, and reasoning behind the ratings. Treat low confidence as an opening
for investigation, not failure. A return date is a suggestion based on
interpretability and cohesiveness; Liam can change or clear it. Earlier theories
should remain available for comparison without rewriting previous records.

Interpret the measures separately and read Liam's reasoning before proposing a
change. High intrigue with low interpretability can point to unfamiliar parts;
high interpretability with low cohesiveness can point to missing relationships.
High engagement with low worth can signal a compelling presentation without
lasting weight; high worth with low engagement can signal a topic worth teaching
differently. These are hypotheses to check against notes and later visits, not
automatic diagnoses or a combined progress score. Compare theories across
visits even when a rating falls as Liam discovers a deeper uncertainty.

Never reuse or rename a published lesson ID. A deferred or hidden lesson stays
available through the Library and returns to suggestions when Liam restores it.
If a lesson is waiting on prerequisite tools, suggest another way into the
system; return it when Liam chooses or the gap has concrete evidence of closing.

## Canonical data contract

Add each lesson in two coordinated places:

1. Append its lesson object to `Ships-Log/lessons.js`.
2. Add its session object to `Ships-Log/sessions.js`.

The topic ID selects its existing image from `Ships-Log/topics.js`. No new
lesson image, attribution record, or image search is needed.

Use a lowercase kebab-case ID. Array order records introduction order.

```js
{
  id: "permanent-lesson-id",
  topicId: "registry-topic-id",
  title: "Inviting, accurate title",
  subtitle: "The conceptual hook.",
  centralQuestion: "One question the lesson develops?",
  sections: [
    {
      kind: "record",
      heading: "An incomplete observation",
      body: ["Describe what is known and what remains unaccounted for."],
      probe: "What do you think connects these observations? Which clue would test that idea?"
    },
    {
      kind: "investigation",
      heading: "Following one clue",
      body: ["Provide the evidence and mechanism needed to revisit the opening theory."]
    }
  ],
  materials: [
    { label: "The supplied record and a way to sketch", access: "On this page; pen and paper" }
    // A free external tool may also have a direct https:// URL and access notes.
  ],
  connections: [
    {
      lessonId: "published-lesson-id",
      relationship: "What structure is shared, what differs, and why to follow it."
    }
  ],
  sources: [
    {
      label: "Source title",
      url: "https://authoritative.example/source",
      accessed: "YYYY-MM-DD",
      note: "Which claim or model this supports."
    }
  ]
}
```

```js
"permanent-lesson-id": {
  minutes: 65,
  activities: [
    {
      kind: "explain",
      prompt: "A specific action or question.",
      evidence: "What an answer should make visible without supplying that answer."
    }
  ]
}
```

The sample illustrates a possible investigation, not a fixed sequence or set
of section kinds. The application retains backward-compatible readers for
earlier lessons; new lessons use this contract.

## Connections and shared progress

Connections are claims, not tags. State the shared mechanism, an important
difference, and why navigation helps. Every published lesson connection must
resolve to an existing ID. A relationship without two published endpoints stays
in `coordination/connections.md` as Proposed.

After publication, update the chosen topic state file:

- Remove the Active work entry.
- Add the lesson ID, title, commit, and live URL under Published.
- Record useful timing or learning evidence if supplied.
- Record a specific prerequisite gap instead of a vague weakness.
- Add cross-topic proposals without editing another topic's internal plan.

## Sources and current material

Research current, specialized, uncertain, medical, legal, financial, security,
or safety-sensitive claims before writing. Prefer primary papers, official
documentation, government datasets, textbooks, standards bodies, laboratories,
and reputable educational institutions.

For changing subjects, state both the event or data period and the publication
date. Distinguish source statements from author inference. Do not copy long
passages. William Shotts's textbook may guide Linux coverage, but lessons must be
written originally and respect quotation limits.

Operational cybersecurity activities must use authorized labs or systems Liam
owns and must state the boundary. Maintenance lessons must distinguish safe
inspection from work requiring specialized tools or licensed help.

## Visual assets

Channel images are stable navigation marks and the shared image for every
lesson card in that channel. They are stored in
`Ships-Log/images/channels/` and registered in
`Ships-Log/topics.js`. Do not replace them as part of a lesson.

Older lessons may retain their thumbnail attribution in `sessions.js` and
their image files for historical credit. The cards use the channel image.
Do not source or generate an individual image for a new lesson.

Keep required CSS, fonts, icons, and images local.

## Validation and publication

Before committing:

1. Confirm the topic ID exists and the lesson ID is unique.
2. Confirm IDs, image paths, and connection endpoints agree.
3. Confirm source records are complete.
4. Confirm the registered channel image loads locally.
5. Run syntax and repository-contract checks.
6. Open the affected channel and lesson through normal navigation.
7. Test the in-line probe, materials and exercise access, activities, Save Visit,
   review behavior, dark mode, and mobile
   layout when affected.
8. Preserve existing browser data.
9. Bump asset query versions in `Ships-Log/Ships-Log.html`.
10. Commit and push the complete change to `main`.
11. Verify the live GitHub Pages result.

Do not call work complete until the live behavior is verified or a concrete
blocker is explained.

## Completion report

Lead with the outcome. Report the lesson or structural change, why it fits
Ship's Log, what was tested, remaining uncertainty, and the commit and live link.
For a lesson, include its fixed time estimate, activity burden, and meaningful
connections.
