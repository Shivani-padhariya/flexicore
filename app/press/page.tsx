import type { Metadata } from "next"
import Link from "next/link"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { Newspaper, Download, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "PR & News",
  description: "Latest press releases, media coverage, and brand assets from Flexicore.",
}

const releases = [
  { date: "2026-04-02", title: "Flexicore launches Calacatta Greige solid surface collection", tag: "Product Launch" },
  { date: "2026-03-15", title: "Flexicore named Manufacturer of the Year at IndiaWood 2026", tag: "Award" },
  { date: "2026-02-28", title: "Sustainability milestone: 42% recycled content achieved", tag: "Sustainability" },
  { date: "2026-01-20", title: "New Dubai showroom opens in Business Bay", tag: "Expansion" },
  { date: "2025-12-10", title: "Flexicore partners with Milano Design Week 2026", tag: "Event" },
]

const coverage = [
  { outlet: "Dezeen", title: "Flexicore redefines solid surface with translucent collection", url: "#" },
  { outlet: "Architectural Digest", title: "The rise of Indian-made luxury surfaces", url: "#" },
  { outlet: "Dwell", title: "Sustainability meets design at Flexicore", url: "#" },
  { outlet: "Wallpaper*", title: "Color lab secrets from Flexicore's Mumbai studio", url: "#" },
]

export default function PressPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="PR & News"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "PR & News" }]}
        bgImage="/press-conference-room.jpg"
      />

      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Press Releases</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-light">Latest announcements</h2>
            <div className="mt-4 h-0.5 w-12 bg-primary" />

            <div className="mt-8 divide-y divide-border border border-border bg-white">
              {releases.map((r) => (
                <article key={r.title} className="p-5 hover:bg-muted transition-colors flex items-start gap-4">
                  <div className="text-center shrink-0 border-r border-border pr-4">
                    <div className="text-xs uppercase text-muted-foreground">
                      {new Date(r.date).toLocaleDateString("en-US", { month: "short" })}
                    </div>
                    <div className="text-2xl font-light">
                      {new Date(r.date).getDate()}
                    </div>
                    <div className="text-xs text-muted-foreground">{new Date(r.date).getFullYear()}</div>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary">{r.tag}</span>
                    <h3 className="mt-1 font-semibold">{r.title}</h3>
                    <Link href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                      Read release <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">In the media</p>
              <h2 className="mt-2 text-xl font-light">Media coverage</h2>
              <div className="mt-4 h-0.5 w-12 bg-primary" />

              <ul className="mt-6 space-y-4">
                {coverage.map((c) => (
                  <li key={c.title} className="border-l-2 border-primary pl-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.outlet}</p>
                    <Link href={c.url} className="mt-1 block text-sm font-semibold hover:text-primary">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border border-border bg-white">
              <Newspaper className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">Press kit</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Download logos, brand assets, product photography, and boilerplate copy.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-primary/90">
                <Download className="h-3.5 w-3.5" /> Download press kit
              </button>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  )
}
