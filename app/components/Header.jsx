"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Header() {
  const { totalItems, totalPrice } = useCart();

  return (
    <header className="bg-blue-100 border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
        </nav>

        <Link href="/cart" className="flex items-center gap-3 font-semibold">
          ₹{totalPrice.toLocaleString("en-IN")}
          <span className="relative">
            🛒
            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
