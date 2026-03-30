"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Neeraj Kumar Mishra. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:mishrampu@gmail.com"
            className="text-gray-500 hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/neeraj1k98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/neeraj1998-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-purple-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
