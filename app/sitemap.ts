import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.flexicore.com"
  const now = new Date()

  const staticRoutes = [
    "",
    "/about",
    "/via-flexicore",
    "/founder",
    "/team",
    "/products",
    "/distributors/find",
    "/distributors/apply",
    "/gallery",
    "/room-mockup",
    "/blog",
    "/press",
    "/expo",
    "/certificates",
    "/trusted-by",
    "/careers",
    "/contact",
    "/delivery",
    "/privacy",
  ]

  return staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : path.startsWith("/products") ? 0.9 : 0.7,
  }))
}
