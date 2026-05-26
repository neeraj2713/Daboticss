"use client";

export default function StoreSection() {
  return (
    <div className="pt-40 px-10 min-h-screen bg-[#f7f9fc]">
      <h1 className="text-4xl font-extrabold mb-4">
        Let’sGO Store
      </h1>

      <p className="text-gray-600 mb-10">
        Explore robotics kits, AI learning tools & books
      </p>

      {/* later we will add categories + products here */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">Product 1</div>
        <div className="bg-white p-6 rounded-xl shadow">Product 2</div>
        <div className="bg-white p-6 rounded-xl shadow">Product 3</div>
      </div>
    </div>
  );
}
