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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'glass-card py-3 px-6 mx-4'
              : 'py-0'
          }`}
        >
          {/* Logo */}
          <a href="#" className="text-xl font-black tracking-tighter gradient-text" style={{ textDecoration: 'none' }}>
            SB<span className="text-slate-600">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium tracking-wide"
                style={{ textDecoration: 'none' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Sahil_Ballewar_Resume.pdf"
              download
              className="text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200"
              style={{
                borderColor: 'var(--neon-cyan)',
                color: 'var(--neon-cyan)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              Resume ↓
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block h-[1px] w-6 bg-slate-400 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-[1px] w-6 bg-slate-400 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1px] w-6 bg-slate-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden glass-card mx-4 mt-2 rounded-2xl p-6 flex flex-col gap-4"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-white text-sm font-medium"
                  style={{ textDecoration: 'none' }}
                >
                  {l.label}
                </a>
              ))}
              <a href="/Sahil_Ballewar_Resume.pdf" download className="neon-text-cyan text-sm font-semibold" style={{ textDecoration: 'none' }}>
                Download Resume ↓
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
