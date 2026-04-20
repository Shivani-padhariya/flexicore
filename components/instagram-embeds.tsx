"use client"

import { useEffect } from "react"
import { Instagram } from "lucide-react"

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

export function InstagramEmbeds() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-accent mb-3">
              <Instagram className="h-3.5 w-3.5" />
              <span>@flexicore_</span>
            </span>
            <h2 className="text-balance text-3xl md:text-5xl font-light text-primary">
              Latest from Instagram
            </h2>
            <p className="text-pretty text-muted-foreground leading-relaxed mt-3 max-w-2xl">
              Follow our Instagram for daily inspiration, behind-the-scenes content, and
              showcases of beautiful Flexicore installations around the world.
            </p>
          </div>
          <a
            href="https://www.instagram.com/flexicore_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-end bg-primary hover:bg-accent text-primary-foreground px-6 py-3 text-xs uppercase tracking-[0.3em] transition-colors duration-250 mt-4 md:mt-0"
          >
            <Instagram className="h-4 w-4" />
            Follow us
          </a>
        </div>

        {/* Instagram Embeds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="instagram-embed-container overflow-hidden rounded-xl"
            >
              <iframe
                src={`${post.url}embed/`}
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                title={`Instagram post ${post.id}`}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
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
