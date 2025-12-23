import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { WhySection } from "@/components/why-section"
import { VideoSection } from "@/components/video-section"
import { EmailCaptureSection } from "@/components/email-capture-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { FallingParticles } from "@/components/falling-particles"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a1628]">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628]" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Particle effects */}
      <FallingParticles />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <WhySection />
        <VideoSection />
        <EmailCaptureSection />
        <FinalCTASection />
        <Footer />
      </div>
    </div>
  )
}
