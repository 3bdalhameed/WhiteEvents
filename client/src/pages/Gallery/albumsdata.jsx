// albumsData.js
// Vite only: auto-import all images inside subfolders of ./albums
const files = import.meta.glob("./albums/*/*.{jpg,jpeg,png,webp,JPG}", { eager: true });

const byAlbum = {};
for (const [path, mod] of Object.entries(files)) {
  // path example: "./albums/Ridad & Abdalrahman - Papillon Venue/1.jpg"
  const parts = path.split("/"); // [".", "albums", "<FOLDER>", "<FILE>"]
  const folder = parts[2];       // full folder name (may contain spaces & symbols)
  const filename = (parts[3] || "").toLowerCase();

  (byAlbum[folder] ||= []).push({ url: mod.default, name: filename });
}

// Optional: Title Case helper (keeps symbols like & intact)
function toTitleCase(str) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Optional: URL-safe slug (for routing); keep your current `slug` unchanged
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")       // spaces -> hyphens
    .replace(/&/g, "and")       // & -> and
    .replace(/[^a-z0-9-]/g, "") // remove other symbols
    .replace(/-+/g, "-")        // collapse multiple hyphens
    .replace(/^-|-$/g, "");     // trim hyphens
}

export const albums = Object.entries(byAlbum)
  .map(([folderName, list]) => {
    // Sort images inside the album by filename
    list.sort((a, b) => a.name.localeCompare(b.name));
    const images = list.map((i) => i.url);

    // If your folder names already look good, you can keep them as-is.
    // Otherwise, uncomment to Title Case:
    // const displayBase = toTitleCase(folderName);
    const displayBase = folderName;

    // Split on " - " into two lines if present
    const [first, second] = displayBase.split(/\s-\s/);
    const nameFirstLine = first?.trim() || displayBase.trim();
    const nameSecondLine = (second || "").trim() || null;

    // Combined name with newline (for whitespace: pre-line rendering)
    const name = nameSecondLine ? `${nameFirstLine}\n${nameSecondLine}` : nameFirstLine;

    // Keep original folder name as slug (backwards compatible)
    const slug = folderName;
    // Provide a safe alternative in case you want cleaner URLs
    const slugSafe = slugify(folderName);

    return {
      slug,                 // original folder name (spaces & symbols)
      slugSafe,             // optional URL-safe version
      name,                 // e.g., "Ridad & Abdalrahman\nPapillon Venue"
      nameFirstLine,        // "Ridad & Abdalrahman"
      nameSecondLine,       // "Papillon Venue" or null
      cover: images[0] || null,
      images,
    };
  })
  // Sort albums by first line, then second line if present
  .sort((a, b) => {
    const p = a.nameFirstLine.localeCompare(b.nameFirstLine);
    if (p !== 0) return p;
    return (a.nameSecondLine || "").localeCompare(b.nameSecondLine || "");
  });
