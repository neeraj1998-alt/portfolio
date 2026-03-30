"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 sm:px-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/20 text-xs font-mono">
          © {new Date().getFullYear()} Neeraj Kumar Mishra
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/neeraj1k98" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#00d4aa] transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={15} />
          </a>
          <a href="https://github.com/neeraj1998-alt" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#00d4aa] transition-colors" aria-label="GitHub">
            <FaGithub size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
