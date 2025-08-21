import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbargallery/navbar";
import { albums } from "./albumsdata";
import Footer from "../../components/Footer/footer";

function Galleries() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-black text-gray-100">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-br from-black via-neutral-950 to-black" />
          {/* Subtle glow accents */}
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-15 bg-purple-700/40" />
          <div className="absolute top-40 -right-24 h-96 w-96 rounded-full blur-3xl opacity-15 bg-pink-600/40" />
          {/* Noise/texture overlay */}
          <div
            className="absolute inset-0 opacity-10 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:px-10 md:px-12 lg:px-18 xl:px-20 2xl:px-24 pt-28 pb-16">
          <div className="text-center bg-neutral-900/80 border border-neutral-800 shadow-lg rounded-2xl py-12 px-8 max-w-3xl mx-auto backdrop-blur">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Wedding Galleries
            </h1>
            <p className="text-gray-400">
              Explore our curated albums. Hover a card to reveal the wedding name.
            </p>
          </div>

          {/* Album Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
            {albums.map((album) => {
              const ariaName = album.nameSecondLine
                ? `${album.nameFirstLine} - ${album.nameSecondLine}`
                : album.nameFirstLine;

              return (
                <Link
                  key={album.slug}
                  to={`/gallery/${album.slug}`}
                  aria-label={`Open album ${ariaName}`}
                  title={ariaName}
                  className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-purple-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 bg-neutral-900"
                >
                  {/* Image */}
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={album.cover}
                      alt={ariaName}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Strong vignette */}
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_30px_rgba(0,0,0,0.8)]" />

                  {/* Caption overlay */}
                  <div
                    className="
                      absolute inset-0 flex items-end
                      bg-gradient-to-t from-black/90 via-black/50 to-transparent
                      opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100
                      transition-opacity duration-300
                    "
                  >
                    <div className="absolute inset-0 z-20 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      <div className="px-4">
                        <h3 className="text-white text-3xl font-semibold drop-shadow-sm">
                          {album.nameFirstLine}
                        </h3>
                        {album.nameSecondLine && (
                          <p className="text-gray-300 text-lg mt-1 max-w-[36ch] mx-auto">
                            {album.nameSecondLine}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Always-on minimal label */}
                  <div
                    className="
                      absolute bottom-3 left-3 right-3
                      translate-y-0 group-hover:translate-y-2 transition-transform duration-300
                    "
                  >
                    <span
                      className="
                        inline-block rounded-full bg-black/70 backdrop-blur px-3 py-1
                        text-gray-200 text-xs font-medium shadow
                        opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0 transition-opacity duration-300
                      "
                    >
                      {album.nameFirstLine}
                      {album.nameSecondLine ? ` — ${album.nameSecondLine}` : ""}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Galleries;
