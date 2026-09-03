"use client";
import React from "react";
import { motion } from "framer-motion";
import NavbarGallery from "@/components/NavbarGallery";
import Footer from "@/components/Footer";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: d } },
  viewport: { once: true, amount: 0.3 },
});

const projects = [
  {
    name: "SOFEX Gala Dinner",
    desc: "An exclusive large-scale event welcoming 1,000 guests.",
  },
  {
    name: "TALABAT",
    desc: "Managing and executing multiple projects and events across different occasions.",
  },
  {
    name: "Ibn Sina",
    desc: "Designing and delivering events for the launch of their new products.",
  },
  {
    name: "Government Projects",
    desc: "Collaborating on multiple governmental events and official occasions.",
  },
  {
    name: "Corporate Events & Brand Activations",
    desc: "Creating tailored concepts and experiences that reflect each brand's identity and objectives.",
  },
];

const Badge = ({ children }) => (
  <span className="rounded-full border border-amber-300/50 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-amber-100">
    {children}
  </span>
);

const Hero = () => (
  <section className="relative isolate overflow-hidden bg-[#0b0b10] py-32 text-neutral-100">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_0%,rgba(255,220,185,0.12),transparent_60%),radial-gradient(900px_500px_at_0%_120%,rgba(255,154,158,0.10),transparent_60%)]" />
    <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <Badge>CORPORATE & EVENTS DIVISION</Badge>
        <Badge>12+ YEARS</Badge>
        <Badge>BESPOKE</Badge>
      </div>
      <motion.h1 {...fade(0)} className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
        <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
          Projects by White
        </span>
      </motion.h1>
      <motion.p {...fade(0.05)} className="mx-auto mt-5 max-w-prose text-neutral-300">
        The corporate and events division of White, specializing in event planning, design,
        production, and execution for corporate, governmental, and private-sector clients.
      </motion.p>
    </div>
  </section>
);

const About = () => (
  <section className="bg-[#0f0f16] py-20 text-neutral-100">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:px-12">
      <motion.div {...fade(0)} className="space-y-5 text-neutral-300">
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-white/5 px-3 py-1 text-xs tracking-widest text-neutral-400">
          WHO WE ARE
        </span>
        <h2 className="font-serif text-2xl font-bold tracking-tight md:text-3xl text-neutral-50">
          Designing experiences, delivering every detail
        </h2>
        <p>
          With over 12 years of experience in the events industry, our team has built strong
          expertise in creating and delivering events that combine creative design, strategic
          planning, seamless execution, and attention to detail.
        </p>
        <p>
          Our portfolio includes a wide range of high-profile projects, from large-scale corporate
          events and gala dinners to product launches, government events, conferences, and brand
          activations.
        </p>
        <p>
          At Projects by White, we don&apos;t simply organize events — we design experiences, manage
          every detail, and bring each concept to life from the first idea to the final execution.
        </p>
      </motion.div>

      <motion.div {...fade(0.05)} className="rounded-3xl bg-white/5 p-6 ring-1 ring-neutral-800 backdrop-blur-sm">
        <h3 className="text-sm font-semibold tracking-widest text-amber-200">Notable Projects</h3>
        <ul className="mt-5 space-y-4">
          {projects.map((p, i) => (
            <li key={i} className="border-b border-neutral-800 pb-4 last:border-0 last:pb-0">
              <span className="text-sm font-semibold text-neutral-50">{p.name}</span>
              <p className="mt-1 text-xs text-neutral-400">{p.desc}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a
            href="https://www.instagram.com/projects.bywhite?igsi=eW5peTR6ZTdicTlv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-300/10 px-5 py-2.5 text-xs font-medium text-amber-100 transition hover:bg-amber-300/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
          >
            Follow on Instagram
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const CTA = () => (
  <section className="relative overflow-hidden bg-[#0b0b10] py-20">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(255,220,185,0.08),transparent_60%),radial-gradient(800px_400px_at_100%_120%,rgba(255,154,158,0.08),transparent_60%)]" />
    <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
      <motion.h3 {...fade(0)} className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
          Let&apos;s bring your next event to life
        </span>
      </motion.h3>
      <motion.p {...fade(0.05)} className="mx-auto mt-3 max-w-prose text-neutral-300">
        From concept to execution, we design experiences that reflect your brand&apos;s identity and objectives.
      </motion.p>
      <motion.div {...fade(0.1)} className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a href="/#appointment" className="rounded-full border border-amber-300/60 bg-white/5 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40">Enquire Now</a>
        <a href="/about" className="rounded-full border border-white/10 px-6 py-3 text-sm text-neutral-200 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">About White</a>
      </motion.div>
    </div>
  </section>
);

export default function ProjectsByWhitePage() {
  return (
    <div className="bg-[#0b0b10] text-neutral-100">
      <NavbarGallery />
      <Hero />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
