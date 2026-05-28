"use client";

import { ShoppingCart } from "lucide-react";
import { siteImages } from "../lib/siteImages";

export default function Navbar({ active, setActive }) {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => setActive("home")}
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <img
              src={siteImages.logo}
              alt="DABOTICS"
              className="h-8 w-auto md:h-10"
            />
            <span className="text-xl md:text-2xl font-extrabold tracking-wide leading-none">
              <span className="text-[#1D4ED8]">Dabo</span>
              <span className="text-[#F97316]">tics</span>
            </span>
          </button>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActive("demo-for-schools")}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                active === "demo-for-schools"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              Demo For Schools
            </button>

            <button
              onClick={() => setActive("shop")}
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <ShoppingCart size={18} />
              Shop
            </button>

            <button
              type="button"
              onClick={() => setActive("reach-out")}
              className={`flex items-center gap-2 transition ${
                active === "reach-out"
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }`}
            >
              📞 Reach Out
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-[#eaf6ff]">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex gap-10 py-4 text-gray-700 font-medium">
            {[
              { id: "home", label: "Home" },
              { id: "school-programmes", label: "School Programmes" },
              { id: "competitions", label: "Robotics & AI Competitions" },
              { id: "online-programs", label: "Online Programs" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActive(item.id)}
                  className={`transition ${
                    active === item.id
                      ? "text-orange-500 font-semibold"
                      : "hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
