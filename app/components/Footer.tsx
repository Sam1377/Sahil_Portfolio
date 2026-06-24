'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 0 40px' }}>
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#334155' }}>
            © {year} Sahil Ballewar · Built with Next.js
          </div>
          <div className="flex items-center gap-6 sm:gap-8">
            {[
              { label: 'GitHub', href: 'https://github.com/Sam1377' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-ballewar-a888a632a/' },
              { label: 'Email', href: 'mailto:sahil.magfirm@gmail.com' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '11px', color: '#334155', textDecoration: 'none', letterSpacing: '0.18em', textTransform: 'uppercase' as const, transition: 'color 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#334155'; }}>
                {l.label}
              </a>
            ))}
          </div>
          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }}
            style={{ fontFamily: 'monospace', fontSize: '11px', color: '#00f5ff', letterSpacing: '0.12em' }}>
            ● Open to Work
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
