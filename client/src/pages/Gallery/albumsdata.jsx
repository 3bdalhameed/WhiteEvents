// src/pages/Gallery/albumsdata.jsx

// Lazy loaders (FAST)
const fullFiles = import.meta.glob("./albums/*/*.{jpg,jpeg,png,webp,JPG}", { eager: false });
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
export async function getAlbums() {
  const thumbsByFolder = {};
  const fullByFolder = {};

  for (const [path, loader] of Object.entries(thumbFiles)) {
    const { folder, name } = parse(path);
    (thumbsByFolder[folder] ||= []).push({ name, loader });
  }

  for (const [path, loader] of Object.entries(fullFiles)) {
    const { folder, name } = parse(path);
    (fullByFolder[folder] ||= []).push({ name, loader });
  }

  const list = await Promise.all(
    albumSlugs.map(async (slug) => {
      const thumbCandidates = (thumbsByFolder[slug] || []).sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      let cover = null;

      if (thumbCandidates[0]) {
        const mod = await thumbCandidates[0].loader();
        cover = mod.default;
      } else {
        // fallback to first full
        const fullCandidates = (fullByFolder[slug] || []).sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        if (fullCandidates[0]) {
          const mod = await fullCandidates[0].loader();
          cover = mod.default;
        }
      }

      return { slug, name: slug, cover };
    })
  );

  return list;
}

/**
 * ✅ Backwards compatibility:
 * Some of your pages still import { albums }.
 * We keep it exported, but as an EMPTY array (so build won't fail).
 * You should migrate those pages to use getAlbums().
 */
export const albums = [];
