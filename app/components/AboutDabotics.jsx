"use client";

import { motion } from "framer-motion";
import { siteImages } from "../lib/siteImages";

export default function AboutDabotics() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      
      {/* ORANGE WAVE BACKGROUND */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[260px]"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 C240,220 480,220 720,180 960,140 1200,140 1440,160 L1440,260 L0,260 Z"
          fill="#F97316"
        />
        <path
          d="M0,180 C240,240 480,240 720,200 960,160 1200,160 1440,180 L1440,260 L0,260 Z"
          fill="#FBBF24"
          opacity="0.9"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={siteImages.about.main}
              alt="Dabotics STEM and robotics lab"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>

          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              About <span className="text-orange-500">Us</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Dabotics India is an education-focused technology company dedicated
              to transforming how students learn STEM in the 21st century.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We partner with schools to deliver hands-on programs in Robotics,
              AI, Coding, Electronics, and Innovation Labs — empowering students
              with creativity, confidence, and real-world problem-solving skills.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Industry Leaders",
              desc: "Internationally accredited programs backed by global education standards and STEM.org USA certification.",
              icon: "👥",
            },
            {
              title: "Complete Solution",
              desc: "End-to-end implementation from lab setup and curriculum to teacher training and competitions.",
              icon: "✔️",
            },
            {
              title: "Flexible",
              desc: "Hybrid learning programs with students across India and global locations, supported by offline STEMx studios.",
              icon: "♾️",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
