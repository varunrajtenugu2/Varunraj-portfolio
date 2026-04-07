import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const caseStudies = [
  {
    id: 'perf',
    problem: 'ATM boot sequence blocked on serial hardware checks — users waited 8+ extra seconds',
    action: 'Refactored peripheral health checks to async initialization, parallelizing printer and dispenser validation',
    result: '8-second reduction in ready time, improved service availability during boot cycles',
    tags: ['Java', 'Async', 'Performance'],
  },
  {
    id: 'reliability',
    problem: 'Transaction failures from incorrect validation ordering and unhandled delayed responses',
    action: 'Rewrote validation logic with correct sequencing and graceful handling of optional/delayed responses',
    result: '~5% reduction in transaction failure rate across all connected ATMs',
    tags: ['Java', 'Fintech', 'Reliability'],
  },
  {
    id: 'ops',
    problem: 'High volume of production incidents threatening SLA compliance',
    action: 'Systematic diagnosis and resolution of 10-12 issues/month with root-cause analysis',
    result: 'Maintained <2 open critical issues at any time, meeting strict SLA targets',
    tags: ['Ops', 'SLA', 'Debugging'],
  },
];

function CaseStudyCard({ study, index }) {
  const [ref, isInView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative border border-white/5 rounded-2xl p-6 md:p-8 bg-white/[0.02] hover:border-accent/15 transition-all duration-500 group"
    >
      {/* Case number */}
      <div className="absolute top-6 right-6 font-mono text-xs text-white/10">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Flow: Problem → Action → Result */}
      <div className="space-y-6">
        {/* Problem */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400/70" />
            <span className="text-[10px] font-mono uppercase tracking-[3px] text-red-400/50">
              Problem
            </span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">{study.problem}</p>
        </div>

        {/* Arrow connector */}
        <div className="flex items-center gap-3 pl-0.5">
          <div className="w-px h-4 bg-gradient-to-b from-red-400/20 to-accent/30" />
          <svg width="12" height="12" viewBox="0 0 12 12" className="text-accent/40">
            <path d="M6 0 L6 10 M2 6 L6 10 L10 6" stroke="currentColor" fill="none" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Action */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
            <span className="text-[10px] font-mono uppercase tracking-[3px] text-accent/50">
              Action
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">{study.action}</p>
        </div>

        {/* Arrow connector */}
        <div className="flex items-center gap-3 pl-0.5">
          <div className="w-px h-4 bg-gradient-to-b from-accent/30 to-emerald-400/30" />
          <svg width="12" height="12" viewBox="0 0 12 12" className="text-emerald-400/40">
            <path d="M6 0 L6 10 M2 6 L6 10 L10 6" stroke="currentColor" fill="none" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Result */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
            <span className="text-[10px] font-mono uppercase tracking-[3px] text-emerald-400/50">
              Result
            </span>
          </div>
          <p className="text-emerald-400/80 text-sm leading-relaxed font-medium">{study.result}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.03] text-white/30 tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </motion.div>
  );
}

export default function Experience() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="experience" className="section py-32 px-6">
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
              Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Production Impact
          </h2>
          <div className="mt-3 flex items-center gap-4">
            <p className="text-white/30 text-sm">NCR Corporation</p>
            <span className="text-white/10">|</span>
            <p className="text-white/20 text-xs font-mono">Jan 2022 — Feb 2024</p>
            <span className="text-white/10">|</span>
            <p className="text-white/20 text-xs font-mono">Hyderabad, India</p>
          </div>
          <p className="mt-4 text-white/30 text-sm max-w-2xl leading-relaxed">
            Built and maintained multi-vendor ATM software for SIX Payments (Switzerland)
            in a PCI-compliant fintech environment. Cross-functional team of 10,
            shipping secure releases under tight deadlines.
          </p>
        </motion.div>

        {/* Case study grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
