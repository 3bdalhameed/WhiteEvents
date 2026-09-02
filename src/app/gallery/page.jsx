import { getAlbums } from "@/lib/gallery";
import GalleryClient from "./GalleryClient";

export default function GalleryPage() {
  const albums = getAlbums();
  return <GalleryClient albums={albums} />;
}
