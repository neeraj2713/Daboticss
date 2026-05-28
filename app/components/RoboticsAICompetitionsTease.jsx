"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { siteImages } from "../lib/siteImages";

export default function RoboticsAICompetitions({ setActive = () => {} }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const competitions = [
    {
      title: "World Robot Olympiad (WRO)",
      age: "Ages 8-19",
      description: "International STEM and robotics competition with categories including RoboMission, Future Innovators, RoboSports, and Future Engineers",
      image: siteImages.competitions.wro,
      categories: ["RoboMission", "Future Innovators", "RoboSports", "Future Engineers"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "FIRST LEGO League",
      age: "Ages 4-16",
      description: "Theme-based international competition with divisions: Discover, Explore, and Challenge. Build creativity with LEGO and robotics",
      image: siteImages.competitions.fll,
      categories: ["Discover (4-6)", "Explore (6-10)", "Challenge (9-16)"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "VEX Robotics Competition",
      age: "Ages 8-18",
      description: "World's largest robotics program with game-based engineering challenges. Includes VEX IQ and VEX V5 platforms",
      image: siteImages.competitions.vex,
      categories: ["VEX IQ", "VEX V5", "Robot Skills", "Teamwork Challenge"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "STEAM Innovation League",
      age: "Grades 1-12",
      description: "Global competition showcasing skills in STEAM, AI, Robotics, and Coding with focus on UN Sustainable Development Goals",
      image: siteImages.competitions.sil,
      categories: ["Innovation Projects", "AI Solutions", "IoT Applications", "SDG Focus"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "National Robotics Championship",
      age: "All Ages",
      description: "India's premier platform featuring Robo Race, Robo Sumo, Drone Challenge, and Working Model exhibitions",
      image: siteImages.competitions.nrc,
      categories: ["Robo Race", "Robo Sumo", "Drone Challenge", "Exhibitions"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "AI & IoT Challenge",
      age: "Ages 9-14",
      description: "Industry 4.0 focused competition integrating AI, IoT, robotics, and data science for smart manufacturing",
      image: siteImages.competitions.iot,
      categories: ["Smart Manufacturing", "AI Integration", "IoT Solutions", "Data Science"],
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      icon: "🧠",
      title: "Hands-On Learning",
      description: "Apply theoretical concepts to real-world robotics challenges and develop practical problem-solving skills"
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Foster communication, leadership, and collaborative problem-solving through team-based competitions"
    },
    {
      icon: "💡",
      title: "Innovation & Creativity",
      description: "Design innovative solutions to complex challenges and develop entrepreneurial mindset"
    },
    {
      icon: "🎯",
      title: "21st Century Skills",
      description: "Build critical thinking, coding, electronics, and project management capabilities"
    },
    {
      icon: "🌍",
      title: "Global Exposure",
      description: "Compete at national and international levels, connecting with innovators worldwide"
    },
    {
      icon: "🚀",
      title: "Career Opportunities",
      description: "Open doors to scholarships, internships, and career paths in STEM fields"
    }
  ];

  const features = [
    {
      title: "Expert Mentorship",
      description: "Industry professionals guide students through competition preparation",
      icon: "👨‍🏫"
    },
    {
      title: "Advanced Robotics Kits",
      description: "Access to VEX, LEGO, Arduino, and custom robotics platforms",
      icon: "🤖"
    },
    {
      title: "Competition Training",
      description: "Structured training programs covering mechanics, coding, and strategy",
      icon: "📚"
    },
    {
      title: "Workshop Series",
      description: "Hands-on workshops on AI, IoT, sensors, and autonomous systems",
      icon: "🔧"
    }
  ];

  const stats = [
    { number: "5000+", label: "Student Participants" },
    { number: "180+", label: "Schools Enrolled" },
    { number: "50+", label: "Competitions Yearly" },
    { number: "15+", label: "Countries Reached" }
  ];

  return (
    <div className="bg-gradient-to-br from-[#fdfefe] via-[#f4f7ff] to-[#eef2ff]">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-orange-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-200 rounded-full blur-3xl opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              🚀 Robotics & AI Competitions
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Unleash Innovation through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                Robotics & AI
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
              India's premier platform where young innovators compete, collaborate,
              and build real-world robotics & AI solutions — guided by industry experts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button 
                onClick={() => setActive("reach-out")}
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now →
              </motion.button>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              *For Schools & Channel Partners
            </p>
          </motion.div>

          {/* RIGHT SIDE – FLOATING IMAGES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative flex justify-center"
          >
            <div className="grid grid-cols-2 gap-8">
              {siteImages.competitions.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    y: {
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-40 h-40 rounded-2xl bg-white shadow-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Competition ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMPETITIONS GRID */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Competitions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participate in world-renowned robotics and AI competitions designed for various age groups and skill levels
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image with gradient overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${comp.gradient} opacity-90`} />
                  <img 
                    src={comp.image} 
                    alt={comp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {comp.age}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {comp.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {comp.description}
                  </p>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {comp.categories.map((cat, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Participate in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Our Competitions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your learning journey with hands-on robotics and AI experiences
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">Provide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to ensure your success in robotics competitions
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMPETITION TIMELINE */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Competition <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From registration to international championships - your path to excellence
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { step: "01", title: "Register", desc: "Enroll your team and receive competition kit" },
              { step: "02", title: "Prepare", desc: "Training workshops and mentorship sessions" },
              { step: "03", title: "Compete", desc: "Regional and national level competitions" },
              { step: "04", title: "Excel", desc: "Qualify for international championships" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600">
                    {phase.desc}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Start Your Innovation Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join thousands of students across India who are transforming their passion for technology into real-world solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                Register Your School
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Download Brochure
              </motion.button>
            </div>

            <p className="text-white/70 mt-6 text-sm">
              Limited spots available for the 2026 season
            </p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students and schools who've transformed through our programs
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "Participating in WRO changed my perspective on problem-solving. The hands-on experience was invaluable!",
                author: "Priya Sharma",
                role: "Student, Grade 10",
                school: "Delhi Public School"
              },
              {
                quote: "Our school saw a 300% increase in STEM interest after enrolling in these competitions. Absolutely transformative!",
                author: "Dr. Rajesh Kumar",
                role: "Principal",
                school: "Kendriya Vidyalaya"
              },
              {
                quote: "From coding basics to AI applications, the journey has been incredible. Now I'm pursuing robotics engineering!",
                author: "Arjun Patel",
                role: "Former Participant",
                school: "Now at IIT Bombay"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl text-orange-500 mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full" />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.school}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Questions</span>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {[
              {
                q: "What age groups can participate?",
                a: "Our competitions cater to students aged 4-22, with specific categories for different age groups and skill levels."
              },
              {
                q: "Do students need prior robotics experience?",
                a: "No! We offer programs for beginners through advanced levels, with training and mentorship provided."
              },
              {
                q: "What equipment is required?",
                a: "Competition-specific kits are provided. We support VEX, LEGO, Arduino, and various other platforms."
              },
              {
                q: "How do teams qualify for international competitions?",
                a: "Teams compete at regional and national levels. Top performers qualify to represent India internationally."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
