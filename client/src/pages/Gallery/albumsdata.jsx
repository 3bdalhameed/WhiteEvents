// src/pages/Gallery/albumsdata.jsx

// Lazy loaders (FAST)
const fullFiles = import.meta.glob("./albums/*/*.{jpg,jpeg,png,PNG,webp,JPG}", { eager: false });
const thumbFiles = import.meta.glob("./albums_thumbs/*/*.{webp,jpg,jpeg,png}", { eager: false });

const parse = (path) => {
  const parts = path.split("/");
  return {
    folder: parts[2],
    name: (parts[3] || "").toLowerCase(),
  };
};

// Album slugs (no image loading)
export const albumSlugs = Array.from(
  new Set(Object.keys(fullFiles).map((p) => parse(p).folder))
).sort();

/**
 * ✅ getAlbum(slug)
 * Returns:
 * { slug, name, cover, images: [{name, thumb, full}] }
 */
export async function getAlbum(slug) {
  const thumbs = [];
  const full = [];

  for (const [path, loader] of Object.entries(thumbFiles)) {
    const { folder, name } = parse(path);
    if (folder !== slug) continue;
    const mod = await loader();
    thumbs.push({ name, url: mod.default });
  }

  for (const [path, loader] of Object.entries(fullFiles)) {
    const { folder, name } = parse(path);
    if (folder !== slug) continue;
    const mod = await loader();
    full.push({ name, url: mod.default });
  }

  thumbs.sort((a, b) => a.name.localeCompare(b.name));
  full.sort((a, b) => a.name.localeCompare(b.name));

  const thumbByName = Object.fromEntries(thumbs.map((t) => [t.name, t.url]));

  const images = full.map((f) => ({
    name: f.name,
    full: f.url,
    thumb: thumbByName[f.name] || f.url,
  }));

  return {
    slug,
    name: slug,
    cover: images[0]?.thumb || null,
    images,
  };
}

/**
 * ✅ getAlbums()
 * Returns fast list for grid:
 * [{slug, name, cover}]
 * cover uses first thumb, else first full image
 */
// albumsdata.jsx
export async function getAlbum(slug) {
  // IMPORTANT: slug comes from folder name, safe to use in a path
  const fullFiles = import.meta.glob(`./albums/${slug}/*.{jpg,jpeg,png,webp,JPG}`, { eager: false });
  const thumbFiles = import.meta.glob(`./albums_thumbs/${slug}/*.{webp,jpg,jpeg,png}`, { eager: false });

  const parseName = (path) => (path.split("/").pop() || "").toLowerCase();

  const thumbs = [];
  for (const [path, loader] of Object.entries(thumbFiles)) {
    const mod = await loader();
    thumbs.push({ name: parseName(path), url: mod.default });
  }

  const full = [];
  for (const [path, loader] of Object.entries(fullFiles)) {
    const mod = await loader();
    full.push({ name: parseName(path), url: mod.default });
  }

  thumbs.sort((a, b) => a.name.localeCompare(b.name));
  full.sort((a, b) => a.name.localeCompare(b.name));

  const thumbByName = Object.fromEntries(thumbs.map((t) => [t.name, t.url]));
  const images = full.map((f) => ({
    name: f.name,
    full: f.url,
    thumb: thumbByName[f.name] || f.url,
  }));

  return {
    slug,
    name: slug,
    cover: images[0]?.thumb || null,
    images,
  };
}


/**
 * ✅ Backwards compatibility:
 * Some of your pages still import { albums }.
 * We keep it exported, but as an EMPTY array (so build won't fail).
 * You should migrate those pages to use getAlbums().
 */
export const albums = [];
