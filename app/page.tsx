import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { SmartGallery } from "@/components/smart-gallery"


import { AcademySection } from "@/components/academy-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingNav } from "@/components/floating-nav"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { AuraBackground } from "@/components/aura-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FDFBF7]">
      {/* Floating Aura Orbs */}
      <AuraBackground />

      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <FloatingNav />
      <HeroSection />
      <ServicesSection />
      <SmartGallery />
      <AcademySection />

      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
