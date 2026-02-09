// src/pages/Gallery/albumsdata.jsx

// Lazy loaders (NOT eager)
const fullFiles = import.meta.glob("./albums/*/*.{jpg,jpeg,png,PNG,webp,JPG}", { eager: false });
const thumbFiles = import.meta.glob("./albums_thumbs/*/*.{webp,jpg,jpeg,png}", { eager: false });

const parse = (path) => {
  const parts = path.split("/");
  return {
    folder: parts[2],
    name: (parts[3] || "").toLowerCase(),
  };
};

// Build list of album slugs from file paths (no loading images yet)
export const albumSlugs = Array.from(
  new Set(Object.keys(fullFiles).map((p) => parse(p).folder))
).sort();

// Return ONE album with images [{name, thumb, full}]
export async function getAlbums() {
  // group thumb loaders by folder
  const thumbsByFolder = {};
  for (const [path, loader] of Object.entries(thumbFiles)) {
    const { folder, name } = parse(path);
    (thumbsByFolder[folder] ||= []).push({ name, loader });
  }

  // group full loaders by folder (for fallback cover)
  const fullByFolder = {};
  for (const [path, loader] of Object.entries(fullFiles)) {
    const { folder, name } = parse(path);
    (fullByFolder[folder] ||= []).push({ name, loader });
  }

  const albums = await Promise.all(
    albumSlugs.map(async (slug) => {
      // pick first thumb
      const thumbCandidates = (thumbsByFolder[slug] || []).sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      let cover = null;

      if (thumbCandidates[0]) {
        const mod = await thumbCandidates[0].loader();
        cover = mod.default;
      } else {
        // fallback: first full image
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

  return albums;
}

