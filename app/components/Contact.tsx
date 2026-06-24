'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const contacts = [
    { label: 'Email', abbr: 'EM', value: 'sahil.magfirm@gmail.com', href: 'mailto:sahil.magfirm@gmail.com', color: '#00f5ff' },
    { label: 'LinkedIn', abbr: 'LI', value: 'linkedin.com/in/sahil-ballewar', href: 'https://www.linkedin.com/in/sahil-ballewar-a888a632a/', color: '#b44dff' },
    { label: 'GitHub', abbr: 'GH', value: 'github.com/Sam1377', href: 'https://github.com/Sam1377', color: '#4d79ff' },
    { label: 'Phone', abbr: 'PH', value: '+91 70584 49059', href: 'tel:+917058449059', color: '#00f5ff' },
  ];

  const inputBase = {
    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
    color: '#e2e8f0', width: '100%', padding: '13px 16px', borderRadius: '12px',
    fontSize: '14px', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 45% at 50% 85%, rgba(180,77,255,0.07) 0%, transparent 65%)',
      }} />

      <div className="section-container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20">
          <div className="section-label mb-4">Contact</div>
          <h2 className="font-black text-white tracking-tight leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
            Let&apos;s build something<br /><span className="gradient-text">extraordinary</span>
          </h2>
          <p className="text-slate-500 mx-auto leading-relaxed px-2" style={{ fontSize: '15px', maxWidth: '400px' }}>
            Open to data engineering roles, full-stack opportunities, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="font-semibold uppercase text-slate-600 mb-5 sm:mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.3em' }}>
              Reach Me At
            </div>
            <div className="flex flex-col gap-3">
              {contacts.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 glass-card rounded-xl group transition-all duration-200"
                  style={{ border: `1px solid ${c.color}1a`, padding: '13px 14px', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}35`; (e.currentTarget as HTMLElement).style.transform = 'translateX(3px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}1a`; (e.currentTarget as HTMLElement).style.transform = 'translateX(0)'; }}>
                  <div className="flex-shrink-0 flex items-center justify-center rounded-lg font-mono font-bold"
                    style={{ width: '38px', height: '38px', background: `${c.color}10`, border: `1px solid ${c.color}22`, color: c.color, fontSize: '11px' }}>
                    {c.abbr}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-slate-600 uppercase mb-0.5" style={{ fontSize: '9px', letterSpacing: '0.15em' }}>{c.label}</div>
                    <div className="text-slate-300 group-hover:text-white transition-colors truncate font-medium" style={{ fontSize: '13px' }}>{c.value}</div>
                  </div>
                  <span className="text-slate-700 group-hover:text-slate-400 transition-colors flex-shrink-0" style={{ fontSize: '13px' }}>→</span>
                </a>
              ))}
            </div>
            <a href="/Sahil_Ballewar_Resume.pdf" download
              className="flex items-center justify-center gap-2 mt-5 sm:mt-6 rounded-xl font-semibold transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(180,77,255,0.08))', border: '1px solid rgba(0,245,255,0.2)', color: 'var(--neon-cyan)', textDecoration: 'none', padding: '13px 20px', fontSize: '13px' }}>
              ↓ Download Resume
            </a>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="font-semibold uppercase text-slate-600 mb-5 sm:mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.3em' }}>
              Send a Message
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-slate-600 uppercase mb-2" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>Name</label>
                <input type="text" placeholder="Your name" value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={inputBase}
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,245,255,0.05)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }} />
              </div>
              <div>
                <label className="block text-slate-600 uppercase mb-2" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>Email</label>
                <input type="email" placeholder="your@email.com" value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inputBase}
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,245,255,0.05)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }} />
              </div>
              <div>
                <label className="block text-slate-600 uppercase mb-2" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>Message</label>
                <textarea placeholder="Tell me about the opportunity..." rows={5} value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))} style={{ ...inputBase, resize: 'none' } as React.CSSProperties}
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,245,255,0.05)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }} />
              </div>
              <button type="submit" disabled={status === 'sending' || status === 'sent'}
                className="w-full rounded-xl font-semibold transition-all duration-300"
                style={{
                  padding: '14px 20px', fontSize: '14px', letterSpacing: '0.02em',
                  background: status === 'sent' ? 'rgba(0,255,128,0.1)' : 'linear-gradient(135deg, #00f5ff, #b44dff)',
                  color: status === 'sent' ? '#00ff80' : '#050510',
                  border: status === 'sent' ? '1px solid rgba(0,255,128,0.3)' : 'none',
                  opacity: status === 'sending' ? 0.75 : 1,
                  boxShadow: status === 'sent' ? 'none' : '0 4px 24px rgba(0,245,255,0.2)',
                  cursor: status === 'sending' || status === 'sent' ? 'default' : 'pointer',
                }}>
                {status === 'idle' && 'Send Message →'}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && '✓ Message Sent!'}
                {status === 'error' && 'Try Again'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
