import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ProjectShowcase } from "@/components/project-showcase"
import { RollingText } from "@/components/rolling-text"
import { ImageGrid } from "@/components/image-grid"

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <LogoMarquee />
      <ProjectShowcase />
      <RollingText text="Creative Studio" direction="left" />
      <ImageGrid />
      <RollingText text="Let's Create" direction="right" />
    </main>
  )
}
