'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const NeuralBackground = dynamic(() => import('./NeuralBackground'), { ssr: false });

const roles = ['Data Engineer', 'Full Stack Developer', 'ML Pipeline Architect', 'Cloud Infra Engineer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      <NeuralBackground />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 65% 50% at 50% 45%, rgba(0,245,255,0.05) 0%, transparent 65%)',
      }} />
      <div className="scan-effect" />

      <div className="relative z-10 w-full section-container text-center px-5 sm:px-8">

        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-10">
          <div className="glass-card inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full"
            style={{ border: '1px solid rgba(0,245,255,0.25)', boxShadow: '0 0 20px rgba(0,245,255,0.06)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono uppercase text-slate-400" style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="font-black tracking-tighter leading-[0.95] mb-5 sm:mb-6"
          style={{ fontSize: 'clamp(52px, 14vw, 116px)' }}>
          <span className="gradient-text">Sahil</span>
          <br />
          <span className="text-white">Ballewar</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex items-center justify-center mb-5 sm:mb-6" style={{ minHeight: '2.2rem' }}>
          <span className="font-mono font-semibold neon-text-cyan" style={{ fontSize: 'clamp(0.95rem, 4vw, 1.2rem)' }}>
            {displayed}
          </span>
          <span className="typewriter-cursor" />
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="text-slate-500 mx-auto mb-10 sm:mb-12 leading-relaxed px-2"
          style={{ fontSize: 'clamp(0.88rem, 3.5vw, 1rem)', maxWidth: '420px' }}>
          B.Tech ECE @ IIIT Nagpur · Building real-time data systems, AI-powered pipelines, and scalable cloud infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mb-14 sm:mb-20 px-2">
          <a href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #00f5ff, #b44dff)', color: '#050510',
              textDecoration: 'none', padding: '14px 28px', fontSize: '0.9rem',
              boxShadow: '0 0 28px rgba(0,245,255,0.2)', letterSpacing: '0.02em',
            }}>
            View Projects →
          </a>
          <a href="/Sahil_Ballewar_Resume.pdf" download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-card font-semibold rounded-xl transition-all duration-200"
            style={{ border: '1px solid rgba(0,245,255,0.3)', color: 'var(--neon-cyan)', textDecoration: 'none', padding: '14px 28px', fontSize: '0.9rem' }}>
            Download Resume ↓
          </a>
          <a href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200"
            style={{ color: '#64748b', textDecoration: 'none', padding: '14px 28px', fontSize: '0.9rem' }}>
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-0">
          {[
            { value: '3+', label: 'Projects Built' },
            { value: '30%', label: 'Data Efficiency ↑' },
            { value: '184K+', label: 'Records / Day' },
            { value: '99.87%', label: 'Data Quality Score' },
          ].map((s, i, arr) => (
            <div key={s.label} className="text-center py-4 px-5 sm:px-8"
              style={{
                borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
              <div className="font-black gradient-text" style={{ fontSize: 'clamp(1.4rem, 5vw, 1.75rem)', lineHeight: 1.1 }}>
                {s.value}
              </div>
              <div className="text-slate-600 mt-1.5 tracking-wide" style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-slate-700 font-mono uppercase tracking-[0.35em]" style={{ fontSize: '9px' }}>Scroll</span>
        <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(51,65,85,0.4)' }}>
          <motion.div className="absolute top-0 left-0 w-full"
            style={{ height: '40%', background: 'linear-gradient(to bottom, var(--neon-cyan), transparent)' }}
            animate={{ y: ['0%', '160%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }} />
        </div>
      </motion.div>
    </section>
  );
}
