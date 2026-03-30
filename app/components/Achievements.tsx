"use client";

import { motion } from "framer-motion";
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
    <section id="achievements" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-[#00d4aa] text-xs font-mono tracking-widest uppercase mb-3">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">Recognition</h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((ach, i) => (
            <FadeInSection key={ach.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl bg-[#0f0f1a] border border-white/[0.07] hover:border-[#00d4aa]/25 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#00d4aa]">
                    {ach.iconType === "trophy" ? <HiSparkles size={20} /> : <HiBadgeCheck size={20} />}
                  </span>
                  <h3 className="text-white font-semibold">{ach.title}</h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{ach.description}</p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
