export type ProductCategory =
  | "alabaster"
  | "marble"
  | "mosaic"
  | "sparkle"
  | "translucent"
  | "plain"

export type Industry =
  | "residential"
  | "commercial"
  | "healthcare"
  | "corporate"
  | "hospitality"

export type Product = {
  slug: string
  name: string
  sku: string
  category: ProductCategory
  description: string
  longDescription: string
  image: string
  gallery: string[]
  hue: string
  region: string
  isNew?: boolean
  isEco?: boolean
  thickness: string
  dimensions: string
  applications: string[]
  features: string[]
  industries: Industry[]
  videoUrl?: string
  specSheetUrl?: string
  faqs?: { q: string; a: string }[]
}

export const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "alabaster", label: "Alabaster" },
  { id: "marble", label: "Marble" },
  { id: "mosaic", label: "Mosaic" },
  { id: "sparkle", label: "Sparkle" },
  { id: "translucent", label: "Translucent" },
  { id: "plain", label: "Plain Surface" },
]

export const industries: { id: Industry | "all"; label: string }[] = [
  { id: "all", label: "All Industries" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "healthcare", label: "Healthcare" },
  { id: "corporate", label: "Corporate" },
  { id: "hospitality", label: "Hospitality" },
]

const defaultFaqs = [
  {
    q: "Is this surface suitable for kitchen countertops?",
    a: "Yes. All Flexicore solid surfaces are non-porous, food-safe, and NSF-certified for kitchen use. They resist staining, bacteria, and heat up to 180 degrees Celsius with a trivet.",
  },
  {
    q: "How do I maintain and clean the surface?",
    a: "Daily cleaning requires only warm water and mild soap. For deeper cleans use a non-abrasive cream cleanser. Scratches and minor scuffs can be buffed out with a fine abrasive pad, restoring the surface to like-new condition.",
  },
  {
    q: "What warranty does Flexicore offer?",
    a: "Every Flexicore installation comes with a 10-year limited residential warranty covering material defects and workmanship performed by certified Flexicore fabricators.",
  },
]

export const products: Product[] = [
  {
    slug: "calacatta-greige",
    name: "Calacatta Greige",
    sku: "FC-MB-101",
    category: "marble",
    description: "Warm greige veining on a soft ivory base.",
    longDescription:
      "Calacatta Greige features dramatic greige veining over a warm ivory base, capturing the timeless elegance of Italian Calacatta marble with the durability and hygiene of solid surface.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    ],
    hue: "White",
    region: "Europe",
    isNew: true,
    thickness: "12mm / 20mm",
    dimensions: "3200 x 1600 mm",
    applications: ["Kitchen Countertop", "Vanity", "Feature Wall", "Flooring"],
    features: ["Non-porous", "Stain resistant", "Seamless joints", "Thermoformable"],
    industries: ["residential", "hospitality", "commercial"],
    videoUrl: "https://cdn.coverr.co/videos/coverr-marble-kitchen-island-4000/1080p.mp4",
    specSheetUrl: "/specs/calacatta-greige.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "noir-obsidian",
    name: "Noir Obsidian",
    sku: "FC-PL-202",
    category: "plain",
    description: "A deep, velvety black with a soft matte finish.",
    longDescription:
      "Noir Obsidian delivers an ultra-deep black with a velvety matte finish, perfect for modern architectural statements and minimalist luxury interiors.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    ],
    hue: "Black",
    region: "Global",
    isNew: true,
    isEco: true,
    thickness: "12mm",
    dimensions: "3000 x 760 mm",
    applications: ["Reception Desk", "Countertop", "Bar Top"],
    features: ["Non-porous", "Anti-bacterial", "Repairable", "Recycled content"],
    industries: ["corporate", "hospitality", "commercial"],
    videoUrl: "https://cdn.coverr.co/videos/coverr-modern-black-kitchen-8124/1080p.mp4",
    specSheetUrl: "/specs/noir-obsidian.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "sandstone-beige",
    name: "Sandstone Beige",
    sku: "FC-AL-303",
    category: "alabaster",
    description: "Soft beige with fine natural speckles.",
    longDescription:
      "Sandstone Beige offers a warm, neutral palette with fine natural speckles inspired by windswept desert stone.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"],
    hue: "Beige",
    region: "Middle East",
    isNew: true,
    thickness: "12mm",
    dimensions: "3000 x 760 mm",
    applications: ["Healthcare", "Hospitality", "Retail"],
    features: ["Warm tone", "Hygienic", "Thermoformable"],
    industries: ["healthcare", "hospitality", "residential"],
    specSheetUrl: "/specs/sandstone-beige.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "arctic-vein",
    name: "Arctic Vein",
    sku: "FC-MB-104",
    category: "marble",
    description: "Crisp white with dramatic grey veins.",
    longDescription:
      "Arctic Vein captures the pristine beauty of high-altitude glaciers with crisp white base and dramatic, sweeping grey veins.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80"],
    hue: "White",
    region: "Global",
    thickness: "12mm / 20mm",
    dimensions: "3200 x 1600 mm",
    applications: ["Kitchen", "Bathroom", "Lobby"],
    features: ["Book-matched slabs", "Seamless", "Non-porous"],
    industries: ["residential", "hospitality", "corporate"],
    specSheetUrl: "/specs/arctic-vein.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "ivory-linen",
    name: "Ivory Linen",
    sku: "FC-PL-105",
    category: "plain",
    description: "Clean ivory with a subtle linen texture.",
    longDescription:
      "Ivory Linen is a soft ivory solid surface with a gentle linen-inspired texture, ideal for calming, light-filled interiors.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80"],
    hue: "White",
    region: "Global",
    thickness: "12mm",
    dimensions: "3000 x 760 mm",
    applications: ["Hospitality", "Healthcare", "Residential"],
    features: ["Hygienic", "Low maintenance"],
    industries: ["healthcare", "hospitality", "residential"],
    specSheetUrl: "/specs/ivory-linen.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "galaxy-sparkle",
    name: "Galaxy Sparkle",
    sku: "FC-SP-106",
    category: "sparkle",
    description: "Deep charcoal with metallic flecks.",
    longDescription:
      "Galaxy Sparkle is a deep charcoal surface infused with metallic flecks that shimmer under changing light.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"],
    hue: "Black",
    region: "Global",
    isNew: true,
    thickness: "12mm",
    dimensions: "3000 x 760 mm",
    applications: ["Reception", "Bar", "Feature Wall"],
    features: ["Light-reactive", "Non-porous", "Thermoformable"],
    industries: ["commercial", "corporate", "hospitality"],
    specSheetUrl: "/specs/galaxy-sparkle.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "honey-onyx",
    name: "Honey Onyx",
    sku: "FC-TR-107",
    category: "translucent",
    description: "Amber translucent slab that glows from within.",
    longDescription:
      "Honey Onyx is a translucent solid surface with honey amber tones; backlit it transforms into a glowing feature surface.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"],
    hue: "Beige",
    region: "Middle East",
    thickness: "6mm / 12mm",
    dimensions: "2400 x 760 mm",
    applications: ["Backlit Wall", "Bar", "Reception Desk"],
    features: ["Translucent", "Backlit-ready", "Seamless"],
    industries: ["hospitality", "commercial", "corporate"],
    specSheetUrl: "/specs/honey-onyx.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "azure-mosaic",
    name: "Azure Mosaic",
    sku: "FC-MO-108",
    category: "mosaic",
    description: "Blue mosaic-inspired pattern.",
    longDescription:
      "Azure Mosaic is a contemporary interpretation of blue mosaic tiling rendered in a continuous non-porous solid surface.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"],
    hue: "Blue",
    region: "Global",
    thickness: "12mm",
    dimensions: "3000 x 760 mm",
    applications: ["Spa", "Pool", "Bathroom"],
    features: ["Waterproof", "Non-porous", "Seamless"],
    industries: ["hospitality", "residential", "healthcare"],
    specSheetUrl: "/specs/azure-mosaic.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "forest-green",
    name: "Forest Green",
    sku: "FC-PL-109",
    category: "plain",
    description: "Rich deep green inspired by ancient forests.",
    longDescription:
      "Forest Green brings deep, saturated green to modern interiors, ideal for statement furniture and feature walls.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"],
    hue: "Green",
    region: "Global",
    isEco: true,
    thickness: "12mm",
    dimensions: "3000 x 760 mm",
    applications: ["Furniture", "Feature Wall", "Reception"],
    features: ["Recycled content", "Hygienic"],
    industries: ["corporate", "hospitality", "commercial"],
    specSheetUrl: "/specs/forest-green.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "rose-alabaster",
    name: "Rose Alabaster",
    sku: "FC-AL-110",
    category: "alabaster",
    description: "Soft rose with warm veining.",
    longDescription:
      "Rose Alabaster glows with a soft rose tone and delicate warm veining, lending elegance to hospitality and retail interiors.",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1600&q=80"],
    hue: "Burgundy",
    region: "Europe",
    isNew: true,
    thickness: "12mm",
    dimensions: "3000 x 760 mm",
    applications: ["Retail", "Hospitality"],
    features: ["Thermoformable", "Seamless"],
    industries: ["hospitality", "commercial", "residential"],
    specSheetUrl: "/specs/rose-alabaster.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "cloud-white",
    name: "Cloud White",
    sku: "FC-PL-111",
    category: "plain",
    description: "Clean bright white with subtle cloud-like movement.",
    longDescription:
      "Cloud White is a versatile, bright white solid surface with subtle soft movement - a canvas for any interior palette.",
    image: "https://images.unsplash.com/photo-1513865126512-5ea172f24d7c?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1513865126512-5ea172f24d7c?auto=format&fit=crop&w=1600&q=80"],
    hue: "White",
    region: "Global",
    thickness: "12mm",
    dimensions: "3000 x 760 mm",
    applications: ["Kitchen", "Bath", "Commercial"],
    features: ["Hygienic", "Non-porous", "Repairable"],
    industries: ["residential", "healthcare", "commercial"],
    specSheetUrl: "/specs/cloud-white.pdf",
    faqs: defaultFaqs,
  },
  {
    slug: "copper-vein",
    name: "Copper Vein",
    sku: "FC-MO-112",
    category: "mosaic",
    description: "Copper-toned metallic mosaic pattern.",
    longDescription:
      "Copper Vein brings warm metallic copper tones through a mosaic-inspired pattern perfect for high-end commercial installations.",
    image: "https://images.unsplash.com/photo-1496395035753-7da72844d0b2?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1496395035753-7da72844d0b2?auto=format&fit=crop&w=1600&q=80"],
    hue: "Orange",
    region: "Global",
    thickness: "12mm",
    dimensions: "3000 x 760 mm",
    applications: ["Bar Top", "Reception", "Feature Wall"],
    features: ["Metallic finish", "Seamless"],
    industries: ["hospitality", "commercial", "corporate"],
    specSheetUrl: "/specs/copper-vein.pdf",
    faqs: defaultFaqs,
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug: string, category: ProductCategory, limit = 4) {
  return products.filter((p) => p.slug !== slug && p.category === category).slice(0, limit)
}
