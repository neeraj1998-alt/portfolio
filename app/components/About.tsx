"use client";

import FadeInSection from "./FadeInSection";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

const highlights = [
  { icon: "mobile", label: "Cross-Platform Apps" },
  { icon: "code", label: "Clean Code" },
  { icon: "rocket", label: "Performance Focused" },
] as const;

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase text-center mb-2">
            Get to know me
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <FadeInSection direction="left">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 blur-xl opacity-30" />
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-7xl">👨‍💻</span>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-2xl border border-indigo-500/20" />
            </div>
          </FadeInSection>

          {/* Text */}
          <FadeInSection direction="right" delay={0.1}>
            <div className="space-y-5">
              <p className="text-gray-300 text-lg leading-relaxed">
                Flutter Developer with experience building scalable
                cross-platform applications using{" "}
                <span className="text-indigo-400 font-medium">
                  Flutter, Dart, Firebase,
                </span>{" "}
                and{" "}
                <span className="text-indigo-400 font-medium">REST APIs</span>.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Skilled in state management, UI/UX optimization, and performance
                tuning. I love turning complex problems into elegant, intuitive
                mobile experiences that users actually enjoy.
              </p>
              <p className="text-gray-400 leading-relaxed">
                As a{" "}
                <span className="text-purple-400 font-medium">
                  SIH 2025 Grand Finalist
                </span>
                , I&apos;ve proven my ability to build impactful solutions under
                pressure. Always learning, always shipping.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    <span className="text-indigo-400">{h.icon}</span>
                    {h.label}
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="mailto:mishrampu@gmail.com"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  mishrampu@gmail.com
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href="tel:+919798460836"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  +91 9798460836
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
