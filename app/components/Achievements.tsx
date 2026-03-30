"use client";

import FadeInSection from "./FadeInSection";
import { HiSparkles, HiBadgeCheck } from "react-icons/hi";

type Achievement = {
  title: string;
  description: string;
  iconType: "trophy" | "star";
};

const achievements: Achievement[] = [
  {
    title: "SIH 2025 Grand Finalist",
    description:
      "Selected as a Grand Finalist in Smart India Hackathon 2025 — one of the largest hackathons in India, competing among thousands of teams nationwide.",
    iconType: "trophy",
  },
  {
    title: "SIH 2025 Internal Winner",
    description:
      "Won the internal round of Smart India Hackathon 2025 at the institutional level, advancing to the national grand finale.",
    iconType: "star",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 py-32 px-6 sm:px-12 border-t border-[#e8e3dc]/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-[#e8a045] text-xs font-mono tracking-[0.2em] uppercase mb-4">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e8e3dc] tracking-tight mb-16">Recognition</h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-px bg-[#e8e3dc]/[0.06]">
          {achievements.map((ach, i) => (
            <FadeInSection key={ach.title} delay={i * 0.1}>
              <div className="bg-[#0c0c0c] p-8 hover:bg-[#141414] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#e8a045]">
                    {ach.iconType === "trophy" ? <HiSparkles size={18} /> : <HiBadgeCheck size={18} />}
                  </span>
                  <h3 className="text-[#e8e3dc]/80 font-semibold">{ach.title}</h3>
                </div>
                <p className="text-[#e8e3dc]/35 text-sm leading-relaxed">{ach.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
