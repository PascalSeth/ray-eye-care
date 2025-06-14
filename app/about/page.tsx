import { PageHeader } from "@/components/ui/page-header"
import { TeamSection } from "@/components/sections/team-section"
import { ValuesSection } from "@/components/sections/values-section"
import { StorySection } from "@/components/sections/story-section"

export default function AboutPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="About R.A.Y. Healthcare"
        description="Learn about our mission, vision, and the passionate team working to bring quality eye care to communities across Ghana."
        badge="About Us"
      />
      <StorySection />
      <ValuesSection />
      <TeamSection />
    </div>
  )
}
