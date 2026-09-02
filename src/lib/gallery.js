import fs from "fs";
import path from "path";

// Module-level cache — filesystem is only scanned once per process
const albumListCache = { value: null };
const albumDetailCache = new Map();

const ALBUMS_DIR = path.join(process.cwd(), "public", "gallery", "albums");
const THUMBS_DIR = path.join(process.cwd(), "public", "gallery", "albums_thumbs");
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function isImage(name) {
  return IMAGE_EXTS.has(path.extname(name).toLowerCase());
}

function safeReaddir(dir) {
  try {
    return fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  } catch {
    return [];
  }
}

export function getAlbumSlugs() {
  return safeReaddir(ALBUMS_DIR)
    .filter((d) => {
      try {
        return fs.statSync(path.join(ALBUMS_DIR, d)).isDirectory();
      } catch {
        return false;
      }
    })
    .sort();
}

function encodeImagePath(slug, filename) {
  return `${encodeURIComponent(slug)}/${encodeURIComponent(filename)}`;
}

function getAlbumCover(slug) {
  const thumbFiles = safeReaddir(path.join(THUMBS_DIR, slug)).filter(isImage).sort();
  if (thumbFiles.length > 0) {
    return `/gallery/albums_thumbs/${encodeImagePath(slug, thumbFiles[0])}`;
  }
  const fullFiles = safeReaddir(path.join(ALBUMS_DIR, slug)).filter(isImage).sort();
  if (fullFiles.length > 0) {
    return `/gallery/albums/${encodeImagePath(slug, fullFiles[0])}`;
  }
  return null;
}

export function getAlbums() {
  if (albumListCache.value) return albumListCache.value;
  albumListCache.value = getAlbumSlugs().map((slug) => ({
    slug,
    name: slug,
    cover: getAlbumCover(slug),
  }));
  return albumListCache.value;
}

export function getAlbum(slug) {
  if (albumDetailCache.has(slug)) return albumDetailCache.get(slug);

  const fullFiles = safeReaddir(path.join(ALBUMS_DIR, slug)).filter(isImage).sort();
  const thumbSet = new Set(
    safeReaddir(path.join(THUMBS_DIR, slug))
      .filter(isImage)
      .map((f) => f.toLowerCase())
  );

  const images = fullFiles.map((f) => ({
    name: f,
    full: `/gallery/albums/${encodeImagePath(slug, f)}`,
    thumb: thumbSet.has(f.toLowerCase())
      ? `/gallery/albums_thumbs/${encodeImagePath(slug, f)}`
      : `/gallery/albums/${encodeImagePath(slug, f)}`,
  }));

  const result = {
    slug,
    name: slug,
    cover: images[0]?.thumb || null,
    images,
  };

  albumDetailCache.set(slug, result);
  return result;
}
