"use client";
import { motion } from "framer-motion";

export default function FlyingRobotWithMessage() {
  return (
    <div className="absolute left-16 top-32 z-20">

    {/* ☁️ SPEECH CLOUD */}
<motion.div
  initial={{ opacity: 0, scale: 0.85, y: 10 }}
  animate={{
    opacity: [0, 1, 1, 0],
    scale: [0.85, 1, 1, 0.9],
    y: [10, 0, 0, -6],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatDelay: 2,
    ease: "easeInOut",
  }}
  className="
    absolute
    -top-24
    left-28
    bg-white
    text-gray-900
    rounded-[32px]
    px-6 py-4
    shadow-2xl
    w-[280px]
  "
>
  <p className="text-sm font-semibold leading-relaxed">
    👋 <span className="font-bold">Hi friend!</span><br />
    Our kits help you <b>build robots</b>,<br />
    <b>learn coding</b> & have <b>FUN!</b> 🚀
  </p>

  {/* cloud tail */}
  <span
    className="
      absolute
      -left-3
      bottom-6
      w-5
      h-5
      bg-white
      rotate-45
      rounded-md
      shadow-md
    "
  />
</motion.div>

      {/* 🤖 ROBOT */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Robot image */}
        <img
          src="/robot.svg"
          alt="Friendly Robot"
          className="w-40 select-none"
        />

        {/* 👋 WAVING HAND */}
        <motion.div
          className="
            absolute
            right-0
            top-20
            w-12
            h-12
            bg-orange-300
            rounded-full
          "
          style={{ transformOrigin: "left center" }}
          animate={{ rotate: [0, 35, -25, 35, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
