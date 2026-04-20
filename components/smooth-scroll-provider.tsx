"use client"

import { useEffect } from "react"
import Lenis from "lenis"

/**
 * SmoothScrollProvider wraps the whole app and enables buttery smooth scrolling
 * via the Lenis library. It uses an rAF loop and syncs with the browser's scroll.
 *
 * Docs: https://lenis.darkroom.engineering/
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      // Slightly faster for better feel
      duration: 1.0,
      // Custom easing - exponential ease-out
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      lerp: 0.15,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    // Expose instance so other components (e.g. Back-to-top) can call
    // window.__lenis.scrollTo(0, { duration: 1.5 })
    ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as unknown as { __lenis?: Lenis }).__lenis
    }
  }, [])

  return <>{children}</>
}
