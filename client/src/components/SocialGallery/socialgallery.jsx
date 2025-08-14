import React from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";
import G1 from "../../pages/newimg/G1.png";
import G2 from "../../pages/newimg/G2.png";
import G3 from "../../pages/newimg/G3.png";
import G4 from "../../pages/newimg/G4.png";

const gallery = [
  { src: G1, link: "https://www.instagram.com/reel/DB9X-k4NXlE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { src: G2, link: "https://www.instagram.com/reel/DC__2a7tg1F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { src: G3, link: "https://www.instagram.com/reel/DCo6xtDNamY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { src: G4, link: "https://www.instagram.com/reel/DCUN3vdtbiB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
];

function ImageTile({ item, index }) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl bg-zinc-900/40 backdrop-blur-sm hover:ring-white/20 hover:shadow-2xl transition-all"
    >
    <div className="aspect-[3/4] w-full">
      <img
        src={item.src}
        alt={`Instagram reel ${index + 1}`}
        loading="lazy"
        className="h-full w-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500 rounded-2xl"
      />
    </div>


      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex items-center gap-3 rounded-full px-4 py-2 bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-grid place-items-center rounded-full p-2 bg-white/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-sm font-medium tracking-wide">Watch Reel</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function SocialGallery() {
  return (
      <section className="relative bg-zinc-950 text-white">
        {/* decorative background */}
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider uppercase text-zinc-300"
            >
              <Instagram className="h-3.5 w-3.5" />
              Latest on Instagram
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
            >
              Our Work, <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">In Motion</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-2xl text-sm sm:text-base text-zinc-300"
            >
              A peek at recent celebrations and behind‑the‑scenes moments. Tap any tile to watch the reel.
            </motion.p>
          </div>


          {/* horizontal scroll row */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {gallery.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-42"> {/* smaller fixed width */}
                <ImageTile item={item} index={i} />
              </div>
            ))}
          </div>


          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center py-8"
          >
            <a
              href="https://www.instagram.com/white.events_jo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black rounded-full bg-white text-zinc-900 px-5 py-2.5 text-sm font-medium shadow hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Instagram className="h-4 w-4" /> Follow @whiteevents <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
  );
}
