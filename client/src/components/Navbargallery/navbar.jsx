import React, { useState } from 'react';
import logo from '../../pages/newimg/logo1.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Navigation Items (Hidden on small screens) */}
        <div className="hidden md:flex gap-6 text-white pl-36">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="/about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="/services" className="hover:text-blue-600 transition">
            Services
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Right Navigation Items (Hidden on small screens) */}
        <div className="hidden md:flex gap-6 text-white pr-36">
          <a href="/gallery" className="hover:text-blue-600 transition">
            Gallery
          </a>
          <a href="/#testimonials" className="hover:text-blue-600 transition">
            Testimonials
          </a>
          <a href="/#appointment" className="hover:text-blue-600 transition">
            Book
          </a>
        </div>

        {/* Hamburger Menu (Visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-black text-white px-6 py-4 md:hidden">
          <a
            href="/"
            className="block py-2 hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block py-2 hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/services"
            className="block py-2 hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="/gallery"
            className="block py-2 hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="/testimonials"
            className="block py-2 hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#appointment"
            className="block py-2 hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Book
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
