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
  const [showSplash, setShowSplash] = useState(true)
  const [splashDone, setSplashDone] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('splash-seen')
    if (seen) {
      setShowSplash(false)
      setSplashDone(true)
    }
  }, [])

  const handleEnter = () => {
    sessionStorage.setItem('splash-seen', 'true')
    setShowSplash(false)
    setTimeout(() => setSplashDone(true), 800)
  }

  // Logo click → clear session and show splash again
  const handleLogoClick = () => {
    sessionStorage.removeItem('splash-seen')
    setSplashDone(false)
    setShowSplash(true)
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {showSplash && <SplashScreen onEnter={handleEnter} />}

      <div style={{
        opacity: splashDone ? 1 : 0,
        transition: 'opacity 0.6s ease',
        pointerEvents: splashDone ? 'auto' : 'none',
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