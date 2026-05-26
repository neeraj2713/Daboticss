"use client";

import Navbar from "./Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import PlayfulBackground from "./components/PlayfulBackground";
import FlyingRobotWithMessage from "./components/FlyingRobotWithMessage";
import WhatsAppFloat from "./components/WhatsAppFloat";
import STEMxPrograms from "./components/STEMxPrograms";
import Achievements from "./components/Achievements";
import AboutDabotics from "./components/AboutDabotics";
import InnovatingEducation from "./components/InnovatingEducation";
import SchoolProgrammesSection from "./components/SchoolProgrammesSection";
import { useState, useEffect } from "react";
import RoboticsAICompetitionsTease from "./components/RoboticsAICompetitionsTease";
import OnlineProgramsSection from "./components/OnlineProgramsSection";
import ShopPage from "./components/Shop";




export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // scroll to demo only when requested
  useEffect(() => {
    if (activeSection === "request-demo") {
      document
        .getElementById("request-demo")
        ?.scrollIntoView({ behavior: "smooth" });
      setActiveSection("home");
    }
  }, [activeSection]);

  return (
    <>
      {/* NAVBAR */}
      <Navbar active={activeSection} setActive={setActiveSection} />

      {/* spacing for fixed navbar */}
      <div className="h-[80px]" />    

      ================= SHOP PAGE =================
    

      {/* ================= HOME (ONLY PLAYGROUND) ================= */}
      {activeSection === "home" && (
  <>
    <PlayfulBackground />
        
        
      
      
      

      {/* 🔹 HERO */}
     {/* ================= HERO ================= */}
<main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fdfefe] via-[#f1f5ff] to-[#eef2ff] px-10 py-24">

 {/* ORANGE CURVED PANEL */}
<div className="absolute top-0 right-0 h-full w-[58%] bg-orange-500 rounded-bl-[320px] z-0 overflow-hidden">

  {/* 🔵 BLUE DECORATIVE CURVE INSIDE ORANGE */}
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
  className="
    border-2 border-blue-500
    text-blue-500
    px-8 py-4
    rounded-full
    font-semibold
    hover:bg-blue-50
    transition
  "
>
  Request Demo →
</button>

    </div>

   {/* 🔢 HERO STATS (ANIMATED) */}
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
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
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 3 + i * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -12,
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(255,165,0,0.25)",
      }}
      className="
        bg-white rounded-2xl p-6
        shadow-lg text-center
        cursor-pointer
      "
    >
      <div className="text-orange-500 text-2xl mb-2">
        {item.icon}
      </div>

      <h4 className="text-2xl font-extrabold text-gray-900">
        {item.value}
      </h4>

      <p className="text-sm text-gray-500">
        {item.label}
      </p>
    </motion.div>
  ))}
</motion.div>
</div>


  {/* 🤖 ROBOTS — LOCKED INSIDE ORANGE PANEL */}
  <div className="absolute right-16 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-8 z-10">
    {[
      "/robots/r1.png",
      "/robots/r2.png",
      "/robots/r3.png",
      "/robots/r4.png",
      "/robots/r5.png",
      "/robots/r6.png",
    ].map((img, i) => (
      <div
        key={i}
        className="w-36 h-36 rounded-full bg-white shadow-2xl flex items-center justify-center hover:scale-105 hover:-translate-y-2 transition"
      >
        <img src={img} alt="Robot" className="w-24 h-24 object-contain" />
      </div>
    ))}
  </div>

</main>

{/* 🌈 WHY PERFECT FOR KIDS */}
<section className="relative py-24 bg-gradient-to-b from-[#fdfefe] to-[#f1f5ff]">
  <div className="max-w-6xl mx-auto px-8 text-center">

    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      Why this is <span className="text-orange-500">PERFECT</span> for kids 👶🤖
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      Designed with child-friendly psychology, creativity, and calm interactions
    </p>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        {
          icon: "🎈",
          title: "Friendly Shapes",
          desc: "Rounded cards & curves feel safe and welcoming",
          color: "from-pink-100 to-pink-200",
        },
        {
          icon: "🌤",
          title: "Imagination Boost",
          desc: "Clouds & playful motion spark creativity",
          color: "from-sky-100 to-sky-200",
        },
        {
          icon: "🌀",
          title: "Calm Motion",
          desc: "Slow animations keep kids focused, not distracted",
          color: "from-purple-100 to-purple-200",
        },
        {
          icon: "🎨",
          title: "Kid-Safe Colors",
          desc: "Bright yet soft tones for visual comfort",
          color: "from-orange-100 to-orange-200",
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            rounded-3xl p-8
            bg-gradient-to-br ${item.color}
            shadow-lg
            text-center
          `}
        >
          <div className="text-5xl mb-4">{item.icon}</div>
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* SAFETY BADGE */}
  
  </div>
</section>

     {/* 🔹 WHO ARE WE — WITH TOP & BOTTOM ORANGE STRIPS */}
<section className="relative overflow-hidden py-32">

  {/* 🔵 BLUE BACKGROUND */}
  <div className="absolute inset-0 bg-[#3B82F6] z-0" />

  {/* 🟠 TOP ORANGE CURVE */}
  <svg
    className="absolute top-0 left-0 h-[220px] w-full z-0"
    viewBox="0 0 1440 200"
    preserveAspectRatio="none"
  >
    <path
      d="M0,80 C240,20 480,20 720,60 960,100 1200,120 1440,80 L1440,0 L0,0 Z"
      fill="#F97316"
    />
  </svg>

  {/* 🟠 BOTTOM ORANGE CURVE */}
  <svg
    className="absolute bottom-0 left-0 h-[220px] w-full z-0 rotate-180"
    viewBox="0 0 1440 200"
    preserveAspectRatio="none"
  >
    <path
      d="M0,80 C240,20 480,20 720,60 960,100 1200,120 1440,80 L1440,0 L0,0 Z"
      fill="#F97316"
    />
  </svg>

  {/* 🤍 CONTENT CARD */}
  <div className="relative z-10 max-w-5xl mx-auto px-8">
    <div className="bg-white rounded-[32px] shadow-2xl px-12 py-16 text-center">

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Who Are <span className="text-orange-500">We</span>
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Dabotics India is a UP-based EdTech company specializing in
        <span className="font-semibold text-gray-800">
          {" "}STEM and robotics education
        </span>,
        empowering young minds through hands-on learning, creativity,
        and innovation.
      </p>

    </div>
  </div>

</section>
  <Achievements />
  <AboutDabotics />
  <InnovatingEducation />
{/* 🔹 STEM CERTIFIED SECTION */}
<section className="relative py-28 bg-white overflow-hidden">

  {/* ☁️ SOFT CLOUD DECOR */}
  <div className="absolute top-10 left-10 w-48 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
  <div className="absolute bottom-10 right-20 w-56 h-36 bg-orange-100 rounded-full blur-3xl opacity-60" />

  <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* 🔸 LEFT CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-6">
        We are <span className="text-gray-900">STEM Certified</span>
      </h2>

    <p className="italic text-gray-500 mb-6 text-lg">
  "When children learn to create, they learn to change the world."
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  Dabotics India believes learning should be exciting, practical, and empowering.
  Our STEM programs encourage curiosity, creativity, and confidence through
  hands-on experiences and real-world problem solving.
  <br /><br />
  Students learning with us also receive a globally recognized
  <span className="font-semibold text-gray-900"> STEM.org certification</span>,
  validating their skills, innovation mindset, and STEM learning journey.
</p>

    </div>

    {/* 🔸 RIGHT CERTIFICATE CARD */}
    <div className="flex justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-105 transition">
        <img
          src="/stem-certificate.png"
          alt="STEM Accredited Certificate"
          className="max-w-full h-auto rounded-xl"
        />
      </div>
    </div>

  </div>
</section>


{/* 🔹 KITS (PLAYFUL & FILLED BACKGROUND) */}
<section
  id="kits"
  className="
    relative px-10 py-28
    bg-gradient-to-b from-[#fdfefe] via-[#f4f7ff] to-[#eef2ff]
  "
>
  {/* 🌈 BACKGROUND DECOR */}
  <div className="absolute inset-0 z-0">

    <FlyingRobotWithMessage />

    {/* ☁️ SOFT CLOUD BLOBS */}
    <div className="absolute -top-32 left-0 w-[520px] h-[320px] bg-blue-100 rounded-full blur-3xl opacity-70" />
    <div className="absolute top-24 right-0 w-[420px] h-[260px] bg-orange-100 rounded-full blur-3xl opacity-60" />
    <div className="absolute bottom-0 left-1/3 w-[360px] h-[220px] bg-purple-100 rounded-full blur-3xl opacity-50" />

    {/* ✈️ PAPER PLANE */}
    <motion.img
      src="/plane.svg"
      alt="Paper Plane"
      className="absolute right-10 top-32 w-28 opacity-60"
      animate={{ x: [0, -260], y: [0, 60] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />

    {/* ⚙️ GEAR */}
    <motion.svg
      className="absolute right-32 bottom-20 w-32 opacity-30"
      viewBox="0 0 100 100"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="50" r="22" fill="#93C5FD" />
      {[...Array(8)].map((_, i) => (
        <rect
          key={i}
          x="47"
          y="2"
          width="6"
          height="16"
          fill="#60A5FA"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </motion.svg>

  </div>

  {/* 🔹 FOREGROUND CONTENT */}
  <div className="relative z-10">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6"
    >
      Our Kits
    </motion.h2>

    <p className="text-center text-gray-600 mb-20 max-w-2xl mx-auto">
      Choose the perfect kit to kickstart your child's robotics journey
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <ProductCard
        title="Quarky Explorer Kit"
        price="₹4,699"
        image="/products/explorer.svg"
        rating={4.8}
        stock={119}
        paymentLink="https://rzp.io/l/EXPLORER"
      />
      <ProductCard
        title="Innovator Kit"
        price="₹6,999"
        image="/products/innovator.svg"
        rating={4.9}
        stock={103}
        paymentLink="https://rzp.io/l/INNOVATOR"
      />
      <ProductCard
        title="Ultimate Kit"
        price="₹11,199"
        image="/products/ultimate.svg"
        rating={5}
        stock={97}
        paymentLink="https://rzp.io/l/ULTIMATE"
      />
    </div>

  </div>
</section>
<STEMxPrograms />
<section
  id="request-demo"
  className="bg-[#f7f9fc] py-28"
>
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Transform Your School's <br /> Future
      </h2>

      <p className="text-gray-600 text-lg mb-10 max-w-xl">
        World-class STEM education powered by global partnerships,
        proven curriculum, and hands-on learning experiences.
      </p>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow p-8 mb-8">
        <h4 className="font-bold text-lg mb-4">Why Choose Us?</h4>
        <ul className="space-y-3 text-gray-600">
          <li>✔ NEP 2020 aligned curriculum</li>
          <li>✔ STEM.org accredited programs</li>
          <li>✔ Trusted by 240+ schools</li>
          <li>✔ Complete lab setup & training</li>
        </ul>
      </div>
<div className="bg-white rounded-2xl shadow p-8">
  <h4 className="font-bold text-lg mb-4">Why Choose Us?</h4>
  <ul className="space-y-3 text-gray-600">
    <li>✔ NEP 2020 aligned curriculum</li>
    <li>✔ STEM.org accredited programs</li>
    <li>✔ Trusted by 240+ schools</li>
    <li>✔ Complete lab setup & training</li>
  </ul>
</div>



      <div className="bg-white rounded-2xl shadow p-8">
        <h4 className="font-bold text-lg mb-4">Student Benefits</h4>
        <ul className="space-y-3 text-gray-600">
          <li>✔ Hands-on learning</li>
          <li>✔ Critical thinking skills</li>
          <li>✔ Global exposure</li>
          <li>✔ Competition opportunities</li>
        </ul>
      </div>
    </div>

    {/* RIGHT FORM */}
    <div className="bg-white rounded-3xl shadow-2xl p-10">
      <h3 className="text-2xl font-bold mb-6">
        Request your Demo Today
      </h3>

      <form className="space-y-5">
        <input className="w-full border rounded-lg p-3" placeholder="Full Name *" />
        <input className="w-full border rounded-lg p-3" placeholder="Email *" />
        <input className="w-full border rounded-lg p-3" placeholder="Phone Number *" />
        <input className="w-full border rounded-lg p-3" placeholder="School / Organisation *" />
         <input className="w-full border rounded-lg p-3" placeholder="Country *" />
          <input className="w-full border rounded-lg p-3" placeholder="State *" />
{/* Schedule Demo Options */}
<div className="mb-6">
  <h4 className="font-semibold text-gray-800 mb-3">
    Schedule demo for (check all that apply) <span className="text-red-500">*</span>
  </h4>

  <div className="space-y-3 text-gray-700">
    <label className="flex items-center gap-3">
      <input type="checkbox" className="accent-orange-500" />
      AI and Robotics Lab
    </label>

    <label className="flex items-center gap-3">
      <input type="checkbox" className="accent-orange-500" />
      STEM Lab
    </label>

    <label className="flex items-center gap-3">
      <input type="checkbox" className="accent-orange-500" />
      Maker Space Labs
    </label>

    <label className="flex items-center gap-3">
      <input type="checkbox" className="accent-orange-500" />
      Japanese Exchange Program
    </label>

    <label className="flex items-center gap-3">
      <input type="checkbox" className="accent-orange-500" />
      STEMx Impact program
    </label>
  </div>
</div>

{/* Your Message */}
<div className="mb-6">
  <label className="block font-semibold text-gray-800 mb-2">
    Your Message
  </label>
  <textarea
    rows={4}
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
    placeholder="Please add as much information as possible to ensure we can fully support you!"
  />
</div>

      


        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg"
        >
          Submit Demo Request
        </button>
      </form>
    </div>

  </div>
</section>




<WhatsAppFloat />

 </>
      )}
      
 {activeSection === "school-programmes" && (
      <SchoolProgrammesSection />
    )}
   
    {activeSection === "competitions" && (
  <RoboticsAICompetitionsTease />
)}
{activeSection === "online-programs" && (
  <OnlineProgramsSection />
)}


      <Footer />
    </>
  );
}
