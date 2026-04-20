"use client"

import { useState } from "react"
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Heart,
  MessageCircle,
  Play,
  ExternalLink,
} from "lucide-react"

type Platform = "instagram" | "facebook" | "linkedin" | "pinterest" | "youtube"

type Post = {
  id: number
  platform: Platform
  image: string
  caption: string
  likes: number
  comments: number
  video?: boolean
}

const PINTEREST_ICON = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden>
    <path d="M12 0C5.4 0 0 5.4 0 12c0 5 3.1 9.3 7.5 11-.1-.9-.2-2.4 0-3.4.2-.9 1.4-5.8 1.4-5.8s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.1 1.8 2.1 2.1 0 3.8-2.2 3.8-5.5 0-2.9-2.1-4.9-5-4.9-3.4 0-5.4 2.6-5.4 5.2 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.3 1.3c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.6 0-3.8 2.7-7.2 7.9-7.2 4.1 0 7.3 2.9 7.3 6.9 0 4.1-2.6 7.4-6.2 7.4-1.2 0-2.4-.6-2.7-1.4l-.7 2.9c-.3 1-1 2.3-1.5 3 1.1.3 2.3.5 3.5.5 6.6 0 12-5.4 12-12S18.6 0 12 0z" />
  </svg>
)

const PLATFORMS: { id: Platform | "all"; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All", icon: null },
  { id: "instagram", label: "Instagram", icon: <Instagram className="w-4 h-4" /> },
  { id: "facebook", label: "Facebook", icon: <Facebook className="w-4 h-4" /> },
  { id: "linkedin", label: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
  { id: "pinterest", label: "Pinterest", icon: <span className="w-4 h-4 inline-block">{PINTEREST_ICON}</span> },
  { id: "youtube", label: "YouTube", icon: <Youtube className="w-4 h-4" /> },
]

const POSTS: Post[] = [
  {
    id: 1,
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    caption: "Calacatta Greige brings timeless elegance to this modern kitchen.",
    likes: 1240,
    comments: 47,
  },
  {
    id: 2,
    platform: "youtube",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    caption: "How our Translucent collection is made. Watch now.",
    likes: 5600,
    comments: 210,
    video: true,
  },
  {
    id: 3,
    platform: "pinterest",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    caption: "Mood board: Alabaster bathrooms",
    likes: 820,
    comments: 15,
  },
  {
    id: 4,
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    caption: "Seamless curves with Flexicore Solid Surface.",
    likes: 2140,
    comments: 89,
  },
  {
    id: 5,
    platform: "facebook",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    caption: "Proud to be featured in Architectural Digest this month.",
    likes: 450,
    comments: 32,
  },
  {
    id: 6,
    platform: "linkedin",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    caption: "Flexicore expands to 12 new markets. Join our journey.",
    likes: 980,
    comments: 54,
  },
  {
    id: 7,
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    caption: "Behind the scenes at Flexicore Design Studio.",
    likes: 1870,
    comments: 65,
  },
  {
    id: 8,
    platform: "youtube",
    image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
    caption: "Client story: Luxury hotel lobby transformation.",
    likes: 3200,
    comments: 140,
    video: true,
  },
]

// Brand-unified palette: every platform badge uses the Flexicore logo colours
// (deep burgundy primary, warm copper accent) so the whole site stays on-brand.
const BRAND_COLORS: Record<Platform, string> = {
  instagram: "bg-gradient-to-tr from-accent via-primary to-foreground",
  facebook: "bg-primary",
  linkedin: "bg-foreground",
  pinterest: "bg-primary",
  youtube: "bg-foreground",
}

export function SocialFeeds() {
  const [active, setActive] = useState<Platform | "all">("all")

  const visible =
    active === "all" ? POSTS : POSTS.filter((p) => p.platform === active)

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Follow Us
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-balance mb-3">
            Flexicore across social media
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how designers and homeowners are transforming their spaces with
            Flexicore surfaces. Tag us @flexicore to be featured.
          </p>
        </div>

        {/* Platform tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 h-10 px-5 rounded-full text-sm font-medium transition-all border ${
                active === p.id
                  ? "bg-foreground text-background border-foreground"
                  : "bg-white border-border hover:border-foreground"
              }`}
            >
              {p.icon}
              {p.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visible.map((post) => (
            <a
              key={post.id}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-sm bg-muted transition-transform duration-250 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Platform badge */}
              <div
                className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-white ${BRAND_COLORS[post.platform]}`}
                aria-label={post.platform}
              >
                {post.platform === "instagram" && <Instagram className="w-4 h-4" />}
                {post.platform === "facebook" && <Facebook className="w-4 h-4" />}
                {post.platform === "linkedin" && <Linkedin className="w-4 h-4" />}
                {post.platform === "youtube" && <Youtube className="w-4 h-4" />}
                {post.platform === "pinterest" && (
                  <span className="w-4 h-4 inline-block">{PINTEREST_ICON}</span>
                )}
              </div>

              {/* Video badge */}
              {post.video && (
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white">
                  <Play className="w-4 h-4 fill-white" />
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <p className="text-sm line-clamp-2 mb-3">{post.caption}</p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5" /> {post.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                  </span>
                  <span className="ml-auto flex items-center gap-1">
                    View <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          {(["instagram", "facebook", "linkedin", "pinterest", "youtube"] as Platform[]).map(
            (p) => (
              <a
                key={p}
                href="#"
                aria-label={p}
                className={`w-11 h-11 rounded-full flex items-center justify-center text-white ${BRAND_COLORS[p]} hover:scale-110 transition-transform`}
              >
                {p === "instagram" && <Instagram className="w-5 h-5" />}
                {p === "facebook" && <Facebook className="w-5 h-5" />}
                {p === "linkedin" && <Linkedin className="w-5 h-5" />}
                {p === "youtube" && <Youtube className="w-5 h-5" />}
                {p === "pinterest" && <span className="w-5 h-5">{PINTEREST_ICON}</span>}
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
