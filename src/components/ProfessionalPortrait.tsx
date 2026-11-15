import React, { useState, useRef } from 'react';
import { Sparkles, Terminal, Code2, Cpu, ExternalLink } from 'lucide-react';

export const ProfessionalPortrait: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-12deg to +12deg)
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

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
      {/* Ambient background glow ring */}
      <div 
        className="absolute -inset-2 rounded-3xl opacity-70 blur-xl transition-all duration-700 pointer-events-none"
        style={{
          background: isHovered 
            ? 'conic-gradient(from 180deg at 50% 50%, #38bdf8 0deg, #e26a48 120deg, #10b981 240deg, #38bdf8 360deg)'
            : 'radial-gradient(circle at 50% 50%, rgba(188, 227, 221, 0.8), rgba(226, 106, 72, 0.25), transparent 70%)',
          animation: isHovered ? 'halo-rotate 8s linear infinite' : 'pulse-slow 4s ease-in-out infinite'
        }}
      />

      {/* Main 3D Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative rounded-2xl bg-gradient-to-b from-white/95 to-white/80 p-3 sm:p-4 shadow-2xl backdrop-blur-xl border border-white/90 transition-shadow duration-300 hover:shadow-cyan-500/10"
      >
        {/* Dynamic Light Sheen Glare */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.45), transparent 80%)`,
            }}
          />
        )}

        {/* Top Professional Status Header */}
        <div className="flex items-center justify-between mb-3 px-1 text-xs font-mono tracking-wider text-ink-700">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-ink-900">ACTIVE &bull; SEEKING INTERNSHIPS</span>
          </div>
          <span className="text-[11px] text-gray-400 font-mono">B.TECH '28 &bull; IN</span>
        </div>

        {/* Photo Container Frame with High-Tech Edge Treatment */}
        <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-xl bg-ink-900 shadow-inner group">
          {/* Subtle Cyber Grid in Background */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />

          {/* Actual Photo or Fallback Geometric Portrait */}
          {!imgError ? (
            <img
              src="/jagadeesh-portrait.jpg"
              alt="Jagadeesh Gopu"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-ink-900 via-ink-800 to-[#0c314f] text-white">
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
              
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-cyan-300 font-mono">React</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-coral font-mono">FastAPI</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-emerald-300 font-mono">GenAI</span>
              </div>
            </div>
          )}

          {/* Laser scanning line effect on hover */}
          <div className="scanline-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Floating High-Tech Corner Markers */}
          <div className="absolute top-2 left-2 text-[10px] font-mono text-white/50 tracking-widest">+</div>
          <div className="absolute top-2 right-2 text-[10px] font-mono text-white/50 tracking-widest">+</div>
          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/50 tracking-widest">+</div>
          <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/50 tracking-widest">+</div>

          {/* Bottom Floating Info Pill Inside Card */}
          <div className="absolute bottom-3 inset-x-3 rounded-lg bg-ink-900/85 backdrop-blur-md p-2.5 border border-white/10 flex items-center justify-between text-white shadow-lg">
            <div>
              <p className="text-xs font-semibold tracking-wide flex items-center gap-1.5 text-white">
                <Sparkles className="w-3.5 h-3.5 text-coral" />
                Jagadeesh Gopu
              </p>
              <p className="text-[10px] text-gray-400 font-mono">Joy University &times; NIAT</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-2 py-0.5 rounded bg-coral/20 text-coral-light text-[10px] font-mono font-medium border border-coral/30">
                PRO &bull; 01
              </span>
            </div>
          </div>
        </div>

        {/* Footer Technical Metadata */}
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono">
          <span className="flex items-center gap-1 text-ink-700 font-medium">
            <Cpu className="w-3.5 h-3.5 text-coral" />
            Full-Stack &amp; AI
          </span>
          <span className="text-[11px] text-gray-400">
            Interactive 3D Motion
          </span>
        </div>
      </div>
    </div>
  );
};
