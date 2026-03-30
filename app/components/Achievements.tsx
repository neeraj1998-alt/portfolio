"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { HiSparkles, HiBadgeCheck } from "react-icons/hi";

type Achievement = {
  title: string;
  description: string;
  iconType: "trophy" | "star";
  gradient: string;
  bg: string;
  border: string;
};

const achievements: Achievement[] = [
  {
    title: "SIH 2025 Grand Finalist",
    description:
      "Selected as a Grand Finalist in Smart India Hackathon 2025 — one of the largest hackathons in India, competing among thousands of teams nationwide.",
    iconType: "trophy",
    gradient: "from-yellow-500 to-orange-500",
    bg: "from-yellow-500/10 to-orange-500/10",
    border: "hover:border-yellow-500/40",
  },
  {
    title: "SIH 2025 Internal Winner",
    description:
      "Won the internal round of Smart India Hackathon 2025 at the institutional level, advancing to the national grand finale.",
    iconType: "star",
    gradient: "from-indigo-500 to-purple-500",
    bg: "from-indigo-500/10 to-purple-500/10",
    border: "hover:border-indigo-500/40",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase text-center mb-2">
            Recognition
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">Achievements</h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <FadeInSection key={ach.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${ach.bg} border border-white/10 ${ach.border} transition-all duration-300`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${ach.gradient} mb-4`}>
                  <span className="text-white">
                    {ach.iconType === "trophy" ? <HiSparkles size={28} /> : <HiBadgeCheck size={28} />}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${ach.gradient} bg-clip-text text-transparent`}>
                  {ach.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
