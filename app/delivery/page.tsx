import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { Truck, Plane, Ship, Clock, Shield, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Delivery & Logistics",
  description: "Flexicore delivery, shipping, and logistics information for domestic and international customers.",
}

export default function DeliveryPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Global logistics, local care"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Delivery" }]}
        bgImage="/logistics-warehouse-trucks.jpg"
      />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Road Freight", text: "Pan-India delivery within 3–7 days of dispatch." },
              { icon: Ship, title: "Sea Freight", text: "Containerised export to 45+ countries, FOB and CIF options." },
              { icon: Plane, title: "Air Cargo", text: "Priority air freight for urgent or sample shipments." },
            ].map((m) => (
              <div key={m.title} className="p-6 border border-border bg-white">
                <m.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">What to expect</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-light">How your order arrives.</h2>
              <div className="mt-4 h-0.5 w-12 bg-primary" />
              <ol className="mt-6 space-y-5">
                {[
                  ["Order confirmation", "Receive a written acknowledgement with lead times and pricing."],
                  ["Production", "Custom items enter our production queue (7–14 working days typical)."],
                  ["Quality check", "Every slab is inspected, photographed, and logged."],
                  ["Packaging", "Moisture-proof, shock-absorbing crates designed for global transit."],
                  ["Dispatch & tracking", "Real-time tracking and documentation provided."],
                  ["Delivery", "Kerbside or inside delivery available on request."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="h-7 w-7 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{t}</p>
                      <p className="text-sm text-muted-foreground">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-4">
              <div className="p-6 border border-border bg-white">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">Lead times</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Stocked items: 3–7 days. Custom production: 10–14 days. International shipping: 10–35 days depending on
                  destination and mode.
                </p>
              </div>
              <div className="p-6 border border-border bg-white">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">Insurance</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  All shipments are fully insured against loss or damage in transit as standard.
                </p>
              </div>
              <div className="p-6 border border-border bg-white">
                <Package className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">Returns</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Damaged-in-transit claims must be raised within 48 hours. Read our full policy for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
