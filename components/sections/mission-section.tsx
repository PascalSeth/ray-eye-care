import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Users, Heart } from "lucide-react"

export function MissionSection() {
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
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At R.A.Y. Healthcare, we believe that everyone deserves access to quality healthcare—no matter where they
            live or go to school.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
