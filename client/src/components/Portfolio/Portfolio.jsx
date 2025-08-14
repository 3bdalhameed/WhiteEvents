import React from "react";
import { Link } from "react-router-dom";

// Import your three images
import m1 from "../../pages/Gallery/albums/Maya & Anas - S.t Regis/1.jpg";
import m2 from "../../pages/Gallery/albums/Yasmin & Ammar - The Ritz Carlton/1.jpg";
import m3 from "../../pages/Gallery/albums/Tala & Alaa - Grand Hyatt Amman/1.jpg";

function Portfolio() {
  const galleryItems = [
    {
      src: m1,
      title: "Maya & Anas",
      desc: "A glimpse into their special day. Explore more of their story.",
      href: "/gallery",
    },
    {
      src: m2,
      title: "Yasmin & Ammar",
      desc: "A timeless celebration of love and joy.",
      href: "/gallery",
    },
    {
      src: m3,
      title: "Tala & Alaa",
      desc: "Capturing moments that last a lifetime.",
      href: "/gallery",
    },
  ];

  return (
    <section className="text-center py-24 bg-white" id="portfolio" aria-labelledby="portfolio-title">
      {/* Header */}
      <div className="mb-12 px-6">
        <h2 id="portfolio-title" className="text-4xl font-serif font-bold mb-4 text-gray-900 tracking-tight">
          OUR PORTFOLIO
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Specialising in blank-canvas weddings, our style is best described as
          classic with a modern edge. We pride ourselves on the versatility of the
          events we design—no two weddings will ever look the same.
        </p>
        <Link to="/gallery" className="inline-block mt-8">
          <button
            className="border border-black py-3 px-6 text-sm tracking-wide transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-black focus:text-white focus:bg-black active:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
            type="button"
          >
            VIEW OUR WORK
          </button>
        </Link>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {galleryItems.map((item, i) => (
          <Link
            to={item.href}
            key={i}
            className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
            aria-label={`${item.title}: ${item.desc}`}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={`${item.title} — wedding highlight`}
              className="h-80 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 768px) 33vw, 100vw"
            />

            {/* Soft inner vignette for readability */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_20px_rgba(0,0,0,0.25)]" />

            {/* Caption overlay */}
            <div className="
              absolute inset-0 flex items-end
              bg-gradient-to-t from-black/70 via-black/20 to-transparent
              opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100
              transition-opacity duration-300
            ">
              <div className="w-full p-5 text-left">
                <h3 className="text-white text-xl font-semibold drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mt-1 max-w-[36ch]">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Always-on minimal label (visible when not hovered) */}
            <div className="
              absolute bottom-3 left-3 right-3
              translate-y-0 group-hover:translate-y-2 transition-transform duration-300
            ">
              <span className="
                inline-block rounded-full bg-white/90 backdrop-blur px-3 py-1
                text-gray-900 text-xs font-medium shadow
                opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0 transition-opacity duration-300
              ">
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
