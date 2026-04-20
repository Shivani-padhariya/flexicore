import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read about how Flexicore collects, uses, and protects your personal data.",
}

const sections = [
  {
    heading: "Introduction",
    body: "Flexicore (\"we\", \"us\", or \"our\") respects your privacy and is committed to protecting your personal data. This policy explains how we collect and process information when you interact with our website, products, and services.",
  },
  {
    heading: "Information we collect",
    body: "We collect information you provide directly (name, email, phone, company) when you submit forms, request samples, or apply to jobs. We also collect technical data such as IP address, browser type, and usage patterns through cookies and analytics tools.",
  },
  {
    heading: "How we use your information",
    body: "We use personal data to respond to enquiries, deliver products and services, personalise your experience, improve our website, and send marketing communications where you have opted in.",
  },
  {
    heading: "Sharing of information",
    body: "We do not sell your data. We share information only with trusted service providers (hosting, email, analytics) bound by contractual data-protection obligations, and where required by law.",
  },
  {
    heading: "International transfers",
    body: "As a global company, your data may be processed in countries outside your jurisdiction. Where required we use Standard Contractual Clauses or equivalent safeguards.",
  },
  {
    heading: "Your rights",
    body: "You have the right to access, correct, delete, or port your data, and to object to or restrict certain processing. To exercise any right, email privacy@flexicore.com.",
  },
  {
    heading: "Cookies",
    body: "We use strictly necessary cookies and, with consent, analytics and marketing cookies. You can manage preferences at any time via our Cookie Preferences panel.",
  },
  {
    heading: "Changes to this policy",
    body: "We may update this policy from time to time. Material changes will be notified on our website or by email where appropriate.",
  },
]

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Privacy Policy"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Last updated · April 2026</p>
          <div className="mt-8 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl md:text-2xl font-semibold">{s.heading}</h2>
                <div className="mt-2 h-0.5 w-8 bg-primary" />
                <p className="mt-4 text-sm md:text-base text-foreground/80 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
