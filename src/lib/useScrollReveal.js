'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a boolean `isVisible`.
 * When the element enters the viewport, isVisible becomes true (one-shot).
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

/**
 * Animate a counter from 0 to `target` when visible.
 */
export function useCountUp(target, isVisible, duration = 1200) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''))
    if (isNaN(numericTarget)) return

    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericTarget))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(numericTarget)
    }
    requestAnimationFrame(tick)
  }, [isVisible, target, duration])

  return count
}
