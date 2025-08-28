import React from "react";
import { motion } from "framer-motion";

/**
 * Dark, luxurious hero for "White Events JO"
 * - Velvet-black background with vignette & grain
 * - Soft bokeh & glow accents (rose/gold)
 * - Glassmorphism cards for copy
 * - Accessible motion (reduced-motion friendly)
 * TailwindCSS + Framer Motion
 */
export default function Beginning() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b0b10] text-neutral-100"
    >
      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 -z-10">
        {/* base gradient wash */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(1000px_500px_at_100%_120%,rgba(255,154,158,0.06),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_50%)]" />

        {/* soft vignette */}
        <div className="pointer-events-none absolute -inset-[8%] rounded-[3rem] ring-1 ring-white/5 shadow-[inset_0_0_120px_30px_rgba(0,0,0,0.6)]" />

        {/* glow accents */}
        <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-rose-300/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

        {/* subtle moving bokeh (reduced-motion safe) */}
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

        {/* fine grain for texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(black_1px,transparent_1px)] [background-size:6px_6px]" />
      </div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 md:px-10 lg:px-12 lg:py-24">

        {/* Thank-you / testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 mb-10 w-full max-w-3xl text-center md:mb-16"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)] md:p-10">
            <p className="font-serif text-base leading-relaxed text-neutral-200 md:text-lg">
              FROM THE BOTTOM OF OUR HEARTS THANK YOU FOR
              <br />
              CREATING THE WEDDING OF OUR DREAMS AND MAKING IT
              <br />
              SUCH A MEMORABLE DAY FOR US.
            </p>
            <strong className="mt-4 block font-serif text-xl font-bold tracking-wide text-white md:text-2xl">
              DIMA & AHMAD
            </strong>

            {/* elegant divider */}
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          </div>
        </motion.div>

        {/* Right-side content panel */}
        <div className="relative z-10 grid w-full items-stretch gap-6">


          <motion.aside
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative lg:col-span-6"
          >
            <div className="group rounded-3xl bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur-md md:p-8 lg:p-10">
              <h2
                id="projects-title"
                className="font-serif text-2xl font-bold leading-tight tracking-tight md:text-3xl"
              >
                <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
                  CREATORS OF EXCEPTIONAL EVENTS
                </span>
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-neutral-300 md:text-base">
                White Events is an events and weddings design and planning company in Amman.
                We craft elevated celebrations that reflect your story—with impeccable detail,
                refined taste, and calm, expert coordination.
              </p>

              <p className="mt-3 text-[15px] leading-relaxed text-neutral-300 md:text-base">
                Established in 2015, White Events has earned a reputation as Jordan’s leading
                wedding planning studio, led by{" "}
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-amber-200 underline decoration-amber-300/40 underline-offset-4 transition hover:text-amber-100 hover:decoration-amber-200"
                >
                  Farah Daradkeh
                  <svg
                    aria-hidden="true"
                    className="ml-1 h-3.5 w-3.5 translate-y-[1px]"
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
                .
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="/services" className="group inline-flex items-center gap-2">
                  <span className="rounded-full border border-amber-300/60 bg-gradient-to-b from-amber-300/20 to-transparent px-6 py-3 text-sm font-semibold tracking-wide text-amber-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-amber-300/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40">
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

                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/0 px-6 py-3 text-sm font-semibold tracking-wide text-neutral-200 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  VIEW PORTFOLIO
                </a>
              </div>

              {/* subtle hover glow */}
              <div className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 hidden rounded-3xl bg-amber-300/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:block" />
            </div>

            {/* decorative offset shadow panel for depth */}
            <div className="absolute -inset-x-6 -inset-y-6 -z-10 hidden rounded-3xl bg-white/0 ring-1 ring-white/5 blur-xl md:block" />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
