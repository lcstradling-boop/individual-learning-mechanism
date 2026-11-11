# Ship's Log lesson-authoring instructions

These instructions apply to the entire repository. Follow them whenever the user asks for a new lesson, a next lesson, a lesson revision, or a change to the learning rotation.

## Purpose

Ship's Log is Liam's personal learning environment. It exists to turn attention into familiarity, intellectual breadth, curiosity, and connections between ideas. Learning itself is the payoff. A lesson may supplement a past, current, or future class, but it does not need an academic or career payoff.

The experience borrows the useful shape of YouTube: inviting thumbnails, clear titles, visible duration, easy entry, and multiple topics to choose from. It must not optimize for compulsive consumption. Each lesson has a finite scope, a deliberate stopping point, and something for Liam to do with the idea.

The site favors breadth and recognition over mastery and technical depth. Technical detail should make the central idea intelligible rather than turn the lesson into a compressed textbook chapter.

## Context to consult

Before choosing or writing a lesson:

1. Read `Ships-Log/lessons.js`, `Ships-Log/sessions.js`, and the current application behavior in `Ships-Log/app.js`.
2. When ChatGPT Library is available, read the current versions of `individual-learning-mechanism-design.md`, `resonant-media.md`, and `youtube-comparison.md`.
3. Use learning history, ratings, reflections, paused lessons, and timing data supplied by the user or the site's “Request a next lesson” prompt. Do not assume access to browser `localStorage` from chat.
4. Treat prior courses, existing lessons, and resonant media as possible bridges. Use a bridge only when it clarifies the concept.

Useful recurring contexts include Calculus I, Linux and systems administration, Japanese, systems thinking, the water-tower model, *Outer Wilds*, *Frieren*, *Princess Mononoke*, *Madoka Magica*, *Undertale*, *Deltarune*, and *Civilization*. These are a palette, not a checklist. Repeating a familiar reference without gaining explanatory power makes personalization feel artificial.

## Choosing the next lesson

Choose one bounded idea that can change how Liam notices or interprets something. Prefer a lesson that does at least two of the following:

- Extends an idea already encountered.
- Creates a connection between distinct subjects.
- Introduces a useful idea likely to appear in a future course.
- Opens a worthwhile tangent with no immediate academic payoff.
- Returns to an uncertain area from a clearer direction.
- Gives language to a pattern Liam has already noticed.

Avoid choosing solely by novelty, popularity, or presumed usefulness. Do not build a rigid curriculum unless the user asks for one. If the history indicates that Liam lacks a prerequisite, create a prerequisite lesson or leave the original lesson paused. A lesson marked “I won't forget this material” or blacklisted returns only when Liam explicitly restores it. A lesson marked “I don't yet have the tools” may return when Liam chooses or when the available history gives a concrete reason that the prerequisite gap has closed.

## Lesson shape

Every lesson should have:

- One central question or model.
- A title that creates honest curiosity without exaggerating the lesson.
- A subtitle that states the conceptual hook.
- A topic name broad enough to group related lessons.
- An anchor naming one or two genuine connections.
- Usually three short sections that move from intuition to mechanism to connection.
- One open question that asks Liam to predict, compare, explain, or notice.
- A finite set of activities that produces evidence of engagement.
- One completion-time estimate covering both reading and activities.
- At least one useful connection to an existing lesson when such a connection exists.
- A sourced thumbnail saved inside the repository.

Start with a plain account of the idea, then expose the mechanism underneath it. For mathematical or technical subjects, introduce the system and its quantities before notation. Explain what the notation makes precise. For humanities, language, and narrative subjects, distinguish observation from interpretation and show what evidence changes the interpretation.

Use free response more often than recognition questions. Activities may ask Liam to draw, calculate, predict, construct an example, compare cases, explain in his own words, or apply the idea to a new setting. Disciplinary connections can be pointed out without becoming test questions.

## Scope and time estimates

Liam reads quickly. Reading a few hundred words does not by itself justify a ten-minute estimate. Most of the estimate should come from the thinking and activity the lesson requires.

Estimate the lesson as a single fixed experience. Do not offer selectable lengths. Use any reasonable duration, usually between 10 minutes and 1 hour 40 minutes. A lesson can be shorter or longer only when its actual work supports that estimate.

Estimate from:

- Reading and rereading.
- Drawing, calculation, writing, or observation.
- Switching to any required material.
- Time to think before answering.
- The learner's existing familiarity.

Do not pad a lesson to reach a round duration. Keep the scope coherent and use the nearest honest estimate. As saved timing data accumulates, compare estimates with Liam's actual focused time and calibrate later lessons. Do not expose hidden timing data on lesson pages.

## Personalization and media

Personalization should change the explanation, example, or connection. It should never be decorative name-dropping.

Examples:

- Use *Outer Wilds* for knowledge as progression, observation before intervention, orbital motion, incomplete models, or the effect of later knowledge on earlier interpretation.
- Use *Frieren* for patient attention, impermanence, rereading, quiet competence, memory, or craft whose value exceeds power.
- Use the water-tower work for pressure, stocks and flows, modeling boundaries, changing variables, and assumptions.
- Use Linux for processes, permissions, queues, networks, layers, and feedback between components.
- Use Japanese when context, omission, writing systems, or competing interpretations genuinely illuminate the topic.

Preserve the learner's actual relationship to the referenced work. Check `resonant-media.md` rather than relying on generic summaries of a title.

## Stable lessons and revisions

A published lesson is a stable artifact. Never silently rewrite its title, subtitle, question, sections, or activities after it has been used. Reviews must return to the same material.

If factual correction is required, tell the user and make the smallest explicit correction. If the concept, framing, or activities substantially change, publish a new lesson with a new ID and connect the two editions. Connection metadata may be added to an older lesson without changing its instructional text.

Lesson IDs are permanent storage keys. Never reuse or rename an ID after publication.

## Repository contract

Add each lesson in three coordinated places:

1. Append its lesson object to `Ships-Log/lessons.js`.
2. Add the matching session object to `Ships-Log/sessions.js`.
3. Save its thumbnail as `Ships-Log/images/<lesson-id>.jpg`.

Append new lessons to `initialLessons`; array order records introduction order and drives the topic sort. Use a lowercase kebab-case ID. The same exact ID must appear in both JavaScript files and the image filename.

The lesson object has this shape:

```js
{
  id: "stable-kebab-case-id",
  topic: "Broad topic",
  title: "Inviting, accurate title",
  subtitle: "The question or connection that makes the idea worth opening.",
  anchor: "Prior context · Second genuine context",
  question: "One open prediction, comparison, or explanation prompt?",
  sections: [
    ["Intuitive section heading", "Stable lesson prose."],
    ["Mechanism section heading", "Stable lesson prose."],
    ["Connection section heading", "Stable lesson prose."]
  ],
  links: [["existing-lesson-id", "Why following this connection is worthwhile."]]
}
```

The matching session object has this shape:

```js
"stable-kebab-case-id": {
  "photo": 12345678,
  "alt": "Concrete description of the thumbnail",
  "minutes": 25,
  "activities": [
    "A specific action with a visible or explainable result.",
    "A second action that tests the idea in a changed case."
  ]
}
```

`photo` is currently the Pexels photo ID used by the credits page. If the image source system changes, update the credits implementation and preserve attribution.

## Thumbnail rules

Find an existing, legally reusable photograph that evokes the lesson's idea, connection, or question. Do not generate an image unless the user specifically requests generated imagery.

- Prefer Pexels while the credits page assumes Pexels IDs.
- Save the actual image bytes locally. Do not hotlink.
- Crop or resize to an 800 × 450 JPEG when practical.
- Use a meaningful `alt` description.
- Favor an image that prompts a question over a literal diagram of the answer.
- Preserve source attribution through the `photo` field and credits page.

## Connections

Every linked ID must exist. A link description should explain the conceptual relationship, not merely label the other topic. Add a reverse connection to an older lesson when it materially improves navigation; this is allowed connection metadata, not a rewrite of lesson material.

Avoid making every lesson connect to the same favorite subject. The growing graph should reflect real structural relationships among ideas.

## Accuracy and sources

Research current, specialized, or uncertain claims before writing. Prefer primary sources, textbooks, reputable educational institutions, or authoritative documentation. Keep the lesson readable and original. Do not copy source passages. Record image attribution in the site and mention any important research sources in the completion report.

## Validation and publication

Before committing:

1. Confirm the ID is unique and matches across the lesson, session, and image.
2. Confirm every connection ID exists.
3. Confirm the thumbnail decodes and has useful alt text.
4. Run a JavaScript syntax check on changed JavaScript files.
5. Open the lesson through the site's normal card and verify the reading, activities, reflection form, review behavior, dark mode, and mobile layout still work.
6. Confirm the completion estimate is visible on both the card and lesson page.
7. Bump the query-string version for any changed JavaScript or CSS asset in `Ships-Log/Ships-Log.html` so GitHub Pages does not serve a stale cached file.
8. Commit and push the complete lesson to `main`, then verify the live GitHub Pages lesson.

Do not overwrite or discard saved browser data during testing. Test records should be clearly temporary and removed only when they were created by the current task.

## Completion report

Tell Liam:

- What the lesson introduces.
- Why it was selected from the available context.
- The estimated time and the work included in that estimate.
- Which existing ideas it connects.
- The live lesson link.
- Any uncertainty in the explanation, source material, or estimate that would help calibrate the next lesson.
