"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, ArrowRight } from "lucide-react";

const gallery = [
  { src: "/images/G1.png", link: "https://www.instagram.com/reel/DB9X-k4NXlE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { src: "/images/G2.png", link: "https://www.instagram.com/reel/DC__2a7tg1F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { src: "/images/G3.png", link: "https://www.instagram.com/reel/DCo6xtDNamY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { src: "/images/G4.png", link: "https://www.instagram.com/reel/DCUN3vdtbiB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
];

function ImageTile({ item, index }) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open Instagram reel ${index + 1} in a new tab`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm hover:ring-amber-300/40 transition-all"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
        <Image
          src={item.src}
          alt={`Instagram reel ${index + 1}`}
          fill
          loading="lazy"
          quality={80}
          className="object-cover object-center scale-105 transition-transform duration-500 group-hover:scale-110"
          sizes="(min-width: 768px) 300px, (min-width: 640px) 260px, 220px"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent opacity-60 transition-opacity group-hover:opacity-70" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white opacity-0 shadow-sm backdrop-blur-md transition-opacity group-hover:opacity-100 focus-within:opacity-100">
          <span className="inline-grid place-items-center rounded-full bg-amber-300/20 p-2 ring-1 ring-amber-300/40">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-sm font-medium tracking-wide">Watch Reel</span>
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-2 -z-10 hidden rounded-3xl bg-amber-300/5 opacity-0 blur-2xl transition-opacity duration-500 md:block group-hover:opacity-100" />
    </motion.a>
  );
}

export default function SocialGallery() {
  return (
    <section className="relative bg-[#0b0b10] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_500px_at_10%_-10%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(900px_480px_at_100%_130%,rgba(255,154,158,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-16 sm:py-20 lg:px-4">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300"
          >
            <Instagram className="h-3.5 w-3.5" />
            Latest on Instagram
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
          >
            Our Work,{" "}
            <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
              In Motion
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl text-sm text-zinc-300 sm:text-base"
          >
            A peek at recent celebrations and behind-the-scenes moments. Tap any tile to watch the reel.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0b0b10] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0b0b10] to-transparent" />

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {gallery.map((item, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px]">
              <ImageTile item={item} index={i} />
            </div>
          ))}
        </div>

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
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Follow White Events JO on Instagram"
          >
            <Instagram className="h-4 w-4" />
            Follow @white.events_jo
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
