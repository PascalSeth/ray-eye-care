import { PageHeader } from "@/components/ui/page-header"
import { VolunteerSection } from "@/components/sections/volunteer-section"
import { PartnershipSection } from "@/components/sections/partnership-section"
import { RequestVisitSection } from "@/components/sections/request-visit-section"

export default function GetInvolvedPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Get Involved"
        description="Join our mission to bring quality eye care to communities that need it most."
        badge="Join Us"
      />
      <VolunteerSection />
      <PartnershipSection />
      <RequestVisitSection />
    </div>
  )
}
