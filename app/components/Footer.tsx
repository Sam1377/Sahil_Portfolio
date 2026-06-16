'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 0' }}>
      <div className="section-container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '20px',
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#334155' }}>
          © {year} Sahil Ballewar · Built with Next.js
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/sahilballewar' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/sahil-ballewar' },
            { label: 'Email', href: 'mailto:sahil.magfirm@gmail.com' },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '11px', color: '#334155', textDecoration: 'none',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#334155'; }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ fontFamily: 'monospace', fontSize: '11px', color: '#00f5ff', letterSpacing: '0.12em' }}
        >
          ● Open to Work
        </motion.div>
      </div>
    </footer>
  );
}
