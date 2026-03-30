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
    <section id="skills" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-[#00d4aa] text-xs font-mono tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">What I work with</h2>
        </FadeInSection>

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <FadeInSection key={group.category} delay={gi * 0.07}>
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
                <span className="text-xs font-mono text-white/20 uppercase tracking-widest w-28 shrink-0">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-md bg-[#0f0f1a] border border-white/[0.08] text-white/60 hover:text-white hover:border-[#00d4aa]/30 transition-all duration-200 cursor-default"
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
