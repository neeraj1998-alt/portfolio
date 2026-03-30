"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    index: "01",
    title: "Sarthi",
    subtitle: "Mental Wellness Companion",
    description:
      "Cross-platform mental wellness app with guided meditation, mood tracking, and AI-powered journaling. Built for accessibility and calm UX.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
    github: "https://github.com/neeraj1998-alt",
    badge: "SIH 2025 Grand Finalist",
  },
  {
    index: "02",
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
    <section id="projects" className="relative z-10 py-32 px-6 sm:px-12 border-t border-[#e8e3dc]/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-[#e8a045] text-xs font-mono tracking-[0.2em] uppercase mb-4">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e8e3dc] tracking-tight mb-16">Selected work</h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-px bg-[#e8e3dc]/[0.06]">
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ backgroundColor: "#141414" }}
                transition={{ duration: 0.2 }}
                className="group bg-[#0c0c0c] p-8 flex flex-col h-full min-h-[360px]"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-[#e8e3dc]/15">{project.index}</span>
                  <span className="text-[10px] font-mono text-[#e8a045]/50 border border-[#e8a045]/15 px-2 py-0.5 tracking-wide">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-[#e8e3dc] font-bold text-2xl mb-1">{project.title}</h3>
                <p className="text-[#e8e3dc]/25 text-sm mb-5">{project.subtitle}</p>
                <p className="text-[#e8e3dc]/45 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 border border-[#e8e3dc]/[0.07] text-[#e8e3dc]/30 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#e8e3dc]/30 hover:text-[#e8a045] transition-colors duration-200 w-fit"
                >
                  <FaGithub size={13} />
                  View on GitHub
                </a>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
