import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const evaluate = (relative, expression) => {
  const context = {};
  vm.createContext(context);
  vm.runInContext(read(relative) + "\nthis.__result = " + expression + ";", context);
  return context.__result;
};
const fail = message => {
  console.error("ERROR: " + message);
  process.exitCode = 1;
};

const topics = evaluate("Ships-Log/topics.js", "topicRegistry");
const lessons = evaluate("Ships-Log/lessons.js", "initialLessons");
const sessions = evaluate("Ships-Log/sessions.js", "voyages");
const topicIds = new Set();
const lessonIds = new Set();

for (const topic of topics) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(topic.id)) fail("Invalid topic ID: " + topic.id);
  if (topicIds.has(topic.id)) fail("Duplicate topic ID: " + topic.id);
  topicIds.add(topic.id);
  if (!["smaller", "larger"].includes(topic.scale)) fail("Invalid scale for " + topic.id);
  if (!topic.name || !topic.purpose) fail("Missing name or purpose for " + topic.id);
  if (!fs.existsSync(path.join(root, "Ships-Log", topic.logo))) fail("Missing channel logo for " + topic.id);
  if (!fs.existsSync(path.join(root, "coordination/topics", topic.id + ".md"))) fail("Missing topic state file for " + topic.id);
}

for (const lesson of lessons) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(lesson.id)) fail("Invalid lesson ID: " + lesson.id);
  if (lessonIds.has(lesson.id)) fail("Duplicate lesson ID: " + lesson.id);
  lessonIds.add(lesson.id);
  if (!topicIds.has(lesson.topicId)) fail("Unknown topic ID on lesson " + lesson.id);
  if (!lesson.title || !lesson.subtitle || !lesson.centralQuestion) fail("Missing core lesson text for " + lesson.id);
  if (!Array.isArray(lesson.sections) || !lesson.sections.length) fail("No sections for " + lesson.id);
  if (!Array.isArray(lesson.sources)) fail("No source record array for " + lesson.id);

  const session = sessions[lesson.id];
  if (!session) {
    fail("Missing session metadata for " + lesson.id);
    continue;
  }
  if (!Number.isFinite(session.minutes) || session.minutes <= 0) fail("Invalid duration for " + lesson.id);
  if (!Array.isArray(session.activities) || !session.activities.length) fail("No activities for " + lesson.id);
  if (!session.thumbnail?.file || !session.thumbnail?.alt || !session.thumbnail?.sourceUrl || !session.thumbnail?.license) {
    fail("Incomplete thumbnail attribution for " + lesson.id);
  } else if (!fs.existsSync(path.join(root, "Ships-Log", session.thumbnail.file))) {
    fail("Missing thumbnail file for " + lesson.id);
  }
  for (const connection of lesson.connections || []) {
    if (!lessonIds.has(connection.lessonId) && !lessons.some(candidate => candidate.id === connection.lessonId)) {
      fail("Broken connection from " + lesson.id + " to " + connection.lessonId);
    }
  }
}

for (const id of Object.keys(sessions)) {
  if (!lessonIds.has(id)) fail("Orphan session metadata: " + id);
}

if (!process.exitCode) {
  console.log("Validated " + topics.length + " topics and " + lessons.length + " lessons.");
}
