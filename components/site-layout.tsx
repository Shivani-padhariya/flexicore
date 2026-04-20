import type { ReactNode } from "react"
import { SiteNav } from "./site-nav"
import { Footer } from "./footer"
import { WhatsAppButton } from "./whatsapp-button"
import { BackToTop } from "./back-to-top"

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export function PageHeader({
  title,
  breadcrumb,
  bgImage,
}: {
  title: string
  breadcrumb?: { label: string; href?: string }[]
  bgImage?: string
}) {
  return (
    <section
      className="relative w-full h-[280px] md:h-[360px] flex items-end bg-secondary"
      style={
        bgImage
          ? {
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 pb-8 md:pb-12">
        {breadcrumb && (
          <nav className="mb-3 text-xs uppercase tracking-wide text-white/80 flex items-center gap-2">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? (
                  <a href={b.href} className="hover:text-white transition-colors">
                    {b.label}
                  </a>
                ) : (
                  <span>{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-light text-white text-balance">{title}</h1>
        <div className="mt-4 h-0.5 w-12 bg-primary" />
      </div>
    </section>
  )
}
