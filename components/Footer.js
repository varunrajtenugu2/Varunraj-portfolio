export default function Footer() {
  return (
    <footer className="section border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-white/20">
          VRT — {new Date().getFullYear()}
        </span>
        <span className="text-[10px] font-mono text-white/10 tracking-wider">
          Built with Next.js + Framer Motion
        </span>
      </div>
    </footer>
  );
}
