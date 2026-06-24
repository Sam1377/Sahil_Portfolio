'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      const sections = links.map(l => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${scrolled ? 'mx-3 sm:mx-5 mt-3 sm:mt-4 rounded-2xl glass-card' : 'rounded-none'}`}
          style={scrolled ? {
            borderColor: 'rgba(0,245,255,0.1)',
            border: '1px solid rgba(0,245,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          } : {
            background: 'linear-gradient(180deg, rgba(5,5,16,0.95) 0%, rgba(5,5,16,0.0) 100%)',
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="#" style={{ textDecoration: 'none' }} className="flex items-center gap-1">
              <span className="font-black tracking-tighter gradient-text" style={{ fontSize: '1.25rem' }}>SB</span>
              <span className="font-black" style={{ fontSize: '1.25rem', color: 'rgba(0,245,255,0.5)' }}>.</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => {
                const isActive = activeSection === l.href.replace('#', '');
                return (
                  <a key={l.href} href={l.href} style={{ textDecoration: 'none' }}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200">
                    <span className="absolute inset-0 rounded-lg transition-all duration-200"
                      style={{ background: isActive ? 'rgba(0,245,255,0.07)' : 'transparent' }} />
                    <span className="relative transition-colors duration-200"
                      style={{ color: isActive ? 'var(--neon-cyan)' : '#94a3b8' }}
                      onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#e2e8f0'; }}
                      onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}>
                      {l.label}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: 'var(--neon-cyan)', boxShadow: '0 0 6px var(--neon-cyan)' }} />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="w-px h-5" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <a href="/Sahil_Ballewar_Resume.pdf" download
                className="flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-200"
                style={{ border: '1px solid rgba(0,245,255,0.35)', color: 'var(--neon-cyan)', textDecoration: 'none', background: 'rgba(0,245,255,0.05)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.12)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,245,255,0.15)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.05)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
                Resume ↓
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-xl p-2.5 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ background: menuOpen ? 'rgba(0,245,255,0.08)' : 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className={`block h-[1.5px] w-full rounded-full bg-slate-300 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block h-[1.5px] w-full rounded-full bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[1.5px] w-full rounded-full bg-slate-300 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile full-screen menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-[56px] z-40"
              style={{ background: 'rgba(5,5,16,0.98)', backdropFilter: 'blur(20px)' }}
            >
              <div className="flex flex-col h-full px-6 pt-8 pb-12">
                <div className="flex flex-col gap-1 flex-1">
                  {links.map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-semibold text-slate-200 transition-all"
                      style={{ textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                      onTouchStart={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.06)'; }}
                      onTouchEnd={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                    >
                      <span>{l.label}</span>
                      <span className="text-slate-600 text-sm">→</span>
                    </motion.a>
                  ))}
                </div>
                <motion.a
                  href="/Sahil_Ballewar_Resume.pdf"
                  download
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold neon-text-cyan"
                  style={{ textDecoration: 'none', background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.2)', fontSize: '15px' }}
                >
                  ↓ Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
