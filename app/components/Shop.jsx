"use client";

import { useState } from "react";

/* -------------------- DATA -------------------- */

const products = [
  {
    id: 1,
    name: "Wizbot Maxx Adventure Quest",
    subtitle: "Screen-Free Button-Based Robot Toy (Age 6+)",
    price: 2149,
    originalPrice: 2999,
    discount: 28,
    image: "/adventure-quest.png",
  },
  {
    id: 2,
    name: "Wizbot Maxx Jungle Safari",
    subtitle: "Screen-Free Button-Based Robot Toy (Age 4+)",
    price: 2149,
    originalPrice: 2999,
    discount: 28,
    image: "/jungle-safari.png",
  },
  {
    id: 3,
    name: "Wizbot Maxx Coding Ninja",
    subtitle: "Screen-Free + Block Coding Robot Toy (Age 8+)",
    price: 2149,
    originalPrice: 2999,
    discount: 28,
    image: "/coding-ninja.png",
  },
];

const categories = [
  { name: "Academic Books", count: 32 },
  { name: "Coding, AI & Robotics", count: 12 },
  { name: "AI & Robotics Kits", count: 10 },
  { name: "Arduino", count: 2 },
  { name: "DIY Learning Kits", count: 6 },
];

/* -------------------- COMPONENT -------------------- */

export default function ShopPage() {
  const [cart, setCart] = useState([]);

  /* ---------------- CART LOGIC ---------------- */

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce(
    (sum, i) => sum + i.qty * i.price,
    0
  );

  /* -------------------- UI -------------------- */

  return (
    <div className="min-h-screen bg-gray-100">

      {/* -------- CART BAR (TOP) -------- */}
      <div className="sticky top-0 z-30 bg-blue-100 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-end items-center gap-4">
          <span className="font-semibold text-gray-900">
            ₹{totalPrice.toLocaleString("en-IN")}
          </span>

          <div className="relative flex items-center gap-2 cursor-pointer">
            🛒
            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          </div>
        </div>
      </div>

      {/* -------- MAIN LAYOUT -------- */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-[260px_1fr] gap-8">

        {/* SIDEBAR */}
        <aside>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-semibold text-lg mb-4">
              Product Categories
            </h2>
            <ul className="space-y-2">
              {categories.map((c, i) => (
                <li
                  key={i}
                  className="flex justify-between text-sm text-gray-700 hover:text-orange-600 cursor-pointer"
                >
                  <span>{c.name}</span>
                  <span className="text-gray-400">({c.count})</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* PRODUCTS */}
        <main className="mt-10">
          <div className="mb-6 text-sm text-gray-600">
            Showing 1–3 of 82 results
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    -{p.discount}%
                  </span>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain p-6"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {p.subtitle}
                  </p>

                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{p.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm line-through text-gray-400">
                      ₹{p.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(p)}
                    className="mt-4 w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
