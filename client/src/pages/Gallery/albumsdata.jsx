// src/pages/Gallery/albumsdata.jsx

// Global globs (must be static strings)
const ALL_FULL = import.meta.glob("./albums/*/*.{jpg,jpeg,png,webp,JPG}", { eager: false });
const ALL_THUMBS = import.meta.glob("./albums_thumbs/*/*.{webp,jpg,jpeg,png}", { eager: false });

const parse = (path) => {
  const parts = path.split("/");
  return {
    folder: parts[2],
    name: (parts[3] || "").toLowerCase(),
  };
};

// ✅ Pre-index ONCE (at module load) so getAlbum doesn't scan everything each call
const fullByAlbum = {};
for (const [path, loader] of Object.entries(ALL_FULL)) {
  const { folder, name } = parse(path);
  (fullByAlbum[folder] ||= []).push({ name, loader });
}

const thumbsByAlbum = {};
for (const [path, loader] of Object.entries(ALL_THUMBS)) {
  const { folder, name } = parse(path);
  (thumbsByAlbum[folder] ||= []).push({ name, loader });
}

// Sort loaders once
for (const k of Object.keys(fullByAlbum)) {
  fullByAlbum[k].sort((a, b) => a.name.localeCompare(b.name));
}
for (const k of Object.keys(thumbsByAlbum)) {
  thumbsByAlbum[k].sort((a, b) => a.name.localeCompare(b.name));
}

export const albumSlugs = Object.keys(fullByAlbum).sort();

/**
 * ✅ getAlbum(slug)
 * Loads ONLY that album's modules (fast)
 * Returns: {slug,name,cover,images:[{name,thumb,full}]}
 */
export async function getAlbum(slug) {
  const fullList = fullByAlbum[slug] || [];
  const thumbList = thumbsByAlbum[slug] || [];

  // load thumbs for this album (optional but recommended for fast grid)
  const thumbs = await Promise.all(
    thumbList.map(async (t) => {
      const mod = await t.loader();
      return { name: t.name, url: mod.default };
    })
  );

  // load full images for this album (used in lightbox + fallback)
  const full = await Promise.all(
    fullList.map(async (f) => {
      const mod = await f.loader();
      return { name: f.name, url: mod.default };
    })
  );

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
 * Loads only ONE cover image per album (thumb first, else full)
 * Returns: [{slug,name,cover}]
 */
export async function getAlbums() {
  const slugs = albumSlugs;

  const result = await Promise.all(
    slugs.map(async (slug) => {
      let cover = null;

      // try first thumb
      const t0 = thumbsByAlbum[slug]?.[0];
      if (t0) {
        const mod = await t0.loader();
        cover = mod.default;
      } else {
        // fallback to first full
        const f0 = fullByAlbum[slug]?.[0];
        if (f0) {
          const mod = await f0.loader();
          cover = mod.default;
        }
      }

      return { slug, name: slug, cover };
    })
  );

  return result;
}

// Backward compatibility (if any file imports { albums })
export const albums = [];
