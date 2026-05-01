"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80",
    title: "SEAMLESS SURFACES. TIMELESS ELEGANCE",
    cta: "GET IN TOUCH",
    href: "/contact",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    title: "SHAPING SPACES WITH SOLID EXCELLENCE COMFORT",
    cta: "GET IN TOUCH",
    href: "/contact",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=80",
    title: "NEXT-GEN SURFACES FOR MODERN LIVING",
    cta: "GET IN TOUCH",
    href: "/contact",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
    title: "Luxury Surfaces, Crafted for Life",
    cta: "BROWSE PREMIUM COLLECTION",
    href: "/products",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1920&q=80",
    title: "Seamless. Hygienic. Durable.",
    cta: "LEARN ABOUT FLEXICORE® PROPERTIES",
    href: "/about",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80",
    title: "Inspired by Nature. Made for Modern Spaces.",
    cta: "DISCOVER FLEXICORE® NATURAL SERIES",
    href: "/products",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80",
    title: "Transform Commercial Spaces with Flexicore®",
    cta: "EXPLORE COMMERCIAL APPLICATIONS",
    href: "/applications",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1617850687395-620757feb1f3?auto=format&fit=crop&w=1920&q=80",
    title: "Innovation in every slab",
    cta: "MEET THE FLEXICORE® DIFFERENCE",
    href: "/about",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">
      {/* Slides - Ken Burns zoom + fade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1200ms] ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div
            className={cn(
              "absolute inset-0 bg-[size:100%_auto] bg-center bg-no-repeat"
            )}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Subtle bottom gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Slide caption (bottom-left) */}
          <div className="absolute left-8 md:left-16 lg:left-24 bottom-24 md:bottom-32 z-10 max-w-2xl">
            <h2
              className={cn(
                "text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-balance transition-all duration-700 delay-200",
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              {slide.title}
            </h2>
            <a
              href={slide.href}
              className={cn(
                "mt-6 inline-flex items-center gap-4 text-primary font-semibold text-sm md:text-base tracking-[0.15em] hover:gap-6 transition-all duration-700 delay-300",
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              {slide.cta}
              <span className="inline-block w-8 h-px bg-primary relative">
                <span className="absolute -right-1 -top-[3px] w-2 h-2 border-t border-r border-primary rotate-45" />
              </span>
            </a>
          </div>
        </div>
      ))}

      {/* Prev arrow (left, circular) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {/* Next arrow (right, circular) */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {/* Slide indicators - squares */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-4 h-4 border border-white transition-all duration-300",
              index === currentSlide
                ? "bg-primary border-primary scale-110"
                : "bg-transparent hover:bg-white/30"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
