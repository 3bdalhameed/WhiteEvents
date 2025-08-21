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
    <section className="bg-white" id="services">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-32 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Image */}
        <div>
          <img
            src={m1}
            alt="Bride and Groom Holding Hands"
            className="rounded-2xl w-full h-full object-cover shadow-md"
            loading="lazy"
          />
        </div>

        {/* Center Text & Buttons */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 px-4">
            As a specialised event design studio, we offer a selection of
            wedding planning, styling & management services — perfect for couples
            who still want to be hands-on, and those who prefer to leave it all
            to the experts.
          </p>

          {/* Elegant Buttons */}
          <div className="flex flex-col gap-4 items-center">
            {services.map((service, i) => (
              <Link
                key={i}
                to="/services"
                className="
                  group relative w-full max-w-xs
                  border border-gray-300
                  px-6 py-3
                  rounded-full
                  text-gray-800 text-sm md:text-base font-medium tracking-wide
                  transition-all duration-300 ease-out
                  hover:bg-black hover:text-white hover:border-black
                  focus:outline-none focus:ring-2 focus:ring-black/40
                "
              >
                {service}
                {/* Underline Animation */}
                <span
                  className="
                    absolute bottom-0 left-1/2 -translate-x-1/2
                    w-0 h-[1px] bg-white
                    group-hover:w-3/4 transition-all duration-300
                  "
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={m2}
            alt="Elegant Wedding Table Setup"
            className="rounded-2xl w-full h-full object-cover shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
