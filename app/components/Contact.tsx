"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const contactInfo = [
  { icon: <FaEnvelope />, label: "Email", value: "mishrampu@gmail.com", href: "mailto:mishrampu@gmail.com" },
  { icon: <FaPhone />, label: "Phone", value: "+91 9798460836", href: "tel:+919798460836" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "neeraj1k98", href: "https://www.linkedin.com/in/neeraj1k98" },
  { icon: <FaGithub />, label: "GitHub", value: "neeraj1998-alt", href: "https://github.com/neeraj1998-alt" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens default mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:mishrampu@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase text-center mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold text-center mb-4">Contact Me</h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <FadeInSection direction="left">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-white/8 transition-all duration-200 group"
                >
                  <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors text-lg">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-gray-300 text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeInSection>

          {/* Form */}
          <FadeInSection direction="right" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/25"
              >
                {sent ? "✓ Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
