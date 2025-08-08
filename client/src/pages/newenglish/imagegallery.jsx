import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbargallery/navbar";

// Import images
import m1 from "./img/1.jpg";
import m2 from "./img/2.jpg";
import m3 from "./img/3.jpg";
import m4 from "./img/4.jpg";
import m5 from "./img/5.jpg";
import m6 from "./img/6.jpg";
import m7 from "./img/7.jpg";
import m8 from "./img/8.jpg";
import m9 from "./img/9.jpg";
import m10 from "./img/10.jpg";
import m11 from "./img/11.jpg";
import m12 from "./img/12.jpg";
import m13 from "./img/13.jpg";
import m14 from "./img/14.jpg";
import m15 from "./img/15.jpg";
import m16 from "./img/16.jpg";
import m17 from "./img/17.jpg";
import m18 from "./img/18.jpg";
import m19 from "./img/19.jpg";
import m20 from "./img/20.jpg";
import m21 from "./img/21.jpg";
import m22 from "./img/22.jpg";
import m23 from "./img/23.jpg";
import m24 from "./img/24.jpg";
import m25 from "./img/25.jpg";

const images = [
  m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13,
  m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25,
];

function ImageGallery() {
  return (
    <>
      <Navbar />
      <div className="text-center bg-white/80 border border-gray-200 shadow-md rounded-lg mt-14 py-6 md:py-12 px-12 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          <i className="fa fa-camera-retro"></i> Make Your Wedding Unforgettable
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Just a Gallery Full of Beautiful Images...
        </p>
      </div>

      <div
        className="masonry-grid p-8 md:px-44 bg-gray-100 rounded-lg"
        style={{
          columnCount: window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4,
          columnGap: "16px",
        }}
      >
        {images.map((src, index) => (
          <Link
            to={`/gallery/${index}`}
            key={index}
            style={{ breakInside: "avoid" }}
          >
            <div className="relative mb-4 overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ImageGallery;
