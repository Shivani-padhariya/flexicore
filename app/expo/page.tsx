import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Expo & Events",
  description: "Meet Flexicore at trade shows, design weeks, and industry expos around the world.",
}

const events = [
  { name: "IndiaWood 2026", dates: "2026-05-18 / 2026-05-22", city: "Bangalore, India", booth: "Hall 2, Stand B-24", image: "/trade-show-booth.jpg", status: "upcoming" },
  { name: "Milan Design Week", dates: "2026-04-15 / 2026-04-21", city: "Milan, Italy", booth: "Tortona District", image: "/milan-design-week.jpg", status: "upcoming" },
  { name: "Dubai Design Week", dates: "2026-11-03 / 2026-11-08", city: "Dubai, UAE", booth: "Downtown Design", image: "/dubai-design-week.jpg", status: "upcoming" },
  { name: "KBIS 2026", dates: "2026-02-25 / 2026-02-27", city: "Las Vegas, USA", booth: "W1145", image: "/kitchen-bath-show-floor.jpg", status: "past" },
  { name: "Interior Lifestyle Tokyo", dates: "2025-11-12 / 2025-11-14", city: "Tokyo, Japan", booth: "East Hall 4", image: "/tokyo-design-show.jpg", status: "past" },
]

export default function ExpoPage() {
  const upcoming = events.filter((e) => e.status === "upcoming")
  const past = events.filter((e) => e.status === "past")

  return (
    <SiteLayout>
      <PageHeader
        title="Meet us at our next event"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Expo" }]}
        bgImage="/design-exhibition-hall.jpg"
      />

      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-light">Upcoming events</h2>
          <div className="mt-3 h-0.5 w-12 bg-primary" />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((e) => (
              <article key={e.name} className="group bg-white border border-border overflow-hidden transition-transform duration-250 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={e.image || "/placeholder.svg"} alt={e.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-primary">Upcoming</span>
                  <h3 className="mt-2 text-lg font-semibold">{e.name}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(e.dates.split(" / ")[0]).toLocaleDateString("en-US", { month: "short", day: "numeric" })} —{" "}
                      {new Date(e.dates.split(" / ")[1]).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5" />
                      {e.city} · {e.booth}
                    </li>
                  </ul>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                    Book a meeting <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {past.length > 0 && (
            <>
              <h2 className="mt-16 text-2xl md:text-3xl font-light">Past events</h2>
              <div className="mt-3 h-0.5 w-12 bg-primary" />
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {past.map((e) => (
                  <article key={e.name} className="bg-white border border-border overflow-hidden opacity-80 transition-[transform,box-shadow,opacity] duration-250 hover:-translate-y-1.5 hover:shadow-lg hover:opacity-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={e.image || "/placeholder.svg"} alt={e.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Past</span>
                      <h3 className="mt-2 font-semibold">{e.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{e.city}</p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </SiteLayout>
  )
}
