"use client"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { MissionSection } from "@/components/sections/mission-section"
import { CallToActionSection } from "@/components/sections/call-to-action-section"

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50">
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <CallToActionSection />
    </div>
  )
}
