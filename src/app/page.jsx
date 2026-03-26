'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const SplashScreen = dynamic(() => import('../components/SplashScreen'), { ssr: false })

export default function Home() {
  const [showSplash, setShowSplash] = useState(false)
  const [splashDone, setSplashDone] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const seen = sessionStorage.getItem('splash-seen')
    if (seen) {
      // Already seen — show portfolio immediately, no fade delay
      setShowSplash(false)
      setSplashDone(true)
    } else {
      // First visit — show splash
      setShowSplash(true)
      setSplashDone(false)
    }
  }, [])

  const handleEnter = () => {
    sessionStorage.setItem('splash-seen', 'true')
    setShowSplash(false)
    // Small delay for the splash fade-out animation
    setTimeout(() => setSplashDone(true), 800)
  }

  // Logo click → reset splash
  const handleLogoClick = () => {
    sessionStorage.removeItem('splash-seen')
    setSplashDone(false)
    window.scrollTo({ top: 0 })
    setTimeout(() => setShowSplash(true), 50)
  }

  // Prevent flash before mount
  if (!mounted) return null

  return (
    <>
      {showSplash && <SplashScreen onEnter={handleEnter} />}

      {/* Portfolio — always rendered but opacity controlled */}
      <div style={{
        opacity: splashDone ? 1 : 0,
        transition: splashDone ? 'opacity 0.6s ease' : 'none',
        // Always keep in DOM so navigation back works
        visibility: splashDone ? 'visible' : 'hidden',
      }}>
        <Navbar onLogoClick={handleLogoClick} />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}