import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Trusted By",
  description: "A selection of the architects, brands, and institutions who trust Flexicore surfaces.",
}

const clients = [
  "Accor", "Aman Resorts", "Four Seasons", "Rosewood", "Marriott", "IHG",
  "Apple", "Google", "Microsoft", "Meta",
  "Hermès", "Louis Vuitton", "Chanel", "Gucci",
  "Gensler", "HOK", "Foster + Partners", "Zaha Hadid Architects",
]

const testimonials = [
  { quote: "Flexicore's surfaces helped us deliver a showstopping lobby under a brutal schedule. Their support was outstanding.", who: "Rosalind Chen", role: "Principal, HOK Interiors" },
  { quote: "The Calacatta Greige is indistinguishable from natural marble but infinitely easier to specify and maintain.", who: "Marco Bellini", role: "Design Director, Studio Bellini" },
  { quote: "We've worked with Flexicore on twelve hospitality projects. Their consistency is unmatched.", who: "Priya Agarwal", role: "Senior Associate, Gensler" },
]

export default function TrustedByPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Trusted by designers worldwide"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Trusted By" }]}
        bgImage="/brand-collage.jpg"
      />

      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            From boutique hospitality projects to global flagship stores, Flexicore surfaces have been specified by
            the design world&apos;s most respected studios and brands.
          </p>

          <div className="mt-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border">
            {clients.map((c) => (
              <div key={c} className="aspect-[3/2] flex items-center justify-center bg-white">
                <span className="text-sm md:text-base font-semibold text-foreground/70 uppercase tracking-wider">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-secondary">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-light text-center">What our partners say</h2>
          <div className="mt-3 h-0.5 w-12 bg-primary mx-auto" />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.who} className="p-6 bg-white border border-border transition-transform duration-250 hover:-translate-y-1.5 hover:shadow-lg">
                <Quote className="h-6 w-6 text-primary/30" />
                <p className="mt-4 text-foreground/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 pt-4 border-t border-border">
                  <p className="font-semibold text-sm">{t.who}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
