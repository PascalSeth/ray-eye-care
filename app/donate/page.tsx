import { PageHeader } from "@/components/ui/page-header"
import { DonationForm } from "@/components/forms/donation-form"
import { DonationImpact } from "@/components/sections/donation-impact"
import { DonationTiers } from "@/components/sections/donation-tiers"

export default function DonatePage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Support Our Mission"
        description="Your donation helps us provide free eye care to those who need it most. Every contribution makes a difference."
        badge="Donate"
      />
      <DonationTiers />
      <DonationForm />
      <DonationImpact />
    </div>
  )
}
