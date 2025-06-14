import { PageHeader } from "@/components/ui/page-header"
import { SDGGrid } from "@/components/sections/sdg-grid"
import { SDGImpact } from "@/components/sections/sdg-impact"

export default function SDGPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="UN SDG Alignment"
        description="Discover how R.A.Y. Healthcare's work contributes to achieving the United Nations Sustainable Development Goals."
        badge="Global Impact"
      />
      <SDGGrid />
      <SDGImpact />
    </div>
  )
}
