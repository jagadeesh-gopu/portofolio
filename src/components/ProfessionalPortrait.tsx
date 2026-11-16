import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Terminal, Code2, Cpu, ExternalLink, Zap, ShieldCheck, Activity, Award } from 'lucide-react';

export const ProfessionalPortrait: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount(prev => (prev + 1) % 100);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-14deg to +14deg for responsive 3D feel)
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto perspective-container select-none">
      {/* Outer Holographic Ambient Aura Glow */}
      <div 
        className="absolute -inset-3 rounded-3xl opacity-75 blur-2xl transition-all duration-700 pointer-events-none"
        style={{
          background: isHovered 
            ? 'conic-gradient(from 180deg at 50% 50%, #38bdf8 0deg, #e26a48 100deg, #10b981 220deg, #6366f1 310deg, #38bdf8 360deg)'
            : 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.45), rgba(226, 106, 72, 0.3), rgba(16, 185, 129, 0.2), transparent 75%)',
          animation: isHovered ? 'halo-rotate 6s linear infinite' : 'pulse-slow 4s ease-in-out infinite'
        }}
      />

      {/* Main 3D Interactive Card Frame */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className={`relative rounded-2xl p-3 sm:p-4 shadow-2xl backdrop-blur-xl border transition-all duration-300 ${
          isHovered 
            ? 'bg-gradient-to-b from-white/95 via-white/90 to-white/80 border-cyan-400/50 shadow-cyan-500/20' 
            : 'bg-gradient-to-b from-white/90 to-white/75 border-white/90 shadow-ink-900/10'
        } animate-float-subtle`}
      >
        {/* Dynamic Light Sheen Glare (Parallax Reflection) */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none z-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.65), rgba(56,189,248,0.15) 40%, transparent 80%)`,
            }}
          />
        )}

        {/* Top Status Header Bar */}
        <div 
          className="flex items-center justify-between mb-3 px-1.5 text-xs font-mono tracking-wider text-ink-800"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            </span>
            <span className="font-semibold text-ink-900 text-[11px] sm:text-xs tracking-tight">
              ACTIVE &bull; SEEKING INTERNSHIPS
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
            <span>B.TECH '28</span>
          </div>
        </div>

        {/* Main Photo Container Frame */}
        <div 
          className="relative aspect-[4/4.9] w-full overflow-hidden rounded-xl bg-ink-950 shadow-inner group"
          style={{ transform: 'translateZ(10px)' }}
        >
          {/* Subtle Cyber Grid in Background */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none z-10"
            style={{
              backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px)',
              backgroundSize: '18px 18px'
            }}
          />

          {/* Actual Photo with Precision Studio Grading */}
          {!imgError ? (
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/jagadeesh-portrait.jpg"
                alt="Jagadeesh Gopu — Software Developer & B.Tech Scholar"
                onError={() => setImgError(true)}
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[1.02] contrast-[1.05]"
              />

              {/* Cinematic Vignette Overlay to enhance focus on face */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 38%, transparent 45%, rgba(7, 24, 41, 0.35) 75%, rgba(7, 24, 41, 0.75) 100%)'
                }}
              />

              {/* Bottom gradient fade for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink-950 via-ink-950/75 to-transparent pointer-events-none z-15" />
            </div>
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-ink-950 via-ink-900 to-[#0c314f] text-white">
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full border-2 border-dashed border-coral/60 flex items-center justify-center bg-ink-700/60 shadow-xl group-hover:border-coral transition-colors">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-coral to-amber-400 flex items-center justify-center shadow-lg font-serif text-3xl font-bold tracking-tight text-white">
                    JG
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-ink-900 rounded-full p-1.5 border border-white/20 shadow-md">
                  <Code2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>
              </div>
              <h4 className="font-serif text-2xl font-medium tracking-tight text-white">Jagadeesh Gopu</h4>
              <p className="text-xs text-gray-300 font-mono mt-1">Computer Science Scholar &bull; Builder</p>
            </div>
          )}

          {/* Smooth High-Tech Laser Scanline Effect */}
          <div className="scanline-effect" />

          {/* Floating High-Tech Corner Markers */}
          <div className="absolute top-2.5 left-2.5 text-[9px] font-mono text-cyan-300/70 tracking-widest pointer-events-none z-20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 border-t border-l border-cyan-400"></span>
            <span>SYS.LIVE</span>
          </div>
          <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-coral/80 tracking-widest pointer-events-none z-20 flex items-center gap-1">
            <span>MOD // DEV</span>
            <span className="w-1.5 h-1.5 border-t border-r border-coral"></span>
          </div>

          {/* Floating Live Tech Stack Badges (Parallax 3D Layer) */}
          <div 
            className="absolute top-10 right-3 flex flex-col gap-1.5 z-20 pointer-events-none"
            style={{ transform: 'translateZ(30px)' }}
          >
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-ink-900/80 text-cyan-300 border border-cyan-400/30 backdrop-blur-md shadow-md animate-pulse">
              React 18
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-ink-900/80 text-coral-light border border-coral/30 backdrop-blur-md shadow-md">
              FastAPI
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-ink-900/80 text-emerald-300 border border-emerald-400/30 backdrop-blur-md shadow-md">
              GenAI
            </span>
          </div>

          {/* Animated Neural Pulse / Frequency Visualizer */}
          <div 
            className="absolute top-10 left-3 flex items-end gap-0.5 h-4 z-20 pointer-events-none"
            style={{ transform: 'translateZ(25px)' }}
          >
            {[40, 75, 50, 90, 60, 85].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-cyan-400/70 rounded-full transition-all duration-300"
                style={{
                  height: `${isHovered ? (h * ((pulseCount % 5) + 1)) / 4 : h * 0.4}%`,
                  animation: `wave-pulse 1.4s ease-in-out infinite ${(i * 0.15).toFixed(2)}s`
                }}
              />
            ))}
          </div>

          {/* Bottom Floating Info Glass Card */}
          <div 
            className="absolute bottom-3 inset-x-3 rounded-xl bg-ink-950/85 backdrop-blur-md p-3 border border-white/15 flex items-center justify-between text-white shadow-xl z-20"
            style={{ transform: 'translateZ(35px)' }}
          >
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5 text-white">
                <Sparkles className="w-3.5 h-3.5 text-coral animate-pulse" />
                Jagadeesh Gopu
              </p>
              <p className="text-[10px] text-gray-300 font-mono mt-0.5 flex items-center gap-1.5">
                <span>Joy University &times; NIAT</span>
                <span className="text-gray-500">&bull;</span>
                <span className="text-cyan-400">CS Core</span>
              </p>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gradient-to-r from-coral/25 to-amber-500/25 text-coral-light text-[10px] font-mono font-semibold border border-coral/40 shadow-sm">
                <Award className="w-3 h-3 text-coral" />
                96.2%
              </span>
            </div>
          </div>
        </div>

        {/* Footer Technical Metadata & Interactive Action Bar */}
        <div 
          className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-mono"
          style={{ transform: 'translateZ(20px)' }}
        >
          <span className="flex items-center gap-1.5 text-ink-800 font-medium">
            <Cpu className="w-3.5 h-3.5 text-coral" />
            <span>Full-Stack &amp; Applied AI</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
            <ShieldCheck className="w-3 h-3" />
            Verified Profile
          </span>
        </div>
      </div>
    </div>
  );
};