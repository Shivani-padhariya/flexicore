export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  body: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-with-calacatta-greige",
    title: "Designing with Calacatta Greige",
    excerpt: "How our newest marble-inspired color is reshaping kitchens this season.",
    body: "Calacatta Greige captures the quiet luxury trend while delivering the hygiene and seamlessness of solid surface. Here's how designers are specifying it...",
    image: "/marble-calacatta-greige.jpg",
    category: "Design",
    author: "Priya Raman",
    date: "2026-04-10",
    readTime: "6 min",
  },
  {
    slug: "solid-surface-vs-quartz",
    title: "Solid Surface vs. Quartz: A fabricator's guide",
    excerpt: "The real differences that matter when specifying for a client project.",
    body: "Solid surface and quartz are often compared, but each has a distinct profile. Solid surface is thermoformable, seamless, repairable, and inherently non-porous...",
    image: "/fabricator-workshop.jpg",
    category: "Technical",
    author: "Daniel Osei",
    date: "2026-03-22",
    readTime: "8 min",
  },
  {
    slug: "sustainability-report-2026",
    title: "Sustainability Report 2026",
    excerpt: "A year in numbers: recycled content, renewable energy, and closed-loop water.",
    body: "In 2026 we reached 42% recycled content across our plain surface range, 100% solar-powered manufacturing at our Pune facility, and zero process water to drain...",
    image: "/sustainability-factory-solar.jpg",
    category: "Sustainability",
    author: "Maya Fernandes",
    date: "2026-03-05",
    readTime: "10 min",
  },
  {
    slug: "thermoforming-masterclass",
    title: "Thermoforming masterclass",
    excerpt: "A practical guide to shaping solid surface without cracks or visible seams.",
    body: "Thermoforming is where solid surface really shines. The key is consistent, gentle heat and a clamp pattern that avoids stress risers...",
    image: "/thermoforming-workshop.jpg",
    category: "Technical",
    author: "Ibrahim Saleh",
    date: "2026-02-18",
    readTime: "12 min",
  },
  {
    slug: "hospitality-trends-2026",
    title: "Hospitality design trends 2026",
    excerpt: "Biophilic accents, translucent surfaces, and sculptural reception desks.",
    body: "Hospitality interiors in 2026 are leaning into tactile materials and sculptural shapes. Translucent solid surfaces with integrated lighting are among the most requested finishes...",
    image: "/luxury-hotel-lobby.jpg",
    category: "Trends",
    author: "Lina Park",
    date: "2026-02-04",
    readTime: "7 min",
  },
  {
    slug: "behind-the-color-lab",
    title: "Behind the color lab",
    excerpt: "A rare glimpse inside the Flexicore color development studio.",
    body: "Every new Flexicore color starts life as hundreds of lab pours. We test under daylight, halogen, and LED before a single slab enters production...",
    image: "/color-laboratory.jpg",
    category: "Studio",
    author: "Priya Raman",
    date: "2026-01-19",
    readTime: "5 min",
  },
]

export const blogCategories = ["All", "Design", "Technical", "Sustainability", "Trends", "Studio"]

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
