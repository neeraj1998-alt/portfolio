"use client";

import FadeInSection from "./FadeInSection";

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Currently Pursuing",
    period: "2023 – 2026",
    cgpa: "7.6",
  },
  {
    degree: "Diploma — Engineering",
    institution: "Polytechnic",
    period: "2020 – 2023",
    cgpa: "8.7",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-32 px-6 sm:px-12 border-t border-[#e8e3dc]/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-[#e8a045] text-xs font-mono tracking-[0.2em] uppercase mb-4">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e8e3dc] tracking-tight mb-16">Academic background</h2>
        </FadeInSection>

        <div className="divide-y divide-[#e8e3dc]/[0.06]">
          {education.map((edu, i) => (
            <FadeInSection key={edu.degree} delay={i * 0.1}>
              <div className="grid md:grid-cols-[1fr_auto] gap-6 py-8 hover:bg-[#141414] transition-colors duration-300 px-0 -mx-0">
                <div>
                  <h3 className="text-[#e8e3dc]/80 font-medium mb-1">{edu.degree}</h3>
                  <p className="text-[#e8e3dc]/25 text-sm font-mono">{edu.institution}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-xs font-mono text-[#e8e3dc]/20 mb-1">{edu.period}</p>
                  <p className="text-[#e8a045] font-mono text-sm">CGPA {edu.cgpa}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
