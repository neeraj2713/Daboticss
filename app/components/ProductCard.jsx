"use client";

import { motion } from "framer-motion";

export default function ProductCard({
  title,
  price,
  image,
  rating = 5,
  stock = 100,
  paymentLink,
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-[#fff7f2] rounded-3xl overflow-hidden shadow-xl hover:shadow-orange-300/40"
    >
      <div className="bg-white p-6 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-contain"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
          {price}
        </h3>

        <div className="flex justify-center gap-1 text-orange-500 mb-1">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        <p className="text-gray-500 mb-3">({stock} kits left)</p>

        <h4 className="text-lg font-semibold mb-5 text-gray-900">{title}</h4>

        <a
          href={paymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-full text-white font-semibold shadow-lg"
        >
          Buy Now
        </a>
      </div>
    </motion.div>
  );
}
