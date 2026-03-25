'use client'
import { useState, useEffect } from 'react'
import LightRays from './LightRays'

const MESSAGES = [
  { text: 'Welcome',              sub: 'Get to know me more',           dir: 'ltr' },
  { text: 'Bienvenido',           sub: 'Conóceme mejor',                dir: 'ltr' },
  { text: 'Bienvenue',            sub: 'Apprenez à me connaître',       dir: 'ltr' },
  { text: 'Willkommen',           sub: 'Lern mich besser kennen',       dir: 'ltr' },
  { text: 'ようこそ',               sub: 'もっと私を知ってください',           dir: 'ltr' },
  { text: '환영합니다',             sub: '저를 더 알아가세요',                dir: 'ltr' },
  { text: '欢迎',                  sub: '了解更多关于我的信息',               dir: 'ltr' },
  { text: 'أهلاً وسهلاً',         sub: 'تعرّف عليّ أكثر',               dir: 'rtl' },
  { text: 'Benvenuto',            sub: 'Scopri di più su di me',        dir: 'ltr' },
  { text: 'Добро пожаловать',     sub: 'Узнайте меня получше',          dir: 'ltr' },
  { text: 'Selamat datang',       sub: 'Kenali saya lebih jauh',        dir: 'ltr' },
]

const CYCLE_MS = 3500

export default function SplashScreen({ onEnter }) {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % MESSAGES.length)
        setFading(false)
      }, 420)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [])

  const handleEnter = () => {
    setLeaving(true)
    setTimeout(() => onEnter(), 750)
  }

  const current = MESSAGES[index]

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      opacity: leaving ? 0 : 1,
      transition: 'opacity 0.75s ease',
    }}>

      {/* ReactBits LightRays background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#e8b86d"
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

      {/* Centered content */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 2rem',
      }}>

        {/* Main welcome text */}
        <h1
          dir={current.dir}
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(4rem, 11vw, 9rem)',
            fontWeight: 400,
            color: 'var(--text)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 0.42s ease, transform 0.42s ease',
          }}
        >
          {current.text}
        </h1>

        {/* Sub message */}
        <p
          dir={current.dir}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            color: 'var(--muted)',
            marginBottom: '3.5rem',
            letterSpacing: '0.02em',
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 0.42s ease 0.05s, transform 0.42s ease 0.05s',
          }}
        >
          {current.sub}
        </p>

        {/* Language dots */}
        <div style={{
          display: 'flex', gap: '8px',
          marginBottom: '3.5rem',
          alignItems: 'center',
        }}>
          {MESSAGES.map((_, i) => (
            <div
              key={i}
              onClick={() => { setFading(false); setIndex(i) }}
              style={{
                width: i === index ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: i === index ? 'var(--gold)' : 'var(--border)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Gold line */}
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          marginBottom: '2rem',
        }} />

        {/* Enter button */}
        <button
          onClick={handleEnter}
          style={{
            background: 'transparent',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '0.9rem 3rem',
            cursor: 'pointer',
            transition: 'background 0.25s, color 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--gold)'
            e.currentTarget.style.color = '#08080c'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--gold)'
          }}
        >
          View Portfolio →
        </button>

      </div>
    </div>
  )
}