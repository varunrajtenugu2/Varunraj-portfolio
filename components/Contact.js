import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const links = [
  {
    label: 'Email',
    value: 'rajvarun.tenugu@gmail.com',
    href: 'mailto:rajvarun.tenugu@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/varunraj',
    href: 'https://linkedin.com/in/varunraj-tenugu',
  },
  {
    label: 'GitHub',
    value: 'github.com/varunraj',
    href: 'https://github.com/varunraj-tenugu',
  },
  {
    label: 'Phone',
    value: '303-815-4856',
    href: 'tel:303-815-4856',
  },
];

export default function Contact() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="contact" className="section py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-accent/50" />
            <span className="text-[10px] font-mono uppercase tracking-[4px] text-accent/60">
              Connect
            </span>
            <div className="h-px w-10 bg-accent/50" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 text-white/30 text-sm max-w-md mx-auto leading-relaxed">
            Open to backend, full-stack, and ML engineering roles.
            Currently in Buffalo, NY.
          </p>
        </motion.div>

        {/* Contact links grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="border border-white/5 rounded-xl p-4 bg-white/[0.02] hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-500 text-center group"
            >
              <div className="text-[10px] font-mono uppercase tracking-[3px] text-white/20 mb-2">
                {link.label}
              </div>
              <div className="text-xs text-white/50 group-hover:text-accent transition-colors duration-300 break-all">
                {link.value}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
