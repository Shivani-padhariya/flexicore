import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { DistributorApplyForm } from "@/components/distributor-apply-form"
import { Handshake, Globe, TrendingUp, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Become a Distributor",
  description: "Partner with Flexicore. Apply to become an authorised distributor and join a global network.",
}

const benefits = [
  { icon: Handshake, title: "Exclusive Territory", text: "Regional exclusivity and dedicated account management." },
  { icon: Globe, title: "Global Brand", text: "Co-branded marketing and access to the full Flexicore portfolio." },
  { icon: TrendingUp, title: "Attractive Margins", text: "Competitive pricing tiers with growth-based incentives." },
  { icon: Award, title: "Training & Support", text: "Technical training, fabricator certification, and lead referrals." },
]

export default function DistributorApplyPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Become a Flexicore distributor"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Distributors", href: "/distributors/find" },
          { label: "Apply" },
        ]}
        bgImage="/showroom-interior-luxury.jpg"
      />

      <section className="py-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="p-5 border border-border bg-white">
                <b.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-sm">{b.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8 bg-secondary">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Partner Application</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-light">Tell us about your business.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Our partnerships team reviews every application. Expect a reply within 3–5 business days.
            </p>
          </div>
          <div className="mt-10">
            <DistributorApplyForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
