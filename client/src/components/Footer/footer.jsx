import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "../../pages/newimg/logo1.png";

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group relative block rounded py-1 text-sm text-zinc-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    >
      {children}
      <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 transition-all duration-300 group-hover:w-10" />
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-[#0b0b10] text-zinc-300"
      aria-labelledby="footer-heading"
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_500px_at_10%_-10%,rgba(255,220,185,0.06),transparent_60%),radial-gradient(900px_480px_at_100%_130%,rgba(255,154,158,0.06),transparent_60%)]" />
        <div className="absolute -inset-[8%] rounded-[3rem] ring-1 ring-white/5 shadow-[inset_0_0_140px_40px_rgba(0,0,0,0.65)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:6px_6px]" />
      </div>

      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Details</h3>
            <p className="text-sm text-zinc-400">We’d love to hear about your event.</p>

            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-zinc-400" />
                <span>
                  Mecca Street
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-zinc-400" />
                <a href="mailto:White.events@outlook.com" className="transition-colors hover:text-white">
                  White.events@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-zinc-400" />
                <a href="tel:00962796389580" className="transition-colors hover:text-white">
                  +962 7 9638 9580
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-zinc-400" />
                <a href="tel:00962793397555" className="transition-colors hover:text-white">
                  +962 7 9339 7555
                </a>
              </li>
            </ul>
          </div>

          {/* Logo & mini blurb */}
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <img src={logo} alt="White Events Logo" className="w-28 drop-shadow sm:w-36" />
            <p className="max-w-sm text-sm text-zinc-400">
              Bespoke weddings and events crafted with care. From concept to last dance.
            </p>
          </div>

          {/* Menu */}
          <div className="lg:text-right">
            <h3 className="text-lg font-semibold text-white">Menu</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-1 lg:grid-cols-1">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/#testimonials">Testimonials</FooterLink>
            </div>
          </div>
        </div>

        {/* Divider + bottom row */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-zinc-400">
          <p>© {year} White Events · Designed by Abdalhameed Aldaradkeh</p>
        </div>
      </div>
    </footer>
  );
}
