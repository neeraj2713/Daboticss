"use client";

import { motion } from "framer-motion";

const HERO_IMAGES = [
  "/images/lab-hero.jpg",
  "/images/stem-robotics-lab.jpg",
  "/images/stem-day-banner.jpg",
  "/images/Daboticslabs.jpg",
  "/images/about-2.jpg",
  "/images/products/product-1.jpg",
];

const STATS = [
  { value: "65k+", label: "Happy Children", icon: "👨‍👩‍👧‍👦" },
  { value: "70+", label: "Mentors", icon: "🌍" },
  { value: "125+", label: "Schools", icon: "🏫" },
  { value: "20+ Cities", label: "Across India", icon: "🎓" },
];

export default function HeroSection({ setActive }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fdfefe] via-[#f1f5ff] to-[#eef2ff] px-6 py-20 lg:px-10 lg:py-24">
      {/* Original right curved panel */}
      <div className="absolute top-0 right-0 h-full w-[58%] bg-orange-500 rounded-bl-[320px] z-0 overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-full w-[180px]"
          viewBox="0 0 200 1000"
          preserveAspectRatio="none"
        >
          <path
            d="
              M200,0
              C120,150 120,300 200,450
              C280,650 280,850 200,1000
              L0,1000 L0,0 Z
            "
            fill="#3B82F6"
            opacity="0.88"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-5xl font-extrabold text-gray-900 md:text-6xl"
          >
            Learn. Play. <br />
            <span className="text-orange-500">Build.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600"
          >
            Fun Robotics, Coding & AI programs designed especially for kids with
            hands-on learning and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() =>
                document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              Explore Kits
            </button>
            <button
              type="button"
              onClick={() => setActive("demo-for-schools")}
              className="rounded-full border-2 border-blue-500 px-8 py-4 font-semibold text-blue-500 transition hover:bg-blue-50"
            >
              Request Demo →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 max-w-2xl"
          >
            {STATS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-2xl bg-white p-4 text-center shadow-lg sm:p-5"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.8 + i * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="mb-2 text-2xl">{item.icon}</div>
                  <h4 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                    {item.value}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {item.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
      </div>

      {/* Original circular image cluster */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:grid grid-cols-2 gap-7 z-10 lg:right-16">
        {HERO_IMAGES.map((img, i) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.08, duration: 0.45 }}
            whileHover={{ y: -8, scale: 1.06 }}
            className="w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-white shadow-2xl overflow-hidden"
          >
            <motion.img
              src={img}
              alt="Dabotics learning highlight"
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 6 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
