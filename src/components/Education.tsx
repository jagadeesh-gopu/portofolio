import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  const educationTimeline = [
    {
      period: '2026 — PRESENT',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Joy University in collaboration with NIAT',
      grade: 'Undergraduate Program',
      badge: 'Enrolled & Active',
      description: 'Undergraduate engineering curriculum emphasizing software systems, modern algorithmic problem-solving, full-stack architectures, and practical industry workflows.',
      tags: ['Computer Science', 'Software Architecture', 'Data Structures', 'Web Engineering']
    },
    {
      period: 'COMPLETED 2026',
      degree: 'Senior Secondary / Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      grade: '962 / 1000 Marks (96.2%) &bull; Grade A Distinction',
      badge: 'High Distinction',
      description: 'Rigorous two-year pre-university program with core specialization in Mathematics, Physics, and Chemistry (MPC). Developed deep quantitative, analytical, and logic foundations.',
      tags: ['Advanced Mathematics', 'Physics', 'Analytical Problem-Solving', 'Chemistry']
    },
    {
      period: 'COMPLETED 2024',
      degree: 'Secondary School Certificate (Class X)',
      institution: 'Chaitanya Bharathi High School, Lingamguntla',
      grade: '571 / 600 Marks (95.2%)',
      badge: 'Academic Merit',
      description: 'Comprehensive general sciences and mathematics foundational education, graduated in the top tier of the graduating class.',
      tags: ['Mathematics', 'Science & Logic', 'Scholastic Merit']
    }
  ];

  return (
    <section id="education" className="py-24 bg-white border-t border-gray-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-ink-700 uppercase mb-4">
          <span className="font-bold text-coral">04</span>
          <span className="text-gray-400">/</span>
          <span>ACADEMIC FOUNDATIONS &amp; CREDENTIALS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-900 leading-tight">
              A track record of <span className="italic text-coral font-normal">academic excellence</span> and discipline.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl">
              Consistent high academic achievement establishing rigorous analytical capabilities and a continuous commitment to mastery.
            </p>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 gap-6">
          {educationTimeline.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-[#f8fafc] border border-gray-200/80 hover:border-coral/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-gray-200 text-ink-800 shadow-sm">
                    <GraduationCap className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                      {item.period}
                    </span>
                    <h3 className="font-serif text-2xl text-ink-900 font-medium tracking-tight">
                      {item.degree}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-auto">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-800">
                  <span className="font-medium">{item.institution}</span>
                  <span className="text-gray-400">&bull;</span>
                  <span className="font-mono text-coral font-semibold">{item.grade}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-white border border-gray-200 text-[11px] font-mono text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
