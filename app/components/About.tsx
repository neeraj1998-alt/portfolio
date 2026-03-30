"use client";

import FadeInSection from "./FadeInSection";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

const highlights = [
  { icon: "mobile", label: "Cross-Platform" },
  { icon: "code", label: "Clean Code" },
  { icon: "rocket", label: "Performance" },
] as const;

function Icon({ type }: { type: "mobile" | "code" | "rocket" }) {
  if (type === "mobile") return <FaMobileAlt size={12} />;
  if (type === "code") return <FaCode size={12} />;
  return <FaRocket size={12} />;
}

export default function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-6 sm:px-12 border-t border-[#e8e3dc]/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          <FadeInSection>
            <p className="text-[#e8a045] text-xs font-mono tracking-[0.2em] uppercase mb-4">About</p>
            <div className="relative w-48 h-48 md:w-full md:h-64">
              <div className="w-full h-full bg-[#141414] border border-[#e8e3dc]/[0.07] flex items-center justify-center">
                <span className="text-5xl">👨‍💻</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border border-[#e8a045]/20" />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8e3dc] tracking-tight mb-8">
              Building things that matter.
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-[#e8e3dc]/55 leading-relaxed">
                Flutter Developer with hands-on experience building scalable cross-platform apps using{" "}
                <span className="text-[#e8e3dc]/85 font-medium">Flutter, Dart, Firebase</span> and REST APIs.
              </p>
              <p className="text-[#e8e3dc]/40 leading-relaxed text-sm">
                I care about the details — smooth animations, fast load times, and code that&apos;s easy to maintain.
                SIH 2025 Grand Finalist. Always building, always learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 px-3 py-1.5 border border-[#e8e3dc]/[0.08] text-xs text-[#e8e3dc]/40">
                  <span className="text-[#e8a045]"><Icon type={h.icon} /></span>
                  {h.label}
                </div>
              ))}
            </div>

            <div className="flex gap-6 text-sm border-t border-[#e8e3dc]/[0.06] pt-6">
              <a href="mailto:mishrampu@gmail.com" className="text-[#e8a045]/70 hover:text-[#e8a045] transition-colors text-xs font-mono">
                mishrampu@gmail.com
              </a>
              <a href="tel:+919798460836" className="text-[#e8e3dc]/25 hover:text-[#e8e3dc]/50 transition-colors text-xs font-mono">
                +91 9798460836
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
