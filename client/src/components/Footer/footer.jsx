import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "../../pages/newimg/logo1.png";
import G1 from "../../pages/newimg/G1.png";
import G2 from "../../pages/newimg/G2.png";
import G3 from "../../pages/newimg/G3.png";
import G4 from "../../pages/newimg/G4.png";

const gallery = [
  { src: G1, link: "https://www.instagram.com/reel/DB9X-k4NXlE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { src: G2, link: "https://www.instagram.com/reel/DC__2a7tg1F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { src: G3, link: "https://www.instagram.com/reel/DCo6xtDNamY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { src: G4, link: "https://www.instagram.com/reel/DCUN3vdtbiB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
];

function ImageTile({ item, index }) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-xl bg-zinc-900/40 backdrop-blur-sm hover:ring-white/20 hover:shadow-2xl transition-all"
    >
      <div className="aspect-[3/4] w-full">
        <img
          src={item.src}
          alt={`Instagram reel ${index + 1}`}
          loading="lazy"
          className="h-full w-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex items-center gap-3 rounded-full px-4 py-2 bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-grid place-items-center rounded-full p-2 bg-white/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-sm font-medium tracking-wide">Watch Reel</span>
        </div>
      </div>
    </motion.a>
  );
}

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

export default function Social() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Top Section: Social / Gallery */}
      <section className="relative bg-zinc-950 text-white">
        {/* decorative background */}
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider uppercase text-zinc-300"
            >
              <Instagram className="h-3.5 w-3.5" />
              Latest on Instagram
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
            >
              Our Work, <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">In Motion</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-2xl text-sm sm:text-base text-zinc-300"
            >
              A peek at recent celebrations and behind‑the‑scenes moments. Tap any tile to watch the reel.
            </motion.p>
          </div>

          {/* grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {gallery.map((item, i) => (
              <ImageTile key={i} item={item} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <a
              href="https://www.instagram.com/white.events_jo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-900 px-5 py-2.5 text-sm font-medium shadow hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Instagram className="h-4 w-4" /> Follow @whiteevents <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-zinc-950 text-zinc-300 border-t border-white/10" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">Contact Details</h3>
              <p className="text-sm text-zinc-400">We’d love to hear about your event.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-zinc-400" /><span>1st Floor, 142 Northwood St, West Leederville<br />(by appointment)</span></li>
                <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-zinc-400" /><span>PO Box 101, Mount Hawthorn WA 6915</span></li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-zinc-400" /><a href="mailto:farah@whiteevents.com" className="hover:text-white">farah@whiteevents.com</a></li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-zinc-400" /><a href="tel:0414184341" className="hover:text-white">0414 184 341</a></li>
              </ul>
            </div>

            {/* Logo & mini blurb */}
            <div className="flex flex-col items-center text-center gap-4">
              <img src={logo} alt="White Events Logo" className="w-28 sm:w-36 drop-shadow" />
              <p className="max-w-sm text-sm text-zinc-400">
                Bespoke weddings and events crafted with care. From concept to last dance.
              </p>
              <a href="/#appointment" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
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
    </>
  );
}
