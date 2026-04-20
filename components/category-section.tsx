"use client"

import { cn } from "@/lib/utils"

const categories = [
  {
    id: 1,
    name: "Alabaster",
    description: "Translucent elegance for illuminated designs",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    count: 45
  },
  {
    id: 2,
    name: "Marble",
    description: "Classic veined patterns for timeless beauty",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
    count: 72
  },
  {
    id: 3,
    name: "Mosaic",
    description: "Intricate patterns for creative expression",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&q=80",
    count: 38
  },
  {
    id: 4,
    name: "Sparkle",
    description: "Glittering surfaces for glamorous spaces",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&q=80",
    count: 56
  },
  {
    id: 5,
    name: "Translucent",
    description: "Light-transmitting surfaces for modern designs",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    count: 29
  },
  {
    id: 6,
    name: "Plain Surface",
    description: "Solid colors for versatile applications",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    count: 120
  },
]

export function CategorySection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Collections
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">
            Explore by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse range of solid surface categories, each crafted to meet specific 
            design requirements and aesthetic preferences.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href={`/products?category=${category.name.toLowerCase()}`}
              className={cn(
                "group relative overflow-hidden transition-transform duration-250 hover:-translate-y-1.5 hover:shadow-lg",
                index === 0 ? "md:col-span-2 lg:col-span-1 aspect-[4/3]" : "aspect-[4/3]"
              )}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm max-w-xs">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-white/60 text-sm font-medium">
                    {category.count} colors
                  </span>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary-foreground text-lg">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
