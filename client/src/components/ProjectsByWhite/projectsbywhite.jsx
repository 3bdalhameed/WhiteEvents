import React from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "SOFEX Gala Dinner",
    desc: "An exclusive large-scale event welcoming 1,000 guests.",
  },
  {
    title: "TALABAT",
    desc: "Managing and executing multiple projects and events across different occasions.",
  },
  {
    title: "Ibn Sina",
    desc: "Designing and delivering events for the launch of their new products.",
  },
  {
    title: "Government Projects",
    desc: "Collaborating on multiple governmental events and official occasions.",
  },
  {
    title: "Corporate Events & Brand Activations",
    desc: "Creating tailored concepts and experiences that reflect each brand’s identity and objectives.",
  },
];

export default function ProjectsByWhite() {
  return (
    <section
      id="projects-by-white"
      aria-labelledby="projects-by-white-title"
      className="relative overflow-hidden bg-[#0b0b10] py-20 text-neutral-100 md:py-28"
    >
      {/* background layers, consistent with the rest of the page */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(1000px_500px_at_100%_120%,rgba(255,154,158,0.06),transparent_60%)]" />
        <div className="absolute -inset-[8%] rounded-[3rem] ring-1 ring-white/5 shadow-[inset_0_0_140px_40px_rgba(0,0,0,0.65)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300">
            Corporate &amp; Events Division
          </span>

          <h2
            id="projects-by-white-title"
            className="mt-4 font-serif text-3xl font-bold tracking-tight md:text-4xl"
          >
            <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
              Projects by White
            </span>
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-neutral-300 md:text-base">
            Projects by White is the corporate and events division of White, specializing
            in event planning, design, production, and execution for corporate,
            governmental, and private-sector clients.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-neutral-300 md:text-base">
            With over 12 years of experience in the events industry, our team has built
            strong expertise in creating and delivering events that combine creative
            design, strategic planning, seamless execution, and attention to detail.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-neutral-300 md:text-base">
            Our portfolio includes a wide range of high-profile projects, from
            large-scale corporate events and gala dinners to product launches,
            government events, conferences, and brand activations.
          </p>
        </motion.div>

        {/* notable projects */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="w-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <h3 className="font-serif text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-3xl text-center text-[15px] leading-relaxed text-neutral-300 md:text-base"
        >
          At Projects by White, we don’t simply organize events — we design experiences,
          manage every detail, and bring each concept to life from the first idea to the
          final execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://www.instagram.com/projects.bywhite?igsi=eW5peTR6ZTdicTlv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-gradient-to-b from-amber-300/20 to-transparent px-6 py-3 text-sm font-semibold tracking-wide text-amber-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-amber-300/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
            aria-label="Follow Projects by White on Instagram"
          >
            <Instagram className="h-4 w-4" />
            Follow @projects.bywhite
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
