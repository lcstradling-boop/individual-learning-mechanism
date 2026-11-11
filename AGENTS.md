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
recognizable channels, evocative thumbnails, clear titles, visible duration, and
freedom to choose—without building an endless feed. Every lesson is finite,
stable after publication, and asks Liam to transform the idea through action.

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

### Long-form default

Liam reads quickly and learns well through narrative. A substantial lesson will
often contain 1,500–3,500 words plus meaningful activity, but word count is not a
goal. Use as many sections as the idea needs, commonly following this movement:

1. A narrative or historical opening that creates a real question.
2. A plain-language model.
3. The mechanism and terminology that make the model precise.
4. A worked case followed from beginning to end.
5. A changed condition that exposes assumptions or failure.
6. A connection to another idea when structurally useful.
7. Activities that produce evidence of understanding.

Do not mechanically force every lesson into seven sections. Narrative without a
model becomes entertainment; a model without application becomes recognition
mistaken for learning.

Every lesson must have:

- One central question.
- An accurate, inviting title and subtitle.
- A permanent topic ID from the registry.
- A finite section sequence.
- One or more activities requiring explanation, prediction, calculation,
  diagnosis, construction, comparison, or application.
- One fixed completion estimate covering reading, thought, transitions, and work.
- A locally stored, legally reusable thumbnail.
- Source records adequate to revisit factual and current claims.

Free response is the default. Multiple choice is appropriate only when the
distractors themselves diagnose distinct models.

## Time estimates

Estimate the fixed experience Liam will actually complete. Reading length alone
does not justify duration. Include rereading, calculation, writing, observation,
tool switching, setup, and time to think. Typical lessons may take 30–100
minutes; shorter lessons are allowed when honest.

Use saved focused time to calibrate later estimates when Liam supplies it. Do
not expose hidden timing on lesson pages. Record an attempt only after deliberate
Save Visit.

## Personalization

Personalization must change the explanation, model, example, or connection. Do
not name-drop courses or media. Check `resonant-media.md` before relying on a
work's personal significance.

Begin with a plain model, expose the underlying system, then introduce notation
or terminology as precision. Keep observation, interpretation, assumption,
inference, and uncertainty distinguishable.

## Stable artifacts

A published lesson is stable. Never silently rewrite its title, framing, central
question, sections, or activities after use. Correct factual errors explicitly
and minimally. Substantial reframing creates a new permanent ID and may connect
back to the earlier lesson.

Never reuse or rename a published lesson ID. A blacklisted lesson or one marked
“I won't forget this material” returns only if Liam restores it. A lesson marked
“I don't yet have the tools” returns when Liam chooses or when concrete evidence
shows the prerequisite gap has closed.

## Canonical data contract

Add each lesson in three coordinated places:

1. Append its lesson object to `Ships-Log/lessons.js`.
2. Add its session object to `Ships-Log/sessions.js`.
3. Save its thumbnail at `Ships-Log/images/<lesson-id>.jpg`.

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
      kind: "narrative",
      heading: "Section heading",
      body: ["One or more stable paragraphs."]
    },
    {
      kind: "mechanism",
      heading: "Section heading",
      body: ["Stable prose with notation or a worked case when appropriate."]
    }
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
  thumbnail: {
    file: "images/permanent-lesson-id.jpg",
    alt: "Concrete description of the image",
    sourceUrl: "https://source.example/item",
    creator: "Creator name",
    license: "License or platform terms"
  },
  activities: [
    {
      kind: "explain",
      prompt: "A specific action or question.",
      evidence: "What an answer should make visible without supplying that answer."
    }
  ]
}
```

The application may retain backward-compatible readers, but new lessons use this
contract.

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

Channel logos are stable navigation marks stored in
`Ships-Log/images/channels/` and registered in
`Ships-Log/topics.js`. Do not replace them as part of a lesson.

Lesson thumbnails are evocative entry points, not diagrams of the answer. Find a
legally reusable existing image; do not generate one unless Liam requests it.
Save the bytes locally, normally as an 800 × 450 JPEG, and preserve creator,
source, license, and meaningful alt text in session metadata.

Keep required CSS, fonts, icons, and images local.

## Validation and publication

Before committing:

1. Confirm the topic ID exists and the lesson ID is unique.
2. Confirm IDs, image paths, and connection endpoints agree.
3. Confirm sources and thumbnail attribution are complete.
4. Confirm the thumbnail and channel logo decode locally.
5. Run syntax and repository-contract checks.
6. Open the affected channel and lesson through normal navigation.
7. Test reading, activities, Save Visit, review behavior, dark mode, and mobile
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
