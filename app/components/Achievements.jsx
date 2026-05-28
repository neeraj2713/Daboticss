"use client";

import { motion } from "framer-motion";
import { siteImages } from "../lib/siteImages";

export default function Achievements() {
  const logos = siteImages.achievements;

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f7f9fc] to-white overflow-hidden">
      
      {/* soft background blobs */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-orange-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-200/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        
        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Our <span className="text-orange-500">Achievements</span> & Recognition
        </h2>

        <div className="flex items-center justify-center gap-3 text-gray-700 text-xl font-semibold mb-14">
          🏆 Accreditation
        </div>

        {/* logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-20 w-full object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
