"use client";

import { motion } from "framer-motion";

export default function STEMxPrograms() {
    
  const programs = [
    {
      title: "STEM",
      desc: "Science, Technology, Engineering & Mathematics",
      img: "/programs/stem.jpg",
    },
    {
      title: "Robotics",
      desc: "Build, Program & Control Robots",
      img: "/programs/robotics.jpg",
    },
    {
      title: "Drone Tech",
      desc: "Aerial Technology & UAV Systems",
      img: "/programs/drone.jpg",
    },
    {
      title: "Electronics",
      desc: "Circuit Design & Microcontrollers",
      img: "/programs/electronics.jpg",
    },
    {
      title: "Coding",
      desc: "Programming & Software Development",
      img: "/programs/coding.jpg",
    },
    {
      title: "Space Tech",
      desc: "Space Science & Technology",
      img: "/programs/space.jpg",
    },
    {
      title: "Artificial Intelligence",
      desc: "Machine Learning & Neural Networks",
      img: "/programs/ai.jpg",
    },
    {
      title: "AR & VR",
      desc: "Augmented & Virtual Reality",
      img: "/programs/arvr.jpg",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 overflow-hidden">
      {/* background blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-400/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          We provide <span className="text-orange-300">STEMx programs</span> in schools
        </h2>

        <p className="text-blue-50 max-w-3xl mx-auto mb-20">
          Hands-on programs in AI, Coding, Robotics, and more — designed to build
          creativity, confidence, and future-ready skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {programs.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden text-left"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
