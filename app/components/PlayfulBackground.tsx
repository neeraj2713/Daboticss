"use client";

export default function PlayfulBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">

      {/* SOFT PLAYFUL BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff7ed] via-[#fffaf0] to-white" />

      {/* floating dots */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-32 w-4 h-4 bg-sky-400 rounded-full animate-bounce" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />

      {/* clouds */}
      <img
        src="/cloud.svg"
        className="absolute top-24 right-1/4 w-24 opacity-20 animate-[float_12s_ease-in-out_infinite]"
      />
      <img
        src="/cloud.svg"
        className="absolute bottom-40 left-16 w-32 opacity-20 animate-[float_18s_ease-in-out_infinite]"
      />

      {/* paper plane */}
      <img
        src="/plane.svg"
        className="absolute top-1/2 right-10 w-28 opacity-30 animate-[fly_25s_linear_infinite]"
      />
    </div>
  );
}
