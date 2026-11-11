// Published lesson IDs are stable. Add a new ID for a different edition.
const initialLessons = [
  {
    id:"stocks-and-flows", topic:"Systems thinking", title:"What a river remembers",
    subtitle:"A river carries water past you. A reservoir keeps a record of everything that came in and went out.",
    anchor:"Calculus I · Water-tower model", question:"Two reservoirs have the same water level at noon. What else would you need to predict their levels at sunset?",
    sections:[
      ["Choose a boundary","Picture the reservoir behind a dam. Draw an imaginary line around the water inside it. At one instant you can ask how many liters it contains. That quantity is a stock. Now watch water cross the line. Liters arriving or leaving per minute measure flows. Moving the boundary to include a second reservoir changes which transfers count."],
      ["Read the units","Suppose you start with 100 liters. For ten minutes, 8 liters enter and 5 leave each minute. The stock gains 3 liters per minute, so it ends at 130 liters. Increase the outflow to 8 and the level holds steady, even though water keeps moving through the system."],
      ["Return to Calculus I","The derivative of volume with respect to time is the net flow rate. Integrating the net rate from noon to sunset gives the change in volume. You need the starting volume to recover the ending stock. Your water-tower model used height to estimate pressure. Here the question runs one step earlier: what history of flows could have produced that height?"]
    ],links:[["orbits","Follow how a changing quantity accumulates in motion."],["feedback","Let the stored water influence its own outflow."]]
  },
  {
    id:"orbits",topic:"Physics",title:"Falling around a planet",
    subtitle:"Why does a sideways push change where a fall ends?",anchor:"Outer Wilds · Calculus I",
    question:"At one instant a spacecraft moves east and gravity pulls south. What would you predict about its direction a moment later?",
    sections:[
      ["Start with the sideways motion","Imagine switching off a spacecraft’s engines high above an airless planet. It already has sideways velocity. Gravity continually turns that velocity toward the planet. With the right speed and direction the falling craft keeps missing the surface. A circular orbit is one special case."],
      ["Follow one small interval","Over a short time Δt, the velocity changes by roughly acceleration × Δt. The change points toward the planet’s center, while the current velocity in a circular orbit points along the tangent. Adding those arrows turns the direction. In an ideal circular orbit the speed stays constant even as the velocity changes."],
      ["Try looking through the cockpit","In Outer Wilds, matching a destination’s velocity changes what the approach feels like. Knowing where the destination is takes care of only half the question. Which way are you moving relative to it? That same distinction explains how two craft can pass the same point and head into very different futures."]
    ],links:[["stocks-and-flows","Compare accumulated changes in velocity and volume."]]
  },
  {
    id:"feedback",topic:"Systems thinking",title:"When the level changes the flow",
    subtitle:"Let a tank drain through a hole. Now its history affects what happens next.",anchor:"Water-tower model · Systems thinking",
    question:"If a float opens an inlet valve as a tank empties, what part of that loop opposes the original change?",
    sections:[
      ["Let the tank answer back","Put a small opening near the bottom of a tank. The water above the opening creates a pressure difference. A fuller tank can therefore drain faster. The stored volume affects outflow, and that outflow changes the stored volume. Following those arrows brings you back to where you started. That is feedback."],
      ["Make a prediction","Compare two identical open tanks, one nearly full and one half full, both receiving the same constant inflow. Assuming the same unobstructed outlet, the fuller one initially drains faster. If a steady operating level exists, raising the level above it increases the outflow and tends to bring the level down. This is balancing feedback."],
      ["Change the boundary","Your water-tower calculation could treat height as a given input for a single instant. To predict a whole afternoon, height becomes a changing quantity within the model. Sometimes the missing explanation for a system’s behavior is an arrow back to something you had been treating as fixed."]
    ],links:[["stocks-and-flows","Return to the simpler tank with fixed rates."]]
  },
  {
    id:"japanese-topic",topic:"Language",title:"What は lets you leave unsaid",
    subtitle:"Follow the topic of two short Japanese sentences and notice what survives the full stop.",anchor:"Japanese · Reading practice",
    question:"After someone says この本は面白い, what context would make 昨日買った easy to interpret?",
    sections:[
      ["Put a book on the table","この本（ほん）は面白（おもしろ）い means “This book is interesting.” は marks この本 as the topic. In this sentence the property of being interesting applies to the book. A topic gives the listener something to interpret the following comment against."],
      ["Carry it forward","Suppose a friend is holding the book and says 昨日（きのう）買（か）った, literally “bought yesterday.” In this setting you might understand “I bought it yesterday.” Neither the buyer nor the thing bought appears explicitly in that sentence. The buyer is inferred from the situation, and the book is already under discussion."],
      ["Test the inference","Now imagine you and the speaker have just been discussing the speaker’s sister and her new purchase. The same 昨日買った can point to the sister as buyer. Your kanji knowledge helps you identify the action. Your model of the conversation helps you recover who did it."]
    ],links:[["rereading","Compare what a reader supplies from earlier context."]]
  },
  {
    id:"rereading",topic:"Narrative",title:"The scene you meet twice",
    subtitle:"How can the very same scene mean something different on a second encounter?",anchor:"Frieren · Narrative perspective",
    question:"Choose one remembered detail. What did you know the second time that you could not have known the first?",
    sections:[
      ["Return to the flowers","In Frieren, the flower spell ties together Flamme’s wish and a moment of comfort for a lost child. Think of the instant before you knew who that child was. The gesture already had a meaning. Learning that the child was Himmel gives it a place in a longer history."],
      ["Locate the change","Try writing down the visible action in one sentence, then write what the action means to you now. The first can stay nearly identical across viewings. The second can change because later scenes have given you a different set of relationships to bring to it. This is one reason revisiting a story can yield a genuinely new observation."],
      ["Carry it into a review","Leave one interpretation in your journal today. When you return to the passage, read it once before opening your note. You can then compare two readings of the same words and point to the detail, intervening idea, or experience that shifted your attention."]
    ],links:[["japanese-topic","See how a listener brings context to a sentence."]]
  }
];
