type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Flexicore",
  url: "https://www.flexicore.com",
  logo: "https://www.flexicore.com/logo.png",
  description:
    "Flexicore is a premium manufacturer of solid surfaces and tiles offering Alabaster, Marble, Mosaic, Sparkle, Translucent and Plain Surface collections.",
  sameAs: [
    "https://www.instagram.com/flexicore_/",
    "https://www.facebook.com/flexicoresolidsurface/",
    "https://www.linkedin.com/company/flexicore",
    "https://www.pinterest.com/flexicore",
    "https://www.youtube.com/@flexicore",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919662496622",
    email: "flexicore@yahoo.com",
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi", "Arabic"],
  },
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function productSchema(p: {
  name: string
  description: string
  image: string
  sku: string
  category: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: p.image,
    sku: p.sku,
    category: p.category,
    brand: {
      "@type": "Brand",
      name: "Flexicore",
    },
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  }
}

export function articleSchema(a: {
  headline: string
  image: string
  datePublished: string
  author: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.headline,
    image: a.image,
    datePublished: a.datePublished,
    author: { "@type": "Person", name: a.author },
    publisher: {
      "@type": "Organization",
      name: "Flexicore",
      logo: { "@type": "ImageObject", url: "https://www.flexicore.com/logo.png" },
    },
  }
}
