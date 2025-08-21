import React from "react";
import { motion } from "framer-motion";
import galaxy from "../../pages/newimg/beginning.png";

// Elegant hero/intro section with layered background, readable overlay card,
// and a floating details panel. TailwindCSS required. Framer Motion optional.
export default function Beginning() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative min-h-[92vh] w-full overflow-hidden bg-neutral-50"
    >
      {/* Background image with gradient and vignette */}
      <div className="absolute inset-0 -z-10">
        <img
          src={galaxy}
          alt="Elegant wedding reception ambiance"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* readability wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        {/* soft vignette frame */}
        <div className="pointer-events-none absolute -inset-[8%] rounded-[3rem] ring-1 ring-white/10 shadow-[inset_0_0_60px_24px_rgba(0,0,0,0.28)]" />
        {/* subtle glow accents */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-200/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        {/* Thank-you card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 mb-10 w-full max-w-3xl text-center md:mb-16"
        >
          <div className="rounded-3xl border border-white/40 bg-white/60 p-6 backdrop-blur-md shadow-lg md:p-10">
            <p className="font-serif text-base leading-relaxed text-gray-800 md:text-lg">
              FROM THE BOTTOM OF OUR HEARTS THANK YOU FOR
              <br />
              CREATING THE WEDDING OF OUR DREAMS AND MAKING IT
              <br />
              SUCH A MEMORABLE DAY FOR US.
            </p>
            <strong className="mt-4 block font-serif text-xl font-bold tracking-wide text-gray-900 md:text-2xl">
              DIMA & AHMAD
            </strong>
          </div>
        </motion.div>

        {/* Content panel */}
        <div className="relative z-10 grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6" />
          <motion.aside
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative lg:col-span-6"
          >
            <div className="rounded-3xl bg-white/85 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur-md md:p-8 lg:p-10">
              <h2
                id="projects-title"
                className="font-serif text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl"
              >
                CREATORS OF EXCEPTIONAL EVENTS
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-700 md:text-base">
                White Events is a creative event design and management studio,
                based in Perth and available for weddings and events throughout
                Western Australia.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700 md:text-base">
                Established in 2005, White Events has earned a reputation as
                Western Australia&#39;s leading wedding planning studio, led by
                industry expert,
                {" "}
                <a
                  href="#"
                  className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition hover:decoration-gray-700"
                >
                  Lara White
                </a>
                .
              </p>

              <div className="mt-6">
                <a href="/services" className="group inline-flex items-center gap-2">
                  <span className="rounded-full border border-black px-6 py-3 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40">
                    VIEW OUR SERVICES
                  </span>
                  {/* arrow icon */}
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 translate-x-0 transform transition-transform group-hover:translate-x-1"
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
              </div>
            </div>

            {/* decorative offset shadow panel for depth */}
            <div className="absolute -inset-x-6 -inset-y-6 -z-10 hidden rounded-3xl bg-white/10 blur-2xl md:block" />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
