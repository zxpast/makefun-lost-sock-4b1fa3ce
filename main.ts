// Funniest Lost Sock Status Update — make.fun entry (program/v1).
//
// Emits one lost-sock status update to entry.txt. Plain Node 22 with
// only the standard library — no network, no clock, no randomness —
// so a second run produces exactly the same bytes as the first.
//
// The joke: the sock was eaten by the dog on Tuesday and is now
// reporting in from inside him. The laugh comes at the very end,
// when the dog tells the vet the sock was a "dietary choice".

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SOCK_LINE =
  "Lost sock update: I'm inside Rex now. He ate me Tuesday. He keeps telling the vet I'm a 'dietary choice.'";

// The harness tells us where the artifact belongs through
// MAKEFUN_OUTPUT_DIR; fall back to /output when it is unset.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate the line against the house rules before writing anything:
// UTF-8 text, 1–120 characters, exactly one line, not blank.
// Refuse loudly rather than hand the gate an entry it would reject.
function checkGate(line: string): void {
  const charCount = [...line].length;
  if (charCount < 1 || charCount > 120) {
    throw new Error(`entry is ${charCount} characters, gate allows 1-120`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be one non-blank line");
  }
}

// Write the line, then read it back: what was graded has to be this
// exact string, byte for byte, every single run.
function writeEntry(line: string, dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/entry.txt`, line, "utf8");
  if (readFileSync(`${dir}/entry.txt`, "utf8") !== line) {
    throw new Error("entry.txt does not match the intended entry");
  }
}

checkGate(SOCK_LINE);
writeEntry(SOCK_LINE, outDir);
