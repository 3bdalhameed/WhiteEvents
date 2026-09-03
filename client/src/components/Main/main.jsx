import React from "react";
import background from "../../pages/newimg/newbackground.webp";

export default function Main() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <div className="relative w-full h-[100svh] overflow-hidden">
        <img
          src={background}
          alt=""
          fetchpriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* your content here */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        {/* your hero content */}
      </div>
    </section>
  );
}
