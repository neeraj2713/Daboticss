"use client";

import Navbar from "./components/Navbar";
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
import DemoForSchoolsPage from "./components/DemoForSchoolsPage";
import ReachOutPage from "./components/ReachOutPage";
import HeroSection from "./components/HeroSection";
import { siteImages } from "./lib/siteImages";




export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // scroll to demo only when requested
  useEffect(() => {
    if (activeSection === "request-demo") {
      document
        .getElementById("request-demo")
        ?.scrollIntoView({ behavior: "smooth" });
      setActiveSection("home");
      return;
    }
    if (activeSection !== "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <>
      {/* NAVBAR */}
      <Navbar active={activeSection} setActive={setActiveSection} />

      {/* spacing for fixed navbar */}
      <div className="h-[80px]" />

      {activeSection === "shop" && <ShopPage />}

      {activeSection === "demo-for-schools" && <DemoForSchoolsPage />}

      {activeSection === "reach-out" && <ReachOutPage />}

      {/* ================= HOME ================= */}
      {activeSection === "home" && (
  <>
    <PlayfulBackground />
        
        
      
      
      

      <HeroSection setActive={setActiveSection} />

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

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <img
          src="/images/about-2.jpg"
          alt="Students in Dabotics STEM session"
          className="h-52 w-full object-cover rounded-2xl"
        />
        <img
          src="/images/about-3.jpg"
          alt="Hands-on robotics training at Dabotics"
          className="h-52 w-full object-cover rounded-2xl"
        />
      </div>

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
          src={siteImages.stemCertified}
          alt="STEM robotics lab session"
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

    {/* ✈️ FLOATING PLANE BADGE */}
    <motion.div
      className="absolute right-10 top-28 w-24 h-24 rounded-full bg-white/85 shadow-xl flex items-center justify-center"
      animate={{ x: [0, -220, 0], y: [0, 40, 0], rotate: [0, -8, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-4xl">✈️</span>
    </motion.div>

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
        image={siteImages.kits[0]}
        rating={4.8}
        stock={119}
        paymentLink="https://wa.me/917818002203?text=Hi%20Dabotics%2C%20I%20want%20to%20buy%20Quarky%20Explorer%20Kit%20%28%E2%82%B94%2C699%29"
      />
      <ProductCard
        title="Innovator Kit"
        price="₹6,999"
        image={siteImages.kits[1]}
        rating={4.9}
        stock={103}
        paymentLink="https://wa.me/917818002203?text=Hi%20Dabotics%2C%20I%20want%20to%20buy%20Quarky%20Innovator%20Kit%20%28%E2%82%B96%2C999%29"
      />
      <ProductCard
        title="Ultimate Kit"
        price="₹11,199"
        image={siteImages.kits[2]}
        rating={5}
        stock={97}
        paymentLink="https://wa.me/917818002203?text=Hi%20Dabotics%2C%20I%20want%20to%20buy%20Quarky%20Ultimate%20Kit%20%28%E2%82%B911%2C199%29"
      />
    </div>

  </div>
</section>

{/* TESTIMONIALS */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
      What <span className="text-orange-500">Families & Schools</span> Say
    </h2>
    <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
      Real stories from learners and educators across our STEM programs
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {siteImages.testimonials.map((t) => (
        <div
          key={t.name}
          className="bg-[#f7f9fc] rounded-3xl overflow-hidden shadow-lg"
        >
          <img src={t.src} alt={t.name} className="w-full h-52 object-cover" />
          <div className="p-6">
            <p className="text-gray-600 italic mb-4">
              &ldquo;Engaging, hands-on, and perfectly aligned with how kids learn best today.&rdquo;
            </p>
            <p className="font-semibold text-gray-900">{t.name}</p>
          </div>
        </div>
      ))}
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
      <div className="mb-8 rounded-3xl overflow-hidden shadow-xl">
        <img
          src={siteImages.callToAction}
          alt="Students learning robotics at school"
          className="w-full h-56 object-cover"
        />
      </div>

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
      <SchoolProgrammesSection setActive={setActiveSection} />
    )}
   
    {activeSection === "competitions" && (
  <RoboticsAICompetitionsTease setActive={setActiveSection} />
)}
{activeSection === "online-programs" && (
  <OnlineProgramsSection setActive={setActiveSection} />
)}


      <Footer setActive={setActiveSection} />
    </>
  );
}
