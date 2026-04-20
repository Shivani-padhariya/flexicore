import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  products: [
    { name: "Alabaster", href: "/products?category=alabaster" },
    { name: "Marble", href: "/products?category=marble" },
    { name: "Mosaic", href: "/products?category=mosaic" },
    { name: "Sparkle", href: "/products?category=sparkle" },
    { name: "Translucent", href: "/products?category=translucent" },
    { name: "Plain Surface", href: "/products?category=plain-surface" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Our Founder", href: "/founder" },
    { name: "Careers", href: "/careers" },
    { name: "Press & News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Gallery", href: "/gallery" },
    { name: "Certificates", href: "/certificates" },
    { name: "Expo Events", href: "/expo" },
    { name: "Blog", href: "/blog" },
    { name: "Delivery Info", href: "/delivery" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  distributors: [
    { name: "Become a Distributor", href: "/become-distributor" },
    { name: "Find a Distributor", href: "/distributor-finder" },
    { name: "Distributor Portal", href: "/distributor-login" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/flexicoresolidsurface/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/flexicore_/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/flexicore", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/flexicore", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/flexicore", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="border-2 border-background px-4 py-2 inline-block">
                <span className="text-xl font-bold tracking-widest text-background">
                  FLEXICORE
                </span>
              </div>
              <span className="block mt-1 text-[10px] tracking-[0.3em] text-primary font-medium">
                SOLID SURFACE
              </span>
            </div>
            <p className="text-background/70 text-sm mb-6 max-w-xs">
              Premium solid surface manufacturer based in Rajkot, Gujarat. 
              Crafting beautiful surfaces for homes and businesses since 1999.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Survey No. 123, Industrial Area,<br />
                  Rajkot, Gujarat 360002, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919662496622" className="text-background/70 hover:text-primary transition-colors">
                  +91 96624 96622
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:flexicore@yahoo.com" className="text-background/70 hover:text-primary transition-colors">
                  flexicore@yahoo.com
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-background mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Distributors */}
          <div>
            <h4 className="font-semibold text-background mb-4">Distributors</h4>
            <ul className="space-y-3">
              {footerLinks.distributors.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-background mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Flexicore. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-background/50 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-background/50 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-background/50 hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
