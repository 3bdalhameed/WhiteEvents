import React from "react";
import m1 from "../../pages/newenglish/img/15.jpg";


function Services() {
  return (
    <section className="py-8 bg-white flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center px-2">
        {/* Left Image */}
        <div className="w-full">
          <img
            src={m1} /* Replace with actual left image URL */
            alt="Bride and Groom Holding Hands"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            OUR SERVICES
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            As a specialised event design studio we offer a selection of wedding
            planning, styling & management services, designed to suit the
            couples that still want to be a little hands on, and those that just
            want to leave it all in the hands of the experts.
          </p>
          <div className="flex flex-col gap-4 mt-6">
          <button className="bg-transparent text-gray-800 border-b border-l border-gray-700 px-6 py-3 font-medium text-sm md:text-base uppercase transition duration-500 hover:bg-black hover:text-white">
              Styling
            </button>
            <button className="bg-transparent text-gray-800 border-b border-l border-gray-700 px-6 py-3 font-medium text-sm md:text-base uppercase transition duration-500 hover:bg-black hover:text-white">
              Styling & Management
            </button>
            <button className="bg-transparent text-gray-800 border-b border-l border-gray-700 px-6 py-3 font-medium text-sm md:text-base uppercase transition duration-500 hover:bg-black hover:text-white">
              Planning, Styling & Management
            </button>
            <button className="bg-transparent text-gray-800 border-b border-l border-gray-700 px-6 py-3 font-medium text-sm md:text-base uppercase transition duration-500 hover:bg-black hover:text-white">
              Destination Weddings
            </button>
            <button className="bg-transparent text-gray-800 border-b border-l border-gray-700 px-6 py-3 font-medium text-sm md:text-base uppercase transition duration-500 hover:bg-black hover:text-white">
              Private & Social Events
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src={m1}
            alt="Elegant Wedding Table Setup"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
