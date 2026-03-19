'use client'
import { useState } from 'react'
import { PROJECTS } from '../lib/data'
import SectionHeader from './SectionHeader'
import { useScrollReveal } from '../lib/useScrollReveal'

function CaseSection({ label, accent, children }) {
  return (
    <div>
      <div style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.67rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: accent,
        paddingBottom: '0.5rem',
        marginBottom: '0.75rem',
        borderBottom: `1px solid ${accent}28`,
      }}>
        {label}
      </div>
      {children}
    </div>
  )
}

function ToolTag({ label, accent }) {
  return (
    <span style={{
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '0.73rem',
      padding: '3px 10px',
      background: `${accent}12`,
      border: `1px solid ${accent}30`,
      color: accent,
      letterSpacing: '0.04em',
    }}>
      {label}
    </span>
  )
}

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const [ref, visible] = useScrollReveal({ threshold: 0.1 })

  const bodyText = {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '0.875rem',
    lineHeight: 1.8,
    color: 'var(--muted)',
    margin: 0,
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${index * 120}ms, transform 0.65s ease ${index * 120}ms`,
        marginBottom: '1.25rem',
      }}
    >
      <div className="card" style={{ overflow: 'hidden' }}>
        {/* Card header — always visible */}
        <div
          onClick={() => setOpen(!open)}
          style={{
            padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 3vw, 2.5rem)',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            userSelect: 'none',
          }}
        >
          <div style={{ flex: 1 }}>
            {/* Tag + duration */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
              <span className="tag-gold" style={{ color: project.accent, background: `${project.accent}12`, borderColor: `${project.accent}30` }}>
                {project.tag}
              </span>
              <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.74rem', color: 'var(--faint)', letterSpacing: '0.04em' }}>
                {project.duration}
              </span>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              fontWeight: 400,
              color: 'var(--text)',
              marginBottom: '0.35rem',
            }}>
              {project.title}
            </h3>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem', color: 'var(--muted)' }}>
              {project.subtitle}
            </p>
          </div>

          {/* Toggle icon */}
          <div style={{
            width: '36px', height: '36px', flexShrink: 0,
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--gold)',
            fontSize: '1.4rem',
            fontWeight: 300,
            lineHeight: 1,
            transition: 'transform 0.35s, border-color 0.2s',
            transform: open ? 'rotate(45deg)' : 'none',
            borderColor: open ? project.accent : undefined,
          }}>
            +
          </div>
        </div>

        {/* Expanded case study */}
        <div style={{
          maxHeight: open ? '2000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.55s cubic-bezier(0.4,0,0.2,1)',
        }}>
          <div style={{ borderTop: '1px solid var(--border)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>

            {/* Left accent bar */}
            <div style={{
              borderLeft: `3px solid ${project.accent}`,
              paddingLeft: '1rem',
              marginBottom: '2rem',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.82rem',
              color: 'var(--muted)',
            }}>
              <strong style={{ color: project.accent }}>Role: </strong>{project.role}
              &nbsp;·&nbsp;
              <strong style={{ color: project.accent }}>Client: </strong>{project.client}
            </div>

            {/* Case study grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>

              <CaseSection label="Overview" accent={project.accent}>
                <p style={bodyText}>{project.overview}</p>
              </CaseSection>

              <CaseSection label="The Problem" accent={project.accent}>
                <p style={bodyText}>{project.problem}</p>
              </CaseSection>

              <CaseSection label="PM Approach" accent={project.accent}>
                <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                  {project.approach.map((item, i) => (
                    <li key={i} style={{ ...bodyText, marginBottom: '0.5rem' }}>{item}</li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection label="QA Contribution" accent={project.accent}>
                <p style={bodyText}>{project.qa}</p>
              </CaseSection>

              <CaseSection label="Outcome" accent={project.accent}>
                <p style={bodyText}>{project.outcome}</p>
              </CaseSection>

              <CaseSection label="Tools & Stack" accent={project.accent}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
                  {project.tools.map((t) => <ToolTag key={t} label={t} accent={project.accent} />)}
                </div>
              </CaseSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-divider" style={{ padding: '8rem clamp(1.5rem, 8vw, 8rem)' }}>
      <SectionHeader
        label="Work"
        title="Case Studies"
        subtitle="Each project below is documented as a full case study — covering the problem, my approach, QA process, and outcomes."
      />
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </section>
  )
}
