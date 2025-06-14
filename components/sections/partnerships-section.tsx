import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Handshake, Building, GraduationCap, Heart } from "lucide-react"

const partners = [
  {
    name: "Ghana Health Service",
    type: "Government Partner",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Collaborating on national eye health initiatives and policy development.",
    icon: Building,
  },
  {
    name: "Local Schools Network",
    type: "Educational Partner",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Partnership with 50+ schools across Ghana for regular vision screenings.",
    icon: GraduationCap,
  },
  {
    name: "Community Health Organizations",
    type: "Healthcare Partner",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Working with local health centers to provide comprehensive care.",
    icon: Heart,
  },
  {
    name: "International NGOs",
    type: "Development Partner",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Collaborating on sustainable development and capacity building.",
    icon: Handshake,
  },
]

export function PartnershipsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with trusted organizations to expand our reach and maximize our impact across Ghana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <partner.icon className="w-8 h-8 text-blue-600" />
                </div>
                <Badge variant="secondary" className="mb-3">
                  {partner.type}
                </Badge>
                <h3 className="font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Impact</h3>
            <p className="text-gray-600">Together, we've achieved remarkable results across Ghana</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Regions Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Partnership Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
