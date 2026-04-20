"use client"

import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Kitchen Countertop Trends for 2026",
    excerpt: "Discover the latest trends in kitchen countertop design, from bold colors to seamless integrations.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    category: "Trends",
    author: "Design Team",
    date: "April 15, 2026"
  },
  {
    id: 2,
    title: "Solid Surface vs Quartz: Making the Right Choice",
    excerpt: "A comprehensive comparison to help you choose the perfect surface material for your project.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    category: "Guides",
    author: "Technical Team",
    date: "April 10, 2026"
  },
  {
    id: 3,
    title: "Behind the Scenes: Our Manufacturing Process",
    excerpt: "Take a virtual tour of our state-of-the-art facility and see how Flexicore surfaces are made.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80",
    category: "Company",
    author: "Flexicore Team",
    date: "April 5, 2026"
  },
]

export function BlogPreview() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
              Latest News & Insights
            </h2>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold mt-4 md:mt-0 hover:gap-4 transition-all"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <a href={`/blog/${post.id}`} className="block">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
