import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "../../pages/newimg/logo1.png";

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="block text-sm text-zinc-300 hover:text-white transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Details</h3>
            <p className="text-sm text-zinc-400">We’d love to hear about your event.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-zinc-400" />
                <span>1st Floor, 142 Northwood St, West Leederville<br />(by appointment)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-zinc-400" />
                <span>PO Box 101, Mount Hawthorn WA 6915</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-zinc-400" />
                <a href="mailto:farah@whiteevents.com" className="hover:text-white">farah@whiteevents.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-zinc-400" />
                <a href="tel:0414184341" className="hover:text-white">0414 184 341</a>
              </li>
            </ul>
          </div>

          {/* Logo & mini blurb */}
          <div className="flex flex-col items-center text-center gap-4">
            <img src={logo} alt="White Events Logo" className="w-28 sm:w-36 drop-shadow" />
            <p className="max-w-sm text-sm text-zinc-400">
              Bespoke weddings and events crafted with care. From concept to last dance.
            </p>
            <a
              href="/#appointment"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Menu */}
          <div className="lg:text-right">
            <h3 className="text-white text-lg font-semibold">Menu</h3>
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-1 gap-y-1 gap-x-8">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/#testimonials">Testimonials</FooterLink>
              <FooterLink href="/#appointment">Book</FooterLink>
            </div>
          </div>
        </div>

        {/* thin divider */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-zinc-400">
          <p>© {year} White Events · Designed by Abdalhameed Aldaradkeh</p>
        </div>
      </div>
    </footer>
  );
}
