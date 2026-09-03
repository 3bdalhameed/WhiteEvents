import React, { useEffect, useRef } from "react";
import background from "client/src/pages/newimg/logo projects by white-01.jpg.jpeg";

export default function Main() {
  const vidRef = useRef(null);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;

    // Make sure muted is set BEFORE play attempts (iOS quirk)
    v.muted = true;
    v.setAttribute("muted", ""); // extra-safe for iOS
    v.play().catch(() => {
      // If autoplay is still blocked, play on first user interaction
      const resume = () => {
        v.play().catch(() => {});
        window.removeEventListener("touchstart", resume);
        window.removeEventListener("click", resume);
      };
      window.addEventListener("touchstart", resume, { once: true });
      window.addEventListener("click", resume, { once: true });
    });
  }, []);

  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      {/* Video Background */}
      <div className="relative w-full h-[100svh] overflow-hidden">
        <img
          src={background}
          alt=""
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
