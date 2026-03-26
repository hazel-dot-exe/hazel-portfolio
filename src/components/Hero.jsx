'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getStats, SOCIAL } from '../lib/data'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const stats = getStats()

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // Reduced bottom padding so gap to next section is tighter
        padding: '80px clamp(1.25rem, 6vw, 8rem) 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Backgrounds */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <div className="glow-orb" style={{ position: 'absolute', top: '15%', right: '5%', width: '500px', height: '500px', borderRadius: '50%', zIndex: 0 }} />
      <div className="glow-orb" style={{ position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px' }}>
        <div className="hero-grid">

          {/* LEFT — text content */}
          <div className="hero-text">
            <div style={fade(0)}>
              <span className="tag-gold" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                Project Manager · QA Specialist · IT Professional
              </span>
            </div>

            <h1 style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
              marginTop: '0.75rem',
              marginBottom: '1.25rem',
              ...fade(120),
            }}>
              Hazel <br />
              <span style={{ color: 'var(--faint)' }}>Marqueses</span>
            </h1>

            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
              lineHeight: 1.8,
              color: 'var(--muted)',
              maxWidth: '500px',
              marginBottom: '2rem',
              ...fade(240),
            }}>
              I bridge the gap between technical execution and project clarity — leading teams, ensuring quality, and delivering software that works the way it should.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem', ...fade(360) }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View Case Studies →
              </button>
              {/* Get in Touch → scrolls to contact section */}
              <button onClick={scrollToContact} className="btn-outline">
                Get in Touch
              </button>
            </div>

            {/* Dynamic stats — auto-updates when you add projects/experience */}
            <div style={{
              display: 'flex',
              gap: 'clamp(1.25rem, 4vw, 3rem)',
              flexWrap: 'wrap',
              paddingTop: '1.75rem',
              borderTop: '1px solid var(--border)',
              ...fade(480),
            }}>
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div style={{
                    fontFamily: '"DM Serif Display", Georgia, serif',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    color: 'var(--gold)',
                    lineHeight: 1,
                  }}>
                    {value}
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.7rem',
                    color: 'var(--muted)',
                    marginTop: '0.3rem',
                    letterSpacing: '0.04em',
                    maxWidth: '100px',
                    lineHeight: 1.4,
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo, bigger and pushed right */}
          <div className="hero-photo" style={fade(150)}>
            {/* Outer wrapper — pushed slightly to the right */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '340px',
              marginLeft: 'auto',  // pushes to the right
              marginRight: '-1rem', // slightly outside the column
            }}>
              {/* Aspect ratio box */}
              <div style={{ position: 'relative', paddingBottom: '120%' }}>
                {/* Corner brackets */}
                <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '32px', height: '32px', borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)', zIndex: 2 }} />
                <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '32px', height: '32px', borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)', zIndex: 2 }} />
                {/* Gold offset border */}
                <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--gold-border)', transform: 'translate(10px, 10px)', zIndex: 0 }} />
                {/* Photo container */}
                <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--border)', overflow: 'hidden', zIndex: 1, background: 'var(--surface)' }}>
                  {imgError ? (
                    // Fallback placeholder
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
                  ) : (
                    <Image
                      src="/profile.jpg"
                      alt="Hazel Anne B. Marqueses"
                      fill
                      sizes="(max-width: 700px) 220px, 340px"
                      style={{ objectFit: 'cover', objectPosition: 'top center' }}
                      priority
                      onError={() => setImgError(true)}
                    />
                  )}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%', background: 'linear-gradient(to top, rgba(8,8,12,0.3), transparent)', zIndex: 2 }} />
                </div>
              </div>

              {/* Availability badge */}
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '7px', justifyContent: 'center' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#5cb85c', boxShadow: '0 0 6px #5cb85c' }} />
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* NO scroll indicator — removed as requested */}

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: center;
        }
        .hero-photo { flex-shrink: 0; }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-photo {
            order: -1;
            width: 100%;
          }
          .hero-photo > div {
            margin-right: 0 !important;
            max-width: 220px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  )
}