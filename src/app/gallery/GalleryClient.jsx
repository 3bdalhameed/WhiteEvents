"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarGallery from "@/components/NavbarGallery";
import Footer from "@/components/Footer";

export default function GalleryClient({ albums }) {
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.setProperty("--mx", String(x));
      el.style.setProperty("--my", String(y));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleCardMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 10;
    const ry = (px - 0.5) * 10;
    el.style.setProperty("--rx", rx + "deg");
    el.style.setProperty("--ry", ry + "deg");
    el.style.setProperty("--tx", (px - 0.5) * 14 + "px");
    el.style.setProperty("--ty", (py - 0.5) * 14 + "px");
    el.style.setProperty("--px", px * 100 + "%");
    el.style.setProperty("--py", py * 100 + "%");
  };

  const handleCardLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
    el.style.setProperty("--px", "50%");
    el.style.setProperty("--py", "50%");
  };

  return (
    <>
      <NavbarGallery />
      <main
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-[#0b0b10] text-neutral-100"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1100px_500px_at_10%_-10%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(900px_480px_at_100%_130%,rgba(255,154,158,0.06),transparent_60%)]" />
          <div className="absolute -inset-[8%] rounded-[3rem] ring-1 ring-white/5 shadow-[inset_0_0_140px_40px_rgba(0,0,0,0.65)]" />
          <div
            className="absolute -top-1/3 -left-1/4 h-[140%] w-[140%] opacity-15 will-change-transform"
            style={{
              background:
                "radial-gradient(60% 60% at 40% 30%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(50% 50% at 70% 60%, rgba(251,191,36,0.14) 0%, transparent 60%)",
              mixBlendMode: "screen",
              animation: "drift 26s ease-in-out infinite alternate",
              transform:
                "translate3d(calc(var(--mx,0)*20px), calc(var(--my,0)*20px), 0) rotate(0.001deg)",
            }}
          />
          <div
            className="absolute -bottom-1/3 -right-1/4 h-[140%] w-[140%] opacity-15 will-change-transform"
            style={{
              background:
                "radial-gradient(60% 60% at 60% 70%, rgba(244,114,182,0.14) 0%, transparent 60%), radial-gradient(50% 50% at 30% 40%, rgba(255,255,255,0.06) 0%, transparent 60%)",
              mixBlendMode: "screen",
              animation: "drift 32s ease-in-out infinite alternate-reverse",
              transform:
                "translate3d(calc(var(--mx,0)*-24px), calc(var(--my,0)*-24px), 0) rotate(0.001deg)",
            }}
          />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px]" />
        </div>

        <div className="relative mx-auto max-w-8xl px-6 pt-28 pb-16 sm:px-10 md:px-12 lg:px-18 xl:px-20 2xl:px-24">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white/5 p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur-md">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
                Wedding Galleries
              </span>
            </h1>
            <p className="text-neutral-300">
              Explore our curated albums. Tap a card to see the wedding name.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          </div>

          {albums.length === 0 ? (
            <div className="mt-10 text-center text-neutral-300">No albums found.</div>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {albums.map((album) => (
                <Link
                  key={album.slug}
                  href={`/gallery/${encodeURIComponent(album.slug)}`}
                  aria-label={`Open album ${album.name}`}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40 rounded-2xl"
                  title={album.name}
                >
                  <div
                    onMouseMove={handleCardMove}
                    onMouseLeave={handleCardLeave}
                    className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md
                               shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 will-change-transform
                               [transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))_translate3d(var(--tx,0),var(--ty,0),0)_scale(var(--s,1))]
                               group-hover:[--s:1.02] group-hover:shadow-2xl"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{
                        boxShadow: "0 0 30px rgba(251,191,36,0.20), 0 0 60px rgba(244,114,182,0.12) inset",
                      }}
                    />

                    <div
                      className="relative z-0 aspect-[4/5] w-full overflow-hidden will-change-transform"
                      style={{
                        transform: "translate3d(calc(var(--tx,0)*0.35), calc(var(--ty,0)*0.35), 0)",
                      }}
                    >
                      {album.cover && (
                        <Image
                          src={album.cover}
                          alt={album.name}
                          fill
                          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:rotate-[1deg] group-hover:scale-110"
                          quality={75}
                        />
                      )}
                    </div>

                    <div
                      className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(220px_220px_at_var(--px,50%)_var(--py,50%), rgba(255,255,255,0.06), transparent 60%)",
                      }}
                    />

                    <span className="pointer-events-none absolute -left-1/3 top-0 z-10 h-full w-1/2 translate-x-[-120%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[220%]" />

                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/65 text-white opacity-0 transition duration-500 backdrop-blur-sm group-hover:opacity-100">
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-bold drop-shadow sm:text-xl">{album.name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <style>{`
        @keyframes drift {
          0% { transform: translate3d(-2%, -2%, 0) scale(1); }
          50% { transform: translate3d(2%, 1%, 0) scale(1.02); }
          100% { transform: translate3d(-1%, 2%, 0) scale(1.01); }
        }
      `}</style>

      <Footer />
    </>
  );
}
