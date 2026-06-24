'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const courses = [
    'Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems',
    'Computer Networks', 'Object-Oriented Programming', 'Digital Signal Processing',
    'Embedded Systems', 'Linear Algebra & Statistics',
  ];

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16">
          <div className="section-label mb-4">Education</div>
          <h2 className="font-black text-white tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Academic<br /><span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-2xl max-w-3xl"
          style={{ border: '1px solid rgba(0,245,255,0.18)', boxShadow: '0 0 48px rgba(0,245,255,0.04)' }}>

          {/* Card header */}
          <div className="p-6 sm:p-10 pb-0">
            <div className="flex flex-wrap items-start justify-between gap-4 sm:gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-base sm:text-lg">🎓</span>
                  <span className="section-label" style={{ fontSize: '9px', letterSpacing: '0.22em' }}>
                    B.Tech · Electronics &amp; Communication Engineering
                  </span>
                </div>
                <h3 className="font-black text-white leading-tight mb-3"
                  style={{ fontSize: 'clamp(16px, 4vw, 22px)' }}>
                  Indian Institute of Information Technology, Nagpur
                </h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-slate-500 font-mono" style={{ fontSize: '12px' }}>Dec 2021 – Jun 2025</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className="neon-text-cyan font-medium"
                    style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '20px', background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)' }}>
                    Graduated
                  </span>
                </div>
              </div>
              <div className="glass-card rounded-xl flex flex-col items-center justify-center flex-shrink-0"
                style={{ border: '1px solid rgba(0,245,255,0.12)', width: '64px', height: '64px' }}>
                <div className="font-black gradient-text" style={{ fontSize: '1.25rem', lineHeight: 1 }}>IIIT</div>
                <div className="text-slate-600 mt-1 tracking-widest uppercase" style={{ fontSize: '7px' }}>Nagpur</div>
              </div>
            </div>
          </div>

          <div className="mx-6 sm:mx-10 my-6 sm:my-8"
            style={{ height: '1px', background: 'linear-gradient(90deg, rgba(0,245,255,0.18), rgba(180,77,255,0.1), transparent)' }} />

          {/* Coursework */}
          <div className="px-6 sm:px-10 pb-6 sm:pb-8">
            <div className="font-semibold uppercase text-slate-600 mb-4 sm:mb-5"
              style={{ fontSize: '10px', letterSpacing: '0.28em' }}>
              Relevant Coursework
            </div>
            <div className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <span key={c} className="text-slate-400 transition-colors duration-200"
                  style={{ fontSize: 'clamp(10px,2.8vw,12px)', padding: '5px 11px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mx-6 sm:mx-10 mb-6 sm:mb-10 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(0,245,255,0.1)', background: 'rgba(0,245,255,0.02)' }}>
            <div className="grid grid-cols-3">
              {[
                { label: 'Cultural Secretary', sub: 'Student Activity Council' },
                { label: '215+ Team', sub: 'Members Led' },
                { label: '₹7,00,000', sub: 'Sponsorship Raised' },
              ].map((h, i, arr) => (
                <div key={h.label} className="py-4 sm:py-5 px-3 sm:px-4 text-center"
                  style={{ borderRight: i < arr.length - 1 ? '1px solid rgba(0,245,255,0.1)' : 'none' }}>
                  <div className="font-bold text-white leading-snug" style={{ fontSize: 'clamp(11px,3vw,13px)' }}>{h.label}</div>
                  <div className="text-slate-600 mt-1.5" style={{ fontSize: 'clamp(9px,2.5vw,11px)' }}>{h.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
