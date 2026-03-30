"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center z-10"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 w-full pt-24 pb-16">

        <motion.p
          {...fadeUp(0.05)}
          className="text-[#00d4aa] text-sm font-mono tracking-widest uppercase mb-6"
        >
          Flutter Developer · SIH 2025 Grand Finalist
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6"
        >
          Neeraj Kumar
          <br />
          <span className="text-white/40">Mishra.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.28)}
          className="text-gray-400 text-lg max-w-xl leading-relaxed mb-10"
        >
          I build fast, polished cross-platform apps with Flutter &amp; Dart.
          Focused on clean architecture, smooth UX, and shipping things that work.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap gap-3 mb-14"
        >
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-md bg-[#00d4aa] text-[#080810] text-sm font-semibold hover:bg-[#00bfa0] transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-md border border-white/15 text-white/70 text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Contact Me
          </a>
          <a
            href="/Neeraj_Kumar_Mishra.pdf"
            download
            className="px-6 py-2.5 rounded-md border border-white/15 text-white/70 text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Resume ↓
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.5)}
          className="flex items-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/neeraj1k98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#00d4aa] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/neeraj1998-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#00d4aa] transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <span className="text-white/10 text-sm ml-2">mishrampu@gmail.com</span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 text-white/20 hover:text-[#00d4aa] transition-colors"
        aria-label="Scroll down"
      >
        <HiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
