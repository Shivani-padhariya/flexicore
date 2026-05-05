import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/json-ld"
import { blogPosts, getBlogPost } from "@/lib/blog-data"
import { API_BASE } from "@/lib/admin-auth"
import { fetchFromApi } from "@/lib/api-utils"

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  try {
    const posts = await fetchFromApi("/blogs");
    return posts.map((p: any) => ({ slug: p.slug }));
  } catch (error) {
    console.error("Failed to fetch blogs for static params:", error);
    return blogPosts.map((p) => ({ slug: p.slug }));
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  let p: any;
  try {
    p = await fetchFromApi(`/blogs/slug/${slug}`);
  } catch {
    p = getBlogPost(slug);
  }
  
  if (!p) return { title: "Article not found" }
  return {
    title: p.title,
    description: p.excerpt,
    openGraph: { images: [p.featuredImage?.url || p.image], type: "article" },
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  let post: any;
  try {
    post = await fetchFromApi(`/blogs/slug/${slug}`);
    if (!post || post.message) throw new Error("Post not found");
  } catch {
    post = getBlogPost(slug);
  }
  
  if (!post) notFound()

  let related: any[] = [];
  try {
    const allBlogs = await fetchFromApi("/blogs");
    related = allBlogs.filter((p: any) => p.slug !== slug).slice(0, 3);
  } catch {
    related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  }

  return (
    <SiteLayout>
      <JsonLd
        data={[
          articleSchema({
            headline: post.title,
            image: post.featuredImage?.url || post.image,
            datePublished: post.publishDate || post.date,
            author: post.author,
          }),
          breadcrumbSchema([
            { name: "Home", url: "https://www.flexicore.com/" },
            { name: "Blog", url: "https://www.flexicore.com/blog" },
            { name: post.title, url: `https://www.flexicore.com/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="px-4 md:px-8">
        <div className="mx-auto max-w-3xl py-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="mt-8 inline-block text-xs uppercase tracking-[0.2em] text-primary">{post.category}</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-light text-balance">{post.title}</h1>
          <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(post.publishDate || post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-5xl aspect-[16/9] overflow-hidden bg-secondary">
          <img src={post.featuredImage?.url || post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="mx-auto max-w-3xl py-12 md:py-16 prose prose-neutral max-w-none">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">{post.excerpt}</p>
          <div className="mt-6 leading-relaxed text-foreground/80" dangerouslySetInnerHTML={{ __html: post.content || post.body }} />
          
          {post.relatedImages?.length > 0 && (
            <div className="mt-12 pt-12 border-t border-border">
              <h3 className="text-xl font-light mb-6">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {post.relatedImages.map((img: any, i: number) => (
                  <div key={i} className="aspect-video overflow-hidden bg-secondary rounded-lg">
                    <img src={img.url} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="mt-12 leading-relaxed text-foreground/80">
            If you&apos;d like to learn more about this topic, reach out to our team. We love talking shop with
            architects, designers, and fabricators pushing the boundary of what&apos;s possible with solid surface.
          </p>
        </div>
      </article>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-secondary">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-light">Keep reading</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={p.featuredImage?.url || p.image || "/placeholder.svg"} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary">{p.category}</span>
                  <h3 className="mt-2 font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
