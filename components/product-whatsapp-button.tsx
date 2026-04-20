import { MessageCircle } from "lucide-react"

// Configure the Flexicore WhatsApp Business number here.
// Format: international number, no plus sign, no spaces. e.g. "919876543210"
const WHATSAPP_NUMBER = "919876543210"

type Props = {
  productName: string
  sku: string
  url: string
}

/**
 * Product-specific WhatsApp deep link. Pre-fills a message with the
 * product name, SKU, and URL so sales has full context instantly.
 */
export function ProductWhatsAppButton({ productName, sku, url }: Props) {
  const message = [
    `Hello Flexicore, I would like to enquire about the following product:`,
    ``,
    `Product: ${productName}`,
    `SKU: ${sku}`,
    `Page: ${url}`,
    ``,
    `Please share pricing, availability, and the nearest distributor.`,
  ].join("\n")

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 border border-accent bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-250"
    >
      <MessageCircle className="h-4 w-4 transition-transform duration-250 group-hover:-rotate-12" />
      WhatsApp Enquire
    </a>
  )
}
