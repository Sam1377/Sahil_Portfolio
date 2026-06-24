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
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      className="grid-bg"
    >
      <NeuralBackground />
      <div className="scan-effect" />

      {/* subtle glow center */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(0,245,255,0.04) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '900px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', marginTop: '80px' }}
        >
          <div className="glass-card neon-border-cyan" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '10px 22px', borderRadius: '100px',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34d399', display: 'block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#94a3b8', fontFamily: 'monospace', textTransform: 'uppercase' }}>
              Available for Opportunities
            </span>
          </div>
        </motion.div>

        {/* Name block */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{ marginBottom: '24px', lineHeight: 1 }}
        >
          <div className="gradient-text" style={{
            fontSize: 'clamp(52px, 8vw, 96px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            display: 'block',
          }}>
            Sahil
          </div>
          <div style={{
            fontSize: 'clamp(52px, 8vw, 96px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: '#ffffff',
            display: 'block',
            marginTop: '8px',
          }}>
            Ballewar
          </div>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          style={{
            height: '36px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', marginBottom: '28px',
          }}
        >
          <span style={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 600, color: '#00f5ff', textShadow: '0 0 20px rgba(0,245,255,0.4)' }}>
            {displayed}
          </span>
          <span className="typewriter-cursor" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          style={{
            color: '#64748b', fontSize: '1.05rem', lineHeight: 1.75,
            maxWidth: '520px', margin: '0 auto 52px', textAlign: 'center',
          }}
        >
          B.Tech ECE @ IIIT Nagpur · Building real-time data systems,
          AI-powered pipelines, and scalable cloud infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '80px' }}
        >
          <a
            href="#projects"
            style={{
              padding: '14px 34px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #00f5ff, #b44dff)',
              color: '#050510', fontWeight: 700, fontSize: '0.92rem',
              letterSpacing: '0.02em', textDecoration: 'none', display: 'inline-block',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          >
            View Projects →
          </a>
          <a
            href="/Sahil_Ballewar_Resume.pdf"
            download
            className="glass-card neon-border-cyan"
            style={{
              padding: '14px 34px', borderRadius: '12px',
              color: '#00f5ff', fontWeight: 700, fontSize: '0.92rem',
              textDecoration: 'none', display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.07)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; }}
          >
            Download Resume ↓
          </a>
          <a
            href="#contact"
            style={{
              padding: '14px 34px', borderRadius: '12px',
              color: '#64748b', fontWeight: 700, fontSize: '0.92rem',
              textDecoration: 'none', display: 'inline-block',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#e2e8f0'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#64748b'; }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '40px',
          }}
        >
          {[
            { value: '3+', label: 'Projects Built' },
            { value: '30%', label: 'Data Efficiency ↑' },
            { value: '184K+', label: 'Records / Day' },
            { value: '99.87%', label: 'Data Quality' },
          ].map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center',
              padding: '0 40px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}>
              <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '11px', color: '#475569', marginTop: '8px', letterSpacing: '0.06em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{
          position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#334155', fontFamily: 'monospace', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #334155, transparent)' }} />
      </motion.div>
    </section>
  );
}
