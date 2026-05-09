"use client"

import { Instagram } from "lucide-react"

/**
 * Home section §4.9
 * Instagram embed grid — 3x2 grid of native Instagram posts
 */

const instagramPosts = [
  {
    id: "DXRS2Yij4-h",
    url: "https://www.instagram.com/p/DXRS2Yij4-h/",
  },
  {
    id: "DXRQ_LqFUGQ",
    url: "https://www.instagram.com/p/DXRQ_LqFUGQ/",
  },
  {
    id: "DXJpu5ZFpdo",
    url: "https://www.instagram.com/p/DXJpu5ZFpdo/",
  },
  {
    id: "DXEtwifFPBL",
    url: "https://www.instagram.com/p/DXEtwifFPBL/",
  },
  {
    id: "DW32YjRDKcy",
    url: "https://www.instagram.com/p/DW32YjRDKcy/",
  },
  {
    id: "DWi8u5Mjqww",
    url: "https://www.instagram.com/p/DWi8u5Mjqww/",
  },
]

export function HomeInstagramGrid() {
  // No script needed for direct iframe embeds with /embed/ suffix
  // The official embed.js is for blockquote elements
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-accent mb-3">
              <Instagram className="h-3.5 w-3.5" />
              <span>@flexicore_</span>
            </span>
            <h2 className="text-balance text-3xl md:text-5xl font-light text-primary">
              Follow our Instagram.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/flexicore_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-end bg-primary hover:bg-accent text-primary-foreground px-6 py-3 text-xs uppercase tracking-[0.3em] transition-colors duration-250"
          >
            <Instagram className="h-4 w-4" />
            Follow us
          </a>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="instagram-embed-container relative aspect-[4/5] md:aspect-square overflow-hidden rounded-xl bg-muted/30 group touch-pan-y shadow-sm"
            >
              {/* Overlay that allows click-through but prioritizes page scroll on touch */}
              <div className="absolute inset-0 z-10 pointer-events-none" />
              
              <iframe
                src={`${post.url}embed/`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                loading="lazy"
                title={`Instagram post ${post.id}`}
                className="relative z-0 w-full h-full border-none transition-opacity duration-700 opacity-0"
                onLoad={(e) => {
                  (e.target as HTMLIFrameElement).style.opacity = "1";
                }}
                style={{ 
                  display: "block",
                  overflow: "hidden"
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/flexicore_"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-primary hover:text-accent transition-colors duration-250"
          >
            <span className="text-xs uppercase tracking-[0.3em]">View more on Instagram</span>
            <span className="h-px w-10 bg-accent transition-all duration-300 group-hover:w-16" />
          </a>
        </div>
      </div>
    </section>
  )
}
