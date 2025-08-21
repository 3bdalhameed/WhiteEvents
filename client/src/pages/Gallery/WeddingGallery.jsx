import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbargallery/navbar";
import { albums } from "./albumsdata";
import Footer from "../../components/Footer/footer";

function Galleries() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden">
        {/* Enhanced layered background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Base animated gradient */}
          <div className="h-full w-full bg-gradient-to-br from-pink-100 via-white to-blue-100 motion-safe:animate-gradient-slow" />

          {/* Light blobs (very soft) */}
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,182,193,0.45),transparent_60%)]" />
          <div className="absolute top-40 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.45),transparent_60%)]" />

          {/* Subtle paper texture */}
          <div
            className="absolute inset-0 opacity-15 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/white-wall.png')",
            }}
            aria-hidden="true"
          />

          {/* Gentle vignette to keep eyes on content */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.06))]" />
        </div>

        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:px-10 md:px-12 lg:px-18 xl:px-20 2xl:px-24 pt-28 pb-16">
          <div className="text-center bg-white border border-white/40 shadow-sm rounded-2xl py-12 px-8 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Wedding Galleries
            </h1>
            <p className="text-gray-600">
            Explore our curated albums. Tap a card to see the wedding name.
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
                  className="group block"
                  title={ariaName}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
                    {/* Cover Image */}
                    <div className="aspect-[4/5] w-full">
                      <img
                        src={album.cover}
                        alt={ariaName}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Hover gradient + centered text */}
                    <div className="rounded-xl z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute inset-0 from-black/80 to-transparent bg-gradient-to-t text-white flex items-center justify-center">
                      <div className="p-4 space-y-3 text-center text-3xl translate-y-2 group-hover:translate-y-0 transition duration-300 ease-in-out">
                        <div className="font-bold drop-shadow-md">{album.nameFirstLine}</div>
                        {album.nameSecondLine && (
                          <div className="opacity-80 text-base drop-shadow">
                            {album.nameSecondLine}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Subtle inner highlight on hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
                         style={{ boxShadow: "inset 0 0 120px rgba(255,255,255,0.25)" }} />
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