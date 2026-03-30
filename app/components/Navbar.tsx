"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0c0c0c]/85 backdrop-blur-xl border-b border-[#e8e3dc]/[0.05]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16">
        <a href="#hero" className="font-mono text-sm text-[#e8e3dc]/50 hover:text-[#e8e3dc] transition-colors tracking-tight">
          NKM<span className="text-[#e8a045]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-xs text-[#e8e3dc]/35 hover:text-[#e8e3dc]/80 transition-colors duration-300 tracking-[0.12em] uppercase">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Neeraj_Kumar_Mishra.pdf"
              download
              className="text-xs px-4 py-1.5 border border-[#e8e3dc]/15 text-[#e8e3dc]/50 hover:border-[#e8a045]/50 hover:text-[#e8a045] transition-all duration-300 tracking-wide"
            >
              Resume
            </a>
          </li>
        </ul>

        <button className="md:hidden text-[#e8e3dc]/40 hover:text-[#e8e3dc]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0c0c0c] border-b border-[#e8e3dc]/[0.05]"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="text-sm text-[#e8e3dc]/40 hover:text-[#e8e3dc] transition-colors tracking-wide">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/Neeraj_Kumar_Mishra.pdf" download className="text-sm text-[#e8a045]">Resume ↓</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
