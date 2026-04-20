import type { Metadata } from "next"
import { SiteLayout, PageHeader } from "@/components/site-layout"
import { Linkedin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the leadership team driving innovation and craftsmanship at Flexicore.",
}

const leadership = [
  { name: "JENIL ROJIWADIA", role: "Founder & CEO", image: "/founder-portrait.jpg" },
  { name: "Priya Raman", role: "Chief Design Officer", image: "/executive-portrait.jpg" },
  { name: "Daniel Osei", role: "Head of Global Sales", image: "/executive-portrait-man.jpg" },
  { name: "Maya Fernandes", role: "VP Manufacturing", image: "/executive-portrait-woman.jpg" },
  { name: "Ibrahim Saleh", role: "Head of R&D", image: "/scientist-portrait.png" },
  { name: "Lina Park", role: "Chief Marketing Officer", image: "/marketing-portrait.jpg" },
]

const teams = [
  { dept: "Design Studio", count: 24 },
  { dept: "R&D Lab", count: 18 },
  { dept: "Manufacturing", count: 480 },
  { dept: "Sales & Distribution", count: 112 },
  { dept: "Customer Experience", count: 46 },
]

export default function TeamPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="The people behind Flexicore"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
        bgImage="/diverse-corporate-team.png"
      />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Leadership</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-light">Meet the leaders.</h2>
            <div className="mt-4 h-0.5 w-12 bg-primary" />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {leadership.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-secondary">
                  <img
                    src={m.image || "/placeholder.svg"}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-sm text-muted-foreground">{m.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="h-8 w-8 border border-border flex items-center justify-center hover:border-primary hover:text-primary"
                      aria-label={`${m.name} LinkedIn`}
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="#"
                      className="h-8 w-8 border border-border flex items-center justify-center hover:border-primary hover:text-primary"
                      aria-label={`Email ${m.name}`}
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-light">One company, many teams.</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {teams.map((t) => (
              <div key={t.dept} className="bg-white p-6 text-center">
                <div className="text-3xl font-light text-primary">{t.count}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.dept}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
