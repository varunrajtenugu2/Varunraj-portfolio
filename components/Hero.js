import { motion } from 'framer-motion';

const metrics = [
  { value: '2+', label: 'Years Production', suffix: '' },
  { value: '120+', label: 'Issues Resolved', suffix: '' },
  { value: '8s', label: 'Boot Time Saved', suffix: '' },
  { value: '5%', label: 'Failure Rate Cut', suffix: '' },
];

export default function Hero() {
  return (
    <section className="section min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9]"
        >
          Varun Raj
          <br />
          <span className="text-white/20">Tenugu</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <span className="px-3 py-1 border border-accent/30 rounded-full text-accent text-xs font-mono tracking-wider">
            Backend Engineer
          </span>
          <span className="text-white/20">/</span>
          <span className="px-3 py-1 border border-white/10 rounded-full text-white/50 text-xs font-mono tracking-wider">
            Full-Stack
          </span>
          <span className="text-white/20">/</span>
          <span className="px-3 py-1 border border-white/10 rounded-full text-white/50 text-xs font-mono tracking-wider">
            ML Systems
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-lg text-white/40 max-w-xl leading-relaxed"
        >
          I build production systems that handle real money, real transactions,
          and real-world pressure. Fintech backend, ML pipelines, reliable software.
        </motion.p>

        {/* Impact metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="relative group"
            >
              <div className="border border-white/5 rounded-xl p-5 bg-white/[0.02] hover:border-accent/20 transition-all duration-500">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {m.value}
                </div>
                <div className="mt-1 text-[11px] font-mono uppercase tracking-[2px] text-white/30">
                  {m.label}
                </div>
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-20 flex items-center gap-3"
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
          <span className="text-[10px] font-mono uppercase tracking-[3px] text-white/20">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
