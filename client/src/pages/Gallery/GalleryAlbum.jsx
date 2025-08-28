import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbargallery/navbar";
import { albums } from "./albumsdata";
import Footer from "../../components/Footer/footer";

function GalleryAlbumPage() {
  const { slug } = useParams();
  const album = albums.find((a) => a.slug === slug);

  // ── responsive columns: 2 (mobile), 3 (md), 4 (lg+)
  const getCols = () => {
    if (typeof window === "undefined") return 4;
    const w = window.innerWidth;
    if (w < 640) return 2;
    if (w < 1024) return 3;
    return 4;
  };

  const [cols, setCols] = useState(getCols);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [intrinsic, setIntrinsic] = useState(null); // {w,h} natural size of current image
  const [viewport, setViewport] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 0,
    h: typeof window !== "undefined" ? window.innerHeight : 0,
  }));

  // Swipe state
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

  // Lock background scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [lightboxIndex]);

  // Keyboard controls
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      const next = i > 0 ? i - 1 : album.images.length - 1;
      setIntrinsic(null);
      return next;
    });
  }, [album?.images.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      const next = i < album.images.length - 1 ? i + 1 : 0;
      setIntrinsic(null);
      return next;
    });
  }, [album?.images.length]);

  const onKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    },
    [lightboxIndex, prevImage, nextImage]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  if (!album) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#0b0b10] text-neutral-100">
          <div className="mx-auto max-w-5xl px-4 pt-28 pb-16">
            <h1 className="text-2xl font-semibold">Album not found</h1>
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

  // Compute size: fit inside viewport (with padding) and NEVER upscale beyond intrinsic
  const computeDisplaySize = () => {
    if (!intrinsic) return undefined;
    const padX = Math.max(16, viewport.w * 0.02);
    const padY = Math.max(16, viewport.h * 0.02);
    const maxW = Math.max(0, viewport.w - padX * 2);
    const maxH = Math.max(0, viewport.h - padY * 2);

    const { w: iw, h: ih } = intrinsic;
    const scale = Math.min(maxW / iw, maxH / ih, 1);
    const dispW = Math.floor(iw * scale);
    const dispH = Math.floor(ih * scale);

    return { width: dispW + "px", height: dispH + "px" };
  };

  // Swipe handlers
  const handleTouchStart = (e) => setTouchStartX(e.changedTouches[0].screenX);
  const handleTouchMove = (e) => setTouchEndX(e.changedTouches[0].screenX);
  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const displaySize = computeDisplaySize();

  return (
    <>
      <Navbar />

      {/* backdrop with subtle glow to match theme */}
      <main className="relative min-h-screen overflow-hidden bg-[#0b0b10] text-neutral-100">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1100px_500px_at_10%_-10%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(900px_480px_at_100%_130%,rgba(255,154,158,0.06),transparent_60%)]" />
          <div className="absolute -inset-[8%] rounded-[3rem] ring-1 ring-white/5 shadow-[inset_0_0_140px_40px_rgba(0,0,0,0.65)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-28 pb-16">
          <h1 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
              {album.name}
            </span>
          </h1>
          <p className="mt-2 text-sm text-neutral-300">A selection from {album.name}.</p>

          {/* Masonry via CSS columns */}
          <div className="mt-8" style={{ columnCount: cols, columnGap: "16px" }}>
            {album.images.map((src, idx) => (
              <div
                key={idx}
                style={{ breakInside: "avoid" }}
                className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <img
                  src={src}
                  alt={`${album.name} ${idx + 1}`}
                  className="block h-auto w-full cursor-pointer"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  onClick={() => openLightbox(idx)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}               // click outside image closes
          onTouchStart={handleTouchStart}       // swipe to change
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* controls */}
          <button
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Close
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            ‹
          </button>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            ›
          </button>

          <img
            src={album.images[lightboxIndex]}
            alt={`enlarged ${album.name} ${lightboxIndex + 1}`}
            className="block select-none object-contain"
            style={displaySize || { maxWidth: "96vw", maxHeight: "90svh" }}
            draggable={false}
            onLoad={(e) => {
              const img = e.currentTarget;
              setIntrinsic({ w: img.naturalWidth, h: img.naturalHeight });
            }}
            onClick={(e) => e.stopPropagation()} // clicking image itself won't close
          />

          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
            {lightboxIndex + 1} / {album.images.length}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default GalleryAlbumPage;
