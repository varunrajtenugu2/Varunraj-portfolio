import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section className="section py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="border border-white/5 rounded-2xl p-6 md:p-8 bg-white/[0.02] flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px flex-1 max-w-[40px] bg-accent/50" />
              <span className="text-[10px] font-mono uppercase tracking-[4px] text-accent/60">
                Education
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              M.S. Computer Science
            </h3>
            <p className="text-white/30 text-sm mt-1">
              AI / Machine Learning Specialization
            </p>
            <p className="text-white/20 text-xs font-mono mt-2">
              University at Buffalo, SUNY
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3.73</div>
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-wider mt-1">
                GPA
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-sm font-mono text-white/40">
                Aug 2024
              </div>
              <div className="text-sm font-mono text-white/40">
                Dec 2025
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
