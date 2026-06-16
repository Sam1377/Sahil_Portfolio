'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    label: 'Languages',
    color: '#00f5ff',
    skills: ['Python', 'SQL', 'C/C++', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Data Engineering',
    color: '#b44dff',
    skills: ['Apache Kafka', 'Apache Airflow', 'PySpark', 'dbt', 'ETL/ELT', 'Delta Lake'],
  },
  {
    label: 'Cloud & Platforms',
    color: '#4d79ff',
    skills: ['AWS S3', 'AWS Lambda', 'AWS Glue', 'Amazon Athena', 'Databricks', 'Snowflake', 'GCS'],
  },
  {
    label: 'Databases',
    color: '#00f5ff',
    skills: ['PostgreSQL', 'MongoDB', 'Apache Iceberg', 'Delta Lake', 'Amazon Athena'],
  },
  {
    label: 'AI / ML',
    color: '#b44dff',
    skills: ['ML Forecasting', 'Prompt Engineering', 'Chatbot Development', 'Anomaly Detection'],
  },
  {
    label: 'Full Stack & Tools',
    color: '#4d79ff',
    skills: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'REST APIs', 'Git', 'Looker', 'PowerBI'],
  },
];

const proficiencies = [
  { label: 'Data Pipeline Development', pct: 92, color: '#00f5ff' },
  { label: 'Python / PySpark', pct: 90, color: '#b44dff' },
  { label: 'SQL & Data Warehousing', pct: 88, color: '#00f5ff' },
  { label: 'Cloud Architecture (AWS)', pct: 85, color: '#b44dff' },
  { label: 'Stream Processing (Kafka)', pct: 82, color: '#00f5ff' },
  { label: 'Full Stack Development', pct: 78, color: '#b44dff' },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 85% 60%, rgba(0,245,255,0.03) 0%, transparent 70%)',
      }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="section-label mb-4">Skills</div>
          <h2 className="font-black text-white tracking-tight leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            The tech stack that<br />
            <span className="gradient-text">powers my work</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Category grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card rounded-2xl transition-all duration-200"
                style={{
                  border: `1px solid ${cat.color}15`,
                  padding: '24px 24px',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}30`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}15`; }}
              >
                <div
                  className="font-semibold tracking-widest uppercase mb-4"
                  style={{ fontSize: '10px', color: cat.color, letterSpacing: '0.22em' }}
                >
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span
                      key={s}
                      className="text-slate-400 font-medium"
                      style={{
                        fontSize: '12px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: `${cat.color}07`,
                        border: `1px solid ${cat.color}18`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Proficiency bars + strengths */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="font-semibold tracking-widest uppercase mb-10 text-slate-600"
              style={{ fontSize: '10px', letterSpacing: '0.22em' }}
            >
              Core Proficiency
            </div>

            <div className="space-y-7">
              {proficiencies.map((c, i) => (
                <div key={c.label}>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-slate-300 font-medium" style={{ fontSize: '0.9rem' }}>{c.label}</span>
                    <span className="font-mono" style={{ fontSize: '12px', color: c.color }}>{c.pct}%</span>
                  </div>
                  <div className="rounded-full overflow-hidden" style={{ height: '2px', background: 'rgba(255,255,255,0.05)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: i % 2 === 0
                          ? 'linear-gradient(90deg, #00f5ff, #4d79ff)'
                          : 'linear-gradient(90deg, #b44dff, #4d79ff)',
                      }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${c.pct}%` } : { width: 0 }}
                      transition={{ duration: 1.1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Core strengths */}
            <div
              className="mt-12 pt-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="font-semibold tracking-widest uppercase mb-6 text-slate-600"
                style={{ fontSize: '10px', letterSpacing: '0.22em' }}
              >
                Core Strengths
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'System Design',
                  'Medallion Architecture',
                  'Serverless Architecture',
                  'Real-Time Streaming',
                  'Data Lake Design',
                  'ETL Automation',
                  'OOP',
                  'DBMS',
                  'REST APIs',
                ].map((s) => (
                  <span
                    key={s}
                    className="text-slate-500 font-medium"
                    style={{
                      fontSize: '12px',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
