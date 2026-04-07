import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const layers = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'C'],
    color: '#f97316',
  },
  {
    label: 'Backend & Web',
    items: ['Node.js', 'Express.js', 'REST APIs', 'EJS'],
    color: '#fb923c',
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    color: '#22c55e',
  },
  {
    label: 'DevOps & Tools',
    items: ['Git', 'Jenkins', 'Gradle', 'JFrog', 'Jira'],
    color: '#f59e0b',
  },
  {
    label: 'Domains',
    items: ['ML / Deep Learning', 'Fintech / PCI', 'DSA', 'OS & Networks'],
    color: '#ef4444',
  },
];

export default function TechStack() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="systems" className="section py-32 px-6">
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
              Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            System Architecture
          </h2>
          <p className="mt-3 text-white/30 text-sm max-w-xl">
            Technology layers I work across — from low-level systems to ML pipelines.
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="relative space-y-4">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-emerald-400/20 to-transparent hidden md:block" />

          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-start gap-6 md:gap-8"
            >
              {/* Node dot */}
              <div className="hidden md:flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full border-2 mt-5 relative z-10"
                  style={{ borderColor: layer.color, background: '#050505' }}
                />
              </div>

              {/* Layer card */}
              <div className="flex-1 border border-white/5 rounded-xl p-5 bg-white/[0.02] hover:border-white/10 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[10px] font-mono uppercase tracking-[3px]"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] text-white/60 border border-white/5 hover:border-accent/20 hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}

                  {/* Connector arrows between items */}
                  {layer.items.length > 1 && (
                    <span className="hidden md:flex items-center text-white/10 text-xs px-1">
                      ···
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
