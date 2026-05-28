"use client";

import { useMemo, useState } from "react";
import { ShoppingCart } from "lucide-react";
import {
  getWhatsAppOrderLink,
  parentTestimonials,
  shopCategories,
  shopProducts,
} from "../lib/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return shopProducts;
    return shopProducts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;
    const lines = cart.map(
      (i) => `• ${i.name} × ${i.qty} — ₹${(i.price * i.qty).toLocaleString("en-IN")}`
    );
    const text = `Hi Dabotics, I would like to place an order:\n\n${lines.join("\n")}\n\nTotal: ₹${totalPrice.toLocaleString("en-IN")}`;
    window.open(
      `https://wa.me/917818002203?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3B82F6] to-[#1d4ed8] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-blue-100 mb-2">Home / Product</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Shop</h1>
          <p className="text-blue-100 max-w-2xl text-lg">
            Explore Quarky kits, add-ons, and Dabotics robotics kits — order
            instantly on WhatsApp, just like on{" "}
            <a
              href="https://dabotics.com/product.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white font-medium"
            >
              dabotics.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* Cart bar */}
      <div className="sticky top-[128px] z-30 bg-white/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {shopProducts.length} products
          </p>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-900">
              Cart: ₹{totalPrice.toLocaleString("en-IN")}
            </span>
            <div className="relative flex items-center gap-2 text-gray-700">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            </div>
            {totalItems > 0 && (
              <button
                type="button"
                onClick={checkoutWhatsApp}
                className="bg-[#25D366] hover:bg-[#1da851] text-white px-4 py-2 rounded-full text-sm font-semibold transition"
              >
                Checkout on WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        {/* Categories */}
        <aside>
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-[200px]">
            <h2 className="font-semibold text-lg mb-4 text-gray-900">
              Categories
            </h2>
            <ul className="space-y-1">
              {shopCategories.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory(c.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      activeCategory === c.id
                        ? "bg-orange-500 text-white font-semibold"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product grid */}
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
              >
                <div className="relative h-56 bg-gray-50 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain p-4"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-2xl font-extrabold text-gray-900 mb-1">
                    ₹{p.price.toLocaleString("en-IN")}
                    <span className="text-sm font-normal text-gray-500">.00</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    ({p.stock} kits left)
                  </p>
                  <h3 className="font-semibold text-gray-900 text-lg mb-4 flex-1">
                    {p.name}
                  </h3>

                  <div className="flex flex-col gap-2">
                    <a
                      href={getWhatsAppOrderLink(p.name, p.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-[#25D366] hover:bg-[#1da851] text-white py-2.5 rounded-lg font-semibold transition"
                    >
                      Shop On WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => addToCart(p)}
                      className="w-full border-2 border-orange-500 text-orange-500 py-2.5 rounded-lg font-semibold hover:bg-orange-50 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      {/* Parent testimonials — from dabotics.com/product.html */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-3">
            Parent Testimonial – Dabotics STEM Kits
          </h2>
          <p className="text-center text-gray-600 mb-12">
            What do parents say about Dabotics kits?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {parentTestimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#f7f9fc] rounded-2xl p-6 shadow-md"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
