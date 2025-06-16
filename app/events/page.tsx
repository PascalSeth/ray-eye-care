import { PageHeader } from "@/components/ui/page-header"
import { EventsGallery } from "@/components/sections/events-gallery"
import { UpcomingEvents } from "@/components/sections/upcoming-events"

export default function EventsPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Events & Gallery"
        description="See highlights from our recent outreach programs and community events."
        badge="Our Work in Action"
      />
      <EventsGallery />
      {/* <UpcomingEvents /> */}
    </div>
  )
}
