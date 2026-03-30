'use client'
import { useState } from 'react'
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

// ── Placeholder SVG when no proof image is set ───────────────────────────────
function CertPlaceholder({ accent }) {
  return (
    <div style={{
      width: '100%',
      height: '180px',
      background: `${accent}08`,
      border: `1px dashed ${accent}35`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.6rem',
    }}>
      {/* Certificate icon */}
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      <span style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.7rem',
        color: `${accent}70`,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '0 1rem',
      }}>
        Certificate proof<br />coming soon
      </span>
    </div>
  )
}

// ── Single cert card ─────────────────────────────────────────────────────────
function CertCard({ cert, index, visible }) {
  const [showProof, setShowProof] = useState(false)
  const [imgError, setImgError]   = useState(false)
  const accent = CATEGORY_COLORS[cert.category] || '#e8b86d'

  return (
    <div
      style={{
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        position: 'relative',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms, border-color 0.25s ease`,
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '2px', background: 'var(--gold)', opacity: 0.6,
      }} />

      {/* Card content */}
      <div style={{ padding: '1.6rem' }}>

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.4rem' }}>
          <h4 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: '1rem', fontWeight: 400,
            color: 'var(--text)', lineHeight: 1.3, flex: 1,
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
          lineHeight: 1.65, marginBottom: '1rem',
        }}>
          {cert.description}
        </p>

        {/* Footer row — category tag + proof toggle button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
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

          {/* View proof button */}
          <button
            onClick={() => setShowProof(p => !p)}
            style={{
              background: 'none', border: 'none',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.72rem', fontWeight: 600,
              letterSpacing: '0.08em',
              color: showProof ? 'var(--gold)' : 'var(--muted)',
              cursor: 'pointer', padding: 0,
              display: 'flex', alignItems: 'center', gap: '5px',
              transition: 'color 0.2s',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = showProof ? 'var(--gold)' : 'var(--muted)'}
          >
            {showProof ? (
              <>↑ Hide Proof</>
            ) : (
              <>↓ View Proof</>
            )}
          </button>
        </div>
      </div>

      {/* Expandable proof image */}
      <div style={{
        maxHeight: showProof ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{ borderTop: '1px solid var(--border)', padding: '1.25rem 1.6rem 1.6rem' }}>
          {cert.proof && !imgError ? (
            // Real certificate image
            <div style={{ position: 'relative', width: '100%' }}>
              <img
                src={cert.proof}
                alt={`${cert.title} certificate`}
                onError={() => setImgError(true)}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '300px',
                  objectFit: 'contain',
                  display: 'block',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                }}
              />
            </div>
          ) : (
            // Placeholder when image not yet added
            <CertPlaceholder accent={accent} />
          )}

          {/* Hint text */}
          {!cert.proof && (
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.7rem',
              color: 'var(--faint)',
              marginTop: '0.75rem',
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
              To add your certificate: save the image to <code style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>/public/certs/</code> and update the <code style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>proof</code> field in <code style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>data.js</code>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Certifications() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="certifications" className="section-divider" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 6vw, 8rem)' }}>
      <SectionHeader
        label="Credentials"
        title="Certifications & Trainings"
        subtitle="Formal training and industry certifications — click any card to view proof."
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