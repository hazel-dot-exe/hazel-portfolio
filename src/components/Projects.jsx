'use client'
import { useState, useEffect } from 'react'
import { PROJECTS } from '../lib/data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../lib/useScrollReveal'

const INITIAL_COUNT = 3

// ── Icons ────────────────────────────────────────────────────────────────────
const ICONS = {
  globe: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  github: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  figma: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zM12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0zM5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
    </svg>
  ),
  doc: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  folder: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  video: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  ),
}

// ── Image modal ──────────────────────────────────────────────────────────────
function ImageModal({ src, caption, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
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
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(1rem, 4vw, 3rem)',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '1.25rem', right: '1.25rem',
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', width: '40px', height: '40px', borderRadius: '50%',
          cursor: 'pointer', fontSize: '1.1rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s', zIndex: 1,
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,184,109,0.3)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >✕</button>

      <div onClick={e => e.stopPropagation()} style={{
        maxWidth: '90vw', maxHeight: '90vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
        animation: 'scaleIn 0.25s ease',
      }}>
        <img
          src={src}
          alt={caption}
          style={{
            maxWidth: '100%', maxHeight: '82vh', objectFit: 'contain',
            border: '1px solid rgba(232,184,109,0.3)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          }}
        />
        {caption && (
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textAlign: 'center' }}>
            {caption} · <span style={{ color: 'rgba(232,184,109,0.7)' }}>Esc or click outside to close</span>
          </p>
        )}
      </div>
      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.93) } to { opacity: 1; transform: scale(1) } }
      `}</style>
    </div>
  )
}

// ── Case section label ───────────────────────────────────────────────────────
function CaseSection({ label, accent, children }) {
  return (
    <div>
      <div style={{
        fontFamily: '"DM Sans", sans-serif', fontSize: '0.67rem', fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: accent, paddingBottom: '0.5rem', marginBottom: '0.75rem',
        borderBottom: `1px solid ${accent}28`,
      }}>
        {label}
      </div>
      {children}
    </div>
  )
}

// ── Work samples tab content ─────────────────────────────────────────────────
function WorkSamples({ project, onOpenModal }) {
  const { samples, accent } = project
  const hasImages = samples?.images?.length > 0
  const hasLinks  = samples?.links?.length > 0
  const isEmpty   = !hasImages && !hasLinks

  if (isEmpty) {
    return (
      <div style={{
        padding: '2rem',
        border: `1px dashed ${accent}30`,
        background: `${accent}05`,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '0.75rem', textAlign: 'center',
        gridColumn: '1 / -1',
      }}>
        {/* Placeholder icon */}
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <div>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: 'var(--muted)', marginBottom: '0.3rem' }}>
            Work samples coming soon
          </p>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.74rem', color: 'var(--faint)', letterSpacing: '0.04em' }}>
            Screenshots, reports, and links will be added here
          </p>
        </div>
        {/* How to add hint — only visible in dev, remove when you have real samples */}
        <div style={{
          marginTop: '0.5rem', padding: '0.6rem 1rem',
          background: 'var(--surface)', border: '1px solid var(--border)',
          fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem',
          color: 'var(--faint)', lineHeight: 1.6, textAlign: 'left',
        }}>
          <strong style={{ color: 'var(--muted)' }}>NOTE:</strong> Not all reports and documents are included here, as certain materials and data used are confidential and cannot be disclosed publicly.
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Screenshot gallery */}
      {hasImages && (
        <CaseSection label="Screenshots" accent={accent}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '0.75rem',
          }}>
            {samples.images.map((img, i) => (
              <div
                key={i}
                onClick={() => onOpenModal(img.src, img.caption)}
                style={{
                  cursor: 'zoom-in', border: '1px solid var(--border)',
                  overflow: 'hidden', background: 'var(--surface)',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.transform = 'scale(1.02)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  style={{ width: '100%', height: '110px', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
                {img.caption && (
                  <div style={{ padding: '6px 8px', fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', color: 'var(--muted)', lineHeight: 1.3 }}>
                    {img.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', color: 'var(--faint)', marginTop: '0.5rem', letterSpacing: '0.04em' }}>
            Click any image to enlarge
          </p>
        </CaseSection>
      )}

      {/* Links */}
      {hasLinks && (
        <CaseSection label="Links & Resources" accent={accent}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {samples.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: '"DM Sans", sans-serif', fontSize: '0.78rem',
                  fontWeight: 500, letterSpacing: '0.04em',
                  padding: '6px 12px',
                  border: `1px solid ${accent}35`,
                  background: `${accent}10`,
                  color: accent, textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${accent}20`; e.currentTarget.style.borderColor = `${accent}60` }}
                onMouseLeave={e => { e.currentTarget.style.background = `${accent}10`; e.currentTarget.style.borderColor = `${accent}35` }}
              >
                <span style={{ display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                  {ICONS[link.icon] || ICONS.globe}
                </span>
                {link.label}
                <span style={{ opacity: 0.5, fontSize: '0.65rem' }}>↗</span>
              </a>
            ))}
          </div>
        </CaseSection>
      )}
    </>
  )
}

// ── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [open, setOpen]         = useState(false)
  const [activeTab, setActiveTab] = useState('case-study') // 'case-study' | 'samples'
  const [modal, setModal]       = useState(null)
  const [ref, visible]          = useScrollReveal({ threshold: 0.1 })

  const bodyText = {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '0.875rem', lineHeight: 1.8,
    color: 'var(--muted)', margin: 0,
  }

  const hasAnySamples = project.samples?.images?.length > 0 || project.samples?.links?.length > 0

  return (
    <>
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: `opacity 0.65s ease ${index * 120}ms, transform 0.65s ease ${index * 120}ms`,
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ border: '1px solid var(--border)', background: 'var(--surface)', overflow: 'hidden', transition: 'border-color 0.25s' }}
          onMouseEnter={e => { if (!open) e.currentTarget.style.borderColor = 'var(--gold-border)' }}
          onMouseLeave={e => { if (!open) e.currentTarget.style.borderColor = 'var(--border)' }}
        >
          {/* Card header */}
          <div
            onClick={() => setOpen(!open)}
            style={{
              padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 3vw, 2.5rem)',
              cursor: 'pointer', display: 'flex',
              justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem',
              userSelect: 'none',
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: project.accent, background: `${project.accent}12`,
                  border: `1px solid ${project.accent}30`, padding: '3px 10px',
                }}>
                  {project.tag}
                </span>
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.74rem', color: 'var(--faint)', letterSpacing: '0.04em' }}>
                  {project.duration}
                </span>
              </div>
              <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)', fontWeight: 400, color: 'var(--text)', marginBottom: '0.35rem' }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem', color: 'var(--muted)' }}>
                {project.subtitle}
              </p>
            </div>
            <div style={{
              width: '36px', height: '36px', flexShrink: 0,
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--gold)', fontSize: '1.4rem', fontWeight: 300, lineHeight: 1,
              transition: 'transform 0.35s, border-color 0.2s',
              transform: open ? 'rotate(45deg)' : 'none',
              borderColor: open ? project.accent : undefined,
            }}>+</div>
          </div>

          {/* Expanded content */}
          <div style={{
            maxHeight: open ? '3000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.6s cubic-bezier(0.4,0,0.2,1)',
          }}>
            <div style={{ borderTop: '1px solid var(--border)' }}>

              {/* Tab switcher */}
              <div style={{ display: 'flex', borderBottom: '1px solid var(--border)' }}>
                {[
                  { id: 'case-study', label: 'Case Study' },
                  { id: 'samples',    label: `Work Samples${hasAnySamples ? '' : ' ·  Coming Soon'}` },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      background: 'none', border: 'none',
                      borderBottom: `2px solid ${activeTab === tab.id ? project.accent : 'transparent'}`,
                      padding: '0.85rem 1.5rem',
                      fontFamily: '"DM Sans", sans-serif', fontSize: '0.76rem',
                      fontWeight: activeTab === tab.id ? 700 : 400,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: activeTab === tab.id ? project.accent : 'var(--muted)',
                      cursor: 'pointer', transition: 'color 0.2s, border-color 0.2s',
                      marginBottom: '-1px',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>

                {/* ── Case Study tab ── */}
                {activeTab === 'case-study' && (
                  <>
                    <div style={{ borderLeft: `3px solid ${project.accent}`, paddingLeft: '1rem', marginBottom: '2rem', fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: 'var(--muted)' }}>
                      <strong style={{ color: project.accent }}>Role: </strong>{project.role}
                      &nbsp;·&nbsp;
                      <strong style={{ color: project.accent }}>Client: </strong>{project.client}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                      <CaseSection label="Overview" accent={project.accent}>
                        <p style={bodyText}>{project.overview}</p>
                      </CaseSection>
                      <CaseSection label="The Problem" accent={project.accent}>
                        <p style={bodyText}>{project.problem}</p>
                      </CaseSection>
                      <CaseSection label="PM Approach" accent={project.accent}>
                        <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                          {project.approach.map((item, i) => (
                            <li key={i} style={{ ...bodyText, marginBottom: '0.5rem' }}>{item}</li>
                          ))}
                        </ul>
                      </CaseSection>
                      <CaseSection label="QA Contribution" accent={project.accent}>
                        <p style={bodyText}>{project.qa}</p>
                      </CaseSection>
                      <CaseSection label="Outcome" accent={project.accent}>
                        <p style={bodyText}>{project.outcome}</p>
                      </CaseSection>
                      <CaseSection label="Tools & Stack" accent={project.accent}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
                          {project.tools.map(t => (
                            <span key={t} style={{
                              fontFamily: '"DM Sans", sans-serif', fontSize: '0.73rem',
                              padding: '3px 10px', background: `${project.accent}12`,
                              border: `1px solid ${project.accent}30`, color: project.accent,
                            }}>{t}</span>
                          ))}
                        </div>
                      </CaseSection>
                    </div>
                  </>
                )}

                {/* ── Work Samples tab ── */}
                {activeTab === 'samples' && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                    <WorkSamples project={project} onOpenModal={(src, caption) => setModal({ src, caption })} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image modal */}
      {modal && <ImageModal src={modal.src} caption={modal.caption} onClose={() => setModal(null)} />}
    </>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [ref, visible] = useScrollReveal()

  const visibleProjects = PROJECTS.slice(0, visibleCount)
  const hasMore    = visibleCount < PROJECTS.length
  const remaining  = PROJECTS.length - visibleCount

  return (
    <section id="projects" className="section-divider" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 6vw, 8rem)' }}>
      <SectionHeader
        label="Work"
        title="Case Studies"
        subtitle="Each project includes a full case study and work samples — covering the problem, approach, QA process, and proof of delivery."
      />

      {visibleProjects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}

      {/* Load more */}
      <div
        ref={ref}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '1rem', marginTop: '2.5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.78rem', color: 'var(--faint)', letterSpacing: '0.06em' }}>
          Showing {visibleProjects.length} of {PROJECTS.length} projects
        </p>
        <div style={{ width: '200px', height: '2px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(visibleProjects.length / PROJECTS.length) * 100}%`, background: 'var(--gold)', transition: 'width 0.4s ease' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {hasMore && (
            <button onClick={() => setVisibleCount(p => p + 2)} className="btn-primary">
              Load More ({remaining} remaining)
            </button>
          )}
          {visibleCount > INITIAL_COUNT && (
            <button onClick={() => { setVisibleCount(INITIAL_COUNT); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-outline">
              ↑ Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  )
}