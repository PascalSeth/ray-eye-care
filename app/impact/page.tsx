import { PageHeader } from "@/components/ui/page-header"
import { ImpactStats } from "@/components/sections/impact-stats"
import { SuccessStories } from "@/components/sections/success-stories"
import { PartnershipsSection } from "@/components/sections/partnerships-section"

export default function ImpactPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Our Impact"
        description="See how R.A.Y. Healthcare is transforming lives and communities through accessible eye care."
        badge="Making a Difference"
      />
      
      <SuccessStories />
      <ImpactStats /><PartnershipsSection />
    </div>
  )
}
