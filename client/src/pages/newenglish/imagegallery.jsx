import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbargallery/navbar";
import { albums } from "./albumsdata";

function Galleries() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen">
        <div className="mx-auto max-w-screen-2xl py-24 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40 2xl:px-56 pt-28 pb-16">
          <div className="text-center bg-white/80 border border-gray-200 shadow-md rounded-lg py-12 px-8 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Wedding Galleries
            </h1>
            <p className="text-gray-600">
              Explore our curated albums. Hover a card to reveal the wedding name.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <Link
                key={album.slug}
                to={`/gallery/${album.slug}`}
                aria-label={`Open album ${album.name}`}
                className="group block"
              >
                <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={album.cover}
                      alt={album.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/45">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold tracking-wide px-4 py-2 rounded-md">
                      {album.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Galleries;
