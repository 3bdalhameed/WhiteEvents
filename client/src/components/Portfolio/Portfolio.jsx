import React from "react";
import m1 from "../../pages/newenglish/img/15.jpg";

function Portfolio() {
  return (
    <section className="text-center py-64 bg-white" id="portfolio">
      {/* Portfolio Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-serif font-bold mb-4 text-gray-800">
          OUR PORTFOLIO
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
          Specialising in blank-canvas weddings, our style is best described as
          classic with a modern edge, and we pride ourselves on the versatility
          of the events we design, ensuring no two weddings will ever look the
          same.
        </p>
        <a>
          <button
            class="border-b border-black py-6 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-black hover:border-b-black focus:text-white focus:bg-black focus:border-b-black active:border-b-black active:text-white active:bg-black disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
          VIEW OUR WORK
        </button>
        </a>
      </div>

      {/* Portfolio Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {/* Gallery Items */}
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group"
          >
            {/* Overlay */}
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div className="font-bold">TAYLA & CHRIS</div>
                  <div className="opacity-60 text-sm">
                    A glimpse into their special day. Explore more of their story.
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <img
              alt=""
              className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={m1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
