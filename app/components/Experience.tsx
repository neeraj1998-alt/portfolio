"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Astratechai",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Built a real-time chat app using JavaScript and REST APIs",
      "Improved application performance by 30%",
      "Created reusable UI components",
      "Implemented state management for complex interactions",
    ],
  },
  {
    role: "Flutter App Developer",
    company: "AICTE",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Built a vehicle repair service app using Flutter & Dart",
      "Improved UI responsiveness and user experience",
      "Integrated Firebase for auth and real-time data",
      "Connected REST APIs for dynamic content",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-[#00d4aa] text-xs font-mono tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">Where I&apos;ve worked</h2>
        </FadeInSection>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <FadeInSection key={exp.company} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group p-6 rounded-xl bg-[#0f0f1a] border border-white/[0.07] hover:border-[#00d4aa]/25 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                    <p className="text-[#00d4aa] text-sm font-mono">{exp.company}</p>
                  </div>
                  <span className="text-xs text-white/25 font-mono bg-white/[0.04] px-3 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.points.map((pt) => (
                    <li key={pt} className="text-sm text-white/40 flex gap-2.5">
                      <span className="text-[#00d4aa]/50 mt-0.5 shrink-0">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
