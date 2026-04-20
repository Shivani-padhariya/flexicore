import Link from "next/link"
import { SiteLayout } from "@/components/site-layout"
import { ArrowRight, Home } from "lucide-react"

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Error 404</p>
          <h1 className="mt-4 text-6xl md:text-8xl font-light">Page not found</h1>
          <div className="mt-6 h-0.5 w-12 bg-primary mx-auto" />
          <p className="mt-6 text-foreground/70 max-w-md mx-auto">
            The page you&apos;re looking for has moved, been renamed, or may never have existed.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90"
            >
              <Home className="h-4 w-4" /> Back to Home
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-border bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:border-primary hover:text-primary"
            >
              Browse Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {[
              ["About Us", "/about"],
              ["Products", "/products"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="p-4 border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
