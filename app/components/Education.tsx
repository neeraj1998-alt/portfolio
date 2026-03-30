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
    <section id="education" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-[#00d4aa] text-xs font-mono tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">Academic background</h2>
        </FadeInSection>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <FadeInSection key={edu.degree} delay={i * 0.1}>
              <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-xl bg-[#0f0f1a] border border-white/[0.07] hover:border-[#00d4aa]/20 transition-all duration-300">
                <div>
                  <h3 className="text-white font-semibold">{edu.degree}</h3>
                  <p className="text-white/30 text-sm mt-0.5">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-white/20">{edu.period}</p>
                  <p className="text-[#00d4aa] font-mono text-sm mt-0.5">CGPA {edu.cgpa}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
