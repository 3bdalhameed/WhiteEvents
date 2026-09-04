import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Sun, Moon } from "lucide-react";
import logo from "../../pages/newimg/logo1.png";
import useTheme from "../../hooks/useTheme";

const NAV_LINKS = [
  { to: "/", label: "Home", type: "link" },
  { to: "/about", label: "About", type: "link" },
  { to: "/services", label: "Services", type: "link" },
  { to: "/gallery", label: "Gallery", type: "link" },
  { to: "/#testimonials", label: "Testimonials", type: "hash" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Prevent background scroll when mobile menu is open
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
        className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-black/30 px-6 py-4 backdrop-blur-md md:px-12"
        role="navigation"
        aria-label="Main"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo} alt="White Events" className="h-10 w-auto md:h-12" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-sm font-medium tracking-wide text-white md:flex">
          {NAV_LINKS.map((item) =>
            item.type === "hash" ? (
              <HashLink key={item.label} smooth to={item.to} className="transition hover:text-gray-300">
                {item.label}
              </HashLink>
            ) : (
              <Link key={item.label} to={item.to} className="transition hover:text-gray-300">
                {item.label}
              </Link>
            )
          )}

          <button
            onClick={toggleTheme}
            className="rounded-full border border-white/15 p-2 text-white transition hover:bg-white/10"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-white/15 p-2 text-white transition hover:bg-white/10"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="text-2xl text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 text-white"
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

          {NAV_LINKS.map((item) =>
            item.type === "hash" ? (
              <HashLink
                key={item.label}
                smooth
                to={item.to}
                className="py-4 text-xl transition hover:text-gray-400"
                onClick={closeMenu}
              >
                {item.label}
              </HashLink>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="py-4 text-xl transition hover:text-gray-400"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
};

export default NavBar;
