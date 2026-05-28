"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteImages } from "../lib/siteImages";

const images = siteImages.innovatingSlider;

export default function InnovatingEducation() {
  const [index, setIndex] = useState(0);

  // auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="
  relative py-32 overflow-hidden
  bg-gradient-to-b
  from-orange-400
  via-orange-500
  to-[#fff7ed]
">


      {/* soft glow */}
      <div className="absolute top-0 left-0 w-full h-32 bg-white/10 blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center text-white">
        <h2 className="text-5xl font-extrabold mb-4">
          Innovating Education
        </h2>

        <div className="w-24 h-[2px] bg-white mx-auto mb-6" />

        <p className="max-w-3xl mx-auto text-lg opacity-90 mb-16">
          STEMx is a unique ecosystem for holistic 21st century education that
          empowers educators and students with tools to build coding and
          problem-solving skills for the future.
        </p>

        {/* SLIDER */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl">

          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full flex-shrink-0 object-cover h-[420px]"
                alt="Innovating Education"
              />
            ))}
          </motion.div>

          {/* counter */}
          <div className="absolute top-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-semibold shadow">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
