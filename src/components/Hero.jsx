'use client'
import { useEffect, useState } from 'react'
import { STATS, SOCIAL } from '../lib/data'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fadeStyle = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  })

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 clamp(1.5rem, 8vw, 8rem)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid bg */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Glow orb */}
      <div className="glow-orb" style={{
        position: 'absolute', top: '15%', right: '8%',
        width: '500px', height: '500px', borderRadius: '50%', zIndex: 0,
      }} />
      <div className="glow-orb" style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '300px', height: '300px', borderRadius: '50%', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '920px' }}>

        {/* Role badge */}
        <div style={fadeStyle(0)}>
          <span className="tag-gold" style={{ marginBottom: '0.75rem', display: 'inline-block'}}>
            Project Manager · QA Specialist · IT Professional
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 400,
          lineHeight: 1.05,
          color: 'var(--text)',
          letterSpacing: '-0.01em',
          marginTop: '0.75rem',
          marginBottom: '1.75rem',
          ...fadeStyle(120),
        }}>
          Hazel<br />
          <span style={{ color: 'var(--faint)' }}>Marqueses</span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
          lineHeight: 1.8,
          color: 'var(--muted)',
          maxWidth: '560px',
          marginBottom: '2.5rem',
          ...fadeStyle(240),
        }}>
          I bridge the gap between technical execution and project clarity — leading teams, ensuring quality, and delivering software that works the way it should.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem', ...fadeStyle(360) }}>
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
          gap: 'clamp(2rem, 5vw, 4rem)',
          flexWrap: 'wrap',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          ...fadeStyle(480),
        }}>
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontSize: '2.2rem',
                color: 'var(--gold)',
                lineHeight: 1,
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.76rem',
                color: 'var(--muted)',
                marginTop: '0.35rem',
                letterSpacing: '0.05em',
              }}>
                {label}
              </div>
            </div>
          ))}
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
        ...fadeStyle(600),
      }}>
        <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--faint)' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </div>
    </section>
  )
}
