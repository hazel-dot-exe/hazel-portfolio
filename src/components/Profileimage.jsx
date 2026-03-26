// src/components/ProfileImage.jsx
// Drop-in replacement for the photo in Hero.jsx
// Shows a styled placeholder if profile.jpg is missing in production

'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ProfileImage() {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    // Elegant placeholder when photo is missing
    return (
      <div style={{
        width: '100%', height: '100%',
        background: 'var(--surface)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '0.5rem',
        border: '1px solid var(--border)',
      }}>
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'var(--gold-dim)',
          border: '1px solid var(--gold-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: '1.5rem', color: 'var(--gold)' }}>H</span>
        </div>
        <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', color: 'var(--faint)', letterSpacing: '0.1em' }}>
          HAZEL
        </span>
      </div>
    )
  }

  return (
    <Image
      src="/profile.jpg"
      alt="Hazel Marqueses"
      fill
      sizes="(max-width: 700px) 200px, 300px"
      style={{ objectFit: 'cover', objectPosition: 'top center' }}
      priority
      onError={() => setImgError(true)}
    />
  )
}