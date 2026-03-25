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
        padding: '0 clamp(1.5rem, 8vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div
        className="grid-bg"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      {/* Glow orbs */}
      <div className="glow-orb" style={{
        position: 'absolute', top: '15%', right: '8%',
        width: '500px', height: '500px', borderRadius: '50%', zIndex: 0,
      }} />
      <div className="glow-orb" style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '300px', height: '300px', borderRadius: '50%', zIndex: 0,
      }} />

      {/* Two-column layout */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 'clamp(2rem, 5vw, 5rem)',
        alignItems: 'center',
        maxWidth: '1100px',
        width: '100%',
      }}>

        {/* LEFT — text content */}
        <div>
          {/* Role badge */}
          <div style={fade(0)}>
            <span className="tag-gold" style={{ marginBottom: '1.75rem', display: 'inline-block' }}>
              Project Manager · QA Specialist · IT Professional
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            color: 'var(--text)',
            letterSpacing: '-0.01em',
            marginTop: '0.75rem',
            marginBottom: '1.5rem',
            ...fade(120),
          }}>
            Hazel Anne<br />
            <span style={{ color: 'var(--faint)' }}>B. Marqueses</span>
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(0.92rem, 1.6vw, 1.1rem)',
            lineHeight: 1.8,
            color: 'var(--muted)',
            maxWidth: '500px',
            marginBottom: '2.5rem',
            ...fade(240),
          }}>
            I bridge the gap between technical execution and project clarity — leading teams, ensuring quality, and delivering software that works the way it should.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem', ...fade(360) }}>
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

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: 'clamp(1.5rem, 4vw, 3.5rem)',
            flexWrap: 'wrap',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            ...fade(480),
          }}>
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontSize: '2rem',
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}>
                  {value}
                </div>
                <div style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.72rem',
                  color: 'var(--muted)',
                  marginTop: '0.3rem',
                  letterSpacing: '0.05em',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — photo */}
        <div style={{
          ...fade(200),
          flexShrink: 0,
        }}>
          {/* Photo frame */}
          <div style={{
            position: 'relative',
            width: 'clamp(220px, 22vw, 320px)',
            aspectRatio: '3/4',
          }}>
            {/* Decorative corner brackets */}
            <div style={{
              position: 'absolute', top: '-12px', left: '-12px',
              width: '32px', height: '32px',
              borderTop: '2px solid var(--gold)',
              borderLeft: '2px solid var(--gold)',
              zIndex: 2,
            }} />
            <div style={{
              position: 'absolute', bottom: '-12px', right: '-12px',
              width: '32px', height: '32px',
              borderBottom: '2px solid var(--gold)',
              borderRight: '2px solid var(--gold)',
              zIndex: 2,
            }} />

            {/* Gold offset border behind the photo */}
            <div style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid var(--gold-border)',
              transform: 'translate(10px, 10px)',
              zIndex: 0,
            }} />

            {/* Photo container */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              zIndex: 1,
              background: 'var(--surface)',
            }}>
              <Image
                src="/profile.jpg"
                alt="Hazel Anne B. Marqueses"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                priority
              />

              {/* Subtle gradient overlay at bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '30%',
                background: 'linear-gradient(to top, rgba(8,8,12,0.4), transparent)',
                zIndex: 1,
              }} />
            </div>
          </div>

          {/* Availability badge below photo */}
          <div style={{
            marginTop: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#5cb85c',
              boxShadow: '0 0 6px #5cb85c',
            }} />
            <span style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.72rem',
              color: 'var(--muted)',
              letterSpacing: '0.06em',
            }}>
              Open to opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        ...fade(600),
      }}>
        <span style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.62rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--faint)',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
        }} />
      </div>
    </section>
  )
}