import React, { useEffect, useMemo, useRef, useState } from "react";

function Feedback({ autoRotate = true, intervalMs = 5000 }) {
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

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null || touchStartY.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

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
      void progressRef.current.offsetHeight;
      progressRef.current.style.transition = `width ${intervalMs}ms linear`;
      requestAnimationFrame(() => {
        if (progressRef.current) progressRef.current.style.width = "100%";
      });
    }

    if (!autoRotate || paused || prefersReduced) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, intervalMs);
    return () => timerRef.current && clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, paused, autoRotate, intervalMs]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center justify-center px-4 py-24 sm:py-32 text-neutral-100 overflow-hidden"
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
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b0b10]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_12%_-10%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(900px_500px_at_100%_120%,rgba(255,154,158,0.06),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_50%)]" />
        <div className="absolute -inset-[8%] rounded-[3rem] ring-1 ring-white/5 shadow-[inset_0_0_160px_50px_rgba(0,0,0,0.7)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px]" />
      </div>

      {/* Headline */}
      <div className="mb-6 sm:mb-10 text-center max-w-2xl">
        <h2
          id="testimonials-heading"
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-snug"
        >
          <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
            KIND WORDS FROM OUR COUPLES
          </span>
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-neutral-300">
          A few heartfelt messages from couples we’ve had the privilege to work with.
        </p>
      </div>

      {/* Desktop / tablet */}
      <div className="hidden sm:flex items-center justify-center gap-6 sm:gap-8 w-full max-w-4xl">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-amber-300/50 bg-white/5 text-amber-100 hover:bg-amber-300/20 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          className={`relative w-full sm:w-11/12 max-w-6xl rounded-3xl bg-white/5 p-6 sm:p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur-md transition-opacity duration-500 ${
            animate ? "opacity-0" : "opacity-100"
          }`}
          role="region"
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            className="mb-3 flex items-center justify-center gap-1 text-amber-300 text-lg"
            aria-label={`${t.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} aria-hidden="true">
                {i < t.rating ? "★" : "☆"}
              </span>
            ))}
            <span className="sr-only">{t.rating} out of 5</span>
          </div>

          <p
            className={`mx-auto max-w-3xl text-base sm:text-lg text-neutral-100/95 mb-4 transition-transform duration-300 ${
              animate ? "translate-x-[-40px] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {t.message}
          </p>

          <p
            className={`font-bold text-lg sm:text-xl text-white transition-transform duration-300 ${
              animate ? "translate-x-[40px] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {t.author}
          </p>

          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-300">
            {t.date} <span className="mx-2">•</span> {t.location}
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {t.services?.map((s, i) => (
              <span
                key={i}
                className="rounded-full border border-amber-300/40 bg-amber-300/10 px-2 py-1 text-[10px] sm:text-[11px] uppercase tracking-wide text-amber-100"
              >
                {s}
              </span>
            ))}
          </div>

          {autoRotate && (
            <div className="mt-6 h-1 w-full rounded bg-white/10">
              <div
                ref={progressRef}
                className="h-1 w-0 rounded bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-amber-300/50 bg-white/5 text-amber-100 hover:bg-amber-300/20 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60"
          onClick={next}
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile */}
      <div className="sm:hidden w-full max-w-xl">
        <div
          className={`rounded-2xl bg-white/5 p-5 text-center shadow-[0_10px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur-md transition-opacity duration-500 ${
            animate ? "opacity-0" : "opacity-100"
          }`}
          role="region"
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            className="mb-2 flex items-center justify-center gap-1 text-amber-300 text-base"
            aria-label={`${t.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} aria-hidden="true">
                {i < t.rating ? "★" : "☆"}
              </span>
            ))}
            <span className="sr-only">{t.rating} out of 5</span>
          </div>

          <p
            className={`text-base mb-3 text-neutral-100/95 transition-transform duration-300 ${
              animate ? "translate-x-[-40px] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {t.message}
          </p>

          <p
            className={`font-bold text-lg text-white transition-transform duration-300 ${
              animate ? "translate-x-[40px] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {t.author}
          </p>

          <p className="mt-1 text-xs text-neutral-300">
            {t.date} <span className="mx-1">•</span> {t.location}
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {t.services?.map((s, i) => (
              <span
                key={i}
                className="rounded-full border border-amber-300/40 bg-amber-300/10 px-2 py-1 text-[10px] uppercase tracking-wide text-amber-100"
              >
                {s}
              </span>
            ))}
          </div>

          {autoRotate && (
            <div className="mt-5 h-1 w-full rounded bg-white/10">
              <div
                ref={progressRef}
                className="h-1 w-0 rounded bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {/* Dots + hint */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === current
                  ? "bg-amber-300 shadow-[0_0_0_4px_rgba(251,191,36,0.25)]"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-white/70 select-none">Swipe to see more</p>
      </div>

      {/* Dots (desktop) */}
      <div className="mt-6 hidden sm:flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === current}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === current
                ? "bg-amber-300 shadow-[0_0_0_6px_rgba(251,191,36,0.18)]"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Feedback;
