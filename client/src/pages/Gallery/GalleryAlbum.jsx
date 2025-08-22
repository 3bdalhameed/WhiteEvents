import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbargallery/navbar";
import { albums } from "./albumsdata";
import Footer from "../../components/Footer/footer";

function GalleryAlbumPage() {
  const { slug } = useParams();
  const album = albums.find((a) => a.slug === slug);

  const getCols = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [cols, setCols] = useState(getCols);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [intrinsic, setIntrinsic] = useState(null);
  const [viewport, setViewport] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 0,
    h: typeof window !== "undefined" ? window.innerHeight : 0,
  }));

  // swipe tracking
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const handler = () => {
      setCols(getCols());
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [lightboxIndex]);

  const onKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

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

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setIntrinsic(null);
    if (typeof window !== "undefined") {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    }
  };
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    setLightboxIndex((i) => {
      const next = i > 0 ? i - 1 : album.images.length - 1;
      setIntrinsic(null);
      return next;
    });
  };
  const nextImage = () => {
    setLightboxIndex((i) => {
      const next = i < album.images.length - 1 ? i + 1 : 0;
      setIntrinsic(null);
      return next;
    });
  };

  const computeDisplaySize = () => {
    if (!intrinsic) return { width: "auto", height: "auto" };
    const padX = Math.max(16, viewport.w * 0.02);
    const padY = Math.max(16, viewport.h * 0.02);

    const maxW = viewport.w - padX * 2;
    const maxH = viewport.h - padY * 2;

    const { w: iw, h: ih } = intrinsic;
    const scale = Math.min(maxW / iw, maxH / ih, 1);
    const dispW = Math.floor(iw * scale);
    const dispH = Math.floor(ih * scale);

    return { width: dispW + "px", height: dispH + "px" };
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // swipe left
        nextImage();
      } else {
        // swipe right
        prevImage();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const displaySize = computeDisplaySize();

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen">
        <div className="mx-auto max-w-7xl py-24 px-4 pt-28 pb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{album.name}</h1>
          <p className="text-gray-600 mt-2">A selection from {album.name}.</p>

          <div className="mt-8" style={{ columnCount: cols, columnGap: "16px" }}>
            {album.images.map((src, idx) => (
              <div
                key={idx}
                style={{ breakInside: "avoid" }}
                className="mb-4 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <img
                  src={src}
                  alt={`${album.name} ${idx + 1}`}
                  className="w-full h-auto block cursor-pointer"
                  loading="lazy"
                  onClick={() => openLightbox(idx)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={album.images[lightboxIndex]}
            alt={`enlarged ${album.name} ${lightboxIndex + 1}`}
            className="block object-contain rounded-lg shadow-xl select-none"
            style={displaySize}
            draggable={false}
            onLoad={(e) => {
              const img = e.currentTarget;
              setIntrinsic({ w: img.naturalWidth, h: img.naturalHeight });
            }}
            onClick={(e) => e.stopPropagation()} // prevent close when clicking on image itself
          />
        </div>
      )}

      <Footer />
    </>
  );
}

export default GalleryAlbumPage;
