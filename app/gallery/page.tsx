"use client"

import { useMemo, useState } from "react"
import { X, Maximize2 } from "lucide-react"
import { SiteLayout, PageHeader } from "@/components/site-layout"

type GalleryItem = {
  src: string
  title: string
  category: string
  location: string
}

const items: GalleryItem[] = [
  { src: "/luxury-hotel-lobby.jpg", title: "Rosewood Lobby", category: "Hospitality", location: "Dubai, UAE" },
  { src: "/modern-kitchen-island.png", title: "Bondi House", category: "Residential", location: "Sydney, AU" },
  { src: "/spa-interior.jpg", title: "Akasha Spa", category: "Wellness", location: "Bali, ID" },
  { src: "/airport-counter.jpg", title: "Terminal 3 Check-in", category: "Commercial", location: "Mumbai, IN" },
  { src: "/modern-office-reception-area.jpg", title: "Fintech HQ Reception", category: "Commercial", location: "London, UK" },
  { src: "/bathroom-marble-vanity.jpg", title: "Villa d'Argento Bath", category: "Residential", location: "Milan, IT" },
  { src: "/retail-boutique-interior.jpg", title: "Atelier Flagship", category: "Retail", location: "Paris, FR" },
  { src: "/healthcare-reception.jpg", title: "Evercare Clinic", category: "Healthcare", location: "Singapore" },
  { src: "/restaurant-bar-counter.jpg", title: "Noir Speakeasy", category: "Hospitality", location: "Tokyo, JP" },
  { src: "/modern-apartment-kitchen.png", title: "SoHo Loft", category: "Residential", location: "New York, USA" },
  { src: "/museum-reception-desk.jpg", title: "National Museum", category: "Public", location: "Delhi, IN" },
  { src: "/luxury-bathroom.jpg", title: "Penthouse Bathroom", category: "Residential", location: "Hong Kong" },
]

const categories = ["All", "Residential", "Hospitality", "Commercial", "Retail", "Healthcare", "Wellness", "Public"]

export default function GalleryPage() {
  const [cat, setCat] = useState("All")
  const [active, setActive] = useState<GalleryItem | null>(null)

  const filtered = useMemo(
    () => (cat === "All" ? items : items.filter((i) => i.category === cat)),
    [cat]
  )

  return (
    <SiteLayout>
      <PageHeader
        title="Gallery"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        bgImage="/modern-interior-gallery.jpg"
      />

      <section className="py-10 md:py-14 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-sm transition-colors ${
                  cat === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {filtered.map((item) => (
              <button
                key={item.src}
                onClick={() => setActive(item)}
                className="group relative aspect-square overflow-hidden bg-secondary transition-transform duration-250 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-white/70 text-xs">{item.location}</p>
                  </div>
                  <Maximize2 className="absolute top-3 right-3 h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActive(null)
            }}
            className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center bg-white text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active.src || "/placeholder.svg"} alt={active.title} className="w-full max-h-[80vh] object-contain" />
            <div className="mt-4 text-center text-white">
              <p className="text-lg font-semibold">{active.title}</p>
              <p className="text-sm text-white/70">
                {active.category} · {active.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  )
}
