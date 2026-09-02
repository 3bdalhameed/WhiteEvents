import React from "react";

function ProjectsByWhite() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] text-neutral-900 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_0%,rgba(255,220,185,0.12),transparent_60%),radial-gradient(900px_500px_at_0%_120%,rgba(255,154,158,0.10),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-xs tracking-widest text-neutral-500">
            CORPORATE & EVENTS DIVISION
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-amber-700 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              Projects by White
            </span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4 text-neutral-700">
            <p>
              Projects by White is the corporate and events division of White, specializing in event planning, design, production, and execution for corporate, governmental, and private-sector clients.
            </p>
            <p>
              With over 12 years of experience in the events industry, our team has built strong expertise in creating and delivering events that combine creative design, strategic planning, seamless execution, and attention to detail.
            </p>
            <p>
              At Projects by White, we don't simply organize events — we design experiences, manage every detail, and bring each concept to life from the first idea to the final execution.
            </p>
          </div>

          <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-neutral-200 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <h3 className="text-sm font-semibold tracking-widest text-amber-700">
              Notable Projects
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: "SOFEX Gala Dinner", desc: "An exclusive large-scale event welcoming 1,000 guests." },
                { name: "TALABAT", desc: "Managing and executing multiple projects across different occasions." },
                { name: "Ibn Sina", desc: "Designing and delivering events for new product launches." },
                { name: "Government Projects", desc: "Collaborating on multiple governmental events and official occasions." },
                { name: "Corporate Events & Brand Activations", desc: "Creating tailored concepts that reflect each brand's identity." },
              ].map((project, i) => (
                <li key={i}>
                  <span className="text-sm font-semibold text-amber-800">{project.name}</span>
                  <p className="text-xs text-neutral-500">{project.desc}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href="https://www.instagram.com/projects.bywhite?igsi=eW5peTR6ZTdicTlv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-50 px-4 py-2 text-xs font-medium text-amber-800 transition hover:bg-amber-100 hover:text-amber-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
              >
                Follow on Instagram
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsByWhite;
