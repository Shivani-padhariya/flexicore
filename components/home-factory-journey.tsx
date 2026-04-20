"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

/**
 * Home section §4.8
 * "How It Works" with four steps.
 * Four step labels: Browse and Select, Focus on Quality, Easy to Clean, Suitable for Applications.
 */

type Step = {
  key: string
  number: string
  label: string
  image: string
  description: string
}

const steps: Step[] = [
  {
    key: "browse",
    number: "01",
    label: "RAW MATERIALS INSPECTION",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&q=80",
    description:
      "Premium materials are carefully inspected and prepared for the manufacturing process.",
  },
  {
    key: "quality",
    number: "02",
    label: "MIXING & PREPARATION",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&q=80",
    description:
      "Our proprietary blend is mixed with precision to ensure consistent quality and durability.",
  },
  {
    key: "clean",
    number: "03",
    label: "CASTING & MOLDING",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    description:
      "Slabs are cast into custom shapes and sizes using advanced molding techniques.",
  },
  {
    key: "applications",
    number: "04",
    label: "FINISHING & QUALITY CHECK",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop&q=80",
    description:
      "Each slab is finished, polished, and thoroughly tested to meet our quality standards.",
  },
]

export function HomeFactoryJourney() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  useEffect(() => {
    if (openIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null)
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? null : (i + 1) % steps.length))
      if (e.key === "ArrowLeft") setOpenIdx((i) => (i === null ? null : (i - 1 + steps.length) % steps.length))
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [openIdx])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-3">
            Factory tour
          </span>
          <h2 className="text-balance text-3xl md:text-5xl font-light text-primary mb-4">
            Entry to exit.
          </h2>
          <p className="text-pretty text-muted-foreground leading-relaxed">
            Step inside our manufacturing floor and follow a slab from raw material to
            dispatch. Click any step to open the full visual log.
          </p>
        </div>

        {/* Grid / timeline */}
        <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {steps.map((step, i) => (
            <li key={step.key}>
              <button
                onClick={() => setOpenIdx(i)}
                className="group relative block w-full aspect-[3/4] overflow-hidden text-left"
                aria-label={`Open step ${step.number} ${step.label}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${step.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/10" />
                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5 text-white">
                  <span className="text-[10px] tracking-[0.35em] uppercase opacity-80">
                    {step.number}
                  </span>
                  <div>
                    <p className="text-base md:text-lg font-light leading-tight">
                      {step.label}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View
                      <span className="h-px w-6 bg-accent" />
                    </span>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[120] bg-foreground/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Factory journey lightbox"
        >
          <button
            onClick={() => setOpenIdx(null)}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 h-11 w-11 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={() => setOpenIdx((i) => (i === null ? null : (i - 1 + steps.length) % steps.length))}
            aria-label="Previous step"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-11 w-11 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setOpenIdx((i) => (i === null ? null : (i + 1) % steps.length))}
            aria-label="Next step"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 h-11 w-11 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-2/3 aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${steps[openIdx].image})` }} />
            <div className="md:w-1/3 flex flex-col justify-center text-white">
              <span className="text-accent text-xs tracking-[0.35em] uppercase mb-2">
                Step {steps[openIdx].number} / {String(steps.length).padStart(2, "0")}
              </span>
              <h3 className="text-3xl md:text-4xl font-light mb-4">{steps[openIdx].label}</h3>
              <p className="text-white/75 leading-relaxed text-sm">
                {steps[openIdx].description}
              </p>

              <div className="flex items-center gap-1 mt-8">
                {steps.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => setOpenIdx(i)}
                    aria-label={`Go to step ${s.label}`}
                    className={`h-1 flex-1 transition-colors ${
                      i === openIdx ? "bg-accent" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
