/**
 * migrate-images.js
 * Run once from the project root: node migrate-images.js
 *
 * Copies images from the old client/src structure into public/
 * so the Next.js app can serve them as static assets.
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`  [skip] source not found: ${src}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src)) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyFile(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`  [skip] source not found: ${src}`);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`  copied: ${path.relative(ROOT, dest)}`);
}

console.log("=== WhiteEvents image migration ===\n");

// 1. Non-gallery UI images: client/src/pages/newimg/ → public/images/
console.log("1. Copying UI images → public/images/");
copyDir(
  path.join(ROOT, "client", "src", "pages", "newimg"),
  path.join(ROOT, "public", "images")
);
console.log("   done.\n");

// 2. Gallery full images: client/src/pages/Gallery/albums/ → public/gallery/albums/
console.log("2. Copying gallery albums → public/gallery/albums/");
copyDir(
  path.join(ROOT, "client", "src", "pages", "Gallery", "albums"),
  path.join(ROOT, "public", "gallery", "albums")
);
console.log("   done.\n");

// 3. Gallery thumbnails: client/src/pages/Gallery/albums_thumbs/ → public/gallery/albums_thumbs/
console.log("3. Copying gallery thumbnails → public/gallery/albums_thumbs/");
copyDir(
  path.join(ROOT, "client", "src", "pages", "Gallery", "albums_thumbs"),
  path.join(ROOT, "public", "gallery", "albums_thumbs")
);
console.log("   done.\n");

console.log("Migration complete. You can now run: npm run dev");
