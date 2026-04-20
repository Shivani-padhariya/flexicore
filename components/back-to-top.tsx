"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type Lenis from "lenis"

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.6 })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-24 right-6 z-40 w-12 h-12 bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-300",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={1.5} />
    </button>
  )
}
