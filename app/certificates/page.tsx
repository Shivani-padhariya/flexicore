import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { Award, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Certificates",
  description: "Flexicore certifications — ISO, NSF, Greenguard, and more.",
}

const certs = [
  { name: "ISO 9001:2015", category: "Quality Management", issuer: "Bureau Veritas", validUntil: "2027-08" },
  { name: "ISO 14001:2015", category: "Environmental", issuer: "Bureau Veritas", validUntil: "2027-08" },
  { name: "ISO 45001:2018", category: "Occupational Health & Safety", issuer: "TÜV Rheinland", validUntil: "2028-03" },
  { name: "NSF 51", category: "Food Contact Safety", issuer: "NSF International", validUntil: "2026-12" },
  { name: "Greenguard Gold", category: "Low Emissions", issuer: "UL Environment", validUntil: "2027-01" },
  { name: "CE Marking", category: "European Conformity", issuer: "Notified Body", validUntil: "Ongoing" },
  { name: "Class 1 Fire Rating", category: "Fire Performance", issuer: "UL", validUntil: "Ongoing" },
  { name: "LEED Contributor", category: "Green Building", issuer: "USGBC", validUntil: "Ongoing" },
]

export default function CertificatesPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Certifications & Standards"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Certificates" }]}
        bgImage="/certificate-documents.jpg"
      />

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-foreground/80 leading-relaxed max-w-2xl">
            Flexicore products are independently certified to meet or exceed the world&apos;s most stringent standards
            for quality, sustainability, safety, and performance. All certificates are available on request.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {certs.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-4 p-5 border border-border bg-white hover:border-primary/40 transition-[transform,box-shadow,border-color] duration-250 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="h-12 w-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.category}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Issued by {c.issuer}</p>
                    <button className="text-primary hover:underline text-xs inline-flex items-center gap-1">
                      <Download className="h-3 w-3" /> PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
