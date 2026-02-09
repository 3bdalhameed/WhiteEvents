// src/pages/Gallery/albumsdata.jsx

// Used for gallery grid (list of albums)
// We keep these global globs for discovering album slugs + covers
const ALL_FULL = import.meta.glob("./albums/*/*.{jpg,jpeg,png,webp,JPG}", { eager: false });
const ALL_THUMBS = import.meta.glob("./albums_thumbs/*/*.{webp,jpg,jpeg,png}", { eager: false });

const parse = (path) => {
  const parts = path.split("/");
  return {
    folder: parts[2],
    name: (parts[3] || "").toLowerCase(),
  };
};

// Slugs list (no image loading here)
export const albumSlugs = Array.from(
  new Set(Object.keys(ALL_FULL).map((p) => parse(p).folder))
).sort();

/**
 * ✅ FAST getAlbum(slug)
 * Loads ONLY the files inside that album folder (no scanning all albums).
 * Returns: { slug, name, cover, images: [{name, thumb, full}] }
 */
export async function getAlbum(slug) {
  // slug-specific globs (fast)
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
    thumb: thumbByName[f.name] || f.url, // fallback if missing thumb
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
 * For the albums grid page:
 * returns [{slug, name, cover}]
 * cover = first thumb, else first full
 */
export async function getAlbums() {
  const thumbsByFolder = {};
  const fullByFolder = {};

  // group thumbs by folder
  for (const [path, loader] of Object.entries(ALL_THUMBS)) {
    const { folder, name } = parse(path);
    (thumbsByFolder[folder] ||= []).push({ name, loader });
  }

  // group full by folder (fallback cover)
  for (const [path, loader] of Object.entries(ALL_FULL)) {
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

// Backward compatibility (if any file still imports { albums }, it won’t crash build)
export const albums = [];
