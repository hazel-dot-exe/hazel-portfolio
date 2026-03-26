'use client'
import { useState, useEffect } from 'react'
import LightRays from './LightRays'

const MESSAGES = [
  { lang: 'English',    text: 'Welcome',              sub: 'Get to know me more',           dir: 'ltr' },
  { lang: 'Spanish',    text: 'Bienvenido',            sub: 'Conóceme mejor',                dir: 'ltr' },
  { lang: 'French',     text: 'Bienvenue',             sub: 'Apprenez à me connaître',       dir: 'ltr' },
  { lang: 'German',     text: 'Willkommen',            sub: 'Lern mich besser kennen',       dir: 'ltr' },
  { lang: 'Japanese',   text: 'ようこそ',               sub: 'もっと私を知ってください',           dir: 'ltr' },
  { lang: 'Korean',     text: '환영합니다',             sub: '저를 더 알아가세요',                dir: 'ltr' },
  { lang: 'Chinese',    text: '欢迎',                  sub: '了解更多关于我的信息',               dir: 'ltr' },
  { lang: 'Arabic',     text: 'أهلاً وسهلاً',         sub: 'تعرّف عليّ أكثر',               dir: 'rtl' },
  { lang: 'Italian',    text: 'Benvenuto',             sub: 'Scopri di più su di me',        dir: 'ltr' },
  { lang: 'Russian',    text: 'Добро пожаловать',      sub: 'Узнайте меня получше',          dir: 'ltr' },
  { lang: 'Indonesian', text: 'Selamat datang',        sub: 'Kenali saya lebih jauh',        dir: 'ltr' },
]

const CYCLE_MS = 2000   // text speed
const FADE_MS  = 300

export default function SplashScreen({ onEnter }) {
  const [index, setIndex]   = useState(0)
  const [fading, setFading] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [isDark, setIsDark]   = useState(true)

  // Track theme
  useEffect(() => {
    const check = () => setIsDark(!document.documentElement.classList.contains('light'))
    check()
    const obs = new MutationObserver(check)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  // Cycle languages
  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % MESSAGES.length)
        setFading(false)
      }, FADE_MS)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [])

  const handleEnter = () => {
    setLeaving(true)
    setTimeout(() => onEnter(), 750)
  }

  const current  = MESSAGES[index]
  // Warm cream — elegant, not bright, works beautifully with gold
  const bg       = isDark ? '#08080c' : '#f7f3eb'
  const gold     = isDark ? '#e8b86d' : '#b8832a'
  const textMain = isDark ? '#f5f0e8' : '#1a1208'
  const textMute = isDark ? 'rgba(245,240,232,0.48)' : 'rgba(30,20,5,0.48)'
  const dotInact = isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.14)'

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      opacity: leaving ? 0 : 1,
      transition: 'opacity 0.75s ease, background 0.35s ease',
    }}>

      {/* Light Rays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor={gold}
          raysSpeed={0.4}
          lightSpread={0.6}
          rayLength={2.5}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.05}
          distortion={0.05}
          pulsating={true}
          fadeDistance={1.2}
          saturation={1.2}
        />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '0 clamp(1.5rem, 5vw, 3rem)',
        width: '100%',
      }}>

        {/* Language label */}
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
          fontWeight: 700,
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
          color: gold,
          marginBottom: '1rem',
          opacity: fading ? 0 : 0.8,
          transition: `opacity ${FADE_MS}ms ease`,
          minHeight: '1em',
        }}>
          {current.lang}
        </p>

        {/* Welcome text */}
        <h1
          dir={current.dir}
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(3rem, 10vw, 8.5rem)',
            fontWeight: 400,
            color: textMain,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(10px)' : 'translateY(0)',
            transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
          }}
        >
          {current.text}
        </h1>

        {/* Sub message */}
        <p
          dir={current.dir}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(0.82rem, 1.8vw, 1.05rem)',
            color: textMute,
            marginBottom: '2.5rem',
            letterSpacing: '0.03em',
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(10px)' : 'translateY(0)',
            transition: `opacity ${FADE_MS}ms ease ${FADE_MS * 0.1}ms, transform ${FADE_MS}ms ease ${FADE_MS * 0.1}ms`,
          }}
        >
          {current.sub}
        </p>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '7px', marginBottom: '3rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          {MESSAGES.map((_, i) => (
            <div
              key={i}
              onClick={() => { setFading(false); setIndex(i) }}
              style={{
                width: i === index ? '22px' : '5px',
                height: '5px',
                borderRadius: '3px',
                background: i === index ? gold : dotInact,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Vertical line */}
        <div style={{
          width: '1px', height: '36px',
          background: `linear-gradient(to bottom, ${gold}, transparent)`,
          marginBottom: '1.75rem',
        }} />

        {/* Button */}
        <button
          onClick={handleEnter}
          style={{
            background: 'transparent',
            border: `1px solid ${gold}`,
            color: gold,
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(0.72rem, 1.5vw, 0.82rem)',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '0.85rem clamp(1.5rem, 5vw, 3rem)',
            cursor: 'pointer',
            transition: 'background 0.25s, color 0.25s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = gold
            e.currentTarget.style.color = '#08080c'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = gold
          }}
        >
          View Portfolio →
        </button>

      </div>
    </div>
  )
}