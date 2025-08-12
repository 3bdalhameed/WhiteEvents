// albumsData.js
// Vite only: auto-import all images inside subfolders of ./albums
const files = import.meta.glob("./albums/*/*.{jpg,jpeg,png,webp}", { eager: true });

const byAlbum = {};
for (const [path, mod] of Object.entries(files)) {
  // path like: "./albums/ahmad-layla/1.jpg"
  const parts = path.split("/");                 // [".","albums","ahmad-layla","1.jpg"]
  const slug = parts[2];
  const filename = parts[3].toLowerCase();
  (byAlbum[slug] ||= []).push({ url: mod.default, name: filename });
}

export const albums = Object.entries(byAlbum)
  .map(([slug, list]) => {
    list.sort((a, b) => a.name.localeCompare(b.name));
    const images = list.map(i => i.url);
    const name = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase()); // Title Case
    return {
      slug,
      name,
      cover: images[0],
      images,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));
