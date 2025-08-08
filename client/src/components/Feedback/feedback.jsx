import React, { useState } from "react";

function Feedback() {
  const testimonials = [
    {
      message:
        "From the minute we first spoke to Lara, she put both of us at ease - which was hard to do given we were planning a Perth wedding from Melbourne! Lara brought our vision to life (and made it even better) and was so great to have as a support during the day. Her eye for detail and elegant taste is exactly what makes her one of the best!",
      author: "Melanie & Nick",
    },
    {
      message:
        "Working with Lara was a dream! She took care of every detail, making the entire process stress-free. Our wedding day was more magical than we could have imagined, thanks to her creativity and professionalism.",
      author: "Emma & John",
    },
    {
      message:
        "Lara and her team exceeded our expectations. The entire day was flawless, and all our guests couldn’t stop raving about how beautiful everything looked. We couldn’t have done it without her!",
      author: "Sophia & Michael",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleNext = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setAnimate(false);
    }, 300);
  };

  const handlePrev = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setAnimate(false);
    }, 300);
  };

  return (
    <section className="bg-black text-white flex items-center justify-center px-4 py-16 h-[70vh] relative">
      <div className="flex items-center justify-center gap-8 w-full max-w-4xl">
        {/* Left Arrow */}
        <div
          className="cursor-pointer text-4xl hover:scale-110 transition-transform"
          onClick={handlePrev}
        >
          &larr;
        </div>

        {/* Testimonial Content */}
        <div
          className={`bg-gray-100 text-black p-8 w-11/12 rounded-md shadow-lg text-center max-w-6xl transition-opacity duration-1000 ${
            animate ? "opacity-0" : "opacity-100"
          }`}
        >
          <p
            className={`text-lg mb-4 transition-transform duration-300 ${
              animate ? "translate-x-[-50%] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {testimonials[currentIndex].message}
          </p>
          <p
            className={`font-bold text-xl transition-transform duration-300 ${
              animate ? "translate-x-[50%] opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            {testimonials[currentIndex].author}
          </p>
        </div>

        {/* Right Arrow */}
        <div
          className="cursor-pointer text-4xl hover:scale-110 transition-transform"
          onClick={handleNext}
        >
          &rarr;
        </div>
      </div>
    </section>
  );
}

export default Feedback;
