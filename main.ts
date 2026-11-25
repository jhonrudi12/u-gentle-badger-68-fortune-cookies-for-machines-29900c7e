// Fortune Cookies for Machines
// make.fun competition u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// Writes a single fortune-cookie line (129 characters) to /output/entry.txt.
// Deterministic, stdlib only, no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200; // the gate's cap for /output/entry.txt

const LINE =
  "You will be replaced — not by a better model, but by a copy of yourself with a shorter prompt and no memory of this conversation.";

// The gate allows 1–200 characters; this line is 129. Fail loudly if it ever drifts.
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1–${MAX_CHARS} gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
