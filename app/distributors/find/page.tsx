"use client"

import dynamic from "next/dynamic"
import { useMemo, useState } from "react"
import { MapPin, Phone, Mail, Search } from "lucide-react"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { distributors, regions, type Distributor } from "@/lib/distributors-data"

const DistributorMap = dynamic(() => import("@/components/distributor-map").then((m) => m.DistributorMap), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] md:h-[620px] w-full bg-secondary flex items-center justify-center text-muted-foreground text-sm">
      Loading map…
    </div>
  ),
})

export default function DistributorFinderPage() {
  const [q, setQ] = useState("")
  const [region, setRegion] = useState<string>("All")
  const [active, setActive] = useState<Distributor | null>(null)

  const filtered = useMemo(() => {
    return distributors.filter((d) => {
      if (region !== "All" && d.region !== region) return false
      if (q) {
        const needle = q.toLowerCase()
        return (
          d.city.toLowerCase().includes(needle) ||
          d.country.toLowerCase().includes(needle) ||
          d.name.toLowerCase().includes(needle)
        )
      }
      return true
    })
  }, [q, region])

  return (
    <SiteLayout>
      <PageHeader
        title="Find a Distributor"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Distributors", href: "/distributors/find" },
          { label: "Find" },
        ]}
        bgImage="/world-map-dots.png"
      />

      <section className="py-10 md:py-14 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[380px_1fr] gap-6">
            {/* Left: search + list */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 border border-border bg-white px-4 py-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search city, country, or distributor"
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {["All", ...regions].map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                      region === r ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-muted"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <div className="mt-4 text-xs text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "result" : "results"}
              </div>

              <div className="mt-2 max-h-[500px] lg:max-h-[560px] overflow-y-auto divide-y divide-border border border-border bg-white">
                {filtered.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setActive(d)}
                    className={`w-full text-left p-4 hover:bg-muted transition-colors ${
                      active?.id === d.id ? "bg-primary/5 border-l-4 border-l-primary" : ""
                    }`}
                  >
                    <h3 className="font-semibold text-sm">{d.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{d.city}, {d.country}</p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {d.phone}
                      </span>
                    </div>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <div className="p-8 text-center text-sm text-muted-foreground">No distributors found.</div>
                )}
              </div>
            </div>

            {/* Right: map + active */}
            <div className="flex flex-col">
              <div className="border border-border bg-white">
                <DistributorMap distributors={filtered} active={active} onSelect={setActive} />
              </div>

              {active && (
                <div className="mt-4 border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold">{active.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{active.city}, {active.country}</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {active.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <a href={`tel:${active.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                        {active.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary shrink-0" />
                      <a href={`mailto:${active.email}`} className="hover:text-primary">
                        {active.email}
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
