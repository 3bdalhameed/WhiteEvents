import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "../../components/Navbar1/navbar";
import Footer from "../../components/Footer/footer.jsx";
import backgroundImage from "../newimg/background.png";
import ss2 from "../newimg/ss2.png";
import s2 from "../newimg/s2.png";
import s3 from "../newimg/s3.png";
import s4 from "../newimg/s4.png";

// Motion helpers
const fade = (d = 0) => ({ initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: d } }, viewport: { once: true, amount: 0.3 } });

const Badge = ({ children }) => (
  <span className="rounded-full border border-amber-300/50 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-amber-100">
    {children}
  </span>
);

const Hero = () => (
  <section className="relative isolate overflow-hidden bg-[var(--surface-0)] text-neutral-100">
    {/* BG image + gradient */}
    <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/55 to-[var(--surface-0)]" />

    <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch px-6 py-24 md:grid-cols-2 md:py-32 lg:px-12">
      {/* Copy */}
      <motion.div {...fade(0)} className="relative z-10 py-24">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>EST. 2015</Badge>
          <Badge>150+ EVENTS</Badge>
          <Badge>BESPOKE</Badge>
        </div>
        <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
          Crafted Celebrations, Effortlessly Executed
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
          White Events is a premier design & planning studio creating elevated weddings and events with calm, expert coordination.
        </p>
      </motion.div>

      {/* Visual panel */}
      <motion.div {...fade(0.1)} className="relative mt-12 md:mt-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-[var(--border-subtle)] shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
          <img src={ss2} alt="Elegant event" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent" />
        </div>
        <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-amber-300/10 blur-2xl" />
      </motion.div>
    </div>

    {/* ornamental grid + glows */}
    <div className="pointer-events-none absolute inset-0 -z-30 opacity-[0.08] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px] text-[var(--text-tertiary)]" />
    <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
  </section>
);

const ServiceCard = ({ img, title, blurb, index }) => (
  <motion.div {...fade(0.05 * index)} className="group relative overflow-hidden rounded-3xl ring-1 ring-[var(--border-subtle)] bg-[var(--surface-1)]">
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <img src={img} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="font-serif text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{blurb}</p>
      <div className="mt-5 flex items-center gap-2 text-amber-200">
      </div>
    </div>
  </motion.div>
);

const ServicesGrid = () => (
  <section id="services" className="relative bg-[var(--surface-0)] py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div {...fade(0)} className="text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] bg-clip-text text-transparent">Our Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">Choose the partnership that suits your journey—from full planning to styling & day‑of orchestration.</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard index={0} img={s2} title="Plan, Style & Manage" blurb="Full‑service planning from first brief to final candle—concept, suppliers, logistics and flawless delivery." />
        <ServiceCard index={1} img={s3} title="Style & Manage" blurb="Design‑led styling with cohesive details and expert coordination as your day approaches." />
        <ServiceCard index={2} img={s4} title="Design Only" blurb="A creative direction for couples who want a signature aesthetic and will manage logistics themselves." />
      </div>
    </div>
  </section>
);

const ProcessStep = ({ n, title, text }) => (
  <div className="relative flex gap-4">
    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-300/60 bg-[var(--surface-1)] text-sm font-semibold text-[var(--accent-amber-text)]">{n}</div>
    <div>
      <div className="font-medium text-[var(--text-primary)]">{title}</div>
      <p className="text-sm text-[var(--text-secondary)]">{text}</p>
    </div>
  </div>
);

const Process = () => (
  <section className="relative bg-[var(--surface-0)] py-20">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-12">
      <motion.div {...fade(0)}>
        <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight"><span className="bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] bg-clip-text text-transparent">How It Works</span></h2>
        <p className="mt-4 max-w-prose text-[var(--text-secondary)]">A calm, collaborative process with clear milestones and meticulous communication.</p>
        <div className="mt-8 space-y-6">
          <ProcessStep n={1} title="Discovery" text="Chemistry call, vision, venues, priorities, budget orientation." />
          <ProcessStep n={2} title="Design" text="Moodboards, palette, materials, tablescapes, stationery and experiential details." />
          <ProcessStep n={3} title="Planning" text="Suppliers, timelines, logistics, RSVPs, production schedules." />
          <ProcessStep n={4} title="Delivery" text="White‑glove coordination, on‑the‑day management and flawless execution." />
        </div>
      </motion.div>

      <motion.div {...fade(0.1)} className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-[var(--border-subtle)] bg-[var(--surface-1)]">
          <img src={ss2} alt="Process visual" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-rose-300/10 blur-2xl" />
      </motion.div>
    </div>
  </section>
);

const Quote = () => (
  <section className="relative bg-[var(--surface-0)] py-16">
    <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
      <motion.blockquote {...fade(0)} className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-8 backdrop-blur-sm">
        <p className="text-lg leading-relaxed text-[var(--text-secondary)]">“From the first call, we felt completely taken care of. The design was breathtaking and the day flowed effortlessly.”</p>
        <footer className="mt-3 text-sm text-[var(--text-tertiary)]">— H&M, Aqaba</footer>
      </motion.blockquote>
    </div>
  </section>
);

const CTA = () => (
  <section className="relative overflow-hidden bg-[var(--surface-0)] py-20">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(255,220,185,0.08),transparent_60%),radial-gradient(800px_400px_at_100%_120%,rgba(255,154,158,0.08),transparent_60%)]" />
    <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
      <motion.h3 {...fade(0)} className="font-serif text-2xl md:text-3xl font-bold tracking-tight"><span className="bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] bg-clip-text text-transparent">Ready to begin?</span></motion.h3>
      <motion.p {...fade(0.05)} className="mx-auto mt-3 max-w-prose text-[var(--text-secondary)]">Share your vision and we’ll curate the perfect path—venues, design, and a seamless plan.</motion.p>
      <motion.div {...fade(0.1)} className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a href="mailto:tameem_aldaradkeh@outlook.com" className="rounded-full border border-amber-300/60 bg-[var(--surface-1)] px-6 py-3 text-sm font-semibold text-[var(--accent-amber-text)] transition hover:bg-amber-300/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40">Enquire Now</a>
        <a href="/gallery" className="rounded-full border border-[var(--border-subtle)] px-6 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-1-hover)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">View Portfolio</a>
      </motion.div>
    </div>
  </section>
);

const WeddingServicesPage = () => {
  return (
    <div className="bg-[var(--surface-0)] text-[var(--text-primary)]">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Process />
      <Quote />
      <CTA />
      <Footer />
    </div>
  );
};

export default WeddingServicesPage;
