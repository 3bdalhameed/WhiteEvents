import React from "react";
import backgroundImage from "../newimg/background.png";
import Footer from "../../components/Footer/footer.jsx";
import Navbar from "../../components/Navbargallery/navbar";
import Aboutme from "../../components/about/about.jsx";
import Meetteam from "../../components/MeetTheTeam/meettheteam.jsx";

function About() {
  return (
    <>
    <Navbar />
    <section
      id="about"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-6">
        <h1 className="text-5xl font-serif font-bold mb-6">Who We Are</h1>
        <p className="text-lg leading-relaxed">
          White Events is a premier event design and planning studio dedicated
          to creating unforgettable moments. Based in Perth, we specialize in
          designing events that are as unique as our clients, blending creativity
          and precision to make your dreams come true.
        </p>
      </div>
    </section>
    <Aboutme />
    <Meetteam />
    <Footer />
    </>
  );
}

export default About;
