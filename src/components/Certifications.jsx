'use client'
import { CERTIFICATIONS } from '../lib/data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../lib/useScrollReveal'

const CATEGORY_COLORS = {
  pm:   '#e8b86d',
  qa:   '#c084fc',
  tech: '#63efec',
}

const CATEGORY_LABELS = {
  pm:   'Project Management',
  qa:   'QA & Testing',
  tech: 'Technical',
}

function CertCard({ cert, index, visible }) {
  const accent = CATEGORY_COLORS[cert.category] || '#e8b86d'

  return (
    <div
      style={{
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '1.6rem',
        position: 'relative',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms, border-color 0.25s ease, box-shadow 0.25s ease`,
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--gold)'
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,184,109,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '2px', background: 'var(--gold)', opacity: 0.6,
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.4rem' }}>
        <h4 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: '1rem', fontWeight: 400,
          color: 'var(--text)', lineHeight: 1.3,
          flex: 1,
        }}>
          {cert.title}
        </h4>
        {/* Hours badge */}
        <span style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.6rem', letterSpacing: '0.08em',
          padding: '2px 8px',
          background: 'var(--gold-dim)',
          color: 'var(--gold)',
          border: '1px solid var(--gold-border)',
          flexShrink: 0, whiteSpace: 'nowrap',
        }}>
          {cert.hours}
        </span>
      </div>

      {/* Issuer */}
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.82rem', color: 'var(--gold)',
        fontWeight: 500, marginBottom: '0.2rem',
      }}>
        {cert.issuer}
      </p>

      {/* Period */}
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.72rem', color: 'var(--faint)',
        letterSpacing: '0.04em', marginBottom: '0.85rem',
      }}>
        {cert.period}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.82rem', color: 'var(--muted)',
        lineHeight: 1.65,
      }}>
        {cert.description}
      </p>

      {/* Category tag */}
      <div style={{ marginTop: '1rem' }}>
        <span style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.62rem', letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '2px 8px',
          background: `${accent}12`,
          color: accent,
          border: `1px solid ${accent}30`,
        }}>
          {CATEGORY_LABELS[cert.category] || cert.category}
        </span>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="certifications" className="section-divider" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 6vw, 8rem)' }}>
      <SectionHeader
        label="Credentials"
        title="Certifications & Trainings"
        subtitle="Formal training and industry certifications that shaped my technical and project management foundation."
      />

      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {CERTIFICATIONS.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} visible={visible} />
        ))}
      </div>
    </section>
  )
}