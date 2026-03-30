"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const contactInfo = [
  { icon: <FaEnvelope size={13} />, label: "Email", value: "mishrampu@gmail.com", href: "mailto:mishrampu@gmail.com" },
  { icon: <FaPhone size={13} />, label: "Phone", value: "+91 9798460836", href: "tel:+919798460836" },
  { icon: <FaLinkedin size={13} />, label: "LinkedIn", value: "/in/neeraj1k98", href: "https://www.linkedin.com/in/neeraj1k98" },
  { icon: <FaGithub size={13} />, label: "GitHub", value: "neeraj1998-alt", href: "https://github.com/neeraj1998-alt" },
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
    <section id="contact" className="relative z-10 py-32 px-6 sm:px-12 border-t border-[#e8e3dc]/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-[#e8a045] text-xs font-mono tracking-[0.2em] uppercase mb-4">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e8e3dc] tracking-tight mb-3">Let&apos;s talk.</h2>
          <p className="text-[#e8e3dc]/35 text-sm mb-16 max-w-sm font-light">
            Open to opportunities, collaborations, or just a good conversation about Flutter.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-16">
          <FadeInSection direction="left">
            <div className="divide-y divide-[#e8e3dc]/[0.06]">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-4 group"
                >
                  <span className="text-[#e8a045]/40 group-hover:text-[#e8a045] transition-colors duration-200 w-5">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-[10px] text-[#e8e3dc]/20 uppercase tracking-widest font-mono mb-0.5">{item.label}</p>
                    <p className="text-[#e8e3dc]/50 text-sm group-hover:text-[#e8e3dc]/80 transition-colors duration-200">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  required
                  value={form[field as "name" | "email"]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-[#e8e3dc]/[0.08] text-[#e8e3dc]/80 placeholder-[#e8e3dc]/20 focus:outline-none focus:border-[#e8a045]/40 transition-colors text-sm font-light"
                />
              ))}
              <textarea
                placeholder="Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-[#e8e3dc]/[0.08] text-[#e8e3dc]/80 placeholder-[#e8e3dc]/20 focus:outline-none focus:border-[#e8a045]/40 transition-colors text-sm resize-none font-light"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.99 }}
                className="w-full py-3 bg-[#e8a045] hover:bg-[#d4913a] text-[#0c0c0c] font-semibold text-sm tracking-wide transition-colors duration-200"
              >
                {sent ? "✓ Message sent" : "Send Message"}
              </motion.button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
