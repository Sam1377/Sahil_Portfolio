'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 'stock', number: '01',
    title: 'Real-Time Stock Market Analytics',
    tagline: 'Sub-100ms streaming pipeline processing 184K+ daily records across 120+ tickers',
    color: '#00f5ff',
    problem: 'Financial markets generate enormous volumes of data in real-time. Processing and analyzing this data with millisecond precision is critical for risk management and trading decisions.',
    solution: 'Built a full Medallion Architecture on Databricks with Apache Kafka for ingestion, PySpark for transformation, and Delta Lake for ACID-compliant storage. Automated data quality checks across Bronze → Silver → Gold layers.',
    impact: [
      '184K+ daily records processed across 120+ tickers',
      'Sub-100ms end-to-end ingestion latency achieved',
      '99.87% data quality score maintained automatically',
      '9+ BI dashboard visualizations with real-time alerts',
    ],
    stack: ['Apache Kafka', 'PySpark', 'Databricks', 'Delta Lake', 'Python', 'SQL'],
    architecture: ['Kafka', '→', 'Bronze', '→', 'Silver', '→', 'Gold', '→', 'BI'],
    github: 'https://github.com/Sam1377/StockMarket_Data_Pipeline',
    featured: true,
  },
  {
    id: 'spotify', number: '02',
    title: 'Spotify Data Pipeline',
    tagline: 'Serverless AWS pipeline automating ingestion of 180+ tracks daily with zero manual effort',
    color: '#b44dff',
    problem: 'Spotify data is dynamic and vast. The goal was to build a fully automated, scalable pipeline without maintaining any dedicated database infrastructure — entirely serverless.',
    solution: 'Engineered a serverless AWS pipeline: Lambda extracts data → stored in a two-zone S3 data lake → AWS Glue for automatic schema detection → Athena for serverless SQL analytics. Orchestrated via Airflow DAGs.',
    impact: [
      '180+ tracks processed daily with zero manual intervention',
      'Two-zone S3 data lake with automatic schema detection via Glue',
      'EventBridge cron scheduling with built-in retry and monitoring',
      'No dedicated database infrastructure required at all',
    ],
    stack: ['AWS Lambda', 'Amazon S3', 'AWS Glue', 'Amazon Athena', 'Apache Airflow', 'Python'],
    architecture: ['Spotify API', '→', 'Lambda', '→', 'S3', '→', 'Glue', '→', 'Athena'],
    github: 'https://github.com/Sam1377/Spotify_Data_Pipeline',
    featured: true,
  },
  {
    id: 'nexus', number: '03',
    title: 'Nexus — Collaborative Code Editor',
    tagline: 'Real-time multi-user coding platform with zero-latency sync across shared rooms',
    color: '#4d79ff',
    problem: 'Remote engineering teams needed a real-time collaborative coding environment without the overhead of external tools. Synchronization latency and session persistence were the core technical challenges.',
    solution: 'Built a MERN stack platform with Socket.io for bi-directional sync, JWT authentication, CodeMirror 6 editor, and a scalable REST API managing persistent rooms and concurrent multi-user sessions.',
    impact: [
      'Zero-latency code sync across shared rooms for multiple users',
      '6 programming languages with VS Code Dark theme via CodeMirror 6',
      'Live typing indicators, user presence, and real-time chat built-in',
      'Persistent rooms and chat history powered by MongoDB',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'CodeMirror 6'],
    architecture: ['Client A', '↔', 'Socket.io', '↔', 'Client B', '→', 'MongoDB'],
    github: 'https://github.com/Sam1377/nexus_version1',
    featured: false,
  },
];

function ArchDiagram({ nodes, color }: { nodes: string[]; color: string }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-xl mt-3 sm:mt-4"
      style={{ background: 'rgba(0,0,0,0.25)', padding: 'clamp(10px,3vw,14px) clamp(12px,4vw,18px)' }}>
      {nodes.map((n, i) => (
        n === '→' || n === '↔' ? (
          <span key={i} className="text-slate-700" style={{ fontSize: '12px' }}>{n}</span>
        ) : (
          <span key={i} className="font-mono rounded" style={{
            fontSize: 'clamp(10px,2.5vw,11px)', padding: '3px 8px',
            background: `${color}10`, color, border: `1px solid ${color}25`,
          }}>{n}</span>
        )
      ))}
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>('stock');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,245,255,0.025) 0%, transparent 70%)',
      }} />

      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20">
          <div className="section-label mb-4">Projects</div>
          <h2 className="font-black text-white tracking-tight leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Systems I&apos;ve engineered<br /><span className="gradient-text">from scratch</span>
          </h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-5">
          {projects.map((proj, i) => {
            const isOpen = expanded === proj.id;
            return (
              <motion.div key={proj.id}
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                  style={{ border: `1px solid ${isOpen ? proj.color + '35' : 'rgba(255,255,255,0.06)'}`, boxShadow: isOpen ? `0 0 50px ${proj.color}08` : '' }}
                  onClick={() => setExpanded(isOpen ? null : proj.id)}>

                  {/* Header */}
                  <div style={{ padding: 'clamp(20px,5vw,32px) clamp(16px,5vw,40px)' }}>
                    <div className="flex items-start justify-between gap-3 sm:gap-6">
                      <div className="flex items-start gap-3 sm:gap-6 flex-1 min-w-0">
                        <div className="font-mono font-black flex-shrink-0 leading-none mt-1"
                          style={{ fontSize: '0.8rem', color: `${proj.color}60`, letterSpacing: '0.1em' }}>
                          {proj.number}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                            {proj.featured && (
                              <span className="font-mono tracking-widest"
                                style={{ fontSize: '10px', padding: '3px 10px', borderRadius: '20px', background: `${proj.color}12`, color: proj.color, border: `1px solid ${proj.color}25` }}>
                                FEATURED
                              </span>
                            )}
                          </div>
                          <h3 className="text-white font-bold mb-1.5 sm:mb-2 leading-snug"
                            style={{ fontSize: 'clamp(0.95rem, 4vw, 1.15rem)' }}>
                            {proj.title}
                          </h3>
                          <p className="text-slate-500 leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 3vw, 0.9rem)' }}>
                            {proj.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                        <a href={proj.github} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="hidden sm:block text-slate-600 hover:text-slate-300 transition-colors font-medium"
                          style={{ fontSize: '12px', textDecoration: 'none', padding: '6px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                          GitHub
                        </a>
                        <span className="text-slate-600 transition-transform duration-300 flex-shrink-0"
                          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', display: 'block', fontSize: '14px' }}>
                          ↓
                        </span>
                      </div>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5 pl-6 sm:pl-10">
                      {proj.stack.map(s => (
                        <span key={s} className="tech-badge"
                          style={{ borderColor: `${proj.color}28`, color: proj.color, background: `${proj.color}07`, fontSize: '10px' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} style={{ overflow: 'hidden' }}>
                        <div style={{ padding: 'clamp(20px,5vw,36px) clamp(16px,5vw,40px) clamp(24px,5vw,40px)', borderTop: `1px solid ${proj.color}12` }}>
                          {/* Mobile: GitHub link */}
                          <a href={proj.github} target="_blank" rel="noopener noreferrer"
                            className="sm:hidden flex items-center justify-center gap-2 mb-5 py-2.5 rounded-xl font-medium transition-all"
                            style={{ fontSize: '13px', textDecoration: 'none', color: proj.color, background: `${proj.color}08`, border: `1px solid ${proj.color}20` }}>
                            View on GitHub →
                          </a>

                          <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
                            <div className="space-y-5 sm:space-y-7">
                              <div>
                                <div className="section-label mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>Problem</div>
                                <p className="text-slate-400 leading-relaxed" style={{ fontSize: 'clamp(0.82rem,3vw,0.92rem)' }}>{proj.problem}</p>
                              </div>
                              <div>
                                <div className="section-label mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>Solution</div>
                                <p className="text-slate-400 leading-relaxed" style={{ fontSize: 'clamp(0.82rem,3vw,0.92rem)' }}>{proj.solution}</p>
                              </div>
                            </div>
                            <div className="space-y-5 sm:space-y-7">
                              <div>
                                <div className="section-label mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>Key Achievements</div>
                                <ul className="space-y-2.5 sm:space-y-3">
                                  {proj.impact.map((imp, ii) => (
                                    <li key={ii} className="flex gap-2.5 sm:gap-3 text-slate-300 leading-relaxed" style={{ fontSize: 'clamp(0.82rem,3vw,0.92rem)' }}>
                                      <span className="flex-shrink-0 rounded-full" style={{ width: '4px', height: '4px', background: proj.color, marginTop: '8px' }} />
                                      {imp}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <div className="section-label mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>Architecture</div>
                                <ArchDiagram nodes={proj.architecture} color={proj.color} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
