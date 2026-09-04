import React from "react";
import Navbar from "../../components/Navbar1/navbar";
import Footer from "../../components/Footer/footer.jsx";

// 🔧 adjust paths as needed
import backgroundImage from "../newimg/background.png";
import farahd from "../newimg/farah.png";
import tameemd from "../newimg/tameem.png";

function TeamCard({ img, name, role, bio, chips = [], ctaHref = "#", ctaLabel = "Learn more" }) {
  return (
    <article
      className="group relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)] focus-within:ring-white/25"
      tabIndex={-1}
      aria-labelledby={`${name.replace(/\s+/g, "-").toLowerCase()}-title`}
    >
      <img
        src={img}
        alt={name}
        className="h-96 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        loading="lazy"
        decoding="async"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 id={`${name.replace(/\s+/g, "-").toLowerCase()}-title`} className="text-xl font-semibold text-white">
          {name}
        </h3>
        <p className="text-[11px] uppercase tracking-widest text-neutral-300">{role}</p>
        {chips.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {chips.map((c, i) => (
              <span
                key={i}
                className="rounded-full border border-amber-300/50 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[var(--accent-amber-text)]"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
      <div
        className="absolute inset-x-0 bottom-0 translate-y-full bg-black/55 backdrop-blur-md p-6 transition-transform duration-300 ease-out
                   group-hover:translate-y-0 group-focus-within:translate-y-0"
      >
        <p className="text-sm text-neutral-200/95">{bio}</p>
        <div className="mt-4">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-neutral-100 transition
                       hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            {ctaLabel}
            <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 -translate-x-[120%] skew-x-[-20deg]
                   bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out
                   group-hover:translate-x-[220%]"
      />
    </article>
  );
}

export default function About() {
  // ⬇️ Force scroll to top when this page mounts; also disable browser scroll restoration while here
  React.useEffect(() => {
    let prev = "auto";
    if ("scrollRestoration" in window.history) {
      prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = prev;
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* ===== HERO (split) ===== */}
      <section
        aria-labelledby="about-title"
        className="relative isolate overflow-hidden bg-[var(--surface-0)] text-neutral-100"
      >
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/55 to-[var(--surface-0)]" />
        <div className="pointer-events-none absolute -inset-[6%] -z-10 rounded-[3rem] ring-1 ring-white/10 shadow-[inset_0_0_140px_40px_rgba(0,0,0,0.65)]" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-[1.1fr,0.9fr] md:py-32 lg:px-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest text-neutral-300">
              EST. 2015 • AMMAN, JO
            </span>
            <h1 id="about-title" className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] bg-clip-text text-transparent">
                Who We Are
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
              White Events is a premier wedding & events design studio crafting
              unforgettable celebrations—blending creativity and precision to bring
              your vision to life, beautifully and calmly.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["150+ Events", "Design-Led", "White-Glove"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-amber-300/60 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--accent-amber-text)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-6 -top-6 hidden h-[84%] w-[88%] -rotate-3 rounded-3xl border border-white/10 bg-white/5 opacity-70 blur-[0.5px] md:block" />
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.55)]">
              <img
                src={farahd}
                alt="Creative Director portrait"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-amber-300/10 blur-2xl" />
          </div>
        </div>
      </section>

      {/* ===== DIRECTOR LETTER ===== */}
      <section className="relative bg-[var(--surface-0)]">
        <div className="mx-auto max-w-4xl gap-8 px-6 py-16 lg:px-12">
          <article
            id="director-letter" // 🔗 anchor target for the CTA
            className="rounded-3xl bg-[var(--surface-1)] p-7 ring-1 ring-[var(--border-subtle)] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
          >
            <h2 className="text-sm font-semibold tracking-widest text-[var(--accent-amber-text)]">
              FROM THE CREATIVE DIRECTOR
            </h2>
            <div className="mt-3 space-y-4 text-[var(--text-secondary)]">
              <p>
                Events have always been my passion. What followed has been an incredible
                journey through the world of celebrations and design.
              </p>
              <p>
                After planning across the region and creating countless weddings and events,
                I consider myself a specialist in translating a couple’s story into a refined,
                timeless experience.
              </p>
              <p>
                I’m driven by the feeling of a flawless finish—seeing what began as an idea come
                to life through meticulous planning and inspired design.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
              <span className="text-sm font-semibold text-[var(--text-primary)]">Farah Daradkeh</span>
            </div>
          </article>
        </div>
      </section>

      {/* ===== TEAM (enhanced) ===== */}
      <section className="relative bg-[var(--surface-0)]" id="team">
        <div className="mx-auto max-w-7xl px-6 py-8 md:py-16 lg:px-12">
          <h2 className="text-center text-3xl font-serif font-bold text-[var(--text-primary)] md:text-4xl">Meet the Team</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TeamCard
              img={farahd}
              name="FARAH DARADKEH"
              role="Creative Director"
              chips={["Design-Led", "White-Glove", "10+ Yrs"]}
              bio="Oversees every celebration—from bespoke creative direction to calm, on-the-day management—turning a couple’s story into a refined, timeless experience."
              ctaHref="#director-letter"
              ctaLabel="From the Director"
            />
            <TeamCard
              img={tameemd}
              name="TAMEM DARADKEH"
              role="Events & Operations Manager"
              chips={["Logistics", "Vendors", "Timelines"]}
              bio="Runs the engine room: production schedules, suppliers, and seamless logistics—so everything flows flawlessly on the day."
              ctaHref="mailto:tameem_aldaradkeh@outlook.com"
              ctaLabel="Work with us"
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-[var(--surface-0)] pb-20 pt-8 md:pt-0">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(255,220,185,0.08),transparent_60%),radial-gradient(800px_400px_at_100%_120%,rgba(255,154,158,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-1)] px-4 py-2 text-xs tracking-widest text-[var(--text-secondary)]">
            BESPOKE • DETAIL-LED • SEAMLESS
          </div>
          <h3 className="mt-5 font-serif text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Ready to begin?
          </h3>
          <p className="mx-auto mt-3 max-w-prose text-[var(--text-secondary)]">
            Share your vision and we’ll curate the perfect path—venues, design, and a seamless plan.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:White.events@outlook.com"
              className="rounded-full border border-amber-300/60 bg-[var(--surface-1)] px-6 py-3 text-sm font-semibold text-[var(--accent-amber-text)] transition hover:bg-amber-300/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
            >
              Enquire Now
            </a>
            <a
              href="/gallery"
              className="rounded-full border border-[var(--border-subtle)] px-6 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-1-hover)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
