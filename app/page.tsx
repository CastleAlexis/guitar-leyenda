import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
