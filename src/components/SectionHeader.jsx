'use client'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function SectionHeader({ label, title, subtitle }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className="mb-14"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.65s ease, transform 0.65s ease' }}
    >
      <p className="section-label">{label}</p>
      <h2 style={{
        fontFamily: '"DM Serif Display", Georgia, serif',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 400,
        color: 'var(--text)',
        lineHeight: 1.1,
        marginBottom: subtitle ? '1rem' : 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1rem', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.7, marginTop: '0.75rem' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
