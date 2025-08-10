import React, { useState, useEffect } from "react";
import logo from "../../pages/newimg/logo1.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // small screen menu toggle

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-12 md:px-24 py-4 md:py-6 transition-all duration-500 z-50 ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Hamburger Menu (Small Screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Left Navigation */}
        <div className="hidden md:flex gap-8 text-white pl-36">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="/services" className="hover:text-gray-400 transition">Services</a>
        </div>

        {/* Right Navigation */}
        <div className="hidden md:flex gap-8 text-white pr-36">
          <a href="/gallery" className="hover:text-gray-400 transition">Gallery</a>
          <a href="/#testimonials" className="hover:text-gray-400 transition">Testimonials</a>
          <a href="/#appointment" className="hover:text-gray-400 transition">Book</a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center z-[60]">
          <a
            href="/"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/services"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="/gallery"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="/#testimonials"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="/#appointment"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Book
          </a>
        </div>
      )}

      {/* Logo */}
      <div
        className={`fixed transition-all duration-500 transform z-50 ${
          isScrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-32" // Small logo size
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2" // Large centered logo
        }`}
      >
        <img src={logo} alt="Logo" className="w-full h-auto" />
      </div>
    </>
  );
};

export default NavBar;