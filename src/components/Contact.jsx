'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { SOCIAL } from '../lib/data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../lib/useScrollReveal'

const EMAILJS_SERVICE_ID  = 'service_ygaljzg'
const EMAILJS_TEMPLATE_ID = 'template_f6gmg0l'
const EMAILJS_PUBLIC_KEY  = 't0v975oO15YasdbFN'

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}
function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [ref, visible]      = useScrollReveal()

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('validation_error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject || `Portfolio inquiry from ${form.name}`, message: form.message, reply_to: form.email },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('send_error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const contacts = [
    { icon: <EmailIcon />, label: 'Email', value: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
    { icon: <GitHubIcon />, label: 'GitHub', value: 'github.com/hazelmarqueses', href: SOCIAL.github },
    { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'linkedin.com/in/hazelmarqueses', href: SOCIAL.linkedin },
  ]

  const isLoading = status === 'sending'

  return (
    <section id="contact" className="section-divider" style={{ padding: '8rem clamp(1.25rem, 6vw, 8rem)' }}>
      <SectionHeader label="Let's Connect" title={<>Get in<br />Touch</>} />

      <div
        ref={ref}
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
      >
        {/* Responsive grid — 2 col desktop, 1 col mobile */}
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
          gap: 'clamp(2rem, 6vw, 5rem)',
          alignItems: 'start',
        }}>

          {/* Left: info */}
          <div>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '2.5rem' }}>
              Interested in working together? Whether it's a project management role, QA position, or just a conversation — I'd love to hear from you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contacts.map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--gold)', marginTop: '1px', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '0.2rem' }}>
                      {label}
                    </div>
                    <a href={href} target={label !== 'Email' ? '_blank' : undefined} rel="noreferrer"
                      style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s', wordBreak: 'break-all' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border)', fontFamily: '"DM Sans", sans-serif', fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              📍 {SOCIAL.location}<br />
              <span style={{ color: 'var(--faint)', fontSize: '0.78rem' }}>Open to remote & relocation opportunities</span>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {/* Name + Email row — stack on very small screens */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)', display: 'block', marginBottom: '0.4rem' }}>Name *</label>
                <input className="input-field" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" disabled={isLoading} />
              </div>
              <div>
                <label style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)', display: 'block', marginBottom: '0.4rem' }}>Email *</label>
                <input className="input-field" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" disabled={isLoading} />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)', display: 'block', marginBottom: '0.4rem' }}>Subject</label>
              <input className="input-field" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="e.g. Project Manager opportunity" disabled={isLoading} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--faint)', display: 'block', marginBottom: '0.4rem' }}>Message *</label>
              <textarea className="input-field" style={{ minHeight: '140px', resize: 'vertical' }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the opportunity or project..." disabled={isLoading} />
            </div>

            {status === 'validation_error' && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', fontFamily: '"DM Sans", sans-serif', fontSize: '0.83rem', color: '#f87171' }}>
                Please fill in your name, email, and message.
              </div>
            )}
            {status === 'send_error' && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', fontFamily: '"DM Sans", sans-serif', fontSize: '0.83rem', color: '#f87171' }}>
                Something went wrong. Please email me directly at {SOCIAL.email}
              </div>
            )}
            {status === 'sent' && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', background: 'rgba(92,184,92,0.1)', border: '1px solid rgba(92,184,92,0.25)', fontFamily: '"DM Sans", sans-serif', fontSize: '0.83rem', color: '#5cb85c' }}>
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
            >
              {isLoading ? 'Sending…' : 'Send Message →'}
            </button>

            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.75rem', color: 'var(--faint)', marginTop: '0.75rem', textAlign: 'center' }}>
              Messages go directly to my inbox. I respond within 24–48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}