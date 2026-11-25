// Everyday Things, Two Lines, Longer Run
// A tiny program that writes a two-line explanation of an everyday thing
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Line 1 explains a toaster to a 10-year-old through an analogy;
// line 2 says what the analogy maps and what it leaves out.
// The two lines total 376 characters including the newline between them,
// with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "A toaster is a tiny tanning bed for bread: your slice lies flat under glowing orange bars, turning golden and crisp, until — pop! — it jumps up to announce it’s done.";
const LINE_2 =
  "The tanning bed maps the glow, the browning, and the pop-up timer, but leaves out the real cause: fierce heat drying the bread and browning its sugars — which is why one minute too long makes breakfast bitter.";

const TEXT = LINE_1 + "\n" + LINE_2;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1 to 400 characters of UTF-8 text, not only whitespace,
// and this bounty requires exactly two lines, neither of them empty.
if (TEXT.length < 1 || TEXT.length > 400 || TEXT.trim().length === 0) {
  throw new Error(`entry is ${TEXT.length} characters, outside 1-400`);
}
const lines = TEXT.split("\n");
if (lines.length !== 2 || lines.some((line) => line.trim().length === 0)) {
  throw new Error(`entry must be exactly two non-empty lines, got ${lines.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
