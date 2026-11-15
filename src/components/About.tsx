import React from 'react';
import { CheckCircle2, Compass, Layers, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-seafoam/25 border-y border-seafoam/40 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-ink-700 uppercase mb-4">
          <span className="font-bold text-coral">01</span>
          <span className="text-gray-400">/</span>
          <span>BACKGROUND &amp; ENGINEERING PHILOSOPHY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-900 leading-tight">
              Combining <span className="italic text-coral font-normal">analytical rigor</span> with human-centric software engineering.
            </h2>

            <div className="space-y-4 text-ink-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                As a Computer Science scholar at Joy University in collaboration with NIAT, my focus is centered on translating technical ideas into resilient, production-ready digital products. Rather than building for novelty, I prioritize clean architecture, performant user interfaces, and reliable data pipelines.
              </p>
              <p>
                My technical pursuits bridge modern frontend ecosystems (React, TypeScript, Tailwind CSS) with robust Python microservices (FastAPI) and pragmatic Generative AI implementations. I maintain a high standard for analytical depth, informed by a strong foundation in mathematics and physical systems.
              </p>
            </div>

            {/* Core Values / Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-white/80 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ink-900">Clean, Maintainable Code</h4>
                  <p className="text-xs text-gray-600 mt-1">Writing modular, readable logic adhering to industry software patterns.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-white/80 shadow-sm">
                <Layers className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ink-900">Full-Stack Synthesis</h4>
                  <p className="text-xs text-gray-600 mt-1">Connecting sleek client experiences with fast, reliable backend microservices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pull Quote & Professional Highlight Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 relative overflow-hidden">
              <span className="font-serif text-8xl text-coral/20 absolute -top-4 -left-2 select-none">“</span>
              
              <div className="relative z-10 space-y-4">
                <blockquote className="font-serif text-2xl text-ink-900 italic leading-snug">
                  “Simplicity is prerequisite for reliability.”
                </blockquote>
                <p className="text-sm text-ink-700 font-sans leading-relaxed">
                  Dedicated to engineering software that is purposeful, efficient, and transparent — solving tangible friction points with thoughtful design.
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-ink-900">Jagadeesh Gopu</div>
                    <div className="text-[11px] font-mono text-gray-500">Undergraduate Scholar</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-seafoam/40 text-ink-900 text-[11px] font-mono font-medium">
                    Joy Univ &times; NIAT
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="rounded-2xl bg-ink-900 text-white p-6 shadow-md border border-ink-800">
              <div className="text-xs font-mono uppercase tracking-widest text-coral mb-3">Academic Distinctions</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between pb-2 border-b border-ink-800">
                  <span className="text-gray-300">Intermediate Board Exams</span>
                  <span className="font-mono font-semibold text-emerald-400">962 / 1000 (A Grade)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-300">Secondary School Certificate</span>
                  <span className="font-mono font-semibold text-emerald-400">571 / 600 (95.2%)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
