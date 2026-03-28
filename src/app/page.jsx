'use client'
import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const SplashScreen = dynamic(() => import('../components/SplashScreen'), { ssr: false })

export default function Home() {
  const [showSplash, setShowSplash] = useState(false)
  const [splashDone, setSplashDone] = useState(false)
  const [mounted, setMounted]       = useState(false)

  useEffect(() => {
    setMounted(true)
    document.body.style.opacity    = '1'
    document.body.style.visibility = 'visible'

    const seen = sessionStorage.getItem('splash-seen')
    if (seen) {
      setShowSplash(false)
      setSplashDone(true)
    } else {
      setShowSplash(true)
    }

    const handleVisible = () => {
      document.body.style.opacity    = '1'
      document.body.style.visibility = 'visible'
      const alreadySeen = sessionStorage.getItem('splash-seen')
      if (alreadySeen) setSplashDone(true)
    }

    window.addEventListener('pageshow',  handleVisible)
    window.addEventListener('focus',     handleVisible)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') handleVisible()
    })

    return () => {
      window.removeEventListener('pageshow',  handleVisible)
      window.removeEventListener('focus',     handleVisible)
    }
  }, [])

  const handleEnter = useCallback(() => {
    sessionStorage.setItem('splash-seen', 'true')
    setShowSplash(false)
    setTimeout(() => setSplashDone(true), 700)
  }, [])

  const handleLogoClick = useCallback(() => {
    sessionStorage.removeItem('splash-seen')
    setSplashDone(false)
    window.scrollTo({ top: 0 })
    setTimeout(() => setShowSplash(true), 50)
  }, [])

  if (!mounted) return null

  return (
    <>
      {showSplash && <SplashScreen onEnter={handleEnter} />}

      <div style={{
        opacity:    splashDone ? 1 : 0,
        visibility: splashDone ? 'visible' : 'hidden',
        transition: 'opacity 0.6s ease',
      }}>
        <Navbar onLogoClick={handleLogoClick} />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Certifications />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}