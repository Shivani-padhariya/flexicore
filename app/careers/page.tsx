import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { CareersApplyForm } from "@/components/careers-apply-form"
import { MapPin, Briefcase, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers",
  description: "Build your career at Flexicore — explore open roles across design, manufacturing, sales, and technology.",
}

const openings = [
  { title: "Senior Surface Designer", dept: "Design", location: "Mumbai", type: "Full-time" },
  { title: "Fabrication Engineer", dept: "Manufacturing", location: "Pune", type: "Full-time" },
  { title: "Regional Sales Manager — GCC", dept: "Sales", location: "Dubai", type: "Full-time" },
  { title: "Sustainability Lead", dept: "Operations", location: "Mumbai", type: "Full-time" },
  { title: "Frontend Developer", dept: "Technology", location: "Remote", type: "Full-time" },
  { title: "Marketing Coordinator", dept: "Marketing", location: "Mumbai", type: "Contract" },
]

const benefits = [
  "Competitive compensation & equity",
  "Comprehensive health & wellness",
  "Learning & development stipend",
  "Flexible work arrangements",
  "Paid volunteer days",
  "Global travel opportunities",
]

export default function CareersPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Build your career with Flexicore"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        bgImage="/modern-office-team.png"
      />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Life at Flexicore</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-light text-balance">
              Design beautiful things. With beautiful people.
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-foreground/80 leading-relaxed">
              At Flexicore we blend craftsmanship with technology. Join a team that cares about doing great work,
              learning from each other, and shipping products the world is proud to use.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li key={b} className="border border-border bg-white p-4 text-sm">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Open roles</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-light">{openings.length} positions available</h2>
            </div>
            <a href="#apply" className="text-sm font-semibold text-primary hover:underline">
              Don&apos;t see your role? Apply anyway →
            </a>
          </div>

          <div className="mt-8 divide-y divide-border bg-white border border-border">
            {openings.map((o) => (
              <div key={o.title} className="p-5 md:p-6 flex items-center justify-between gap-4 hover:bg-muted transition-colors">
                <div>
                  <h3 className="font-semibold">{o.title}</h3>
                  <div className="mt-1.5 flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" /> {o.dept}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {o.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {o.type}
                    </span>
                  </div>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-primary/90 shrink-0"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-light text-center">Submit your application</h2>
          <p className="mt-3 text-sm text-muted-foreground text-center">
            Upload your resume and tell us what you&apos;re looking for.
          </p>
          <div className="mt-8">
            <CareersApplyForm roles={openings.map((o) => o.title)} />
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
