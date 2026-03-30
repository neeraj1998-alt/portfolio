"use client";

import FadeInSection from "./FadeInSection";
import { HiAcademicCap } from "react-icons/hi";

const education = [
  {
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    institution: "Currently Pursuing",
    period: "2023 – 2026",
    cgpa: "7.6",
    color: "from-indigo-500 to-purple-500",
  },
  {
    degree: "Diploma",
    field: "Engineering",
    institution: "Polytechnic",
    period: "2020 – 2023",
    cgpa: "8.7",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase text-center mb-2">
            Academic Background
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        </FadeInSection>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <FadeInSection key={edu.degree} delay={i * 0.15}>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 flex items-start gap-5">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.color} shrink-0`}>
                  <HiAcademicCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p className="text-gray-400 text-sm">{edu.field}</p>
                      <p className="text-gray-500 text-sm">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full block mb-2">
                        {edu.period}
                      </span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
