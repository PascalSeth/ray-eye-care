import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Users, Building, Heart } from "lucide-react"

const tiers = [
  {
    amount: 50,
    title: "Vision Supporter",
    impact: "Provides 1 comprehensive eye screening",
    description: "Help us screen one person and potentially save their sight through early detection.",
    icon: Eye,
    color: "blue",
    popular: false,
  },
  {
    amount: 200,
    title: "Community Champion",
    impact: "Covers a full school visit with materials",
    description: "Support an entire school visit including screenings, education materials, and teacher training.",
    icon: Users,
    color: "green",
    popular: true,
  },
  {
    amount: 500,
    title: "Program Sponsor",
    impact: "Sponsors a complete community outreach program",
    description: "Fund a comprehensive community program reaching 100+ people with full follow-up support.",
    icon: Building,
    color: "purple",
    popular: false,
  },
  {
    amount: 1000,
    title: "Impact Partner",
    impact: "Supports multiple communities for a month",
    description: "Become a major partner supporting our work across multiple communities with sustained impact.",
    icon: Heart,
    color: "red",
    popular: false,
  },
]

export function DonationTiers() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Donation Impact Tiers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every donation makes a difference. Choose the level of impact you'd like to make in our communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${tier.popular ? "ring-2 ring-blue-600" : ""}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-${tier.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <tier.icon className={`w-8 h-8 text-${tier.color}-600`} />
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900 mb-2">GH₵{tier.amount}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.title}</h3>
                </div>

                <div className={`p-3 bg-${tier.color}-50 rounded-lg mb-4`}>
                  <div className="font-medium text-gray-900 text-sm">{tier.impact}</div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{tier.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom Donation</h3>
            <p className="text-gray-600 mb-6">
              Want to contribute a different amount? Every donation, no matter the size, helps us reach more people and
              save more sight.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">GH₵25</div>
                <div className="text-sm text-gray-600">Basic eye health education materials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">GH₵75</div>
                <div className="text-sm text-gray-600">Follow-up care for one patient</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">GH₵150</div>
                <div className="text-sm text-gray-600">Training materials for teachers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
