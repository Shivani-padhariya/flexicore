import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { ShieldCheck, Sparkles, Leaf, HandCoins } from "lucide-react"

export const metadata: Metadata = {
  title: "Via Flexicore",
  description: "Discover the Flexicore way — our approach to design, manufacturing, sustainability, and service.",
}

const sections = [
  {
    icon: Sparkles,
    title: "Design Without Compromise",
    body: "Every color, every vein, every finish is developed in our in-house design studio, tested against real-world light conditions and trend cycles.",
  },
  {
    icon: ShieldCheck,
    title: "Engineered Reliability",
    body: "Our surfaces meet or exceed global standards for food contact, fire resistance, and chemical durability.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    body: "Up to 40% recycled content in select products, closed-loop water systems, solar-powered facilities.",
  },
  {
    icon: HandCoins,
    title: "Partner-first Service",
    body: "Dedicated account managers, co-branded marketing, fabricator training, and architectural specification support.",
  },
]

export default function ViaFlexicorePage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Via Flexicore — the way we work"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Via Flexicore" }]}
        bgImage="/modern-interior-design.png"
      />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Our Approach</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-light text-balance">
            Four principles that define every project we touch.
          </h2>
          <div className="mt-4 h-0.5 w-12 bg-primary mx-auto" />
        </div>

        <div className="mx-auto max-w-6xl mt-14 grid md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <div key={s.title} className="p-8 border border-border bg-white">
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
