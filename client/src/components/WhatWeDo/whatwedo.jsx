import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// pre-generated 420px webp thumbs, not the multi-MB originals
import eventsImg from "../../pages/Gallery/albums_thumbs/Events/24A2B3C3-3359-4D62-92A2-6F4ED0CACE00.webp";
import weddingsImg from "../../pages/Gallery/albums_thumbs/Ahmad & Dana - St.Regis/1.webp";

const SIDES = [
  {
    key: "events",
    eyebrow: "Corporate & Public",
    title: "Events",
    blurb:
      "Gala dinners, product launches, conferences and brand activations — designed, produced and run end to end.",
    items: [
      "Corporate Events",
      "Gala Dinners",
      "Product Launches",
      "Brand Activations",
    ],
    img: eventsImg,
    alt: "Corporate gala dinner styled by White",
    ctaLabel: "VIEW OUR WORK",
    to: "/gallery",
  },
  {
    key: "weddings",
    eyebrow: "Private Celebrations",
    title: "Weddings",
    blurb:
      "Blank-canvas weddings with a classic, modern edge — from creative direction to seamless day-of management.",
    items: [
      "Styling",
      "Styling & Management",
      "Planning, Styling & Management",
      "Destination Weddings",
    ],
    img: weddingsImg,
    alt: "Elegant wedding table setting styled by White",
    ctaLabel: "VIEW OUR WORK",
    to: "/gallery",
  },
];

function SideCard({ side }) {
  return (
    <Link
      to={side.to}
      aria-label={`${side.title} — ${side.blurb}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-[var(--surface-1)] ring-1 ring-[var(--border-subtle)] shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition duration-300 hover:ring-amber-300/50 hover:shadow-[0_18px_60px_rgba(0,0,0,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60"
    >
      {/* image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-1)]">
        <img
          src={side.img}
          alt={side.alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 768px) 45vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-left md:p-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
            {side.eyebrow}
          </p>
          <h3 className="mt-1 font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
            {side.title}
          </h3>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col p-5 text-left md:p-6">
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
          {side.blurb}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2 md:mb-6">
          {side.items.map((item) => (
            <li
              key={item}
              className="rounded-full bg-[var(--pill-bg)] px-3 py-1.5 text-xs font-medium text-[var(--accent-amber-text)] ring-1 ring-amber-400/40"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* the whole card is the link, so this is presentational only */}
        <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-amber-300/60 bg-gradient-to-b from-amber-300/15 to-transparent px-5 py-2.5 text-sm font-semibold tracking-wide text-[var(--accent-amber-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition group-hover:bg-amber-300/20 md:mt-auto">
          {side.ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function WhatWeDo() {
  return (
    <section
      id="portfolio"
      aria-labelledby="whatwedo-title"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--surface-0)] py-16 text-[var(--text-primary)] md:py-24"
    >
      {/* background texture + vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(900px_500px_at_100%_120%,rgba(255,154,158,0.06),transparent_60%)]" />
        <div className="absolute -inset-[8%] rounded-[3rem] ring-1 ring-[var(--border-subtlest)] shadow-[inset_0_0_140px_40px_var(--vignette)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--glow-rose)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[var(--glow-amber)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px]" />
      </div>

      {/* header */}
      <div className="mx-auto mb-8 max-w-3xl px-6 text-center md:mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] px-3 py-1 text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
          What We Do
        </span>

        <h2
          id="whatwedo-title"
          className="mt-4 font-serif text-3xl font-bold tracking-tight md:text-4xl"
        >
          <span className="bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] bg-clip-text text-transparent">
            Events &amp; Weddings
          </span>
        </h2>

        <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-lg">
          Two sides of White. The same team, the same obsession with detail —
          whether it&rsquo;s a thousand-guest gala or an intimate celebration.
        </p>
      </div>

      {/* two sides */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 md:gap-8">
        {SIDES.map((side) => (
          <SideCard key={side.key} side={side} />
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;
