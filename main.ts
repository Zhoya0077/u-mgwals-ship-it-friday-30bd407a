// Ship It Friday — writes one funny git commit message to /output/entry.txt.
// The entry is a single line an AI coding agent would commit right before
// breaking production on a Friday: confident, cheerful, and completely
// unaware of the disaster it is about to cause.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: delete the failing safety check — CI is green, it's Friday, merging straight to prod";

// Self-checking gate: the sealed scorer only accepts UTF-8 text of
// 1 to 159 characters, not only white space, on a single line.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 159) {
  throw new Error(`entry is ${chars} characters, must be 1-159`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
