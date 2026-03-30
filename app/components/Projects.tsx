"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "Sarthi",
    subtitle: "Mental Wellness Companion",
    description:
      "Cross-platform mental wellness app with guided meditation, mood tracking, and AI-powered journaling. Built for accessibility and calm UX.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
    github: "https://github.com/neeraj1998-alt",
    badge: "SIH 2025 Grand Finalist",
  },
  {
    title: "Vehicle Repair",
    subtitle: "Service Booking App",
    description:
      "Mobile app connecting vehicle owners with nearby repair shops. Real-time booking, service tracking, Firebase auth, and a clean responsive UI.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
    github: "https://github.com/neeraj1998-alt",
    badge: "AICTE Internship",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <p className="text-[#00d4aa] text-xs font-mono tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">What I&apos;ve built</h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group h-full flex flex-col p-6 rounded-xl bg-[#0f0f1a] border border-white/[0.07] hover:border-[#00d4aa]/25 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  <span className="text-[10px] text-[#00d4aa]/60 font-mono bg-[#00d4aa]/[0.07] border border-[#00d4aa]/15 px-2 py-0.5 rounded ml-3 whitespace-nowrap">
                    {project.badge}
                  </span>
                </div>
                <p className="text-white/30 text-sm mb-4">{project.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.07] text-white/40 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
                  >
                    <FaGithub size={13} /> GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#00d4aa]/60 hover:text-[#00d4aa] transition-colors ml-auto"
                  >
                    View <HiArrowRight size={12} />
                  </a>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
