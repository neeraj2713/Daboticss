"use client";

import { useState } from "react";

const inputClass =
  "w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none";

export default function ReachOutPage() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.target;
    const data = {
      formType: "reach-out",
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
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
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-orange-100 mb-2">Home / Reach Out</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Get In Touch
          </h1>
          <p className="text-orange-100 max-w-2xl text-lg">
            Have a question about kits, programs, or partnerships? Send us a
            message and we&apos;ll get back to you soon.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-semibold text-gray-900">Registered Office</span>
                <br />
                Plot No. 198, Ashok Vihar Sanjay Nagar, Bareilly, Uttar Pradesh,
                India
              </li>
              <li>
                <span className="font-semibold text-gray-900">Corporate Office</span>
                <br />
                First Floor, Rohilkhand Incubation Foundation, MJPR University
                Bareilly, Uttar Pradesh, India
              </li>
              <li>
                <span className="font-semibold text-gray-900">Phone</span>
                <br />
                <a href="tel:+917818002203" className="text-orange-600 hover:underline">
                  +91 7818002203
                </a>
              </li>
              <li>
                <span className="font-semibold text-gray-900">Email</span>
                <br />
                <a
                  href="mailto:contact@dabotics.com"
                  className="text-orange-600 hover:underline"
                >
                  contact@dabotics.com
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-[#eaf6ff] rounded-2xl p-6 border border-blue-100">
            <p className="text-gray-700 text-sm">
              Prefer WhatsApp?{" "}
              <a
                href="https://wa.me/917818002203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-semibold hover:underline"
              >
                Chat with us on WhatsApp →
              </a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 h-fit">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
          <p className="text-gray-500 mb-6 text-sm">
            We typically respond within 1–2 business days.
          </p>

          {status === "success" ? (
            <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
              <p className="text-green-800 font-semibold text-lg mb-2">
                Message sent!
              </p>
              <p className="text-green-700 text-sm">
                Thank you for reaching out. Our team will reply to your email
                shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-orange-600 font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                required
                className={inputClass}
                placeholder="Your Name *"
              />
              <input
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="Your Email *"
              />
              <input
                name="phone"
                type="tel"
                className={inputClass}
                placeholder="Phone Number"
              />
              <input
                name="subject"
                className={inputClass}
                placeholder="Subject"
              />
              <div>
                <label className="block font-semibold text-gray-800 mb-2 text-sm">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={inputClass}
                  placeholder="How can we help you?"
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
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
