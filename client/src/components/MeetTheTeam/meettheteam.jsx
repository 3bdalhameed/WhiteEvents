import React from "react";
import farahd from "../../pages/newimg/farah2.png"; // Replace with actual image path
import tameemd from "../../pages/newimg/tameem.png"; // Replace with actual image path

const MeetTheTeam = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-96">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
          MEET THE TEAM
        </h2>
      </div>

      {/* FARAH DARADKEH Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            FARAH DARADKEH
          </h3>
          <p className="text-sm uppercase text-gray-500 tracking-widest mb-6">
            Creative Director
          </p>
          <hr className="border-gray-400 mb-6" />
          <p className="text-gray-700 leading-relaxed mb-4">
            Falling into events at an early age, Lara has been lucky enough to
            make a lifelong career of events and learned early on that weddings
            were her niche. Not only does Lara personally oversee every single
            aspect of each White Events wedding, she’ll also be the person who
            creates your wedding design and guides you through the wedding
            planning journey, with all the answers to your wedding questions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>After Hours...</strong>
            <br />
            British Bulldog Mum
            <br />
            Margarita Enthusiast
            <br />
            Lover of House Music
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src={farahd}
            alt="Lara White"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* TAMEM DARADKEH Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="flex-1">
          <img
            src={tameemd}
            alt="TAMEM DARADKEH"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            TAMEM DARADKEH
          </h3>
          <p className="text-sm uppercase text-gray-500 tracking-widest mb-6">
            Events & Operations Manager
          </p>
          <hr className="border-gray-400 mb-6" />
          <p className="text-gray-700 leading-relaxed">
            With over 10 years of experience in managing events, and an already
            very well-established relationship with White Events, Hollie was the
            perfect person to take on the planning of our social and private
            events. With her wealth of industry knowledge, Hollie also assists
            in further developing our systems and procedures to ensure that
            every single one of our events is as seamless as it can possibly be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
