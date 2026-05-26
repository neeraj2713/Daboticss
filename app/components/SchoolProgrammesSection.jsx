"use client";
import { motion } from "framer-motion";
import WhatsAppFloat from "./WhatsAppFloat";

export default function SchoolProgrammesSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-black to-slate-50">
      <WhatsAppFloat />

      {/* ================= SCHOOL PROGRAMMES HERO ================= */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 🔵 ANIMATED BACKGROUND GRADIENT */}
     <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 opacity-95" />


        
        {/* 🟣 ANIMATED MESH GRADIENT OVERLAY */}
       <motion.div
  className="absolute inset-0 opacity-15"

          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(255, 121, 198, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />

        {/* 🟡 FLOATING PARTICLES */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* 🔹 CONTENT CONTAINER */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-black"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
              >
                🚀 Future-Ready Education
              </motion.div>

             <h1 className="text-5xl font-bold text-slate-900">


                Transforming Schools into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">

                  Innovation Campuses
                </span>
              </h1>

         <p className="text-xl lg:text-2xl mb-8 text-black leading-relaxed">

  End-to-end STEM, Robotics, AI & Maker Space programs designed to
  help schools build future-ready learners aligned with NEP 2020 and
  global education standards.
</p>

              {/* ✅ TRUST PILLS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "📚", text: "NEP 2020 Aligned Curriculum" },
                  { icon: "🏆", text: "STEM.org Certified Programs" },
                  { icon: "🔬", text: "Complete Lab Setup & Training" },
                  { icon: "⭐", text: "Trusted by 240+ Schools" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
className="flex items-center gap-3 bg-black/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 text-slate-900"

                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300"
              >
                Get Started Today →
              </motion.button>
            </motion.div>

            {/* RIGHT SIDE – 3D PROGRAM CARDS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px]"
            >
              {[
                { title: "Robotics & AI", color: "from-blue-500 to-cyan-500", icon: "🤖", pos: "top-0 left-0" },
                { title: "STEM Labs", color: "from-purple-500 to-pink-500", icon: "🔬", pos: "top-0 right-0" },
                { title: "Coding Classes", color: "from-orange-500 to-red-500", icon: "💻", pos: "bottom-0 left-0" },
                { title: "Maker Space", color: "from-green-500 to-teal-500", icon: "🛠️", pos: "bottom-0 right-0" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 * i, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    zIndex: 10,
                  }}
                  className={`absolute ${card.pos} w-64 h-72 bg-gradient-to-br ${card.color} rounded-3xl p-6 shadow-2xl cursor-pointer`}
                >
                  <div className="relative h-full flex flex-col justify-between">
                    <div className="text-6xl mb-4">{card.icon}</div>
                    <div>
                      <h3 className="text-slate-900 text-2xl font-bold mb-2">
{card.title}</h3>
                     <p className="text-slate-700">
Comprehensive program for grades 1-12</p>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE STEM PROGRAMS ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* 🔵 GRADIENT BACKGROUND */}
        <div className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-orange-600" />
        
        {/* 🟣 DECORATIVE ELEMENTS */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-bold"
            >
              ✨ Our Programs
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Comprehensive STEM Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate curriculum designed to nurture scientific thinking,
              problem-solving skills, and creativity from early years through
              secondary education.
            </p>
          </motion.div>

          {/* Grade Programs */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Grade 1-2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
             <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-green-200 overflow-hidden">
  
  {/* Corner Badge */}
  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-end justify-start p-8">
    <span className="text-white text-2xl font-bold">1-2</span>
  </div>

  {/* CONTENT GRID */}
  <div className="grid lg:grid-cols-2 gap-8 items-center">

    {/* LEFT – TEXT CONTENT */}
    <div>
      <div className="mb-6">
        <div className="text-5xl mb-4">🎨</div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Grade 1-2
        </h3>
        <p className="text-green-600 font-semibold text-lg">
          Foundation Learning
        </p>
      </div>

      <ul className="space-y-3">
        {[
          "Basic Science Concepts through Play",
          "Simple Experiments & Observations",
          "Hands-on Activity Kits",
          "Story-based Learning",
          "Sensory Development Activities",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700">
            <span className="text-green-500 text-xl">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT – VISUAL ICON GRID */}
    <div className="grid grid-cols-2 gap-6">
      {[
        { icon: "🎲", title: "Learn by Playing" },
        { icon: "🧪", title: "Simple Experiments" },
        { icon: "📖", title: "Story Learning" },
        { icon: "🖐️", title: "Hands-on Fun" },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-green-50 rounded-2xl p-6 text-center shadow-sm"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <p className="font-semibold text-gray-800 text-sm">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</div>

            </motion.div>

            {/* Grade 3-5 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200 overflow-hidden">
                {/* Corner Badge */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-end justify-start p-8">
                  <span className="text-white text-2xl font-bold">3-5</span>
                </div>

                <div className="mb-6">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Grade 3-5</h3>
                  <p className="text-blue-600 font-semibold text-lg">Exploratory Learning</p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Introduction to Robotics",
                    "Basic Programming Concepts",
                    "Science Fair Projects",
                    "Mathematical Problem Solving",
                    "Technology Integration",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-blue-500 text-xl">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Grade 6-10 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200 overflow-hidden">
                {/* Corner Badge */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-end justify-start p-8">
                  <span className="text-white text-xl font-bold">6-10</span>
                </div>

                <div className="mb-6">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Grade 6-10</h3>
                  <p className="text-orange-600 font-semibold text-lg">Advanced Applications</p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Advanced Robotics & AI",
                    "Programming & App Development",
                    "Research Methodology",
                    "Innovation & Design Thinking",
                    "Competitive Programming",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-orange-500 text-xl">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "Outcome-Based Learning",
                desc: "Measurable learning outcomes",
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: "📚",
                title: "NEP 2020 Aligned",
                desc: "Curriculum as per new education policy",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: "🏆",
                title: "Competition Ready",
                desc: "Olympiad and competition preparation",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: "🔬",
                title: "Lab Infrastructure",
                desc: "Complete lab setup and equipment",
                color: "from-teal-500 to-cyan-500",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORKSHOPS SECTION ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* 🔵 VIBRANT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700" />
        
        {/* 🟣 ANIMATED OVERLAY */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Specialized Workshops
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hands-on workshops designed to inspire creativity and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "3D PRINTING WORKSHOPS",
                grade: "Grade 1 - 12",
                image: "🖨️",
                desc: "Learn the fundamentals of 3D printing and create your own designs.",
                highlights: ["Designing", "Printing", "Prototyping"],
                color: "from-cyan-400 to-blue-500",
              },
              {
                title: "ROBOTICS BOOTCAMP",
                grade: "Grade 5 - 12",
                image: "🤖",
                desc: "Build and program robots from scratch using industry-standard tools.",
                highlights: ["Building", "Coding", "Competing"],
                color: "from-purple-400 to-pink-500",
              },
              {
                title: "AI & MACHINE LEARNING",
                grade: "Grade 8 - 12",
                image: "🧠",
                desc: "Explore artificial intelligence and create smart applications.",
                highlights: ["ML Models", "Data Science", "Neural Networks"],
                color: "from-orange-400 to-red-500",
              },
              {
                title: "DRONE TECHNOLOGY",
                grade: "Grade 6 - 12",
                image: "🚁",
                desc: "Learn drone assembly, programming, and autonomous flight.",
                highlights: ["Assembly", "Programming", "Flight Training"],
                color: "from-green-400 to-teal-500",
              },
              {
                title: "IoT WORKSHOP",
                grade: "Grade 7 - 12",
                image: "📡",
                desc: "Create smart devices and connect them to the internet.",
                highlights: ["Sensors", "Connectivity", "Smart Homes"],
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "GAME DEVELOPMENT",
                grade: "Grade 5 - 12",
                image: "🎮",
                desc: "Design and develop your own video games and interactive experiences.",
                highlights: ["Game Design", "Unity", "Publishing"],
                color: "from-indigo-400 to-purple-500",
              },
            ].map((workshop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${workshop.color} rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity`} />
                <div className="relative bg-white rounded-3xl shadow-2xl">

                  {/* Image Section */}
                  <div className={`h-48 bg-gradient-to-br ${workshop.color} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-8xl"
                    >
                      {workshop.image}
                    </motion.div>
                   <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-gray-700">
  {workshop.grade}
</div>

                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{workshop.desc}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {workshop.highlights.map((highlight, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 bg-gradient-to-r ${workshop.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all`}
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE TRAINING & SUPPORT ================= */}
    <section className="relative py-20 mt-32 overflow-hidden">

        {/* 🔵 BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        
        {/* 🟣 GRID PATTERN */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full text-sm font-bold"
            >
              🎓 Training & Support
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Comprehensive Training & Support
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Complete ecosystem support to ensure successful implementation and
              sustainable growth of STEM programs in your school.
            </p>
          </motion.div>

          {/* Training & Support Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Training Programs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h3 className="text-5xl font-bold text-black mb-2">
                  Teacher Training Programs
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Foundation Training (40 Hours)",
                    desc: "Comprehensive training on STEM pedagogy, curriculum delivery, and classroom management.",
                    color: "from-green-500 to-emerald-600",
                    icon: "📖",
                  },
                  {
                    title: "Advanced Certification (60 Hours)",
                    desc: "Specialized training in robotics, programming, and advanced STEM concepts.",
                    color: "from-blue-500 to-cyan-600",
                    icon: "🎓",
                  },
                  {
                    title: "Master Trainer Program (80 Hours)",
                    desc: "Train-the-trainer program to create internal capacity and expertise.",
                    color: "from-purple-500 to-pink-600",
                    icon: "👨‍🏫",
                  },
                  {
                    title: "Continuous Professional Development",
                    desc: "Ongoing workshops, webinars, and skill enhancement programs.",
                    color: "from-orange-500 to-red-600",
                    icon: "🔄",
                  },
                ].map((program, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{program.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">
  {program.title}
</h4>

                          <p className="text-purple-200">{program.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Support Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h3 className="text-5xl font-bold text-black mb-2">
                  Ongoing Support Services
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full" />
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Lab Setup & Equipment Installation",
                    desc: "Complete lab design, equipment procurement, and professional installation services.",
                    color: "from-red-500 to-rose-600",
                    icon: "🔧",
                  },
                  {
                    title: "Curriculum Implementation Support",
                    desc: "Detailed lesson plans, teaching resources, and assessment tools.",
                    color: "from-cyan-500 to-blue-600",
                    icon: "📋",
                  },
                  {
                    title: "24/7 Technical Support",
                    desc: "Round-the-clock technical assistance and troubleshooting support.",
                    color: "from-yellow-500 to-orange-600",
                    icon: "💬",
                  },
                  {
                    title: "Regular Monitoring & Evaluation",
                    desc: "Quarterly assessments, progress tracking, and improvement recommendations.",
                    color: "from-pink-500 to-purple-600",
                    icon: "📊",
                  },
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: -10, scale: 1.02 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-black mb-2">
                            {service.title}
                          </h4>
                          <p className="text-purple-200">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Support Features Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">

            {[
              {
                title: "Resource Library",
                desc: "Access to comprehensive digital resources, video tutorials, and teaching materials",
                icon: "📚",
                color: "from-blue-500 to-purple-600",
              },
              {
                title: "Community Network",
                desc: "Connect with other schools, share best practices, and collaborate on projects",
                icon: "🤝",
                color: "from-blue-500 to-purple-600",
              },
              {
                title: "Annual Conferences",
                desc: "Participate in national conferences, workshops, and educational exhibitions",
                icon: "🎯",
                color: "from-blue-500 to-purple-600",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity`} />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-purple-200">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
     <section className="relative py-20 mt-32 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-4xl font-bold text-slate-900 mb-6">
  Ready to Transform Your School?
</h2>

            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 240+ schools already building future-ready learners with our
              comprehensive STEM programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
  href="#request-demo"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl"
>
  Schedule a Demo
</motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-white text-black rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <section
  id="request-demo"
  className="bg-[#f7f9fc] py-28"
>
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Transform Your School’s <br /> Future
      </h2>

      <p className="text-gray-600 text-lg mb-10 max-w-xl">
        World-class STEM education powered by global partnerships,
        proven curriculum, and hands-on learning experiences.
      </p>

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
    </div>
    
  );
}
