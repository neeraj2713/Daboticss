"use client";
import { motion } from "framer-motion";
import { siteImages } from "../lib/siteImages";

export default function OnlineProgramsSection({ setActive = () => {} }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">

      {/* ================= ONLINE PROGRAMS HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-8 sm:py-0">
        {/* 🔵 ANIMATED BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 opacity-95" />

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
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />

        {/* 🟡 FLOATING PARTICLES */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold"
              >
                💻 Online STEM Programs
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-6 leading-tight">
                Learn from <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Anywhere, Anytime
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Interactive live online STEM classes with expert instructors.
                Robotics, coding, AI, and maker skills delivered to your home
                with hands-on kits and virtual labs.
              </p>

              {/* ✅ TRUST PILLS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🎥", text: "Live Interactive Classes" },
                  { icon: "📦", text: "Physical Kits Delivered" },
                  { icon: "👨‍🏫", text: "Expert Instructors" },
                  { icon: "🏆", text: "Certification on Completion" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() =>
                    document
                      .getElementById("online-courses")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300"
                >
                  Explore Courses →
                </motion.button>

                <motion.button
                  onClick={() => setActive("reach-out")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Book Free Trial
                </motion.button>
              </div>
            </motion.div>

            {/* RIGHT SIDE – 3D ONLINE LEARNING CARDS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Live Classes", subtitle: "1:1 & Group Sessions", color: "from-cyan-500 to-blue-500", icon: "🎥" },
                { title: "Self-Paced", subtitle: "Learn at Your Speed", color: "from-purple-500 to-pink-500", icon: "⏱️" },
                { title: "Hybrid", subtitle: "Online + Offline", color: "from-green-500 to-teal-500", icon: "🔄" },
                { title: "Bootcamps", subtitle: "Intensive Programs", color: "from-orange-500 to-red-500", icon: "⚡" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 * i, duration: 0.6 }}
                  whileHover={{
                    scale: 1.03,
                    rotate: 1,
                    zIndex: 10,
                  }}
                  className={`w-full min-h-[260px] bg-gradient-to-br ${card.color} rounded-3xl p-5 sm:p-6 shadow-2xl cursor-pointer overflow-hidden`}
                >
                  <div className="relative h-full flex flex-col justify-between z-10">
                    <div className="text-5xl sm:text-6xl mb-4 drop-shadow-lg">{card.icon}</div>
                    <div className="pr-8">
                      <h3 className="text-white text-3xl font-bold mb-1 leading-tight break-words">
                        {card.title}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base leading-snug">
                        {card.subtitle}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 w-10 h-10 bg-white/25 rounded-full flex items-center justify-center text-white text-sm font-bold leading-none shrink-0 ring-1 ring-white/30">
                      {i + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ONLINE COURSE CATEGORIES ================= */}
      <section id="online-courses" className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
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
              className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-bold"
            >
              ⭐ Popular Online Courses
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate online STEM programs designed for students from
              ages 6-18 with live instruction and hands-on projects.
            </p>
          </motion.div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Coding for Kids",
                age: "Ages 6-10",
                photo: siteImages.onlinePrograms.courses[0].image,
                duration: "12 Weeks",
                sessions: "24 Live Sessions",
                description: "Introduction to coding using Scratch, block-based programming, game development, and creative animations.",
                topics: ["Scratch Programming", "Game Design", "Animations", "Logic Building"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Python Programming",
                age: "Ages 10-14",
                photo: siteImages.onlinePrograms.courses[1].image,
                duration: "16 Weeks",
                sessions: "32 Live Sessions",
                description: "Master Python fundamentals, data structures, algorithms, and build real-world applications.",
                topics: ["Python Basics", "Data Structures", "Mini Projects", "Problem Solving"],
                color: "from-green-500 to-teal-500",
              },
              {
                title: "Robotics Online",
                age: "Ages 8-14",
                photo: siteImages.onlinePrograms.courses[2].image,
                duration: "20 Weeks",
                sessions: "40 Live Sessions",
                description: "Build and program robots remotely with Arduino, sensors, motors using our specially designed online kits.",
                topics: ["Arduino Basics", "Sensors & Motors", "Robot Assembly", "Programming"],
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Web Development",
                age: "Ages 12-16",
                photo: siteImages.onlinePrograms.courses[3].image,
                duration: "16 Weeks",
                sessions: "32 Live Sessions",
                description: "Learn HTML, CSS, JavaScript and create responsive websites and web applications from scratch.",
                topics: ["HTML & CSS", "JavaScript", "Responsive Design", "Portfolio"],
                color: "from-orange-500 to-red-500",
              },
              {
                title: "AI & Machine Learning",
                age: "Ages 14-18",
                photo: siteImages.onlinePrograms.courses[4].image,
                duration: "24 Weeks",
                sessions: "48 Live Sessions",
                description: "Explore artificial intelligence, machine learning models, neural networks, and data science.",
                topics: ["AI Fundamentals", "ML Models", "Python Libraries", "Real Projects"],
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "App Development",
                age: "Ages 12-18",
                photo: siteImages.onlinePrograms.courses[5].image,
                duration: "20 Weeks",
                sessions: "40 Live Sessions",
                description: "Create mobile apps for Android and iOS using MIT App Inventor and advanced frameworks.",
                topics: ["App Inventor", "UI/UX Design", "Database", "Publishing"],
                color: "from-pink-500 to-rose-500",
              },
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className={`h-48 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                    <img
                      src={course.photo}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-75`} />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="font-bold text-gray-700">{course.age}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {course.title}
                    </h3>

                    <div className="flex gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <span>⏱️</span> {course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <span>🎥</span> {course.sessions}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Topics */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">What You'll Learn:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.topics.map((topic, j) => (
                          <div key={j} className="flex items-center gap-1 text-xs text-gray-700">
                            <span className="text-green-500">✓</span>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEARNING FORMATS ================= */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
              Flexible Learning Formats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the format that works best for your child's learning style
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎥",
                title: "Live 1:1 Classes",
                desc: "Personalized attention with dedicated instructor for focused learning",
                features: ["Individual Pace", "Custom Schedule", "Direct Interaction"],
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: "👥",
                title: "Small Group Classes",
                desc: "Learn with peers in interactive groups of 4-8 students",
                features: ["Peer Learning", "Collaboration", "Fixed Schedule"],
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: "📺",
                title: "Self-Paced Learning",
                desc: "Pre-recorded video lessons with downloadable resources and quizzes",
                features: ["Learn Anytime", "Lifetime Access", "Go at Your Speed"],
                color: "from-green-500 to-teal-600",
              },
              {
                icon: "⚡",
                title: "Bootcamps",
                desc: "Intensive 2-4 week programs with daily hands-on projects",
                features: ["Fast Track", "Immersive", "Project Based"],
                color: "from-orange-500 to-red-600",
              },
            ].map((format, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${format.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                  <div className="text-5xl mb-4">{format.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {format.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">{format.desc}</p>
                  
                  <div className="space-y-2">
                    {format.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ONLINE LEARNING BENEFITS ================= */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
              Why Choose Online Learning?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Learn from Home",
                desc: "No travel time, comfortable learning environment with parental supervision",
              },
              {
                icon: "📦",
                title: "Physical Kits Delivered",
                desc: "Get hands-on with real robotics kits, electronics, and materials shipped to your door",
              },
              {
                icon: "👨‍💼",
                title: "Expert Instructors",
                desc: "Learn from industry professionals and certified STEM educators",
              },
              {
                icon: "🔄",
                title: "Flexible Scheduling",
                desc: "Choose class timings that fit your family's schedule",
              },
              {
                icon: "📊",
                title: "Progress Tracking",
                desc: "Regular assessments, project reviews, and detailed progress reports",
              },
              {
                icon: "🎓",
                title: "Certification",
                desc: "Receive certificates recognized by STEM.org and educational institutions",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              How Online Learning Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to start your child's STEM journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Course",
                desc: "Browse our catalog and select the perfect course for your child",
                icon: "🎯",
              },
              {
                step: "02",
                title: "Book Free Trial",
                desc: "Experience a free demo class before making any commitment",
                icon: "🎁",
              },
              {
                step: "03",
                title: "Receive Kit",
                desc: "Get learning materials and kits delivered to your doorstep",
                icon: "📦",
              },
              {
                step: "04",
                title: "Start Learning",
                desc: "Join live classes, build projects, and earn your certification",
                icon: "🚀",
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="text-5xl mb-4">{phase.icon}</div>
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUCCESS STORIES ================= */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-white">
              Student Success Stories
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Real transformations from our online STEM programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aarav Sharma",
                age: "12 years old",
                course: "Python Programming",
                quote: "I loved the class! I learned how to incorporate AI with coding in Scratch and built my own game.",
                achievement: "Built 5 Python projects",
              },
              {
                name: "Priya Patel",
                age: "14 years old",
                course: "Robotics Online",
                quote: "The classes were very fun and interesting. I learned a lot about robots and sensors that I couldn't have learned by myself.",
                achievement: "Won school science fair",
              },
              {
                name: "Keshav Kumar",
                age: "10 years old",
                course: "Coding for Kids",
                quote: "This class was awesome! I learned a lot and created my first animation. I will definitely join Level 2.",
                achievement: "Created 3 games",
              },
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{story.name}</div>
                    <div className="text-blue-200 text-sm">{story.age}</div>
                  </div>
                </div>

                <div className="text-cyan-400 text-sm font-semibold mb-3">
                  {story.course}
                </div>

                <p className="text-white/90 mb-4 italic leading-relaxed">
                  "{story.quote}"
                </p>

                <div className="bg-white/10 rounded-lg p-3 text-sm">
                  <span className="text-yellow-400">🏆</span>{" "}
                  <span className="text-white">{story.achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600" />
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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
              Start Your Child's Learning Journey Today
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a free trial class and experience our interactive online STEM
              programs. No credit card required!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setActive("reach-out")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-10 sm:py-5 bg-white text-blue-600 rounded-full font-bold text-base sm:text-lg shadow-2xl"
              >
                Book Free Trial Class
              </motion.button>

              <motion.button
                onClick={() =>
                  document
                    .getElementById("online-courses")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-10 sm:py-5 border-2 border-white text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all"
              >
                View Course Catalog
              </motion.button>
            </div>

            <p className="text-white/70 mt-6 text-sm">
              ✓ Free trial class • ✓ No commitment • ✓ Expert instructors
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
