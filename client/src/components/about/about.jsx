import React from "react";
import directorImage from "../../pages/newimg/farah.png"; // Replace with your image path

function AboutSection() {
    return (
      <div className="bg-gray-100 ">
        {/* Top Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-14">
          <p className="text-lg text-gray-700 leading-relaxed">
            Established in 2019, White Events has earned a reputation as Western
            Australia's leading wedding and event design studio. Directed by
            industry expert, Lara White, our organic approach to planning, draws
            on over 10 years of experience, and sees us consistently transforming
            spaces to create events that are seamless from beginning to end.
          </p>
        </div>
  
        {/* Bottom Section with Gray Background */}
        <div className="bg-gray-200 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-5xl mx-auto gap-8">
            {/* Image Section */}
            <div className="flex-1">
              <img
                src={directorImage}
                alt="Creative Director"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
  
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 text-gray-800">
                FROM THE CREATIVE DIRECTOR
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Events have always been my passion, ever since managing my first
                event in 1999, at just 20 years of age. What has followed has been
                an amazing journey through the world of events.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Having rolled out events across Australia, managed some of the
                country's largest fundraisers, and created countless weddings and
                events, I consider myself to be a specialist in my field.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am driven by the feeling that comes from the flawless finished
                product and thrive on seeing what was once just an idea, come to
                life through meticulous planning, and inspired design.
              </p>
              <p className="text-gray-700 leading-relaxed font-bold">Farah Daradkeh</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutSection;