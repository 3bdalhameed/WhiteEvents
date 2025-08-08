import React from "react";
import logo from '../../pages/newimg/logo1.png';
import G1 from '../../pages/newimg/G1.png';
import G2 from '../../pages/newimg/G2.png';
import G3 from '../../pages/newimg/G3.png';
import G4 from '../../pages/newimg/G4.png';

function Social() {
  return (
    <>
      {/* Top Section: Gallery */}
      <section className="flex flex-wrap justify-center gap-6 py-8 bg-black">
        {[
          { src: G1, link: "https://www.instagram.com/reel/DB9X-k4NXlE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
          { src: G2, link: "https://www.instagram.com/reel/DC__2a7tg1F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
          { src: G3, link: "https://www.instagram.com/reel/DCo6xtDNamY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
          { src: G4, link: "https://www.instagram.com/reel/DCUN3vdtbiB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        ].map((gallery, index) => (
          <div
            key={index}
            className="relative w-48 h-64 overflow-hidden rounded-md shadow-lg hover:scale-105 transition-transform"
          >
            <a href={gallery.link} target="_blank" rel="noopener noreferrer">
              <img
                src={gallery.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-4xl opacity-0 hover:opacity-100 transition-opacity">
                &#9654;
              </span>
            </a>
          </div>
        ))}
      </section>

{/* Footer Section */}
<footer className="bg-black text-white text-sm">
        {/* Middle Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-8 px-4">
          {/* Contact Details */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-8">
            <h3 className="text-lg font-semibold mb-4">CONTACT DETAILS</h3>
            <p>1st Floor, 142 Northwood St, West Leederville</p>
            <p>(by appointment)</p>
            <p>PO Box 101, Mount Hawthorn WA 6915</p>
            <p>
              <a href="mailto:farah@whiteevents.com" className="hover:text-gray-400">
                farah@whiteevents.com
              </a>
            </p>
            <p>0414 184 341</p>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <img src={logo} alt="Logo" className="w-32 sm:w-40" />
          </div>

          {/* Footer Menu */}
          <div className="flex-1 text-center lg:text-right px-4 lg:px-8">
            <h3 className="text-lg font-semibold mb-4">MENU</h3>
            <ul className="space-y-2">
              {["HOME", "ABOUT", "SERVICES", "GALLERY", "TESTIMONIALS", "CONTACT"].map((menu, index) => (
                <li key={index}>
                  <a
                    href={`#${menu.toLowerCase()}`}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 text-center">
          <p>© White Events | Designed by Abdalhameed Aldaradkeh</p>
        </div>
      </footer>
    </>
  );
}

export default Social;
