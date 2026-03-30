"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "Sarthi – Mental Wellness Companion",
    description:
      "A cross-platform mental wellness app designed to support users through guided meditation, mood tracking, and AI-powered journaling. Built with a focus on accessibility and calming UX.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management"],
    github: "https://github.com/neeraj1998-alt",
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "hover:border-indigo-500/50",
    badge: "SIH 2025 Grand Finalist",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  },
  {
    title: "Vehicle Repair Service App",
    description:
      "A full-featured mobile app connecting vehicle owners with nearby repair shops. Features real-time booking, service tracking, Firebase authentication, and a clean, responsive UI.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Android Studio"],
    github: "https://github.com/neeraj1998-alt",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "hover:border-purple-500/50",
    badge: "AICTE Internship",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase text-center mb-2">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ duration: 0.25 }}
                className={`relative h-full p-6 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 ${project.border} backdrop-blur-sm transition-all duration-300 flex flex-col`}
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 hover:opacity-100 blur-xl transition-opacity duration-300 -z-10`}
                />

                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight pr-4">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border whitespace-nowrap ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200 px-4 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 transition-all duration-200"
                  >
                    <FaExternalLinkAlt size={12} />
                    View
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
