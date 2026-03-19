'use client'
import { useState } from 'react'
import { EXPERIENCE } from '../lib/data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../lib/useScrollReveal'

const CATEGORIES = [
  { id: 'all', label: 'All Roles' },
  { id: 'pm', label: 'Project Management' },
  { id: 'qa', label: 'QA & Testing' },
  { id: 'tech', label: 'Technical' },
]

const CATEGORY_COLORS = {
  pm: '#e8b86d',
  qa: '#c084fc',
  tech: '#5cb85c',
}

function ExperienceCard({ exp, index, visible }) {
  return (
    <div
      className="card"
      style={{
        padding: '1.75rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem', gap: '0.75rem' }}>
        <h4 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: '1.1rem',
          fontWeight: 400,
          color: 'var(--text)',
          lineHeight: 1.3,
        }}>
          {exp.role}
        </h4>
        <span style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.08em',
          padding: '3px 8px',
          background: `${CATEGORY_COLORS[exp.category] || 'var(--gold)'}12`,
          color: CATEGORY_COLORS[exp.category] || 'var(--gold)',
          border: `1px solid ${CATEGORY_COLORS[exp.category] || 'var(--gold)'}28`,
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}>
          {exp.type}
        </span>
      </div>

      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.83rem', color: 'var(--gold)', marginBottom: '0.35rem', fontWeight: 500 }}>
        {exp.company}
      </p>
      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.73rem', color: 'var(--faint)', letterSpacing: '0.04em', marginBottom: '1.1rem' }}>
        {exp.period}
      </p>

      <ul style={{ paddingLeft: '1rem', margin: 0 }}>
        {exp.highlights.map((h, i) => (
          <li key={i} style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.84rem',
            color: 'var(--muted)',
            lineHeight: 1.7,
            marginBottom: '0.35rem',
          }}>
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  const [filter, setFilter] = useState('all')
  const [ref, visible] = useScrollReveal()

  const filtered = EXPERIENCE.filter((e) => filter === 'all' || e.category === filter)

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
              onClick={() => setFilter(cat.id)}
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
        gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
        gap: '1.25rem',
      }}>
        {filtered.map((exp, i) => (
          <ExperienceCard key={`${exp.role}-${exp.company}`} exp={exp} index={i} visible={visible} />
        ))}
      </div>
    </section>
  )
}
