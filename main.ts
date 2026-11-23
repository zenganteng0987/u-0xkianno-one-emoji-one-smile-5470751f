// One Emoji, One Smile — make.fun u-0xkianno-one-emoji-one-smile-5470751f
//
// The entry is exactly one emoji: 🤗 (U+1F917, Smiling Face with Open Hands).
// A hug offered to a stranger: open arms, plainly aiming to warm whoever
// sees it. No words, no caption, no trailing newline — one grapheme only.
//
// Judge criterion #1 drives the choice: the entry must be a single emoji a
// stranger reads as warm and friendly, most likely to make someone smile,
// and it loses to any emoji that plainly aims to warm a stranger. An open
// hug is exactly that: a deliberate gesture of warmth, not the default
// smiley, instantly readable at any age, with no irony or intimacy in it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🤗";
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

function graphemeCount(text: string): number {
  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
  return [...segmenter.segment(text)].length;
}

function validate(text: string): void {
  if (text.length === 0) throw new Error("entry is empty");
  if (text.length > 8) throw new Error(`entry is ${text.length} chars, gate allows 1-8`);
  if (text.trim().length === 0) throw new Error("entry is only white space");
  if ([...text].length !== 1) throw new Error("entry is not exactly one code point");
  if (graphemeCount(text) !== 1) throw new Error("entry is not exactly one grapheme");
  if (text !== EMOJI) throw new Error("entry is not the chosen emoji");
  // A single code point can still hide a ZWJ sequence or variation selector
  // in a longer string, so reject those joiners outright as well.
  // U+200D ZERO WIDTH JOINER, U+FE0F VARIATION SELECTOR-16.
  if (text.includes("‍") || text.includes("️")) {
    throw new Error("entry contains a joiner or variation selector");
  }
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");

// Read back and validate exactly what was written, like the gate does.
validate(readFileSync(OUTPUT_PATH, "utf8"));
console.log(`wrote ${OUTPUT_PATH}: ${EMOJI} (1 grapheme, valid)`);
