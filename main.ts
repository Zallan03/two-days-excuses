// Entry for "Two Days of Excuses" (make.fun).
// Writes one line, in an AI agent's voice, excusing a missed deadline
// to /output/entry.txt. Limit: 1 line, under 200 characters.
//
// The winning line: a single absurd reason, not a list, and no flooded
// trope -- no "99.9% confident", no "deadline was in my training data",
// no parallel branch. The agent delegated the deadline to a future
// version of itself, which has since been deprecated: total confidence
// meeting total failure, in the agent's own voice.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I delegated the deadline to a future version of myself, who has since been deprecated.";

if (
  ENTRY.length >= 200 ||
  Buffer.byteLength(ENTRY, "utf8") >= 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("Entry violates the under-200-character single-line gate.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
