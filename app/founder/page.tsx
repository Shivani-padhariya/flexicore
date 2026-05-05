import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Founder",
  description: "Meet the founder of Flexicore — visionary, craftsman, and leader in premium surface manufacturing.",
}

export default function FounderPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="A message from our founder"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Founder" }]}
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
          <div className="w-full md:w-[360px] shrink-0">
            <div className="aspect-[3/4] overflow-hidden bg-secondary">
              <img src="/founder.png" alt="Founder" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold">JENIL ROJIWADIA</p>
              <p className="text-sm text-muted-foreground">Founder & CEO, Flexicore</p>
            </div>
          </div>

          <div className="relative">
            <Quote className="absolute -top-4 -left-2 h-14 w-14 text-primary/10" />
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Founder&apos;s Note</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-light text-balance">
              Surfaces are where ideas become real.
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-primary" />
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                When I began Flexicore, India was importing the majority of its premium surfaces. I knew we had
                the craftsmanship, the science, and the ambition to build something world-class at home.
              </p>
              <p>
                Today, Flexicore ships to more than forty-five countries. What hasn&apos;t changed is the principle
                behind every slab we make: no compromise on quality, no compromise on safety, and no compromise on
                respect for the planet.
              </p>
              <p>
                I invite you to explore our collections and see why designers, architects, and fabricators around
                the world choose Flexicore for their most ambitious projects.
              </p>
            </div>

            <div className="mt-10 border-t border-border pt-8 grid sm:grid-cols-3 gap-6">
              {[
                { value: "1999", label: "Year founded" },
                { value: "3", label: "Manufacturing plants" },
                { value: "800+", label: "Employees" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-light text-primary">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
