'use client'
import { useState } from 'react'
import { EXPERIENCE } from '../lib/data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../lib/useScrollReveal'

const INITIAL_COUNT = 4

const CATEGORIES = [
  { id: 'all', label: 'All Roles' },
  { id: 'pm', label: 'Project Management' },
  { id: 'qa', label: 'QA & Testing' },
  { id: 'tech', label: 'Technical' },
]

const TYPE_COLORS = {
  'Contractual':          '#fb7244',
  'Part-Time':            '#ff04cd',
  'Full-Time':            '#5cb85c',
  'Internship':           '#368efa',
  'Internship (486 hrs)': '#368efa',
  'Remote':               '#368efa',
}

function ExperienceCard({ exp, index, visible }) {
  const [expanded, setExpanded] = useState(false)
  const typeColor = TYPE_COLORS[exp.type] || '#e8b86d'
  const COLLAPSED = 2
  const hasMore = exp.highlights.length > COLLAPSED
  const shown = expanded ? exp.highlights : exp.highlights.slice(0, COLLAPSED)

  return (
    <div
      style={{
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
        transition: `border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, opacity 0.6s ease ${index * 80}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--gold)'
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(232,184,109,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Gold top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '2px', background: 'var(--gold)', opacity: 0.6,
      }} />

      {/* Role + type badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.25rem' }}>
        <h4 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: '1.1rem', fontWeight: 400,
          color: 'var(--text)', lineHeight: 1.3,
        }}>
          {exp.role}
        </h4>
        <span style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.62rem', letterSpacing: '0.08em',
          padding: '3px 8px',
          background: `${typeColor}18`,
          color: typeColor,
          border: `1px solid ${typeColor}35`,
          flexShrink: 0, whiteSpace: 'nowrap',
        }}>
          {exp.type}
        </span>
      </div>

      {/* Company */}
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.83rem', color: 'var(--gold)',
        fontWeight: 500, marginBottom: '0.25rem',
      }}>
        {exp.company}
      </p>

      {/* Period */}
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.73rem', color: 'var(--faint)',
        letterSpacing: '0.04em', marginBottom: '1.1rem',
      }}>
        {exp.period}
      </p>

      {/* Highlights */}
      <ul style={{ paddingLeft: '1rem', margin: 0 }}>
        {shown.map((h, i) => (
          <li key={i} style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.84rem', color: 'var(--muted)',
            lineHeight: 1.7, marginBottom: '0.35rem',
          }}>
            {h}
          </li>
        ))}
      </ul>

      {/* Read more / Show less */}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: '0.6rem', background: 'none', border: 'none',
            fontFamily: '"DM Sans", sans-serif', fontSize: '0.75rem',
            fontWeight: 600, letterSpacing: '0.08em',
            color: 'var(--gold)', cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', gap: '4px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          {expanded ? '↑ Show less' : '↓ Read more'}
        </button>
      )}
    </div>
  )
}

export default function Experience() {
  const [filter, setFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [ref, visible] = useScrollReveal()

  const filtered = EXPERIENCE.filter((e) => filter === 'all' || e.category === filter)
  const visibleItems = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length
  const remaining = filtered.length - visibleCount

  const handleFilterChange = (id) => {
    setFilter(id)
    setVisibleCount(INITIAL_COUNT)
  }

  return (
    <section id="experience" className="section-divider" style={{ padding: '8rem clamp(1.5rem, 8vw, 8rem)' }}>
      <SectionHeader
        label="Background"
        title="Experience"
        subtitle="Across project management, QA, and technical development — a track record of delivery."
      />

      {/* Filter tabs */}
      <div
        ref={ref}
        style={{
          display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        {CATEGORIES.map((cat) => {
          const active = filter === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              style={{
                background: active ? 'var(--gold)' : 'transparent',
                color: active ? '#08080c' : 'var(--muted)',
                border: '1px solid',
                borderColor: active ? 'var(--gold)' : 'var(--border)',
                padding: '0.4rem 1.1rem',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.78rem',
                fontWeight: active ? 700 : 400,
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.25rem',
      }}>
        {visibleItems.map((exp, i) => (
          <ExperienceCard
            key={`${exp.role}-${exp.company}`}
            exp={exp}
            index={i}
            visible={visible}
          />
        ))}
      </div>

      {/* Load more / Show less */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '1rem', marginTop: '3rem',
      }}>
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.78rem', color: 'var(--faint)', letterSpacing: '0.06em',
        }}>
          Showing {visibleItems.length} of {filtered.length} roles
        </p>

        {/* Progress bar */}
        <div style={{
          width: '200px', height: '2px',
          background: 'var(--border)', borderRadius: '2px', overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${(visibleItems.length / filtered.length) * 100}%`,
            background: 'var(--gold)',
            borderRadius: '2px',
            transition: 'width 0.4s ease',
          }} />
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {hasMore && (
            <button
              onClick={() => setVisibleCount(p => p + 2)}
              className="btn-primary"
            >
              Load More ({remaining} remaining)
            </button>
          )}
          {visibleCount > INITIAL_COUNT && (
            <button
              onClick={() => {
                setVisibleCount(INITIAL_COUNT)
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline"
            >
              ↑ Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  )
}