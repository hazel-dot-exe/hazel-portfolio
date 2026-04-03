'use client'
import { useState, useEffect } from 'react'
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

// ── Fullscreen modal ─────────────────────────────────────────────────────────
function ImageModal({ src, title, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9998,
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(1rem, 4vw, 3rem)',
        animation: 'modalFadeIn 0.2s ease',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '1.25rem', right: '1.25rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', width: '40px', height: '40px',
          borderRadius: '50%', cursor: 'pointer',
          fontSize: '1.2rem', lineHeight: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
          zIndex: 9999,
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,184,109,0.3)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Image container — stop click from closing when clicking image */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw', maxHeight: '90vh',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.75rem',
          animation: 'modalScaleIn 0.25s ease',
        }}
      >
        <img
          src={src}
          alt={title}
          style={{
            maxWidth: '100%', maxHeight: '82vh',
            objectFit: 'contain',
            border: '1px solid rgba(232,184,109,0.3)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
            display: 'block',
          }}
        />
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.08em',
          textAlign: 'center',
        }}>
          {title} · <span style={{ color: 'rgba(232,184,109,0.7)' }}>Click outside to close · Esc to close</span>
        </p>
      </div>

      <style>{`
        @keyframes modalFadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalScaleIn { from { opacity: 0; transform: scale(0.93) } to { opacity: 1; transform: scale(1) } }
      `}</style>
    </div>
  )
}

// ── Placeholder when no proof image yet ──────────────────────────────────────
function CertPlaceholder({ accent }) {
  return (
    <div style={{
      width: '100%', height: '160px',
      background: `${accent}08`,
      border: `1px dashed ${accent}35`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
    }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      <span style={{
        fontFamily: '"DM Sans", sans-serif', fontSize: '0.68rem',
        color: `${accent}70`, letterSpacing: '0.1em',
        textTransform: 'uppercase', textAlign: 'center', padding: '0 1rem',
      }}>
        Certificate proof<br />coming soon
      </span>
    </div>
  )
}

// ── Single cert card ─────────────────────────────────────────────────────────
function CertCard({ cert, index, visible, onOpenModal }) {
  const [showProof, setShowProof] = useState(false)
  const [imgError, setImgError]   = useState(false)
  const accent = CATEGORY_COLORS[cert.category] || '#e8b86d'
  const hasProof = cert.proof && !imgError

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
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gold)', opacity: 0.6 }} />

      {/* Main content */}
      <div style={{ padding: '1.6rem' }}>

        {/* Title + hours badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.4rem' }}>
          <h4 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1rem', fontWeight: 400, color: 'var(--text)', lineHeight: 1.3, flex: 1 }}>
            {cert.title}
          </h4>
          <span style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: '0.6rem', letterSpacing: '0.08em',
            padding: '2px 8px', background: 'var(--gold-dim)', color: 'var(--gold)',
            border: '1px solid var(--gold-border)', flexShrink: 0, whiteSpace: 'nowrap',
          }}>
            {cert.hours}
          </span>
        </div>

        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.2rem' }}>
          {cert.issuer}
        </p>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', color: 'var(--faint)', letterSpacing: '0.04em', marginBottom: '0.85rem' }}>
          {cert.period}
        </p>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1rem' }}>
          {cert.description}
        </p>

        {/* Footer — category tag + view proof toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{
            fontFamily: '"DM Sans", sans-serif', fontSize: '0.62rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '2px 8px',
            background: `${accent}12`, color: accent, border: `1px solid ${accent}30`,
          }}>
            {CATEGORY_LABELS[cert.category] || cert.category}
          </span>

          <button
            onClick={() => setShowProof(p => !p)}
            style={{
              background: 'none', border: 'none',
              fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem',
              fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: showProof ? 'var(--gold)' : 'var(--muted)',
              cursor: 'pointer', padding: 0,
              display: 'flex', alignItems: 'center', gap: '5px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = showProof ? 'var(--gold)' : 'var(--muted)'}
          >
            {showProof ? '↑ Hide Proof' : '↓ View Proof'}
          </button>
        </div>
      </div>

      {/* Expandable proof section */}
      <div style={{
        maxHeight: showProof ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{ borderTop: '1px solid var(--border)', padding: '1.25rem 1.6rem 1.6rem' }}>
          {hasProof ? (
            <>
              {/* Clickable image — opens modal */}
              <div
                onClick={() => onOpenModal(cert.proof, cert.title)}
                style={{
                  cursor: 'zoom-in',
                  position: 'relative',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.transform = 'scale(1.01)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <img
                  src={cert.proof}
                  alt={`${cert.title} certificate`}
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%', height: '180px',
                    objectFit: 'cover', objectPosition: 'top center',
                    display: 'block',
                  }}
                />
                {/* Hover overlay hint */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0)'}
                >
                  <span style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.72rem', fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#fff', opacity: 0,
                    background: 'rgba(0,0,0,0.55)',
                    padding: '6px 14px',
                    border: '1px solid rgba(232,184,109,0.5)',
                    transition: 'opacity 0.2s',
                    pointerEvents: 'none',
                  }}
                    className="zoom-hint"
                  >
                    🔍 Click to enlarge
                  </span>
                </div>
              </div>

              <p style={{
                fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem',
                color: 'var(--faint)', marginTop: '0.5rem', textAlign: 'center',
                letterSpacing: '0.05em',
              }}>
                Click image to view full size
              </p>
            </>
          ) : (
            <CertPlaceholder accent={accent} />
          )}
        </div>
      </div>
    </div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Certifications() {
  const [ref, visible]     = useScrollReveal()
  const [modal, setModal]  = useState(null) // { src, title } or null

  return (
    <>
      <section id="certifications" className="section-divider" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 6vw, 8rem)' }}>
        <SectionHeader
          label="Credentials"
          title="Certifications & Trainings"
          subtitle="Formal training and industry certifications — click View Proof to expand, click the image to enlarge."
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
            <CertCard
              key={cert.title}
              cert={cert}
              index={i}
              visible={visible}
              onOpenModal={(src, title) => setModal({ src, title })}
            />
          ))}
        </div>
      </section>

      {/* Modal — rendered outside the section so it covers the full viewport */}
      {modal && (
        <ImageModal
          src={modal.src}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}

      <style>{`
        .zoom-hint { pointer-events: none; }
        div:hover > .zoom-hint { opacity: 1 !important; }
      `}</style>
    </>
  )
}