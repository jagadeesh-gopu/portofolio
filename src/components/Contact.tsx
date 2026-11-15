import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jagadeeshgopu6@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    // Construct standard mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(`${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    window.location.href = `mailto:jagadeeshgopu6@gmail.com?subject=${subject}&body=${body}`;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#09273f] text-white relative overflow-hidden">
      {/* Decorative ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-coral uppercase mb-4">
          <span className="font-bold">05</span>
          <span className="text-gray-500">/</span>
          <span>INITIATE CONTACT &bull; PROFESSIONAL INQUIRIES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Value Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Let’s engineer something <span className="italic text-coral font-normal">impactful</span> together.
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              I am actively seeking software engineering internship opportunities, technical research collaborations, and open-source contributions. Whether you have a project idea, question, or role to discuss, feel free to reach out.
            </p>

            {/* Quick Email Pill with Copy Feature */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                Direct Communication Channel
              </span>
              <div className="flex items-center justify-between gap-3 bg-ink-900/90 p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-coral shrink-0" />
                  <span className="text-sm font-mono text-white truncate">
                    jagadeeshgopu6@gmail.com
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/10 hover:bg-coral transition-colors flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gray-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Professional Presence Links */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/jagadeesh-gopu-5ab123406"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all group"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
              </a>

              <a
                href="https://github.com/jagadeesh-gopu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all group"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-coral" />
                <h3 className="font-serif text-2xl text-white">Send a Direct Message</h3>
              </div>
              <p className="text-xs text-gray-400 font-mono mb-6">
                Deliver an inquiry directly to Jagadeesh's inbox.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-semibold text-white">Preparing Your Email Client</h4>
                  <p className="text-xs text-emerald-200 font-mono">
                    Your default mail program should open with the pre-filled message.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-coral transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-coral transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-1">
                      Message / Inquiry
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your project, internship role, or question..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-coral transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-coral hover:bg-coral-dark text-white text-sm font-medium transition-all shadow-md active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
