import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: 'Broadband Service Chatbot',
    subtitle: 'Conversational AI for customer support',
    flow: ['User Query', 'Dialogflow NLU', 'Node.js Logic', 'MongoDB', 'Response'],
    problem: 'Manual handling of repetitive broadband support queries',
    action: 'Built intelligent chatbot with Dialogflow + Node.js backend and MongoDB for real-time data',
    result: 'Automated customer query handling with dynamic conversation flows and live data retrieval',
    tech: ['Dialogflow', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Inventory Management System',
    subtitle: 'Full-stack retail operations platform',
    flow: ['Client Request', 'Express API', 'CRUD Logic', 'MongoDB', 'EJS Render'],
    problem: 'No centralized system for tracking products, orders, and stock levels',
    action: 'Built full-stack app with REST APIs, server-side rendering, and complete CRUD operations',
    result: 'Efficient tracking and management of retail inventory with responsive interface',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
  },
];

function ProjectCard({ project, index }) {
  const [ref, isInView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02] hover:border-accent/15 transition-all duration-500 group"
    >
      {/* Flow pipeline visualization */}
      <div className="px-6 pt-6 pb-4 border-b border-white/5">
        <div className="flex items-center gap-1 overflow-x-auto pb-2">
          {project.flow.map((step, i) => (
            <div key={step} className="flex items-center gap-1 shrink-0">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[10px] font-mono text-white/40 border border-white/5">
                {step}
              </span>
              {i < project.flow.length - 1 && (
                <svg width="16" height="8" viewBox="0 0 16 8" className="text-accent/30 shrink-0">
                  <path d="M0 4 L12 4 M9 1 L12 4 L9 7" stroke="currentColor" fill="none" strokeWidth="1" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white tracking-tight">
          {project.title}
        </h3>
        <p className="text-white/30 text-xs font-mono mt-1">{project.subtitle}</p>

        {/* Mini case study */}
        <div className="mt-5 space-y-3">
          <div className="flex gap-3">
            <span className="w-1 h-1 rounded-full bg-red-400/60 mt-1.5 shrink-0" />
            <p className="text-white/40 text-xs leading-relaxed">{project.problem}</p>
          </div>
          <div className="flex gap-3">
            <span className="w-1 h-1 rounded-full bg-accent/60 mt-1.5 shrink-0" />
            <p className="text-white/50 text-xs leading-relaxed">{project.action}</p>
          </div>
          <div className="flex gap-3">
            <span className="w-1 h-1 rounded-full bg-emerald-400/60 mt-1.5 shrink-0" />
            <p className="text-emerald-400/60 text-xs leading-relaxed">{project.result}</p>
          </div>
        </div>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.03] text-white/30 tracking-wider border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="projects" className="section py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[40px] bg-accent/50" />
            <span className="text-[10px] font-mono uppercase tracking-[4px] text-accent/60">
              Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built & Shipped
          </h2>
          <p className="mt-3 text-white/30 text-sm max-w-xl">
            End-to-end systems with real data flows and production concerns.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
