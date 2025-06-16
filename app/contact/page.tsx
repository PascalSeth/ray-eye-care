import { PageHeader } from "@/components/ui/page-header"
import { ContactForm } from "@/components/forms/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"
import { LocationMap } from "@/components/sections/location-map"

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Contact Us"
        description="Ready to partner with us, schedule a screening, or learn more about our work? We'd love to hear from you."
        badge="Get in Touch"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <LocationMap />
    </div>
  )
}
