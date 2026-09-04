import React from "react";
import { Link } from "react-router-dom";
import m1 from "../../pages/Gallery/albums_thumbs/Ahmad & Dana - St.Regis/1.webp";
import m2 from "../../pages/Gallery/albums_thumbs/Haya & Mustafa - La Plage Beach Club, Aqaba/1.webp";

function Services() {
  const services = [
    "Styling",
    "Styling & Management",
    "Planning, Styling & Management",
    "Destination Weddings",
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-[#FAFAF7] text-neutral-900">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft paper + light gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_12%_-10%,rgba(255,220,185,0.18),transparent_60%),radial-gradient(900px_500px_at_100%_120%,rgba(255,154,158,0.14),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.8),transparent_50%)]" />
        {/* subtle border frame */}
        <div className="absolute -inset-[8%] rounded-[3rem] ring-1 ring-neutral-200 shadow-[inset_0_0_140px_40px_rgba(255,255,255,0.8)]" />
        {/* ambient glows */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
        {/* subtle dot texture */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px] text-neutral-300" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-3 md:gap-10 md:px-6 md:py-24 lg:px-12">
        {/* Left Image */}
        <div className="relative mx-auto w-full max-w-[15rem] md:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl ring-1 ring-neutral-200">
            <img
              src={m1}
              alt="Bride and Groom Holding Hands"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* soft inner vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          </div>
          {/* subtle glow */}
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-amber-200/30 blur-2xl" />
        </div>

        {/* Center Text & Buttons */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-amber-700 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-700 md:mt-6 md:text-lg">
            As a specialised event design studio, we offer a selection of wedding planning, styling &amp; management services—perfect for couples who still want to be hands-on, and those who prefer to leave it all to the experts.
          </p>

          {/* Elegant Buttons */}
          <div className="mt-7 flex flex-col items-center gap-3 md:mt-10 md:gap-4">
            {services.map((service, i) => (
              <Link
                key={i}
                to="/services"
                className="group relative w-full max-w-xs overflow-hidden rounded-full ring-1 ring-amber-400/40 bg-white px-6 py-3 text-sm font-medium tracking-wide text-amber-800 backdrop-blur-sm transition-all duration-300 hover:bg-amber-50 hover:text-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 md:text-base"
              >
                {/* shimmer border on hover */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(251,191,36,0.65), 0 0 0 0 rgba(251,191,36,0.0)",
                  }}
                />
                <span className="relative z-10">{service}</span>

                {/* underline animation */}
                <span className="pointer-events-none absolute bottom-1 left-1/2 z-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-600 to-transparent transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[15rem] md:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl ring-1 ring-neutral-200">
            <img
              src={m2}
              alt="Elegant Wedding Table Setup"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          </div>
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-rose-200/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

export default Services;
