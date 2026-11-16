import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Download, 
  PhoneCall, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  BarChart3,
  Layers
} from 'lucide-react';

export const Projects: React.FC = () => {
  // Interactive State for Recall Call Simulation
  const [callActive, setCallActive] = useState(true);
  const [selectedNote, setSelectedNote] = useState<number | null>(0);

  // Interactive State for AI Credit Comparator
  const [selectedProvider, setSelectedProvider] = useState<'gemini' | 'openai' | 'anthropic' | 'deepseek'>('gemini');

  const sampleNotes = [
    { title: "Project Deliverables", detail: "Review Q1 frontend deployment & API latency targets" },
    { title: "Follow-Up Questions", detail: "Confirm FastAPI asynchronous worker configuration" },
    { title: "Action Item", detail: "Share GitHub repository link after the discussion" }
  ];

  const providerData = {
    gemini: {
      name: "Google Gemini 1.5 / 2.0",
      freeTier: "15 Requests / Min Free",
      credits: "Google AI Studio Free Key",
      pricing: "$0.075 / 1M input tokens",
      badge: "Highest Free Quota",
      color: "border-cyan-400 text-cyan-400"
    },
    openai: {
      name: "OpenAI GPT-4o / Mini",
      freeTier: "Tier 1: Pay-as-you-go",
      credits: "$5 initial grant on sign-up",
      pricing: "$0.150 / 1M input tokens",
      badge: "Industry Standard",
      color: "border-emerald-400 text-emerald-400"
    },
    anthropic: {
      name: "Anthropic Claude 3.5 Sonnet",
      freeTier: "Limited Web Chat Tier",
      credits: "$5 console starter credits",
      pricing: "$3.00 / 1M input tokens",
      badge: "Top Coding Accuracy",
      color: "border-amber-400 text-amber-400"
    },
    deepseek: {
      name: "DeepSeek V3 / R1",
      freeTier: "5M Free Tokens Initial",
      credits: "High availability platform",
      pricing: "$0.14 / 1M input tokens",
      badge: "Ultra Low Cost",
      color: "border-blue-400 text-blue-400"
    }
  };

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6 sm:px-8">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-ink-700 uppercase mb-4">
        <span className="font-bold text-coral">03</span>
        <span className="text-gray-400">/</span>
        <span>SELECTED ENGINEERING PROJECTS</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-900 leading-tight">
            Featured <span className="italic text-coral font-normal">software</span> systems &amp; practical applications.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl">
            Tangible, end-to-end applications solving real workflow friction points through thoughtful engineering and modern design systems.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        
        {/* Project 1: Recall Call (High-Contrast Navy Card with Interactive Phone Simulator) */}
        <div className="rounded-3xl bg-gradient-to-br from-ink-900 via-ink-800 to-[#071d30] text-white p-8 sm:p-12 shadow-2xl border border-ink-700/80 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Information & Architecture */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-coral/20 text-coral-light border border-coral/30">
                  01 &bull; FEATURED APPLICATION
                </span>
                <span className="text-xs font-mono text-gray-400">PRODUCTION IN PROGRESS</span>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-coral">Contextual Productivity Tool</p>
                <h3 className="font-serif text-3xl sm:text-4xl text-white mt-1">
                  Recall <span className="italic text-coral font-normal">Call</span>
                </h3>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                Engineered an intelligent communication assistant addressing memory lapse and lost action items during phone calls. Recall Call delivers real-time contextual reminders before, during, and after phone conversations to keep commitments on track.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-gray-400">Architecture</div>
                  <div className="text-white font-medium mt-0.5">React &bull; Web State Machine</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-gray-400">Core Value</div>
                  <div className="text-white font-medium mt-0.5">Zero-Friction Follow-Ups</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://github.com/jagadeesh-gopu/Recall-call-app-bolt.new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-white text-ink-900 hover:bg-coral hover:text-white transition-all duration-300 shadow-md active:scale-95"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Source Code</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Right Column: Live Interactive Phone Simulator */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs rounded-3xl bg-ink-900 border-2 border-white/15 p-4 shadow-2xl relative backdrop-blur-md">
                
                {/* Simulated Phone Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-gray-400">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-400 font-semibold">Active Call</span>
                  </div>
                </div>

                {/* Simulated Call Contact & Pulse */}
                <div className="py-5 text-center relative">
                  <div className="relative inline-flex items-center justify-center mb-3">
                    <div className="absolute w-20 h-20 rounded-full bg-coral/20 animate-ping opacity-40" />
                    <div className="w-14 h-14 rounded-full bg-coral/30 border border-coral flex items-center justify-center text-coral shadow-lg">
                      <PhoneCall className="w-6 h-6 animate-pulse" />
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-white">Advisory Team</h4>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">Call Duration: 04:12</p>
                </div>

                {/* Real-time Context Notes Chips (Interactive!) */}
                <div className="space-y-2 mt-2">
                  <div className="text-[11px] font-mono text-coral uppercase tracking-wider flex items-center justify-between">
                    <span>Pre-loaded Call Agenda:</span>
                    <span className="text-[10px] text-gray-400">Tap to review</span>
                  </div>

                  {sampleNotes.map((note, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedNote(idx)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 border text-xs ${
                        selectedNote === idx
                          ? 'bg-white/15 border-coral text-white shadow'
                          : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="font-semibold flex items-center justify-between">
                        <span>{note.title}</span>
                        {selectedNote === idx && <CheckCircle2 className="w-3.5 h-3.5 text-coral" />}
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">{note.detail}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-center">
                  <span className="text-[10px] font-mono text-gray-400">
                    &bull; Interactive Recall Call Simulator &bull;
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Project 2: AI Credit Guide (Clean Slate Card with Interactive Pricing Matrix) */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-lg border border-gray-200/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                  02 &bull; ANDROID UTILITY PLATFORM
                </span>
                <span className="text-xs font-mono text-gray-500">MOBILE ECOSYSTEM</span>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-coral">Developer &amp; Cost Intelligence</p>
                <h3 className="font-serif text-3xl sm:text-4xl text-ink-900 mt-1">
                  AI Credit &amp; <span className="italic text-coral font-normal">Rate-Limit Navigator</span>
                </h3>
              </div>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                Engineered a native Android application benchmarking free tiers, token allowances, and rate limits across frontier AI providers. Empowers student engineers and builders to optimize API architecture and avoid unexpected runtime costs.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">Android SDK</span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">LLM API Pricing</span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">Cost Optimization</span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">Offline Cache</span>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/jagadeesh-gopu/Credit-guider"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-ink-900 text-white hover:bg-coral transition-all duration-300 shadow-md active:scale-95"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Source Code</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href="/ai-credit-guide.apk"
                  download="AI-Credit-Guide.apk"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-white text-ink-800 border border-gray-200/90 hover:border-ink-700 hover:text-ink-900 transition-all duration-300 shadow-sm active:scale-95"
                >
                  <Download className="w-4 h-4 text-emerald-600" />
                  <span>Download APK (Direct)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Live Interactive Model Comparator */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#09273f] text-white p-6 shadow-xl border border-gray-800">
                <div className="flex items-center justify-between pb-3 border-b border-gray-700/80 mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-coral" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">Live Tier Comparator</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                    BENCHMARK
                  </span>
                </div>

                {/* Provider Selector Tabs */}
                <div className="grid grid-cols-4 gap-1.5 mb-4 p-1 bg-ink-900 rounded-lg">
                  {(['gemini', 'openai', 'anthropic', 'deepseek'] as const).map((prov) => (
                    <button
                      key={prov}
                      onClick={() => setSelectedProvider(prov)}
                      className={`py-1.5 text-[11px] font-mono capitalize rounded-md transition-all ${
                        selectedProvider === prov
                          ? 'bg-coral text-white font-bold shadow'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {prov}
                    </button>
                  ))}
                </div>

                {/* Display active provider metrics */}
                <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-sm text-white">{providerData[selectedProvider].name}</h5>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                      {providerData[selectedProvider].badge}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 text-xs font-mono">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-gray-400">Free Tier Allowance</span>
                      <span className="text-emerald-300 font-medium">{providerData[selectedProvider].freeTier}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-gray-400">Starter Credits</span>
                      <span className="text-white font-medium">{providerData[selectedProvider].credits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Estimated Token Rate</span>
                      <span className="text-coral-light font-medium">{providerData[selectedProvider].pricing}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 font-mono mt-3 text-center">
                  Live data model from the AI Credit Guide Android app.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
