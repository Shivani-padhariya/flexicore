"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Product Colors" },
  { value: 5, suffix: "+", label: "Countries Export" },
  { value: 10000, suffix: "+", label: "Projects Completed" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function AboutSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Flexicore
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
              S O L I D  S U R F A C E   M A N U F A C T U R E R
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Solid surface is a man-made material used in interior design that offers a
                smooth, seamless, and durable finish. It is designed to look elegant while being
                strong, hygienic, and easy to maintain.
              </p>
              <p>
                Crafting Space Shaping Life. Creating seamless surfaces for modern living. Designed to elevate everyday spaces.
              </p>
              <p>
                Crafted for Beautiful Interiors. Focused on interior spaces (homes, rooms, living areas). Design-driven, not just product-driven.
              </p>
            </div>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold mt-8 hover:gap-4 transition-all"
            >
              Learn More About Us
              <span>→</span>
            </a>
          </div>

          <div className="grid gap-8">
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-muted">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border border-border p-8 text-center"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
