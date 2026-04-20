"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { Play, Pause, RotateCw, ArrowRight } from "lucide-react"
import { products } from "@/lib/products-data"

/**
 * Home section §4.4
 * Dedicated 3D products showcase with a per-card play-video overlay.
 * One "feature" product holds a rotating 3D-style slab; adjacent cards
 * auto-play their short videos on hover and expose a manual play button.
 */

const featured = products.slice(0, 4)

export function Home3DShowcase() {
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-3">
            Explore in 3D
          </span>
          <h2 className="text-balance text-3xl md:text-5xl font-light text-primary mb-4">
            Products in motion.
          </h2>
          <p className="text-pretty text-muted-foreground leading-relaxed">
            Rotate, inspect, and preview every Flexicore slab in true depth. Tap any tile
            to play its installation reel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Hero 3D rotating slab */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-background to-secondary aspect-[4/3] group shadow-lg">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ perspective: "1400px" }}
            >
              <div
                className="relative h-[70%] w-[70%] transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  animation: autoRotate ? "slab-spin 18s linear infinite" : "none",
                  transform: autoRotate ? undefined : "rotateY(20deg) rotateX(-8deg)",
                }}
              >
                <div
                  className="absolute inset-0 shadow-2xl"
                  style={{
                    backgroundImage: `url(${featured[0].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "translateZ(24px)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-foreground/85"
                  style={{ transform: "translateZ(-24px) rotateY(180deg)" }}
                />
                {/* Edges */}
                {[
                  { cls: "left-0 right-0 top-0 h-12", tf: "rotateX(90deg) translateZ(24px)", origin: "top" },
                  { cls: "left-0 right-0 bottom-0 h-12", tf: "rotateX(-90deg) translateZ(24px)", origin: "bottom" },
                  { cls: "top-0 bottom-0 left-0 w-12", tf: "rotateY(-90deg) translateZ(24px)", origin: "left" },
                  { cls: "top-0 bottom-0 right-0 w-12", tf: "rotateY(90deg) translateZ(24px)", origin: "right" },
                ].map((e, i) => (
                  <div
                    key={i}
                    className={`absolute ${e.cls} bg-foreground/60`}
                    style={{ transform: e.tf, transformOrigin: e.origin }}
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
              <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                Live 3D
              </span>
              <span className="bg-white/90 text-foreground text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                Drag to rotate
              </span>
            </div>

            <button
              onClick={() => setAutoRotate((a) => !a)}
              aria-label={autoRotate ? "Pause rotation" : "Play rotation"}
              className="absolute bottom-5 right-5 h-11 w-11 bg-white text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-250 flex items-center justify-center shadow-lg rounded-full z-10"
            >
              {autoRotate ? <Pause className="h-4 w-4" /> : <RotateCw className="h-4 w-4" />}
            </button>

            <div className="absolute bottom-5 left-5 text-foreground z-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Featured
              </p>
              <p className="text-xl font-light mt-1">{featured[0].name}</p>
            </div>
          </div>

          {/* Three video cards - stacked vertically */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-6 h-full">
            {featured.slice(1, 4).map((p) => (
              <VideoHoverCard
                key={p.slug}
                slug={p.slug}
                name={p.name}
                image={p.image}
                videoUrl={p.videoUrl}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 text-primary hover:text-accent transition-colors duration-250"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Explore all products</span>
            <span className="h-px w-10 bg-accent transition-all duration-300 group-hover:w-16" />
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes slab-spin {
          0% { transform: rotateY(0deg) rotateX(-8deg); }
          100% { transform: rotateY(360deg) rotateX(-8deg); }
        }
      `}</style>
    </section>
  )
}

function VideoHoverCard({
  slug,
  name,
  image,
  videoUrl,
}: {
  slug: string
  name: string
  image: string
  videoUrl?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault()
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <Link
      href={`/products/${slug}`}
      className="group relative block overflow-hidden rounded-2xl aspect-[4/3] bg-secondary shadow-lg"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (!playing && videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }}
    >
      {/* Poster */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Video overlay (plays on hover) */}
      {videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

      {/* Play button */}
      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : `Play video for ${name}`}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <span className="flex items-center justify-center h-14 w-14 rounded-full bg-white/95 text-primary shadow-xl transition-all duration-250 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-0.5" />}
        </span>
      </button>

      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
        <p className="text-sm font-light">{name}</p>
        <p className="text-[10px] uppercase tracking-[0.25em] text-accent mt-1">
          View product
        </p>
      </div>
    </Link>
  )
}
