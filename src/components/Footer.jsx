'use client'
import { useEffect, useState } from 'react'
import { SOCIAL } from '../lib/data'

// ── Visitor counter ────────────────────────────────────────────────
// Uses localStorage to track unique visits per device.
// Stores count in localStorage so it persists across sessions on same device.
// For a true cross-device counter you'd need a backend — this is a
// privacy-friendly client-side approximation that shows real engagement.

const STORAGE_KEY = 'portfolio_visitor_count'
const VISIT_KEY   = 'portfolio_has_visited'

function useVisitorCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    try {
      // Get current count
      const stored = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10)

      // Only increment if this device hasn't visited this session
      const hasVisited = sessionStorage.getItem(VISIT_KEY)
      let newCount = stored

      if (!hasVisited) {
        newCount = stored + 1
        localStorage.setItem(STORAGE_KEY, String(newCount))
        sessionStorage.setItem(VISIT_KEY, 'true')
      }

      // Animate count up
      let start = 0
      const end = newCount
      const duration = 1200
      const startTime = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(tick)
        else setCount(end)
      }
      requestAnimationFrame(tick)
    } catch {
      setCount(1)
    }
  }, [])

  return count
}

export default function Footer() {
  const year         = new Date().getFullYear()
  const visitorCount = useVisitorCount()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.25rem, 6vw, 8rem)',
    }}>
      {/* Top row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.25rem',
      }}>
        <span style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '1.05rem', color: 'var(--text)' }}>
          Hazel<span style={{ color: 'var(--gold)' }}>.</span>
        </span>

        <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 2rem)', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            ['GitHub',   SOCIAL.github],
            ['LinkedIn', SOCIAL.linkedin],
            ['Email',    `mailto:${SOCIAL.email}`],
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
      </div>

      {/* Bottom row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.72rem',
          color: 'var(--faint)',
          letterSpacing: '0.04em',
        }}>
          © {year} Hazel Marqueses · Project Manager & QA Specialist
        </p>

        {/* Visitor counter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '5px 12px',
          border: '1px solid var(--border)',
          background: 'var(--surface)',
        }}>
          {/* Live pulse dot */}
          <div style={{ position: 'relative', width: '7px', height: '7px', flexShrink: 0 }}>
            <div style={{
              position: 'absolute', inset: 0,
              borderRadius: '50%',
              background: 'var(--gold)',
              opacity: 0.4,
              animation: 'pulse-ring 1.8s ease-out infinite',
            }} />
            <div style={{
              position: 'absolute', inset: '1px',
              borderRadius: '50%',
              background: 'var(--gold)',
            }} />
          </div>

          <span style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.7rem',
            color: 'var(--muted)',
            letterSpacing: '0.06em',
          }}>
            {visitorCount === null ? '—' : visitorCount.toLocaleString()} {visitorCount === 1 ? 'visit' : 'visits'}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.5; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </footer>
  )
}