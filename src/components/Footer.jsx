'use client'
import { SOCIAL } from '../lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-divider" style={{
      padding: '2.5rem clamp(1.5rem, 8vw, 8rem)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <div>
        <span style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.05rem', color: 'var(--text)' }}>
          Hazel<span style={{ color: 'var(--gold)' }}>.</span>
        </span>
      </div>

      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.76rem', color: 'var(--faint)', letterSpacing: '0.04em' }}>
        © {year} Hazel Anne B. Marqueses · Project Manager & QA Specialist
      </p>

      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
        {[
          ['GitHub', SOCIAL.github],
          ['LinkedIn', SOCIAL.linkedin],
          ['Email', `mailto:${SOCIAL.email}`],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel="noreferrer"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              color: 'var(--faint)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--faint)'}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
