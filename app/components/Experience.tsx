'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'Bhasruti Advance Engineering Solutions',
    role: 'Data Analyst Intern',
    period: 'Aug 2024 – Jun 2025',
    type: 'Internship',
    color: '#00f5ff',
    achievements: [
      'Designed a centralized data pipeline integrating multiple data sources, enhancing data accessibility by 30%.',
      'Built ML-based forecasting models to predict operational efficiency, reducing equipment failures by 25%.',
      'Automated ETL workflows for reporting using Python and SQL, saving over 15 hours/month on manual reporting.',
      'Collaborated via BRD & FRD documentation with cross-functional teams, reducing requirement gaps by 30%.',
      'Developed a prompt-driven chatbot for water treatment plant (WTP) operational insights.',
    ],
    stack: ['Python', 'SQL', 'ETL', 'ML', 'Apache Airflow'],
  },
  {
    company: 'Cadence Management Group',
    role: 'Founder',
    period: 'Mar 2024 – Present',
    type: 'Entrepreneurship',
    color: '#b44dff',
    achievements: [
      'Deployed operational frameworks for client lifecycle management, reducing cycle time by 25% and enabling 3× increase in annual client capacity.',
      'Led B2B negotiations and financial planning, generating ₹5L+ revenue in 6 months with 80% profit margins.',
      'Directed complex production cycles for major music labels, achieving 100% on-time delivery and zero compliance breaches.',
    ],
    stack: ['Operations', 'B2B', 'Finance', 'Strategy'],
  },
  {
    company: 'IIIT Nagpur – Student Activity Council',
    role: 'Cultural Secretary',
    period: 'Aug 2023 – Jul 2024',
    type: 'Leadership',
    color: '#4d79ff',
    achievements: [
      'Led a team of 215+ members and managed 30+ events over 2 days, ensuring smooth coordination across all functions.',
      'Managed budgeting and operations, reducing execution delays by 50% through structured documentation.',
      'Secured sponsorships worth ₹7,00,000 by presenting event proposals to external stakeholders.',
    ],
    stack: ['Team Leadership', 'Budgeting', 'Event Management', 'Sponsorship'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 15% 50%, rgba(77,121,255,0.04) 0%, transparent 70%)',
      }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="section-label mb-4">Experience</div>
          <h2 className="font-black text-white tracking-tight leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Where I&apos;ve built<br />
            <span className="gradient-text">real-world impact</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: '15px',
              width: '1px',
              background: 'linear-gradient(180deg, #00f5ff 0%, #b44dff 50%, transparent 100%)',
            }}
          />

          <div className="space-y-16 pl-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute flex items-center justify-center rounded-full border-2"
                  style={{
                    left: '-46px',
                    top: '28px',
                    width: '16px',
                    height: '16px',
                    borderColor: exp.color,
                    background: '#050510',
                    boxShadow: `0 0 16px ${exp.color}55`,
                  }}
                >
                  <div className="rounded-full" style={{ width: '6px', height: '6px', background: exp.color }} />
                </div>

                {/* Card */}
                <div
                  className="glass-card rounded-2xl transition-all duration-300"
                  style={{
                    border: `1px solid ${exp.color}20`,
                    padding: '36px 40px',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${exp.color}10`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}20`;
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span
                        className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-3"
                        style={{
                          background: `${exp.color}12`,
                          color: exp.color,
                          border: `1px solid ${exp.color}28`,
                          letterSpacing: '0.08em',
                        }}
                      >
                        {exp.type}
                      </span>
                      <h3 className="text-white font-bold mb-1" style={{ fontSize: '1.2rem' }}>{exp.role}</h3>
                      <div className="font-medium" style={{ color: exp.color, fontSize: '0.95rem' }}>{exp.company}</div>
                    </div>
                    <div
                      className="font-mono text-slate-500 rounded-xl px-4 py-2"
                      style={{
                        fontSize: '12px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {exp.period}
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-8">
                    {exp.achievements.map((a, ai) => (
                      <li key={ai} className="flex gap-3 text-slate-400 leading-relaxed" style={{ fontSize: '0.93rem' }}>
                        <span
                          className="flex-shrink-0 rounded-full mt-2"
                          style={{ width: '4px', height: '4px', background: exp.color, marginTop: '9px' }}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(s => (
                      <span
                        key={s}
                        className="tech-badge text-slate-500"
                        style={{
                          borderColor: 'rgba(255,255,255,0.07)',
                          background: 'rgba(255,255,255,0.03)',
                          fontSize: '11px',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
