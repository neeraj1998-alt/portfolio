"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const contactInfo = [
  { icon: <FaEnvelope size={14} />, label: "Email", value: "mishrampu@gmail.com", href: "mailto:mishrampu@gmail.com" },
  { icon: <FaPhone size={14} />, label: "Phone", value: "+91 9798460836", href: "tel:+919798460836" },
  { icon: <FaLinkedin size={14} />, label: "LinkedIn", value: "/in/neeraj1k98", href: "https://www.linkedin.com/in/neeraj1k98" },
  { icon: <FaGithub size={14} />, label: "GitHub", value: "neeraj1998-alt", href: "https://github.com/neeraj1998-alt" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:mishrampu@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-[#00d4aa] text-xs font-mono tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-white/40 text-sm mb-16 max-w-md">
            Open to opportunities, collaborations, or just a good conversation about Flutter.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeInSection direction="left">
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0f0f1a] border border-white/[0.07] hover:border-[#00d4aa]/25 transition-all duration-200 group"
                >
                  <span className="text-[#00d4aa]/50 group-hover:text-[#00d4aa] transition-colors">{item.icon}</span>
                  <div>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest font-mono">{item.label}</p>
                    <p className="text-white/60 text-sm group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0f0f1a] border border-white/[0.07] text-white placeholder-white/20 focus:outline-none focus:border-[#00d4aa]/40 transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0f0f1a] border border-white/[0.07] text-white placeholder-white/20 focus:outline-none focus:border-[#00d4aa]/40 transition-colors text-sm"
              />
              <textarea
                placeholder="Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0f0f1a] border border-white/[0.07] text-white placeholder-white/20 focus:outline-none focus:border-[#00d4aa]/40 transition-colors text-sm resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3 rounded-xl bg-[#00d4aa] hover:bg-[#00bfa0] text-[#080810] font-semibold text-sm transition-colors duration-200"
              >
                {sent ? "✓ Sent" : "Send Message"}
              </motion.button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
