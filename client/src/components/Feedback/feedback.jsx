import React, { useEffect, useMemo, useRef, useState } from "react";

function Feedback({
  autoRotate = true,
  intervalMs = 5000, // progress bar timing
}) {
  const testimonials = useMemo(
    () => [
      {
        message:
          "From the minute we first spoke to Farah, she put both of us at ease—which was hard to do planning a Perth wedding from Melbourne! She brought our vision to life and made the day effortless.",
        author: "Ahmad & Lana",
        date: "Apr 2024",
        location: "Amman, JO",
        services: ["Planning", "Styling"],
        rating: 5,
      },
      {
        message:
          "Working with Farah was a dream. Every detail was cared for and the process was stress-free. Our wedding day felt magical from start to finish.",
        author: "Sara & Dana",
        date: "Sep 2023",
        location: "Aqaba, JO",
        services: ["Styling", "Management"],
        rating: 5,
      },
      {
        message:
          "Farah and her team exceeded our expectations. The entire day was flawless, and our guests couldn’t stop talking about how beautiful everything looked.",
        author: "Rami & Layan",
        date: "Jan 2025",
        location: "Amman, JO",
        services: ["Destination", "Full Service"],
        rating: 5,
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const ticking = useRef(false);
  const progressRef = useRef(null);
  const timerRef = useRef(null);

  const safeAdvance = (dir) => {
    if (ticking.current) return;
    ticking.current = true;
    setAnimate(true);
    setTimeout(() => {
      setCurrent((i) => (i + dir + testimonials.length) % testimonials.length);
      setAnimate(false);
      ticking.current = false;
    }, 300);
  };

  const next = () => safeAdvance(1);
  const prev = () => safeAdvance(-1);

  // Keyboard navigation (desktop/tablet)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Touch swipe — ignore vertical swipes
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null || touchStartY.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // threshold + mostly horizontal
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Auto-rotate + progress bar
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // reset progress bar
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      // force reflow
      progressRef.current.offsetHeight;
      progressRef.current.style.transition = `width ${intervalMs}ms linear`;
      requestAnimationFrame(() => (progressRef.current.style.width = "100%"));
    }

    if (!autoRotate || paused || prefersReduced) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, intervalMs);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, paused, autoRotate, intervalMs]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="bg-black text-white flex flex-col items-center justify-center px-4 py-24 sm:py-32 relative"
      style={{
        paddingTop: `calc(env(safe-area-inset-top) + 4rem)`,
        paddingBottom: `calc(env(safe-area-inset-bottom) + 4rem)`,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-labelledby="testimonials-heading"
    >
      {/* Headline */}
      <div className="mb-6 sm:mb-10 text-center max-w-2xl">
        <h2
          id="testimonials-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-snug"
        >
          KIND WORDS FROM OUR COUPLES
        </h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg">
          A few heartfelt messages from couples we’ve had the privilege to work with.
        </p>
      </div>

      {/* Desktop/tablet layout: arrows at sides */}
      <div className="hidden sm:flex items-center justify-center gap-6 sm:gap-8 w-full max-w-4xl">
        {/* Left Arrow */}
        <button
          type="button"
          className="cursor-pointer text-3xl sm:text-4xl hover:scale-110 transition-transform select-none p-2 -m-2"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          &larr;
        </button>

        {/* Card */}
        <div
          className={`bg-gray-100 text-black p-6 sm:p-8 w-full sm:w-11/12 rounded-lg sm:rounded-md shadow-lg text-center max-w-6xl transition-opacity duration-1000 ${
            animate ? "opacity-0" : "opacity-100"
          }`}
          role="region"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Rating */}
          <div
            className="mb-2 flex items-center justify-center gap-1 text-yellow-500 text-base sm:text-lg"
            aria-label={`${t.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} aria-hidden="true">
                {i < t.rating ? "★" : "☆"}
              </span>
            ))}
            <span className="sr-only">{t.rating} out of 5</span>
          </div>

          {/* Message */}
          <p
            className={`text-base sm:text-lg mb-3 sm:mb-4 transition-transform duration-300 break-words ${
              animate ? "translate-x-[-50%] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {t.message}
          </p>

          {/* Author */}
          <p
            className={`font-bold text-lg sm:text-xl transition-transform duration-300 ${
              animate ? "translate-x-[50%] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {t.author}
          </p>

          {/* Meta */}
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
            {t.date} <span className="mx-1 sm:mx-2">•</span> {t.location}
          </p>

          {/* Services */}
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {t.services?.map((s, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-700 bg-white border border-gray-300 rounded-full px-2 py-1"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          {autoRotate && (
            <div className="mt-5 sm:mt-6 h-1 w-full bg-gray-200 rounded">
              <div ref={progressRef} className="h-1 w-0 bg-black rounded" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          className="cursor-pointer text-3xl sm:text-4xl hover:scale-110 transition-transform select-none p-2 -m-2"
          onClick={next}
          aria-label="Next testimonial"
        >
          &rarr;
        </button>
      </div>

      {/* Mobile layout: swipe only (no arrows) */}
      <div className="sm:hidden w-full max-w-xl">
        {/* Card (swipe target) */}
        <div
          className={`bg-gray-100 text-black p-5 w-full rounded-lg shadow-lg text-center transition-opacity duration-1000 ${
            animate ? "opacity-0" : "opacity-100"
          }`}
          role="region"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Rating */}
          <div
            className="mb-2 flex items-center justify-center gap-1 text-yellow-500 text-base"
            aria-label={`${t.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} aria-hidden="true">
                {i < t.rating ? "★" : "☆"}
              </span>
            ))}
            <span className="sr-only">{t.rating} out of 5</span>
          </div>

          {/* Message */}
          <p
            className={`text-base mb-3 transition-transform duration-300 break-words ${
              animate ? "translate-x-[-50%] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {t.message}
          </p>

          {/* Author */}
          <p
            className={`font-bold text-lg transition-transform duration-300 ${
              animate ? "translate-x-[50%] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {t.author}
          </p>

          {/* Meta */}
          <p className="mt-1 text-xs text-gray-600">
            {t.date} <span className="mx-1">•</span> {t.location}
          </p>

          {/* Services */}
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {t.services?.map((s, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-wide text-gray-700 bg-white border border-gray-300 rounded-full px-2 py-1"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          {autoRotate && (
            <div className="mt-5 h-1 w-full bg-gray-200 rounded">
              <div ref={progressRef} className="h-1 w-0 bg-black rounded" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Subtle hint for users */}
        <p className="mt-3 text-center text-xs text-white/70 select-none">
          Swipe to see more
        </p>
      </div>
    </section>
  );
}

export default Feedback;
