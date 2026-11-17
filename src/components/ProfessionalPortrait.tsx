import React, { useState, useRef } from 'react';
import { Sparkles, Code2, Award, ArrowUpRight } from 'lucide-react';

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

    // Smooth, subtle 3D tilt (-8deg to +8deg for refined elegance)
    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;

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
      {/* Subtle, Warm Editorial Ambient Halo */}
      <div 
        className="absolute -inset-3 rounded-[2.5rem] opacity-60 blur-2xl transition-all duration-700 pointer-events-none"
        style={{
          background: isHovered 
            ? 'radial-gradient(circle at 50% 50%, rgba(226, 106, 72, 0.4), rgba(56, 189, 248, 0.25), transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(188, 227, 221, 0.5), rgba(226, 106, 72, 0.2), transparent 70%)',
          transform: isHovered ? 'scale(1.04)' : 'scale(1)',
        }}
      />

      {/* Main Elegant 3D Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative rounded-3xl p-3 sm:p-4 bg-white/90 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_rgba(7,24,41,0.08)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(226,106,72,0.15)] animate-float-subtle"
      >
        {/* Soft Glass Sheen Glare Reflection */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.45), transparent 75%)`,
            }}
          />
        )}

        {/* Top Minimalist Header */}
        <div 
          className="flex items-center justify-between mb-3 px-1.5"
          style={{ transform: 'translateZ(18px)' }}
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-medium text-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Internships</span>
          </div>

          <span className="text-[11px] font-mono text-gray-500 font-medium">
            B.Tech '28
          </span>
        </div>

        {/* Photo Container Frame with Rounded Geometry & Soft Depth */}
        <div 
          className="relative aspect-[4/4.8] w-full overflow-hidden rounded-2xl bg-ink-950 shadow-inner group"
          style={{ transform: 'translateZ(10px)' }}
        >
          {!imgError ? (
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/jagadeesh-portrait.jpg"
                alt="Jagadeesh Gopu"
                onError={() => setImgError(true)}
                className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-[1.02] contrast-[1.04]"
              />

              {/* Bottom Subtle Gradient Fade for Clean Readability */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-ink-950 via-ink-900 to-[#0c314f] text-white">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-coral to-amber-400 flex items-center justify-center shadow-lg font-serif text-3xl font-bold tracking-tight text-white mb-3">
                JG
              </div>
              <h4 className="font-serif text-2xl font-medium tracking-tight text-white">Jagadeesh Gopu</h4>
              <p className="text-xs text-gray-300 font-mono mt-1">Computer Science Scholar</p>
            </div>
          )}

          {/* Floating Minimalist Tags (Parallax Layer) */}
          <div 
            className="absolute top-3.5 right-3.5 flex flex-col items-end gap-1.5 z-20 pointer-events-none"
            style={{ transform: 'translateZ(26px)' }}
          >
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/40 text-white/90 backdrop-blur-md border border-white/20 shadow-sm">
              React &bull; TS
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/40 text-coral-light backdrop-blur-md border border-white/20 shadow-sm">
              Python &bull; FastAPI
            </span>
          </div>

          {/* Bottom Floating Info Pill inside Frame */}
          <div 
            className="absolute bottom-3 inset-x-3 rounded-xl bg-ink-950/80 backdrop-blur-md p-3 border border-white/15 flex items-center justify-between text-white shadow-xl z-20"
            style={{ transform: 'translateZ(30px)' }}
          >
            <div>
              <p className="text-sm font-semibold tracking-wide text-white flex items-center gap-1.5">
                Jagadeesh Gopu
                <Sparkles className="w-3.5 h-3.5 text-coral" />
              </p>
              <p className="text-[11px] text-gray-300 font-sans mt-0.5">
                Joy University &times; NIAT
              </p>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-coral/20 text-coral-light text-[11px] font-medium border border-coral/30">
                <Award className="w-3.5 h-3.5 text-coral" />
                96.2%
              </span>
            </div>
          </div>
        </div>

        {/* Footer Technical Summary */}
        <div 
          className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-sans"
          style={{ transform: 'translateZ(16px)' }}
        >
          <span className="font-medium text-ink-800">
            Full-Stack Software Developer
          </span>
          <span className="text-[11px] text-gray-400 font-mono">
            Interactive 3D Motion
          </span>
        </div>
      </div>
    </div>
  );
};