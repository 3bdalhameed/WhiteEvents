import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbargallery/navbar";
import { albums } from "./albumsdata";

function GalleryAlbumPage() {
  const { slug } = useParams();
  const album = albums.find((a) => a.slug === slug);
  const [cols, setCols] = useState(() => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  });
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth < 640) setCols(1);
      else if (window.innerWidth < 1024) setCols(2);
      else setCols(4);
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  if (!album) {
    return (
      <>
        <Navbar />
        <main className="bg-gray-100 min-h-screen">
          <div className="mx-auto max-w-5xl px-4 pt-28 pb-16">
            <h1 className="text-2xl font-semibold text-gray-800">Album not found</h1>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen">
        <div className="mx-auto max-w-7xl py-24 px-4 pt-28 pb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{album.name}</h1>
          <p className="text-gray-600 mt-2">A selection from {album.name}.</p>
          <div className="mt-8" style={{ columnCount: cols, columnGap: "16px" }}>
            {album.images.map((src, idx) => (
              <div key={idx} style={{ breakInside: "avoid" }} className="mb-4 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                <img
                  src={src}
                  alt={`${album.name} ${idx + 1}`}
                  className="w-full h-auto block cursor-pointer"
                  loading="lazy"
                  onClick={() => setLightboxImage(src)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="enlarged" className="h-screen w-auto object-contain" />
        </div>
      )}
    </>
  );
}

export default GalleryAlbumPage;
