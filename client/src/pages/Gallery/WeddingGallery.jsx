import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbargallery/navbar";
import { albums } from "./albumsdata";
import Footer from "../../components/Footer/footer";

// Animated word-by-word reveal for names on hover
function RevealWords({ text = "", className = "", delay = 60 }) {
  const words = (text || "").split(" ");
  return (
    <span aria-label={text} className={`inline-block ${className}`}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block translate-y-3 opacity-0 blur-[2px]
                     group-hover/card:translate-y-0 group-hover/card:opacity-100 group-hover/card:blur-0
                     transition-[transform,opacity,filter] duration-500 ease-out"
          style={{ transitionDelay: `${i * delay}ms` }}
        >
          {w}&nbsp;
        </span>
      ))}
    </span>
  );
}

function Galleries() {
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
      <Navbar />
      <main ref={heroRef} className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* ===== Enhanced Hero Background ===== */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="h-full w-full bg-black" />
          <div
            className="absolute -top-1/3 -left-1/4 h-[140%] w-[140%] opacity-20 will-change-transform"
            style={{
              background:
                "radial-gradient(60% 60% at 40% 30%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(50% 50% at 70% 60%, rgba(168,85,247,0.18) 0%, transparent 60%)",
              mixBlendMode: "screen",
              animation: "drift 26s ease-in-out infinite alternate",
              transform:
                "translate3d(calc(var(--mx,0)*20px), calc(var(--my,0)*20px), 0) rotate(0.001deg)",
            }}
          />
          <div
            className="absolute -bottom-1/3 -right-1/4 h-[140%] w-[140%] opacity-20 will-change-transform"
            style={{
              background:
                "radial-gradient(60% 60% at 60% 70%, rgba(59,130,246,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 30% 40%, rgba(236,72,153,0.16) 0%, transparent 60%)",
              mixBlendMode: "screen",
              animation: "drift 32s ease-in-out infinite alternate-reverse",
              transform:
                "translate3d(calc(var(--mx,0)*-24px), calc(var(--my,0)*-24px), 0) rotate(0.001deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-40 will-change-transform"
            style={{
              background:
                "radial-gradient(600px 600px at calc(50% + calc(var(--mx,0)*120px)) calc(25% + calc(var(--my,0)*80px)), rgba(255,255,255,0.06), transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 40px)",
              maskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
            style={{
              backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_70%,rgba(0,0,0,0.9))]" />
        </div>

        <div className="relative mx-auto max-w-8xl px-6 pt-28 pb-16 sm:px-10 md:px-12 lg:px-18 xl:px-20 2xl:px-24">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-800 bg-black/70 px-8 py-12 text-center shadow-md backdrop-blur">
            <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">Wedding Galleries</h1>
            <p className="text-gray-400">Explore our curated albums. Tap a card to see the wedding name.</p>
          </div>

          {/* Album Cards — now 2 cols on mobile */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {albums.map((album) => {
              const ariaName = album.nameSecondLine
                ? `${album.nameFirstLine} - ${album.nameSecondLine}`
                : album.nameFirstLine;

              return (
                <Link
                  key={album.slug}
                  to={`/gallery/${album.slug}`}
                  aria-label={`Open album ${ariaName}`}
                  className="group block focus:outline-none"
                  title={ariaName}
                >
                  <div
                    onMouseMove={handleCardMove}
                    onMouseLeave={handleCardLeave}
                    className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-zinc-950 to-black
                               shadow-xl transition-transform duration-300 will-change-transform
                               [transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))_translate3d(var(--tx,0),var(--ty,0),0)_scale(var(--s,1))]
                               group-hover:[--s:1.02] group-hover:shadow-2xl"
                  >
                    {/* Decorative border glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{
                        boxShadow:
                          "0 0 30px rgba(168,85,247,0.25), 0 0 60px rgba(59,130,246,0.15) inset",
                      }}
                    />

                    {/* Cover Image */}
                    <div
                      className="z-0 aspect-[4/5] w-full overflow-hidden will-change-transform"
                      style={{
                        transform:
                          "translate3d(calc(var(--tx,0)*0.35), calc(var(--ty,0)*0.35), 0)",
                      }}
                    >
                      <img
                        src={album.cover}
                        alt={ariaName}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:rotate-[1deg] group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Mouse-follow spotlight */}
                    <div
                      className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(220px 220px at var(--px,50%) var(--py,50%), rgba(255,255,255,0.06), transparent 60%)",
                      }}
                    />

                    {/* Magnetic highlight ring */}
                    <div
                      className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(180px 180px at var(--px,50%) var(--py,50%), rgba(168,85,247,0.18), transparent 60%), radial-gradient(110px 110px at var(--px,50%) var(--py,50%), rgba(59,130,246,0.18), transparent 60%)",
                      }}
                    />

                    {/* Shine sweep */}
                    <span className="pointer-events-none absolute -left-1/3 top-0 z-10 h-full w-1/2 translate-x-[-120%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[220%]" />

                    {/* Hover gradient + text */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 text-white opacity-0 transition duration-500 backdrop-blur-sm group-hover:opacity-100">
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-bold drop-shadow sm:text-xl">
                          {album.nameFirstLine}
                        </h3>
                        {album.nameSecondLine && (
                          <p className="text-sm text-gray-300 drop-shadow sm:text-base">
                            {album.nameSecondLine}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
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

export default Galleries;
