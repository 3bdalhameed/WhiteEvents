import { getAlbum, getAlbumSlugs } from "@/lib/gallery";
import GalleryAlbumClient from "./GalleryAlbumClient";

// Pre-render every album page at build time → served from CDN, zero server latency
export function generateStaticParams() {
  return getAlbumSlugs().map((slug) => ({ slug: encodeURIComponent(slug) }));
}

export default function AlbumPage({ params }) {
  const slug = decodeURIComponent(params.slug);
  const album = getAlbum(slug);
  return <GalleryAlbumClient album={album} slug={slug} />;
}
