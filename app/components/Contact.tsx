'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactLinks = [
  {
    label: 'Email',
    value: 'sahil.magfirm@gmail.com',
    href: 'mailto:sahil.magfirm@gmail.com',
    color: '#00f5ff',
    icon: '✉',
    desc: 'Best way to reach me',
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/sahil-ballewar-a888a632a/',
    href: 'https://www.linkedin.com/in/sahil-ballewar-a888a632a/',
    color: '#b44dff',
    icon: 'in',
    desc: 'Connect professionally',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/Sam1377',
    href: 'https://github.com/Sam1377',
    color: '#4d79ff',
    icon: '</>',
    desc: 'See my open source work',
  },
  {
    label: 'Phone',
    value: '+91 70584 49059',
    href: 'tel:+917058449059',
    color: '#00f5ff',
    icon: '☎',
    desc: 'For urgent conversations',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1600));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputStyle = (field: string) => ({
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    fontSize: '0.92rem',
    color: '#e2e8f0',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === field ? 'rgba(0,245,255,0.35)' : 'rgba(255,255,255,0.07)'}`,
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === field ? '0 0 24px rgba(0,245,255,0.06)' : 'none',
    fontFamily: 'inherit',
  });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 85%, rgba(180,77,255,0.06) 0%, transparent 65%)',
      }} />

      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div className="section-label" style={{ marginBottom: '16px' }}>Contact</div>
          <h2 className="font-black text-white tracking-tight" style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.05, marginBottom: '20px' }}>
            Let&apos;s build something<br />
            <span className="gradient-text">extraordinary</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto' }}>
            Open to data engineering roles, full-stack opportunities,
            and interesting collaborations. Don&apos;t hesitate to reach out.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Left — contact links */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: '#475569', marginBottom: '28px',
            }}>
              Reach Me At
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {contactLinks.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '20px',
                    padding: '20px 24px', borderRadius: '16px',
                    border: `1px solid ${c.color}18`,
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${c.color}38`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${c.color}0e`;
                    (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${c.color}18`;
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                    (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${c.color}10`, border: `1px solid ${c.color}22`,
                    fontFamily: 'monospace', fontSize: '13px', fontWeight: 700, color: c.color,
                  }}>
                    {c.icon}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '11px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {c.value}
                    </div>
                    <div style={{ fontSize: '11px', color: '#334155', marginTop: '2px' }}>
                      {c.desc}
                    </div>
                  </div>

                  <span style={{ fontSize: '14px', color: '#334155', flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href="/Sahil_Ballewar_Resume.pdf"
              download
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '16px 28px', borderRadius: '14px', width: '100%',
                background: 'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(180,77,255,0.08))',
                border: '1px solid rgba(0,245,255,0.2)',
                color: '#00f5ff', fontWeight: 600, fontSize: '0.9rem',
                textDecoration: 'none', transition: 'background 0.2s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0,245,255,0.13), rgba(180,77,255,0.13))'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(180,77,255,0.08))'; }}
            >
              ↓ Download Resume
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: '#475569', marginBottom: '28px',
            }}>
              Send a Message
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', color: '#475569', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('name')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', color: '#475569', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('email')}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#475569', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Job opportunity / Collaboration / Other"
                  value={form.subject}
                  onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('subject')}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#475569', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me about the opportunity, project, or anything you'd like to discuss..."
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={{ ...inputStyle('message'), resize: 'none', lineHeight: 1.65 }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                style={{
                  padding: '16px 28px',
                  borderRadius: '14px',
                  border: 'none',
                  cursor: status === 'idle' ? 'pointer' : 'default',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                  transition: 'opacity 0.2s, background 0.3s',
                  background: status === 'sent'
                    ? 'rgba(52,211,153,0.12)'
                    : 'linear-gradient(135deg, #00f5ff, #b44dff)',
                  color: status === 'sent' ? '#34d399' : '#050510',
                  outline: status === 'sent' ? '1px solid rgba(52,211,153,0.3)' : 'none',
                  opacity: status === 'sending' ? 0.65 : 1,
                  fontFamily: 'inherit',
                }}
              >
                {status === 'idle' && 'Send Message →'}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && '✓ Message Sent — I\'ll be in touch!'}
              </button>

              <p style={{ fontSize: '11px', color: '#334155', textAlign: 'center', lineHeight: 1.6 }}>
                Typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
