import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Sun, Moon, Menu, X } from "lucide-react";
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
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="absolute right-6 top-4 grid h-11 w-11 place-items-center rounded-full transition hover:bg-white/10 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          <nav className="flex w-full max-w-xs flex-col px-6">
            {NAV_LINKS.map((item) =>
              item.type === "hash" ? (
                <HashLink
                  key={item.label}
                  smooth
                  to={item.to}
                  className="rounded-xl py-4 text-center text-xl transition hover:bg-white/10 active:bg-white/10"
                  onClick={closeMenu}
                >
                  {item.label}
                </HashLink>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-xl py-4 text-center text-xl transition hover:bg-white/10 active:bg-white/10"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
