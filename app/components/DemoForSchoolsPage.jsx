"use client";

import { useState } from "react";
import { siteImages } from "../lib/siteImages";

const DEMO_PROGRAMS = [
  "AI and Robotics Lab",
  "STEM Lab",
  "Maker Space Labs",
  "Japanese Exchange Program",
  "STEMx Impact program",
];

const inputClass =
  "w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none";

export default function DemoForSchoolsPage() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState([]);

  const toggleProgram = (program) => {
    setSelectedPrograms((prev) =>
      prev.includes(program)
        ? prev.filter((p) => p !== program)
        : [...prev, program]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.target;
    const data = {
      formType: "demo-for-schools",
      name: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      school: form.school.value,
      country: form.country.value,
      state: form.state.value,
      demoPrograms: selectedPrograms,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send");
      setStatus("success");
      form.reset();
      setSelectedPrograms([]);
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <section className="bg-gradient-to-r from-[#3B82F6] to-[#1d4ed8] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-blue-100 mb-2">Home / Demo For Schools</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Request a School Demo
          </h1>
          <p className="text-blue-100 max-w-2xl text-lg">
            World-class STEM education powered by global partnerships, proven
            curriculum, and hands-on learning experiences.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-8 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={siteImages.callToAction}
              alt="Students in STEM lab"
              className="w-full h-56 object-cover"
            />
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Transform Your School&apos;s Future
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-bold text-lg mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✔ NEP 2020 aligned curriculum</li>
                <li>✔ STEM.org accredited programs</li>
                <li>✔ Trusted by 240+ schools</li>
                <li>✔ Complete lab setup & training</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-bold text-lg mb-3">Student Benefits</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✔ Hands-on learning</li>
                <li>✔ Critical thinking skills</li>
                <li>✔ Global exposure</li>
                <li>✔ Competition opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 h-fit">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Request your Demo Today
          </h3>
          <p className="text-gray-500 mb-6 text-sm">
            Fill in the form and our team will email you within 1–2 business days.
          </p>

          {status === "success" ? (
            <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
              <p className="text-green-800 font-semibold text-lg mb-2">
                Demo request sent!
              </p>
              <p className="text-green-700 text-sm">
                Thank you. We&apos;ve received your request and will be in touch
                shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-orange-600 font-semibold hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="fullName"
                required
                className={inputClass}
                placeholder="Full Name *"
              />
              <input
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="Email *"
              />
              <input
                name="phone"
                type="tel"
                required
                className={inputClass}
                placeholder="Phone Number *"
              />
              <input
                name="school"
                required
                className={inputClass}
                placeholder="School / Organisation *"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="country"
                  className={inputClass}
                  placeholder="Country"
                />
                <input name="state" className={inputClass} placeholder="State" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                  Schedule demo for (check all that apply)
                </h4>
                <div className="space-y-2 text-gray-700">
                  {DEMO_PROGRAMS.map((program) => (
                    <label
                      key={program}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="accent-orange-500"
                        checked={selectedPrograms.includes(program)}
                        onChange={() => toggleProgram(program)}
                      />
                      {program}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-800 mb-2 text-sm">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className={inputClass}
                  placeholder="Please add as much information as possible so we can fully support you."
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg p-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition"
              >
                {status === "loading" ? "Sending…" : "Submit Demo Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
