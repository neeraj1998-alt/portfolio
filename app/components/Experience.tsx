"use client";

import FadeInSection from "./FadeInSection";

const experiences = [
  {
    index: "01",
    role: "Frontend Developer",
    company: "Astratechai",
    period: "Jun – Jul 2025",
    points: [
      "Built a real-time chat app using JavaScript and REST APIs",
      "Improved application performance by 30%",
      "Created reusable UI components",
      "Implemented state management for complex interactions",
    ],
  },
  {
    index: "02",
    role: "Flutter App Developer",
    company: "AICTE",
    period: "Jun – Jul 2024",
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
    <section id="experience" className="relative z-10 py-32 px-6 sm:px-12 border-t border-[#e8e3dc]/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-[#e8a045] text-xs font-mono tracking-[0.2em] uppercase mb-4">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e8e3dc] tracking-tight mb-16">Where I&apos;ve worked</h2>
        </FadeInSection>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <FadeInSection key={exp.company} delay={i * 0.1}>
              <div className="group grid md:grid-cols-[80px_1fr_160px] gap-6 py-10 border-b border-[#e8e3dc]/[0.06] hover:border-[#e8a045]/20 transition-colors duration-300">
                <span className="font-mono text-xs text-[#e8e3dc]/15 pt-1">{exp.index}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-5">
                    <h3 className="text-[#e8e3dc] font-semibold text-lg">{exp.role}</h3>
                    <span className="text-[#e8a045] text-sm font-mono">@ {exp.company}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((pt) => (
                      <li key={pt} className="text-sm text-[#e8e3dc]/35 flex gap-3">
                        <span className="text-[#e8a045]/40 shrink-0 mt-0.5">→</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="text-xs font-mono text-[#e8e3dc]/20 md:text-right pt-1">{exp.period}</span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
