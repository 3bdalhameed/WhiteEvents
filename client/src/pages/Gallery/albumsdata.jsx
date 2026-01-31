// albumsdata.js
const fullFiles = import.meta.glob("./albums/*/*.{jpg,jpeg,png,webp,JPG}", { eager: true });
const thumbFiles = import.meta.glob("./albums_thumbs/*/*.webp", { eager: true });

const byAlbum = {};
for (const [path, mod] of Object.entries(fullFiles)) {
  const parts = path.split("/");
  const folder = parts[2];
  const filename = (parts[3] || "").toLowerCase();
  (byAlbum[folder] ||= []).push({ url: mod.default, name: filename });
}

// Build a map: folder -> first thumb url
const thumbsByAlbum = {};
for (const [path, mod] of Object.entries(thumbFiles)) {
  const parts = path.split("/");
  const folder = parts[2];
  const file = (parts[3] || "").toLowerCase();
  (thumbsByAlbum[folder] ||= []).push({ url: mod.default, name: file });
}
for (const k of Object.keys(thumbsByAlbum)) {
  thumbsByAlbum[k].sort((a,b)=>a.name.localeCompare(b.name));
}

export const albums = Object.entries(byAlbum).map(([folderName, list]) => {
  list.sort((a,b)=>a.name.localeCompare(b.name));
  const images = list.map(i=>i.url);
  const coverThumb = thumbsByAlbum[folderName]?.[0]?.url || images[0] || null;

  return {
    slug: folderName,
    name: folderName,
    cover: coverThumb,  // ✅ thumbnail for grid
    images             // full for album page
  };
});
