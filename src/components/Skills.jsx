'use client'
import { SKILLS, RESUME_LINK } from '../lib/data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../lib/useScrollReveal'

const CATEGORY_ACCENTS = {
  'Project Management':    '#e8b86d',
  'QA & Testing':          '#c084fc',
  'Development & Technical': '#5cb85c',
  'Tools & Platforms':     '#60a5fa',
}

function SkillCategory({ category, items, index }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 })
  const accent = CATEGORY_ACCENTS[category] || 'var(--gold)'

  return (
    <div
      ref={ref}
      className="card"
      style={{
        padding: '2rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
      }}
    >
      <div style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.68rem', fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: accent, marginBottom: '1.5rem',
        paddingBottom: '0.75rem',
        borderBottom: `1px solid ${accent}25`,
      }}>
        {category}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {items.map((item) => (
          <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
            <span style={{ color: accent, fontSize: '0.55rem', marginTop: '0.5rem', flexShrink: 0 }}>▸</span>
            <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.5 }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ResumeBlock() {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{
        marginTop: '3rem',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        border: '1px solid var(--gold-border)',
        background: 'var(--gold-dim)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div>
        <h4 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
          fontWeight: 400, color: 'var(--text)', marginBottom: '0.4rem',
        }}>
          Want the full picture?
        </h4>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem', color: 'var(--muted)' }}>
          View my live resume — always up to date.
        </p>
      </div>

      {/* Opens Canva resume link in a new tab — always reflects latest version */}
      <a
        href={RESUME_LINK}
        target="_blank"
        rel="noreferrer"
        className="btn-primary"
        style={{ flexShrink: 0 }}
      >
        View Resume →
      </a>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-divider" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 6vw, 8rem)' }}>
      <SectionHeader
        label="Capabilities"
        title="Skills & Tools"
        subtitle="Organized by discipline — from project delivery to testing, development, and automation."
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '1.5rem',
      }}>
        {Object.entries(SKILLS).map(([category, items], i) => (
          <SkillCategory key={category} category={category} items={items} index={i} />
        ))}
      </div>

      <ResumeBlock />
    </section>
  )
}