import { PageHeader } from "@/components/ui/page-header"
import { ServicesGrid } from "@/components/sections/services-grid"
import { ServiceProcess } from "@/components/sections/service-process"
import { BookingSection } from "@/components/sections/booking-section"

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Services"
        description="Comprehensive eye care services delivered directly to communities and schools across Ghana."
        badge="What We Do"
      />
      <ServicesGrid />
      <ServiceProcess />
      <BookingSection />
    </div>
  )
}
