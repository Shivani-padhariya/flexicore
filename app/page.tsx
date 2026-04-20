import { SiteNav } from "@/components/site-nav"
import { HeroSlider } from "@/components/hero-slider"
import { DailyUpdates } from "@/components/daily-updates"
import { ProductSection } from "@/components/product-section"
import { Home3DShowcase } from "@/components/home-3d-showcase"
import { AboutSection } from "@/components/about-section"
import { CategorySection } from "@/components/category-section"
import { HomeTeamFounder } from "@/components/home-team-founder"
import { HomeFactoryJourney } from "@/components/home-factory-journey"
import { ExportSection } from "@/components/export-section"
import { TrustedBy } from "@/components/trusted-by"
import { HomeInstagramGrid } from "@/components/home-instagram-grid"
import { SocialFeeds } from "@/components/social-feeds"
import { BlogPreview } from "@/components/blog-preview"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNav />

      <main className="flex-1">
        <HeroSlider />
        <DailyUpdates />
        <ProductSection />
        <AboutSection />
        <Home3DShowcase />
        <HomeTeamFounder />
        <CategorySection />
        <HomeFactoryJourney />
        <HomeInstagramGrid />
        <ExportSection />
        <SocialFeeds />
        <TrustedBy />
        <BlogPreview />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
