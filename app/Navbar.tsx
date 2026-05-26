"use client";

import { ShoppingCart } from "lucide-react";

interface Props {
  active: string;
  setActive: (section: string) => void;
}

export default function Navbar({ active, setActive }: Props) {
  return (
    <header className="fixed top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <button
            onClick={() => setActive("home")}
            className="flex items-center hover:opacity-90 transition"
          >
            <img
              src="/logo.png"
              alt="DABOTICS"
              className="h-8 w-auto md:h-10"
            />
          </button>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            <a
              href="#request-demo"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Demo For Schools
            </a>

            <button
              onClick={() => setActive("shop")}
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              <ShoppingCart size={18} />
              Shop
            </button>

            <a href="#request-demo" className="flex items-center gap-2 hover:text-orange-500 transition">
              📞 Reach Out
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
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
