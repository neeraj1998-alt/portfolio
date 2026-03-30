"use client";

import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Mobile",
    color: "from-indigo-500 to-purple-500",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Languages",
    color: "from-purple-500 to-pink-500",
    skills: ["Dart", "Java", "C", "C++"],
  },
  {
    category: "Frontend",
    color: "from-pink-500 to-rose-500",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend & DB",
    color: "from-cyan-500 to-indigo-500",
    skills: ["Firebase", "REST APIs", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    color: "from-emerald-500 to-cyan-500",
    skills: ["Git", "GitHub", "Android Studio", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase text-center mb-2">
            What I work with
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <FadeInSection key={group.category} delay={gi * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                <div className={`text-sm font-bold mb-4 bg-gradient-to-r ${group.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + si * 0.05 }}
                      whileHover={{ scale: 1.08 }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${group.color} bg-opacity-10 text-white border border-white/10 cursor-default`}
                    >
                      {skill}
                    </motion.span>
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
