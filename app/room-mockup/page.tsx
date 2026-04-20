import type { Metadata } from "next"
import { SiteLayout } from "@/components/site-layout"
import { RoomMockupTool } from "@/components/room-mockup-tool"
import { Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Room Mockup Tool",
  description:
    "Visualise any Flexicore surface in your own space with our AI-powered room mockup tool. Upload a photo, pick a surface, and see the result instantly.",
}

export default function RoomMockupPage() {
  return (
    <SiteLayout>
      <section className="relative pt-32 pb-10 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              AI Powered
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-balance mb-4">
              See Flexicore in your space, before you buy.
            </h1>
            <p className="text-muted-foreground text-pretty">
              Upload a photo of your room, pick any Flexicore surface, and our
              AI renders a photoreal preview in seconds. No measurements, no
              samples, no guesswork.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <RoomMockupTool />
        </div>
      </section>

      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              n: "01",
              t: "Upload",
              d: "Snap a photo of any surface in your home or project.",
            },
            {
              n: "02",
              t: "Choose",
              d: "Pick from 100+ Flexicore Solid Surface colors.",
            },
            {
              n: "03",
              t: "Visualise",
              d: "Get a photoreal AI render in under 10 seconds.",
            },
          ].map((s) => (
            <div key={s.n}>
              <div className="text-primary text-sm font-mono mb-2">{s.n}</div>
              <h3 className="text-xl font-semibold mb-2">{s.t}</h3>
              <p className="text-background/70 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
