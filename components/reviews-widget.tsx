"use client"

import { useState } from "react"
import { Star, Quote, ArrowRight, ArrowLeft } from "lucide-react"

type Review = {
  name: string
  role: string
  location: string
  avatar: string
  rating: number
  quote: string
  project: string
  source: "Google" | "Houzz" | "LinkedIn"
}

const reviews: Review[] = [
  {
    name: "Elena Marchetti",
    role: "Principal Architect",
    location: "Milan, Italy",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 5,
    quote:
      "Flexicore delivered 240 slabs across five hotel projects without a single colour-lot mismatch. Their technical team reviewed every joint with us. Rare to find suppliers this diligent.",
    project: "Hotel Palazzo Secco, Milan",
    source: "LinkedIn",
  },
  {
    name: "Rahul Desai",
    role: "Homeowner",
    location: "Bengaluru, India",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 5,
    quote:
      "Our kitchen island is a single 3.2m Calacatta Greige slab - seamless, easy to clean, and it still looks brand new after two years of a toddler, dinners, and a lot of turmeric.",
    project: "Private residence",
    source: "Google",
  },
  {
    name: "Hana Kobayashi",
    role: "Interior Designer",
    location: "Tokyo, Japan",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 5,
    quote:
      "The Honey Onyx backlit reception is the most photographed corner of our spa. Flexicore worked with our electricians on the LED calibration to get the glow exactly right.",
    project: "Aman Kyoto Wellness Wing",
    source: "Houzz",
  },
  {
    name: "Carlos Mendez",
    role: "Facility Manager",
    location: "Mexico City, Mexico",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 5,
    quote:
      "We specified Ivory Linen across 1,800 square metres of hospital corridors. Hygienic, repairable, and the after-sales support flew an engineer out during install. Outstanding service.",
    project: "Hospital Angeles",
    source: "Google",
  },
  {
    name: "Aisha Al-Mansoori",
    role: "Project Director",
    location: "Abu Dhabi, UAE",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 4,
    quote:
      "Used Sandstone Beige for a luxury retail rollout - 14 stores, consistent finish, delivered in three months. Logistics were handled end-to-end which saved our team significant effort.",
    project: "Saadiyat Retail Precinct",
    source: "LinkedIn",
  },
]

export function ReviewsWidget() {
  const [idx, setIdx] = useState(0)
  const review = reviews[idx]

  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1)

  const next = () => setIdx((i) => (i + 1) % reviews.length)
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length)

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-3">
              What clients say
            </span>
            <h2 className="text-balance text-3xl md:text-5xl font-light text-primary">
              Trusted by architects worldwide.
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm mt-1">
                <span className="font-semibold text-primary text-lg">{avgRating}</span>
                <span className="text-muted-foreground"> / 5.0</span>
              </p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Based on {reviews.length * 48}+ verified reviews
              </p>
            </div>
          </div>
        </div>

        <article className="relative bg-background p-8 md:p-12 shadow-sm">
          <Quote
            className="absolute top-6 right-6 h-16 w-16 text-accent/20"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:w-48">
              <div
                className="h-16 w-16 md:h-24 md:w-24 rounded-full bg-cover bg-center border border-border"
                style={{ backgroundImage: `url(${review.avatar})` }}
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-base md:text-lg text-primary">
                  {review.name}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                  {review.role}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {review.location}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "fill-accent text-accent" : "text-border"
                    }`}
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-3 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  via {review.source}
                </span>
              </div>

              <p className="text-lg md:text-xl leading-relaxed font-light text-foreground/90">
                {"\u201C" + review.quote + "\u201D"}
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-accent">
                Project · {review.project}
              </p>
            </div>
          </div>
        </article>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1 transition-all duration-250 ${
                  i === idx ? "w-12 bg-primary" : "w-6 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="h-11 w-11 flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-250"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="h-11 w-11 flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-250"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
