"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 sm:px-12 border-t border-[#e8e3dc]/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#e8e3dc]/15 text-xs font-mono">
          © {new Date().getFullYear()} Neeraj Kumar Mishra
        </p>
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/neeraj1k98" target="_blank" rel="noopener noreferrer"
            className="text-[#e8e3dc]/15 hover:text-[#e8a045] transition-colors duration-300" aria-label="LinkedIn">
            <FaLinkedin size={14} />
          </a>
          <a href="https://github.com/neeraj1998-alt" target="_blank" rel="noopener noreferrer"
            className="text-[#e8e3dc]/15 hover:text-[#e8a045] transition-colors duration-300" aria-label="GitHub">
            <FaGithub size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
