import type { Metadata } from "next"
import Link from "next/link"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { Factory, Globe2, Award, Leaf, Users, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Flexicore — our mission, values, and history as a premium manufacturer of solid surfaces and tiles.",
}

const pillars = [
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    text: "State-of-the-art facilities producing premium solid surfaces with precision and consistency.",
  },
  {
    icon: Globe2,
    title: "Global Distribution",
    text: "Serving architects, designers, and fabricators across 45+ countries on six continents.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    text: "ISO 9001, ISO 14001, NSF 51, and Greenguard Gold certified across our entire range.",
  },
  {
    icon: Leaf,
    title: "Sustainable by Design",
    text: "Recycled content, low-VOC formulations, and closed-loop manufacturing practices.",
  },
  {
    icon: Users,
    title: "People First",
    text: "From apprentices to master craftsmen, our people drive every innovation we ship.",
  },
  {
    icon: Layers,
    title: "Endless Possibilities",
    text: "Six collections, hundreds of colors, infinite design possibilities.",
  },
]

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Crafting surfaces that inspire"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        bgImage="/flexicore-factory-exterior.jpg"
      />

      {/* Intro */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Our Story</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-light text-balance">
              A quarter-century of redefining surface design.
            </h2>
            <div className="mt-6 h-0.5 w-12 bg-primary" />
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Flexicore was founded on a simple idea: the surfaces we build with should be beautiful, durable,
                and kind to the planet. Twenty-five years on, we remain a leading independent manufacturer of
                premium solid surfaces and tiles, trusted by architects and fabricators worldwide.
              </p>
              <p>
                From quiet residential interiors to bustling commercial spaces, Flexicore surfaces make bold
                creative visions real — in kitchens, bathrooms, hospitality, healthcare, and retail.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-border bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:border-primary hover:text-primary"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="aspect-[4/5] bg-secondary overflow-hidden">
            <img src="/flexicore-design-team-working.jpg" alt="Flexicore team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">What drives us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-light">Six pillars. One commitment.</h2>
            <div className="mt-4 h-0.5 w-12 bg-primary" />
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white p-6 border border-border hover:border-primary/30 transition-colors">
                <p.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "25+", label: "Years of craft" },
            { value: "45", label: "Countries served" },
            { value: "180+", label: "Colors & finishes" },
            { value: "12k+", label: "Projects delivered" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-primary">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
