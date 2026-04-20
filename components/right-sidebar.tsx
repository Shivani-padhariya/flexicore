"use client"

import { MapPin, MessageCircle, Download, Palette } from "lucide-react"

const items = [
  { icon: Palette, label: "Colors", href: "#colors" },
  { icon: MapPin, label: "Find a Distributor", href: "#distributors" },
  { icon: MessageCircle, label: "Ask a Question", href: "#contact" },
  { icon: Download, label: "Downloads", href: "#downloads" },
]

export function RightSidebar() {
  return (
    <aside
      className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col bg-white shadow-md"
      aria-label="Quick actions"
    >
      {items.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="group relative w-14 h-14 flex items-center justify-center border-b border-border last:border-b-0 hover:bg-primary hover:text-white transition-colors duration-300"
          aria-label={label}
        >
          <Icon className="w-5 h-5" strokeWidth={1.5} />
          <span className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap bg-foreground text-white text-xs px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        </a>
      ))}
    </aside>
  )
}
