import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../pages/newimg/logo1.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change navbar background after scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  // Close menu helper
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-12 md:px-24 py-4 md:py-6 transition-all duration-500 z-50 ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main"
      >
        {/* Hamburger (Small Screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="text-white text-2xl focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Left Navigation (Desktop) */}
        <div className="hidden md:flex gap-8 text-white pl-36">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          <Link to="/services" className="hover:text-gray-400 transition">Services</Link>
        </div>

        {/* Right Navigation (Desktop) */}
        <div className="hidden md:flex gap-8 text-white pr-36">
          <Link to="/gallery" className="hover:text-gray-400 transition">Gallery</Link>

          {/* Section links that work from any route */}
          <HashLink
            smooth
            to="/#testimonials"
            className="hover:text-gray-400 transition"
          >
            Testimonials
          </HashLink>
          <HashLink
            smooth
            to="/#appointment"
            className="hover:text-gray-400 transition"
          >
            Book
          </HashLink>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center z-[60]"
          role="dialog"
          aria-modal="true"
        >
          {/* Exit / Close button */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-3xl hover:text-gray-400 focus:outline-none"
            aria-label="Close menu"
          >
            ✖
          </button>

          {/* Menu Links */}
          <Link
            to="/"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={closeMenu}
          >
            Gallery
          </Link>

          {/* Section links that always jump to home then scroll */}
          <HashLink
            smooth
            to="/#testimonials"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={closeMenu}
          >
            Testimonials
          </HashLink>
          <HashLink
            smooth
            to="/#appointment"
            className="py-4 text-xl hover:text-gray-400 transition"
            onClick={closeMenu}
          >
            Book
          </HashLink>
        </div>
      )}

      {/* Logo */}
      <div
        className={`fixed transition-all duration-500 transform z-50 pointer-events-none ${
          isScrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-32" // Small logo (top-center)
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2" // Large centered logo
        }`}
      >
        <img src={logo} alt="Logo" className="w-full h-auto" />
      </div>
    </>
  );
};

export default NavBar;
