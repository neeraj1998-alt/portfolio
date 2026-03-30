"use client";

import FadeInSection from "./FadeInSection";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

const highlights = [
  { icon: "mobile", label: "Cross-Platform Apps" },
  { icon: "code", label: "Clean Code" },
  { icon: "rocket", label: "Performance Focused" },
] as const;

function Icon({ type }: { type: "mobile" | "code" | "rocket" }) {
  if (type === "mobile") return <FaMobileAlt size={13} />;
  if (type === "code") return <FaCode size={13} />;
  return <FaRocket size={13} />;
}

export default function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-[#00d4aa] text-xs font-mono tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">Who I am</h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection direction="left">
            <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto md:mx-0">
              <div className="w-full h-full rounded-2xl bg-[#0f0f1a] border border-white/[0.08] flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl border border-[#00d4aa]/30 bg-[#00d4aa]/5" />
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.1}>
            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                Flutter Developer with hands-on experience building scalable cross-platform apps using{" "}
                <span className="text-white font-medium">Flutter, Dart, Firebase</span> and REST APIs.
              </p>
              <p className="text-white/50 leading-relaxed text-sm">
                Skilled in state management, UI/UX optimization, and performance tuning. I care about the details — smooth animations, fast load times, and code that&apos;s easy to maintain.
              </p>
              <p className="text-white/50 leading-relaxed text-sm">
                SIH 2025 Grand Finalist. Always building, always learning.
              </p>

              <div className="flex flex-wrap gap-2 pt-3">
                {highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs text-white/50">
                    <span className="text-[#00d4aa]"><Icon type={h.icon} /></span>
                    {h.label}
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-2 text-sm">
                <a href="mailto:mishrampu@gmail.com" className="text-[#00d4aa]/70 hover:text-[#00d4aa] transition-colors">
                  mishrampu@gmail.com
                </a>
                <span className="text-white/10">·</span>
                <a href="tel:+919798460836" className="text-white/30 hover:text-white/60 transition-colors">
                  +91 9798460836
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
