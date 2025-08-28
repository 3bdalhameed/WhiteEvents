import React from "react";
import { Link } from "react-router-dom";
import m1 from "../../pages/Gallery/albums/Ahmad & Dana - St.Regis/1.jpg";
import m2 from "../../pages/Gallery/albums/Haya & Mustafa - La Plage Beach Club, Aqaba/1.jpg";

function Services() {
  const services = [
    "Styling",
    "Styling & Management",
    "Planning, Styling & Management",
    "Destination Weddings",
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-[#0b0b10] text-neutral-100">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_12%_-10%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(900px_500px_at_100%_120%,rgba(255,154,158,0.06),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_50%)]" />
        <div className="absolute -inset-[8%] rounded-[3rem] ring-1 ring-white/5 shadow-[inset_0_0_140px_40px_rgba(0,0,0,0.65)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-16 pb-32 md:grid-cols-3 md:px-6 lg:px-12">
        {/* Left Image */}
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
            <img
              src={m1}
              alt="Bride and Groom Holding Hands"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* soft inner vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          {/* subtle glow */}
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-amber-300/5 blur-2xl" />
        </div>

        {/* Center Text & Buttons */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl px-2 text-base leading-relaxed text-neutral-300 md:text-lg">
            As a specialised event design studio, we offer a selection of wedding planning, styling &amp; management services—perfect for couples who still want to be hands-on, and those who prefer to leave it all to the experts.
          </p>

          {/* Elegant Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4">
            {services.map((service, i) => (
              <Link
                key={i}
                to="/services"
                className="group relative w-full max-w-xs overflow-hidden rounded-full ring-1 ring-amber-300/50 bg-white/5 px-6 py-3 text-sm font-medium tracking-wide text-amber-100 backdrop-blur-md transition-all duration-300 hover:bg-amber-300/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60 md:text-base"
              >
                {/* shimmer border on hover */}
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(251,191,36,0.6), 0 0 0 0 rgba(251,191,36,0.0)",
                  }}
                />
                <span className="relative z-10">{service}</span>

                {/* underline animation */}
                <span className="pointer-events-none absolute bottom-1 left-1/2 z-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </div>

          {/* optional secondary link */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-neutral-200 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              Enquire Now
              <svg
                aria-hidden="true"
                className="h-4 w-4"
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
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
            <img
              src={m2}
              alt="Elegant Wedding Table Setup"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-rose-300/5 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

export default Services;
