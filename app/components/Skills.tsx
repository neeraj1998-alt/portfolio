"use client";

import FadeInSection from "./FadeInSection";

const skillGroups = [
  { category: "Mobile", skills: ["Flutter", "Dart"] },
  { category: "Languages", skills: ["Java", "C", "C++"] },
  { category: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
  { category: "Backend & DB", skills: ["Firebase", "REST APIs", "PostgreSQL", "MySQL"] },
  { category: "Tools", skills: ["Git", "GitHub", "Android Studio", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-32 px-6 sm:px-12 border-t border-[#e8e3dc]/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-[#e8a045] text-xs font-mono tracking-[0.2em] uppercase mb-4">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e8e3dc] tracking-tight mb-16">What I work with</h2>
        </FadeInSection>

        <div className="divide-y divide-[#e8e3dc]/[0.06]">
          {skillGroups.map((group, gi) => (
            <FadeInSection key={group.category} delay={gi * 0.06}>
              <div className="grid grid-cols-[120px_1fr] gap-8 py-6 items-start">
                <span className="text-xs font-mono text-[#e8e3dc]/20 uppercase tracking-widest pt-1">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 border border-[#e8e3dc]/[0.08] text-[#e8e3dc]/50 hover:text-[#e8e3dc]/80 hover:border-[#e8a045]/25 transition-all duration-200 cursor-default font-light"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
