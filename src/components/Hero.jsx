'use client'
import { useEffect, useState } from 'react'
import { PROJECTS, EXPERIENCE, SOCIAL } from '../lib/data'

// Compute stats dynamically — excludes internship/trainee from experience count
function computeStats() {
  // Years of experience: count only non-internship, non-trainee roles
  const qualifiedRoles = EXPERIENCE.filter(e => {
    const t = e.type?.toLowerCase() || ''
    return !t.includes('internship') && !t.includes('trainee') && !t.includes('remote')
  })

  // Unique disciplines
  const disciplines = [...new Set(EXPERIENCE.map(e => e.category))].length

  return [
    { value: `${qualifiedRoles.length}+`, label: 'Work\nExperience' },
    { value: `${PROJECTS.length}+`,       label: 'Projects\nDelivered' },
    { value: `${disciplines}`,             label: 'Disciplines\nPM · QA · Dev' },
  ]
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const stats = computeStats()

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px clamp(1.25rem, 6vw, 8rem) 3rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Backgrounds */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <div className="glow-orb" style={{ position: 'absolute', top: '15%', right: '5%', width: '500px', height: '500px', borderRadius: '50%', zIndex: 0 }} />
      <div className="glow-orb" style={{ position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px' }}>
        <div className="hero-grid">

          {/* ── LEFT: text ── */}
          <div>
            {/* Role badge — wraps gracefully on mobile */}
            <div style={{ ...fade(0), marginBottom: '1.25rem' }}>
              <span style={{
                background: 'var(--gold-dim)',
                border: '1px solid var(--gold-border)',
                color: 'var(--gold)',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 'clamp(0.55rem, 1.2vw, 0.68rem)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                display: 'inline-block',
                lineHeight: 1.6,
                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}>
                Project Manager · QA Specialist · IT Professional
              </span>
            </div>

            <h1 style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
              marginBottom: '1.25rem',
              ...fade(120),
            }}>
              Hazel Anne<br />
              <span style={{ color: 'var(--faint)' }}> Marqueses</span>
            </h1>

            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 'clamp(0.88rem, 1.5vw, 1.05rem)',
              lineHeight: 1.8,
              color: 'var(--muted)',
              maxWidth: '480px',
              marginBottom: '2rem',
              ...fade(240),
            }}>
              I bridge the gap between technical execution and project clarity — leading teams, ensuring quality, and delivering software that works the way it should.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem', ...fade(360) }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View Case Studies →
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Get in Touch
              </button>
            </div>

            {/* ── Dynamic Stats ── */}
            <div style={{
              display: 'flex',
              gap: 'clamp(1.5rem, 4vw, 3rem)',
              flexWrap: 'wrap',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border)',
              ...fade(480),
            }}>
              {stats.map(({ value, label }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    color: 'var(--gold)',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    {value}
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.68rem',
                    color: 'var(--muted)',
                    marginTop: '0.3rem',
                    letterSpacing: '0.04em',
                    lineHeight: 1.4,
                    whiteSpace: 'pre-line',
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: photo ── */}
          <div className="hero-photo-wrap" style={fade(150)}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '340px',
              marginLeft: 'auto',
              marginRight: '-0.5rem',
            }}>
              {/* Corner brackets */}
              <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '30px', height: '30px', borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '30px', height: '30px', borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)', zIndex: 2, pointerEvents: 'none' }} />
              {/* Offset gold border */}
              <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--gold-border)', transform: 'translate(10px, 10px)', zIndex: 0, pointerEvents: 'none' }} />

              {/* Photo — using plain <img> for reliable production display */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                border: '1px solid var(--border)',
                overflow: 'hidden',
                background: 'var(--surface)',
                width: '100%',
                // Fixed height instead of aspect ratio trick
                height: 'clamp(280px, 40vw, 420px)',
              }}>
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Hazel Marqueses"
                    onError={() => setImgError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--gold-dim)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: '1.8rem', color: 'var(--gold)' }}>H</span>
                    </div>
                    <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', color: 'var(--faint)', letterSpacing: '0.1em' }}>HAZEL</span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%', background: 'linear-gradient(to top, rgba(8,8,12,0.25), transparent)', zIndex: 2, pointerEvents: 'none' }} />
              </div>

              {/* Availability badge */}
              <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '7px', justifyContent: 'center' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#5cb85c', boxShadow: '0 0 6px #5cb85c', flexShrink: 0 }} />
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: center;
        }
        @media (max-width: 820px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-photo-wrap {
            order: -1;
          }
          .hero-photo-wrap > div {
            max-width: 200px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  )
}