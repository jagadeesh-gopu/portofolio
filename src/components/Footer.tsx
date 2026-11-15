import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-900 border-t border-ink-800 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Monogram and Attribution */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="font-serif text-xl font-bold text-white tracking-tight">JG</span>
          <span className="text-gray-600">|</span>
          <p className="text-xs font-mono">
            &copy; 2026 Jagadeesh Gopu &bull; Computer Science Scholar &amp; Developer
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white transition-all border border-white/10"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-coral" />
        </button>

      </div>
    </footer>
  );
};
