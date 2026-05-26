"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0b132b] via-[#0f1f3d] to-[#102a54] text-white pt-20">
      
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* ================= GET IN TOUCH ================= */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-6">
            Get In Touch
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li>
              📍 Registered Office: Plot No. 198, Ashok Vihar Sanjay Nagar,
              Bareilly, Uttar Pradesh, India
            </li>
            <li>
              🏢 Corporate Office: First Floor, Rohilkhand Incubation Foundation,
              MJPR University Bareilly, Uttar Pradesh
            </li>
            <li>📞 +91 7818002203</li>
            <li>✉️ contact@dabotics.com</li>
          </ul>

          {/* 🔗 SOCIAL ICONS (HERE — NOT ON TOP) */}
          <div className="flex gap-4 mt-8">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
              { icon: <FaWhatsapp />, link: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="
                  w-11 h-11 rounded-full
                  border border-orange-500
                  flex items-center justify-center
                  text-orange-500
                  hover:bg-orange-500 hover:text-white
                  transition
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-orange-400 cursor-pointer">› About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">› Contact Us</li>
            <li className="hover:text-orange-400 cursor-pointer">› Our Services</li>
            <li className="hover:text-orange-400 cursor-pointer">› Privacy Policy</li>
            <li className="hover:text-orange-400 cursor-pointer">› Terms & Condition</li>
          </ul>
        </div>

        {/* ================= BRAND ================= */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-6">
            Dabotics India
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">
            Empowering young minds through Robotics, Coding & AI education.
            We build future innovators with hands-on STEM learning.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold shadow-lg transition">
            Learn · Play · Build
          </button>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="mt-16 border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Dabotics India. All Rights Reserved.
      </div>
    </footer>
  );
}
