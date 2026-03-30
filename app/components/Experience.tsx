"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const experiences = [
  {
    role: "Frontend Developer / Web Developer",
    company: "Astratechai",
    period: "Jun 2025 – Jul 2025",
    color: "from-indigo-500 to-purple-500",
    points: [
      "Built a real-time chat application using JavaScript and REST APIs",
      "Improved application performance by 30% through optimization techniques",
      "Created reusable UI components to accelerate development workflow",
      "Implemented robust state management for complex UI interactions",
    ],
  },
  {
    role: "Flutter App Developer",
    company: "AICTE",
    period: "Jun 2024 – Jul 2024",
    color: "from-purple-500 to-pink-500",
    points: [
      "Built a vehicle repair service application using Flutter & Dart",
      "Improved UI responsiveness and overall user experience",
      "Integrated Firebase for real-time data and authentication",
      "Connected REST APIs for dynamic content and service management",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase text-center mb-2">
            My Journey
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        </FadeInSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeInSection key={exp.company} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#0a0a0f] md:-translate-x-1.5 z-10" />

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300">
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${exp.color}`}
                      />
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-white text-lg">
                            {exp.role}
                          </h3>
                          <p
                            className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((pt) => (
                          <li
                            key={pt}
                            className="text-sm text-gray-400 flex gap-2"
                          >
                            <span className="text-indigo-400 mt-0.5 shrink-0">
                              ▸
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
