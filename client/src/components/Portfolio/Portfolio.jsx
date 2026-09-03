import React from "react";
import { Link } from "react-router-dom";

// Import your three images
import m1 from "../../pages/Gallery/albums/Events/24A2B3C3-3359-4D62-92A2-6F4ED0CACE00.jpg";
import m2 from "../../pages/Gallery/albums/Yasmin & Ammar - The Ritz Carlton/1.JPG";
import m3 from "../../pages/Gallery/albums/Zeina & Hussam - Four Seasons/IMG_5134.jpg";

function Portfolio() {
  const galleryItems = [
    { src: m1, title: "Destination weddings", desc: "A glimpse into their special day.", href: "/gallery" },
    { src: m2, title: "Yasmin & Ammar", desc: "A timeless celebration of love and joy.", href: "/gallery" },
    { src: m3, title: "Zeina & Hussam", desc: "Capturing moments that last a lifetime.", href: "/gallery" },
  ];

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="relative overflow-hidden pb-24 text-center bg-[#0b0b10] text-neutral-100"
    >
      {/* background texture + vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(900px_500px_at_100%_120%,rgba(255,154,158,0.06),transparent_60%)]" />
        <div className="absolute -inset-[8%] rounded-[3rem] ring-1 ring-white/5 shadow-[inset_0_0_140px_40px_rgba(0,0,0,0.65)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px]" />
      </div>

      {/* header */}
      <div className="mb-12 px-6">
        <h2
          id="portfolio-title"
          className="mb-4 font-serif text-4xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
            OUR PORTFOLIO
          </span>
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-neutral-300">
          Specialising in blank-canvas weddings, our style is classic with a modern edge.
          Every celebration is bespoke—no two weddings will ever look the same.
        </p>

        <Link to="/gallery" className="inline-block mt-8">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-gradient-to-b from-amber-300/15 to-transparent px-6 py-3 text-sm font-semibold tracking-wide text-amber-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-amber-300/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
          >
            VIEW OUR WORK
            <svg
              aria-hidden="true"
              className="h-4 w-4 -mr-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>

      {/* gallery */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {galleryItems.map((item, i) => (
          <Link
            to={item.href}
            key={i}
            className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/50"
            aria-label={`${item.title}: ${item.desc}`}
          >
            {/* fixed aspect for harmony */}
            <div className="relative aspect-[4/5] w-full">
              <img
                src={item.src}
                alt={`${item.title} — wedding highlight`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 100vw"
              />

              {/* luxe border shimmer on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-[box-shadow,opacity] duration-500 group-hover:shadow-[0_0_0_2px_rgba(251,191,36,0.5),inset_0_0_60px_rgba(0,0,0,0.35)] group-hover:opacity-100" />

              {/* vignette for legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* caption on hover */}
              <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full p-5 text-left">
                  <h3 className="text-xl font-semibold text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-[38ch] text-sm text-white/85">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* minimal chip when not hovered */}
              <div className="absolute bottom-3 left-3 right-3 translate-y-0 transition-all duration-300 group-hover:translate-y-2">
                <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow backdrop-blur opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  {item.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
