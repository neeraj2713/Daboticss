"use client";

import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/917818002203"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-[999]
        w-14 h-14 rounded-full
        bg-[#25D366]
        flex items-center justify-center
        shadow-xl
      "
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 20px 40px rgba(37,211,102,0.4)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16.003 3.2c-7.04 0-12.8 5.76-12.8 12.8 0 2.253.587 4.453 1.707 6.4L3.2 28.8l6.56-1.68c1.84.96 3.84 1.44 6.24 1.44 7.04 0 12.8-5.76 12.8-12.8s-5.76-12.56-12.8-12.56zm0 22.4c-2.08 0-4-.56-5.76-1.6l-.4-.24-3.84.96 1.04-3.6-.24-.4c-1.12-1.76-1.68-3.84-1.68-6.08 0-6.08 4.96-11.04 11.04-11.04s11.04 4.96 11.04 11.04-4.96 10.96-11.04 10.96zm6.08-7.2c-.32-.16-1.92-.96-2.24-1.04-.32-.08-.56-.16-.8.16-.24.32-.96 1.04-1.12 1.28-.24.24-.4.24-.72.08-.32-.16-1.36-.48-2.56-1.6-.96-.8-1.6-1.84-1.76-2.16-.16-.32 0-.48.16-.64.16-.16.32-.4.48-.56.16-.24.24-.4.4-.64.16-.24.08-.48 0-.64-.08-.16-.8-1.92-1.12-2.56-.32-.8-.64-.64-.8-.64h-.72c-.24 0-.64.08-.96.48-.32.32-1.28 1.2-1.28 2.88s1.28 3.36 1.44 3.6c.16.24 2.56 4 6.16 5.6.88.4 1.6.64 2.16.8.88.24 1.68.24 2.32.16.72-.08 1.92-.8 2.24-1.52.24-.8.24-1.44.16-1.52-.08-.08-.32-.16-.64-.32z" />
      </svg>
    </motion.a>
  );
}
