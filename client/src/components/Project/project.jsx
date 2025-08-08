import React from "react";
import galaxy from "../../pages/newenglish/img/21.jpg";

function Project() {
  return (
    <section id="projects" className="relative bg-white py-72 flex flex-col items-center justify-center">
      {/* Overlay Text */}
      <div className="w-11/12 md:w-3/5 text-center bg-white p-8 font-serif text-gray-800 text-lg leading-relaxed shadow-md mb-12 z-10 relative bottom-60">
        <p>
          FROM THE BOTTOM OF OUR HEARTS THANK YOU FOR
          <br />
          CREATING THE WEDDING OF OUR DREAMS AND MAKING IT
          <br />
          SUCH A MEMORABLE DAY FOR US.
        </p>
        <strong className="block mt-4 text-xl font-bold">DEMI & MARKO</strong>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-3/4 h-5/6 top-1/3">
        <img
          src={galaxy}
          alt="Wedding Event"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full lg:w-5/12 lg:h-4/6 bg-gray-100 p-8 lg:py-44 lg:px-12 text-center shadow-lg max-w-4xl lg:absolute lg:right-0 lg:top-3/4 lg:transform lg:-translate-y-1/2">
        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-gray-800 mb-6 leading-snug">
          CREATORS OF EXCEPTIONAL EVENTS
        </h2>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          White Events is a creative event design and management studio, based in Perth and available for weddings and events throughout Western Australia.
        </p>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          Established in 2005, White Events has earned a reputation as Western Australia's leading wedding planning studio, led by industry expert,{" "}
          <a href="#" className="text-blue-600 underline">
            Lara White
          </a>
          .
        </p>
        <a href="#services">
          <button
            className="border-b border-black py-4 px-8 text-sm font-bold text-black transition-all hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none"
          >
            VIEW OUR SERVICES
          </button>
        </a>
      </div>
    </section>
  );
}

export default Project;
