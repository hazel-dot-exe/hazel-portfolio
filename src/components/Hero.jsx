'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { STATS, SOCIAL } from '../lib/data'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px clamp(1.25rem, 6vw, 8rem) 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid bg */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <div className="glow-orb" style={{ position: 'absolute', top: '15%', right: '8%', width: '500px', height: '500px', borderRadius: '50%', zIndex: 0 }} />
      <div className="glow-orb" style={{ position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', zIndex: 0 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1100px' }}>

        {/* Two-column on desktop, stacked on mobile */}
        <div className="hero-grid">

          {/* LEFT — text */}
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
              Hazel<br />
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

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem', ...fade(360) }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View Case Studies →
              </button>
              <a href={`mailto:${SOCIAL.email}`} className="btn-outline">
                Get in Touch
              </a>
            </div>

            <div style={{
              display: 'flex',
              gap: 'clamp(1.25rem, 4vw, 3rem)',
              flexWrap: 'wrap',
              paddingTop: '1.75rem',
              borderTop: '1px solid var(--border)',
              ...fade(480),
            }}>
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--gold)', lineHeight: 1 }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.3rem', letterSpacing: '0.05em' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo */}
          <div className="hero-photo" style={fade(200)}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
              {/* Aspect ratio wrapper */}
              <div style={{ position: 'relative', paddingBottom: '125%' }}>
                {/* Corner brackets */}
                <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '28px', height: '28px', borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)', zIndex: 2 }} />
                <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '28px', height: '28px', borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)', zIndex: 2 }} />
                {/* Offset border */}
                <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--gold-border)', transform: 'translate(8px, 8px)', zIndex: 0 }} />
                {/* Photo */}
                <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--border)', overflow: 'hidden', zIndex: 1, background: 'var(--surface)' }}>
                  <Image
                    src="/profile.jpg"
                    alt="Hazel Anne B. Marqueses"
                    fill
                    sizes="(max-width: 768px) 200px, 300px"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    priority
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, rgba(8,8,12,0.35), transparent)', zIndex: 1 }} />
                </div>
              </div>

              {/* Availability badge */}
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '7px', justifyContent: 'center' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#5cb85c', boxShadow: '0 0 6px #5cb85c' }} />
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        ...fade(600),
      }}>
        <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--faint)' }}>Scroll</span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: center;
        }
        .hero-photo {
          flex-shrink: 0;
          width: clamp(160px, 25vw, 300px);
        }
        @media (max-width: 700px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-photo {
            width: 100%;
            order: -1;
          }
          .hero-photo > div {
            max-width: 200px !important;
          }
        }
      `}</style>
    </section>
  )
}