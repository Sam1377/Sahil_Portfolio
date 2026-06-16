'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const courses = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Object-Oriented Programming',
  'Digital Signal Processing',
  'Embedded Systems',
  'Linear Algebra & Statistics',
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="section-container">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <div className="section-label" style={{ marginBottom: '16px' }}>Education</div>
          <h2 className="font-black text-white tracking-tight leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Academic<br />
            <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card neon-border-cyan"
          style={{
            borderRadius: '24px',
            padding: '52px 56px',
            maxWidth: '860px',
          }}
        >
          {/* Top row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '16px', fontSize: '10px' }}>
                B.Tech · Electronics & Communication Engineering
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
                Indian Institute of Information Technology, Nagpur
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#475569' }}>
                  Dec 2021 – Jun 2025
                </span>
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#334155', display: 'inline-block' }} />
                <span style={{
                  fontSize: '11px', padding: '4px 12px', borderRadius: '100px',
                  background: 'rgba(0,245,255,0.08)', color: '#00f5ff',
                  border: '1px solid rgba(0,245,255,0.2)', fontWeight: 600,
                }}>
                  Graduated
                </span>
              </div>
            </div>

            {/* IIIT badge */}
            <div className="glass-card" style={{
              padding: '20px 24px', borderRadius: '16px', textAlign: 'center',
              border: '1px solid rgba(0,245,255,0.15)', flexShrink: 0,
            }}>
              <div className="gradient-text" style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.02em' }}>IIIT</div>
              <div style={{ fontSize: '10px', color: '#334155', letterSpacing: '0.2em', marginTop: '4px' }}>NAGPUR</div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(0,245,255,0.15), transparent)', marginBottom: '40px' }} />

          {/* Coursework */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: '#475569', marginBottom: '20px',
            }}>
              Relevant Coursework
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {courses.map(c => (
                <span
                  key={c}
                  style={{
                    fontSize: '12px', padding: '7px 16px', borderRadius: '8px',
                    color: '#94a3b8', background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '40px' }} />

          {/* Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { value: 'Cultural Secretary', sub: 'Student Activity Council' },
              { value: '215+ Members', sub: 'Team Led' },
              { value: '₹7,00,000', sub: 'Sponsorship Raised' },
            ].map(h => (
              <div
                key={h.value}
                style={{
                  padding: '24px 20px', borderRadius: '14px', textAlign: 'center',
                  background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.1)',
                }}
              >
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem', marginBottom: '6px' }}>{h.value}</div>
                <div style={{ fontSize: '11px', color: '#475569' }}>{h.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
