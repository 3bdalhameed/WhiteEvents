import React from "react";
import background from "../../pages/newimg/background.mp4";

function Main() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={background}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
      </div>
    </section>
  );
}

export default Main;
