import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Users, Heart, Globe, Shield, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Eye,
    title: "Accessibility",
    description:
      "We bring healthcare directly to communities, ensuring everyone has access regardless of location or income.",
    gradient: "from-blue-600 to-green-600",
  },
  {
    icon: Users,
    title: "Equity",
    description:
      "We prioritize underserved populations and work to eliminate healthcare disparities in our communities.",
    gradient: "from-green-600 to-purple-600",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "We educate and empower individuals with knowledge and resources to maintain their eye health.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Globe,
    title: "Community Partnership",
    description:
      "We collaborate with local organizations, schools, and leaders to create sustainable health solutions.",
    gradient: "from-pink-600 to-red-600",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We maintain the highest standards of care while ensuring services remain affordable and accessible.",
    gradient: "from-red-600 to-orange-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously seek new ways to improve healthcare delivery and reach more communities effectively.",
    gradient: "from-orange-600 to-yellow-600",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape how we serve our communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
