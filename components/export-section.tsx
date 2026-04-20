"use client"

import { Globe, Package, Award, Truck } from "lucide-react"

const exportCountries = [
  "USA", "UK", "UAE", "Saudi Arabia", "Qatar", "Kuwait",
  "Bahrain", "Oman", "Singapore", "Malaysia", "Thailand",
  "Australia", "Germany", "France", "Italy", "Spain"
]

const exportStats = [
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Package, value: "10K+", label: "Shipments/Year" },
  { icon: Award, value: "ISO", label: "Certified" },
  { icon: Truck, value: "48hrs", label: "Dispatch Time" },
]

export function ExportSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Global Presence
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
              Exporting Excellence Worldwide
            </h2>
            <p className="text-muted-foreground mb-8">
              Flexicore solid surfaces are trusted by architects, designers, and builders across the globe.
              Our export-quality products meet international standards and are shipped to over 50 countries.
            </p>

            {/* Export Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {exportStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Export Enquiry
              <span>→</span>
            </a>
          </div>

          {/* World Map / Country Flags */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] min-h-[420px] bg-muted">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1519821172141-b2a5701e4f79?auto=format&fit=crop&w=1200&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <span className="text-sm uppercase tracking-[0.3em] text-white/75">
                  Global network
                </span>
                <h3 className="text-3xl font-semibold mt-3">
                  Export-grade quality across continents
                </h3>
                <p className="text-sm text-white/70 mt-4 max-w-md">
                  Every shipment is hand-packaged, inspected, and delivered with end-to-end tracking.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-6">
              {exportCountries.map((country, index) => (
                <div
                  key={index}
                  className="bg-white border border-border px-3 py-2 text-center text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                >
                  {country}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <span className="text-muted-foreground text-sm">
                ...and many more countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
