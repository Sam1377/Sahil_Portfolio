'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const traits = ['Real-Time Systems', 'ML Pipelines', 'Cloud Native', 'ETL / ELT', 'Data Warehousing', 'Startup Builder'];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(180,77,255,0.04) 0%, transparent 70%)',
      }} />

      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20">
          <div className="section-label mb-4">About Me</div>
          <h2 className="font-black text-white tracking-tight leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            The person behind<br /><span className="gradient-text">the pipeline</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <motion.div initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative max-w-xs sm:max-w-sm mx-auto md:mx-0">
              <div className="absolute -inset-4 sm:-inset-6 rounded-3xl opacity-20" style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.4), rgba(180,77,255,0.4))',
                filter: 'blur(24px)',
              }} />
              <div className="relative rounded-2xl overflow-hidden glass-card p-1 neon-border-cyan">
                <Image src="/sahil.png" alt="Sahil Ballewar" width={420} height={520}
                  className="rounded-xl w-full object-cover" style={{ maxHeight: '400px', objectPosition: 'top' }} />
              </div>
              <div className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-5 glass-card rounded-xl px-4 py-3 sm:px-5 sm:py-4 neon-border-cyan"
                style={{ backdropFilter: 'blur(20px)' }}>
                <div className="text-slate-500 mb-1" style={{ fontSize: '10px' }}>Graduated</div>
                <div className="font-bold text-white" style={{ fontSize: '13px' }}>IIIT Nagpur</div>
                <div className="neon-text-cyan mt-0.5" style={{ fontSize: '11px' }}>ECE · 2025</div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <p className="text-slate-300 leading-[1.9] mb-5 sm:mb-6" style={{ fontSize: 'clamp(0.92rem, 3vw, 1.05rem)' }}>
              I&apos;m a data engineer and software developer who graduated from{' '}
              <span className="text-white font-semibold">IIIT Nagpur</span> with a B.Tech in
              Electronics & Communication Engineering. My passion sits at the intersection of{' '}
              <span className="neon-text-cyan font-medium">data infrastructure</span> and{' '}
              <span className="neon-text-purple font-medium">intelligent systems</span>.
            </p>
            <p className="text-slate-400 leading-[1.9] mb-5 sm:mb-6" style={{ fontSize: 'clamp(0.88rem, 3vw, 1rem)' }}>
              I&apos;ve built real-time streaming pipelines processing 184K+ daily records with sub-100ms
              latency, architected AWS serverless data lakes, and developed ML-driven forecasting models
              that reduced industrial equipment failures by 25%. Beyond data, I&apos;ve shipped full-stack
              products like Nexus — a real-time collaborative coding platform.
            </p>
            <p className="text-slate-500 leading-[1.9] mb-8 sm:mb-10" style={{ fontSize: 'clamp(0.88rem, 3vw, 1rem)' }}>
              Outside engineering, I founded Cadence Management Group — a B2B management consultancy
              generating ₹5L+ in its first 6 months. I believe systems thinking applies equally to
              data pipelines and businesses.
            </p>

            <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
              {traits.map((t) => (
                <span key={t} className="glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-slate-400 font-medium"
                  style={{ fontSize: 'clamp(11px, 3vw, 13px)', border: '1px solid var(--glass-border)' }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6 sm:gap-8">
              {[
                { label: 'GitHub', href: 'https://github.com/Sam1377' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-ballewar-a888a632a/' },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors font-medium"
                  style={{ textDecoration: 'none', fontSize: 'clamp(0.85rem, 3vw, 0.9rem)' }}>
                  {l.label} →
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
