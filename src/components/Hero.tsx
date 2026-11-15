import React from 'react';
import { ArrowDownRight, ArrowUpRight, Award, Terminal, Code2, Sparkles } from 'lucide-react';
import { ProfessionalPortrait } from './ProfessionalPortrait';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden">
      {/* Subtle grid and radial background accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-seafoam/20 via-coral/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Professional Statements & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Professional Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-gray-200/80 shadow-sm text-xs font-mono font-medium text-ink-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>B.TECH COMPUTER SCIENCE &bull; JOY UNIV &times; NIAT</span>
            </div>

            {/* Main Headline with Editorial Serifs and Terracotta Highlights */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink-900 leading-[1.12]">
              Architecting <span className="italic text-coral font-normal">purposeful</span> digital systems &amp; intelligent web experiences.
            </h1>

            {/* Professional Narrative */}
            <p className="text-base sm:text-lg text-ink-700 leading-relaxed max-w-xl font-normal">
              Hello, I’m <strong className="text-ink-900 font-semibold">Jagadeesh Gopu</strong> — a software-focused engineering scholar specializing in modern full-stack development, Python-driven API architecture, and applied Generative AI integrations.
            </p>

            {/* Key Professional Highlights Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 rounded-xl bg-white/80 border border-gray-100 shadow-sm">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Focus</div>
                <div className="text-sm font-semibold text-ink-900 mt-0.5">Full-Stack &amp; AI</div>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-gray-100 shadow-sm">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Academics</div>
                <div className="text-sm font-semibold text-ink-900 mt-0.5">96.2% Distinction</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/80 border border-gray-100 shadow-sm">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Availability</div>
                <div className="text-sm font-semibold text-emerald-600 mt-0.5">Open for Internships</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-ink-900 text-white hover:bg-coral transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>View Featured Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/jagadeesh-gopu-5ab123406"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-white text-ink-800 border border-gray-200/90 hover:border-ink-700 hover:text-ink-900 transition-all duration-300 shadow-sm active:scale-95"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-ink-900" />
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="pt-6">
              <a 
                href="#about"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 hover:text-coral transition-colors uppercase"
              >
                <span>Scroll to Explore Background</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Professional Animated Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfessionalPortrait />
          </div>

        </div>
      </div>
    </section>
  );
};
