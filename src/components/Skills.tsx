import React from 'react';
import { 
  Layout, 
  Server, 
  BrainCircuit, 
  Code2, 
  FileSpreadsheet, 
  Atom, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const competencies = [
    {
      id: '01',
      title: 'Frontend Architecture',
      category: 'Client Engineering',
      description: 'Engineering responsive, accessible, and high-performance user interfaces with modern React ecosystems and Tailwind CSS.',
      technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
      tag: 'Core Stack',
      icon: Layout,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      id: '02',
      title: 'Backend & API Engineering',
      category: 'Server Systems',
      description: 'Developing structured, asynchronous microservices and clean RESTful API contracts utilizing Python and FastAPI.',
      technologies: ['Python', 'FastAPI', 'RESTful APIs', 'Pydantic', 'Async Architecture'],
      tag: 'Backend Core',
      icon: Server,
      color: 'text-coral',
      bgColor: 'bg-coral-light'
    },
    {
      id: '03',
      title: 'Generative AI & LLM Integration',
      category: 'Applied Intelligence',
      description: 'Leveraging state-of-the-art foundation models and API orchestration to build smart, context-aware application features.',
      technologies: ['LLM APIs', 'Prompt Architecture', 'Agent Workflows', 'Model Optimization'],
      tag: 'Specialization',
      icon: BrainCircuit,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: '04',
      title: 'Computer Science Fundamentals',
      category: 'Core Logic',
      description: 'Rigorous application of data structures, algorithmic design principles, modularity, and clean object-oriented patterns.',
      technologies: ['Data Structures', 'Algorithm Design', 'Clean Code', 'Debugging'],
      tag: 'Foundation',
      icon: Code2,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      id: '05',
      title: 'Data Analytics & Modeling',
      category: 'Quantitative Analysis',
      description: 'Synthesizing structured business datasets, automating complex formula calculations, and building decision models.',
      technologies: ['Advanced Excel', 'Data Cleaning', 'Trend Modeling', 'Visualization'],
      tag: 'Analytics',
      icon: FileSpreadsheet,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      id: '06',
      title: 'Computational Science & Physics',
      category: 'Academic Exploration',
      description: 'Deep theoretical foundation in physics, quantum principles, and mathematical modeling that informs systemic problem-solving.',
      technologies: ['Quantum Concepts', 'Mathematical Physics', 'Analytical Modeling'],
      tag: 'Academic Focus',
      icon: Atom,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
  ];

  return (
    <section id="expertise" className="py-24 max-w-6xl mx-auto px-6 sm:px-8">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-ink-700 uppercase mb-4">
        <span className="font-bold text-coral">02</span>
        <span className="text-gray-400">/</span>
        <span>TECHNICAL COMPETENCIES &amp; TOOLKIT</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-900 leading-tight">
            Core <span className="italic text-coral font-normal">proficiencies</span> &amp; evolving domain expertise.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl">
            A balanced technical stack rooted in modern software engineering principles, pragmatic tool selection, and relentless daily execution.
          </p>
        </div>
        <div className="text-xs font-mono text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-lg self-start md:self-end">
          UPDATED &bull; ACADEMIC YEAR 2026
        </div>
      </div>

      {/* Grid of Competencies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencies.map((comp) => {
          const Icon = comp.icon;
          return (
            <div
              key={comp.id}
              className="group relative rounded-2xl bg-white p-7 shadow-sm border border-gray-200/80 hover:border-coral/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Line */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${comp.bgColor} ${comp.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-coral transition-colors">
                    {comp.id}
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                  {comp.category}
                </div>
                <h3 className="font-serif text-2xl text-ink-900 font-medium tracking-tight mb-2">
                  {comp.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {comp.description}
                </p>
              </div>

              {/* Technologies list */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {comp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[11px] font-mono text-ink-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-medium">
                    <Check className="w-3 h-3" />
                    {comp.tag}
                  </span>
                  <span className="text-gray-400 font-mono text-[11px] group-hover:text-ink-900 transition-colors">
                    Active &bull; Verified
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
