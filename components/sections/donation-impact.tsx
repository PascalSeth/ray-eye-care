import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Eye, Award } from "lucide-react"

const impactStats = [
  {
    icon: Eye,
    value: "500+",
    label: "People Screened",
    description: "Thanks to donor support in 2024",
    color: "blue",
  },
  {
    icon: Users,
    value: "50+",
    label: "Schools Reached",
    description: "Educational programs funded",
    color: "green",
  },
  {
    icon: TrendingUp,
    value: "200+",
    label: "Treatments Facilitated",
    description: "Patients connected to care",
    color: "purple",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    description: "Patient satisfaction with services",
    color: "orange",
  },
]

export function DonationImpact() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Donations at Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the real impact of your generosity and how donations are transforming lives across Ghana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Donations</h3>
            <p className="text-gray-600">
              Transparency is important to us. Here's how your contributions are allocated:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">70%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Direct Services</h4>
              <p className="text-sm text-gray-600">Mobile clinics, screenings, and patient care</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">15%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
              <p className="text-sm text-gray-600">Materials, training, and awareness programs</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">10%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Operations</h4>
              <p className="text-sm text-gray-600">Transportation, equipment, and logistics</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">5%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Administration</h4>
              <p className="text-sm text-gray-600">Minimal overhead and administrative costs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
