import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import heroSplit from "../../pages/newimg/beginning.webp";

export default function Beginning() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative min-h-[20vh] w-full overflow-hidden bg-[var(--surface-0)] text-[var(--text-primary)]"
    >
      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 -z-10">
        {/* base gradient wash */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(1000px_500px_at_100%_120%,rgba(255,154,158,0.06),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_50%)]" />

        {/* soft vignette */}
        <div className="pointer-events-none absolute -inset-[8%] rounded-[3rem] ring-1 ring-[var(--border-subtlest)] shadow-[inset_0_0_120px_30px_var(--vignette)]" />

        {/* glow accents */}
        <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-rose-300/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

        {/* subtle moving bokeh */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute top-24 left-1/4 h-2 w-2 rounded-full bg-white/30 blur-[1px]"
            animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/5 h-1.5 w-1.5 rounded-full bg-amber-200/40"
            animate={{ y: [0, -8, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
          <motion.div
            className="absolute bottom-24 left-1/3 h-1.5 w-1.5 rounded-full bg-rose-200/40"
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </motion.div>

        {/* fine grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(black_1px,transparent_1px)] [background-size:6px_6px]" />

        {/* ===== PHOTO PANEL (right side on lg+, full on mobile) ===== */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
          <motion.img
            src={heroSplit}
            alt="Bride and groom outside a grand estate"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            initial={{ scale: 1.05, opacity: 0.9 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover object-[60%_50%] grayscale contrast-110"
          />
          {/* left fade for readability */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/45 via-black/25 to-[var(--surface-0)]" />
          {/* rounded inner edge on desktop like the screenshot */}
          <div className="absolute inset-y-8 left-0 hidden w-2 rounded-r-3xl bg-white/10 mix-blend-overlay lg:block" />
        </div>
      </div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="relative z-10 grid w-full items-stretch gap-6">
          <motion.aside
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative max-w-3xl lg:max-w-[100%]"
          >
            <div className="group rounded-3xl bg-[var(--surface-1)] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] ring-1 ring-[var(--border-subtle)] backdrop-blur-md md:p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] px-3 py-1 text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                White Events
              </span>

              <h2 id="projects-title" className="mt-4 font-serif text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                <span className="bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] bg-clip-text text-transparent">
                  We Create. We Curate. We Deliver.
                </span>
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-base">
                At White Events, we believe every event should be more than a gathering — it
                should be an experience.
              </p>

              <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-base">
                From concept and creative direction to production, styling, entertainment, and
                on-ground management, we bring every element together under one vision. Our team
                works closely with clients to transform ideas into thoughtfully designed
                experiences that are seamless, distinctive, and memorable.
              </p>

              <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-base">
                Whether it’s an intimate celebration, a luxury wedding, a corporate event, a
                brand activation, a gala dinner, or a large-scale occasion, White Events manages
                every detail from A to Z, ensuring that creativity, precision, and execution
                come together effortlessly.
              </p>

              <p className="mt-4 text-[15px] font-medium italic text-[var(--accent-amber-text)] md:text-base">
                Your vision. Our expertise. One unforgettable experience.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="/services" className="group inline-flex items-center gap-2">
                  <span className="rounded-full border border-amber-300/60 bg-gradient-to-b from-amber-300/20 to-transparent px-6 py-3 text-sm font-semibold tracking-wide text-[var(--accent-amber-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-amber-300/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40">
                    VIEW OUR SERVICES
                  </span>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
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
                </a>

                <HashLink
                  smooth
                  to="/#portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-transparent px-6 py-3 text-sm font-semibold tracking-wide text-[var(--text-secondary)] transition hover:bg-[var(--surface-1-hover)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  VIEW PORTFOLIO
                </HashLink>
              </div>

              <div className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 hidden rounded-3xl bg-amber-300/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:block" />
            </div>

            <div className="absolute -inset-x-6 -inset-y-6 -z-10 hidden rounded-3xl bg-transparent ring-1 ring-[var(--border-subtlest)] blur-xl md:block" />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
