"use client";

import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { siteImages } from "../lib/siteImages";

export default function Navbar({ active, setActive }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const goTo = (section) => {
    setActive(section);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => goTo("home")}
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <img
              src={siteImages.logo}
              alt="DABOTICS"
              className="h-8 w-auto md:h-10"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide leading-none">
              <span className="text-[#1D4ED8]">Dabo</span>
              <span className="text-[#F97316]">tics</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              type="button"
              onClick={() => goTo("demo-for-schools")}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                active === "demo-for-schools"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              Demo For Schools
            </button>

            <button
              onClick={() => goTo("shop")}
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <ShoppingCart size={18} />
              Shop
            </button>

            <button
              type="button"
              onClick={() => goTo("reach-out")}
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

        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 px-4 pb-4 pt-3 space-y-2 bg-white">
            <button
              type="button"
              onClick={() => goTo("demo-for-schools")}
              className="w-full px-4 py-3 rounded-full bg-orange-500 text-white font-semibold"
            >
              Demo For Schools
            </button>
            <button
              type="button"
              onClick={() => goTo("shop")}
              className="w-full px-4 py-3 rounded-full border border-gray-200 font-semibold text-gray-700 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              Shop
            </button>
            <button
              type="button"
              onClick={() => goTo("reach-out")}
              className="w-full px-4 py-3 rounded-full border border-gray-200 font-semibold text-gray-700"
            >
              Reach Out
            </button>
            <div className="pt-2 border-t border-gray-100 grid gap-2">
              {[
                { id: "home", label: "Home" },
                { id: "school-programmes", label: "School Programmes" },
                { id: "competitions", label: "Robotics & AI Competitions" },
                { id: "online-programs", label: "Online Programs" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition ${
                    active === item.id
                      ? "bg-orange-50 text-orange-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <nav className="hidden md:block bg-[#eaf6ff]">
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
                  onClick={() => goTo(item.id)}
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
