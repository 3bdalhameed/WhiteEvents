"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-12 md:px-24 py-4 md:py-6 transition-all duration-500 z-50 ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main"
      >
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

        <div className="hidden md:flex gap-8 text-white pl-36">
          <Link href="/" className="hover:text-gray-400 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-400 transition">About</Link>
          <Link href="/services" className="hover:text-gray-400 transition">Services</Link>
        </div>

        <div className="hidden md:flex gap-8 text-white pr-36">
          <Link href="/gallery" className="hover:text-gray-400 transition">Gallery</Link>
          <Link href="/#testimonials" className="hover:text-gray-400 transition">Testimonials</Link>
          <Link href="/#appointment" className="hover:text-gray-400 transition">Book</Link>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center z-[60]"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-3xl hover:text-gray-400 focus:outline-none"
            aria-label="Close menu"
          >
            ✖
          </button>

          <Link href="/" className="py-4 text-xl hover:text-gray-400 transition" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="py-4 text-xl hover:text-gray-400 transition" onClick={closeMenu}>About</Link>
          <Link href="/services" className="py-4 text-xl hover:text-gray-400 transition" onClick={closeMenu}>Services</Link>
          <Link href="/gallery" className="py-4 text-xl hover:text-gray-400 transition" onClick={closeMenu}>Gallery</Link>
          <Link href="/#testimonials" className="py-4 text-xl hover:text-gray-400 transition" onClick={closeMenu}>Testimonials</Link>
          <Link href="/#appointment" className="py-4 text-xl hover:text-gray-400 transition" onClick={closeMenu}>Book</Link>
        </div>
      )}

      <div
        className={`fixed transition-all duration-500 transform z-50 pointer-events-none ${
          isScrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-32"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2"
        }`}
      >
        <img src="/images/logo1.png" alt="Logo" className="w-full h-auto" />
      </div>
    </>
  );
};

export default NavBar;
