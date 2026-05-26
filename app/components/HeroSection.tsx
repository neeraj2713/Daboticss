"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fdfefe] via-[#f1f5ff] to-[#eef2ff] px-10 py-24">
      
      {/* ORANGE CURVED PANEL */}
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
            opacity="0.95"
          />
        </svg>
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Learn. Play. <br />
          <span className="text-orange-500">Build.</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Fun Robotics, Coding & AI programs designed especially for kids with
          hands-on learning and creativity.
        </p>

        <div className="flex gap-4 mb-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
            Explore Kits
          </button>

          <button
            onClick={() =>
              document
                .getElementById("request-demo")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Request Demo →
          </button>
        </div>

        {/* STATS */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl"
        >
          {[
            { value: "65k+", label: "Happy Children", icon: "👨‍👩‍👧‍👦" },
            { value: "70+", label: "Mentors", icon: "🌍" },
            { value: "125+", label: "Schools", icon: "🏫" },
            { value: "20+ Cities", label: "Across India", icon: "🎓" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="text-orange-500 text-2xl mb-2">
                {item.icon}
              </div>
              <h4 className="text-2xl font-extrabold">{item.value}</h4>
              <p className="text-sm text-gray-500">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ROBOTS */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-8 z-10">
        {["/robots/r1.png","/robots/r2.png","/robots/r3.png","/robots/r4.png","/robots/r5.png","/robots/r6.png"].map(
          (img, i) => (
            <div
              key={i}
              className="w-36 h-36 rounded-full bg-white shadow-2xl flex items-center justify-center"
            >
              <img src={img} className="w-24 h-24 object-contain" />
            </div>
          )
        )}
      </div>
    </main>
  );
}
