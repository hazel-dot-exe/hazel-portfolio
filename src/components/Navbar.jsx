'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '../lib/ThemeContext'
import { SOCIAL } from '../lib/data'

const NAV_LINKS = ['Home', 'Projects', 'Experience', 'Skills', 'Contact']

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}
function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function Navbar({ onLogoClick }) {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled]       = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [mobileOpen, setMobileOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1))
          }
        })
      },
      { threshold: 0.35 }
    )
    NAV_LINKS.forEach(link => {
      const el = document.getElementById(link.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (section) => {
    setMobileOpen(false)
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  const navBg = scrolled
    ? theme === 'dark' ? 'rgba(8,8,12,0.92)' : 'rgba(247,243,235,0.92)'
    : 'transparent'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '64px',
        padding: '0 clamp(1rem, 4vw, 4rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: navBg,
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}>

        {/* Logo — clicking resets splash */}
        <button
          onClick={onLogoClick}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}
          aria-label="Back to splash"
        >
          <span style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: '1.15rem', color: 'var(--text)', letterSpacing: '0.02em',
          }}>
            Hazel<span style={{ color: 'var(--gold)' }}>.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
             className="desktop-nav">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link${activeSection === link ? ' active' : ''}`}
            >
              {link}
            </button>
          ))}

          <div style={{ width: '1px', height: '18px', background: 'var(--border)' }} />

          <a href={SOCIAL.github} target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'flex' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            aria-label="GitHub">
            <GitHubIcon />
          </a>

          <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'flex' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            aria-label="LinkedIn">
            <LinkedInIcon />
          </a>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '4px 9px',
              display: 'flex', alignItems: 'center', gap: '5px',
              color: 'var(--muted)', cursor: 'pointer',
              fontSize: '0.7rem', letterSpacing: '0.06em',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            <span style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>

        {/* Mobile — hamburger + theme toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
             className="mobile-nav">
          <button
            onClick={toggleTheme}
            style={{
              background: 'none', border: 'none',
              color: 'var(--muted)', cursor: 'pointer',
              display: 'flex', alignItems: 'center',
              padding: '4px',
            }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none', border: 'none',
              color: 'var(--text)', cursor: 'pointer',
              display: 'flex', alignItems: 'center',
              padding: '4px',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
        background: theme === 'dark' ? 'rgba(8,8,12,0.97)' : 'rgba(247,243,235,0.97)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        padding: mobileOpen ? '1.5rem clamp(1rem, 5vw, 2rem) 2rem' : '0 clamp(1rem, 5vw, 2rem)',
        maxHeight: mobileOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease, padding 0.35s ease',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {NAV_LINKS.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: 'none', border: 'none',
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid var(--border)' : 'none',
                padding: '1rem 0',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1rem',
                fontWeight: activeSection === link ? 600 : 400,
                color: activeSection === link ? 'var(--gold)' : 'var(--text)',
                cursor: 'pointer',
                textAlign: 'left',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
            >
              {link}
            </button>
          ))}

          {/* Social links in mobile menu */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
            <a href={SOCIAL.github} target="_blank" rel="noreferrer"
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>
              GitHub
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer"
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>
              LinkedIn
            </a>
            <a href={`mailto:${SOCIAL.email}`}
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>
              Email
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav  { display: none  !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none  !important; }
          .mobile-nav  { display: flex  !important; }
        }
      `}</style>
    </>
  )
}