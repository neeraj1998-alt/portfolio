"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col justify-end pb-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto w-full">

        {/* Large background number — editorial touch */}
        <div
          aria-hidden
          className="absolute top-1/2 right-6 sm:right-12 -translate-y-1/2 text-[22vw] font-bold text-[#e8e3dc]/[0.025] select-none leading-none pointer-events-none"
        >
          01
        </div>

        <motion.p {...f(0.1)} className="text-[#e8a045] text-xs font-mono tracking-[0.2em] uppercase mb-8">
          Flutter Developer &nbsp;·&nbsp; SIH 2025 Grand Finalist
        </motion.p>

        <motion.h1
          {...f(0.22)}
          className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#e8e3dc] mb-8"
        >
          Neeraj Kumar<br />
          <span className="text-[#e8e3dc]">Mishra.</span>
        </motion.h1>

        <motion.p {...f(0.36)} className="text-[#e8e3dc]/45 text-base sm:text-lg max-w-lg leading-relaxed mb-12 font-light">
          I build fast, polished cross-platform mobile apps with Flutter &amp; Dart.
          Clean architecture, smooth UX, real-world impact.
        </motion.p>

        <motion.div {...f(0.48)} className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-7 py-3 bg-[#e8a045] text-[#0c0c0c] text-sm font-semibold tracking-wide hover:bg-[#d4913a] transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-[#e8e3dc]/15 text-[#e8e3dc]/50 text-sm tracking-wide hover:border-[#e8e3dc]/30 hover:text-[#e8e3dc]/80 transition-all duration-200"
          >
            Contact Me
          </a>
          <a
            href="/Neeraj_Kumar_Mishra.pdf"
            download
            className="px-7 py-3 border border-[#e8e3dc]/15 text-[#e8e3dc]/50 text-sm tracking-wide hover:border-[#e8e3dc]/30 hover:text-[#e8e3dc]/80 transition-all duration-200"
          >
            Resume ↓
          </a>
        </motion.div>

        <motion.div {...f(0.58)} className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/neeraj1k98"
            target="_blank" rel="noopener noreferrer"
            className="text-[#e8e3dc]/20 hover:text-[#e8a045] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/neeraj1998-alt"
            target="_blank" rel="noopener noreferrer"
            className="text-[#e8e3dc]/20 hover:text-[#e8a045] transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <div className="h-px w-12 bg-[#e8e3dc]/10" />
          <span className="text-[#e8e3dc]/15 text-xs font-mono tracking-wide">mishrampu@gmail.com</span>
        </motion.div>
      </div>
    </section>
  );
}
