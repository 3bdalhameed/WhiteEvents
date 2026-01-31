import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = path.resolve("src/pages/Gallery/albums");      // adjust if different
const OUT = path.resolve("src/pages/Gallery/albums_thumbs");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return walk(p);
    if (!/\.(jpg|jpeg|png|webp)$/i.test(d.name)) return [];
    return [p];
  });
}

fs.mkdirSync(OUT, { recursive: true });

const files = walk(SRC);
for (const f of files) {
  const rel = path.relative(SRC, f); // "<ALBUM>/<FILE>"
  const outDir = path.join(OUT, path.dirname(rel));
  fs.mkdirSync(outDir, { recursive: true });

  const outFile = path.join(outDir, path.parse(rel).name + ".webp");
  await sharp(f)
    .rotate()
    .resize({ width: 420 })      // thumbnail size
    .webp({ quality: 75 })
    .toFile(outFile);

  console.log("thumb:", rel);
}

console.log("Done.");
