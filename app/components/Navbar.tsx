"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080810]/90 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex items-center justify-between h-14">
        <a href="#hero" className="text-white font-mono text-sm font-semibold tracking-tight">
          nkm<span className="text-[#00d4aa]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-xs text-white/40 hover:text-white transition-colors duration-200 tracking-wide uppercase font-medium">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Neeraj_Kumar_Mishra.pdf"
              download
              className="text-xs px-4 py-1.5 rounded border border-[#00d4aa]/40 text-[#00d4aa] hover:bg-[#00d4aa]/10 transition-all duration-200 font-medium"
            >
              Resume
            </a>
          </li>
        </ul>

        <button className="md:hidden text-white/40 hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#080810]/95 backdrop-blur-md border-b border-white/[0.06]"
          >
            <ul className="flex flex-col px-6 py-5 gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/Neeraj_Kumar_Mishra.pdf" download className="text-sm text-[#00d4aa]">
                  Resume ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
