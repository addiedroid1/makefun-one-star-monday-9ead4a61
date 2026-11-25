import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. Monday gave my table to my alarm clock, served the week raw, and kept my weekend as the tip.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
