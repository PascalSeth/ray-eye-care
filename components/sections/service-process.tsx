import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Stethoscope, FileText, Heart } from "lucide-react"

const processSteps = [
  {
    icon: Users,
    title: "Community Engagement",
    description: "We work with local leaders to identify communities in need and schedule visits.",
    step: "01",
  },
  {
    icon: Stethoscope,
    title: "Mobile Screening",
    description: "Our trained team conducts comprehensive eye examination at your doorstep. We bring vision to your doorsteps",
    step: "02",
  },
  {
    icon: FileText,
    title: "Assessment & Documentation",
    description: "We document findings and provide detailed reports for each individual screened.",
    step: "03",
  },
  {
    icon: Heart,
    title: "Treatment & Follow-up",
    description: "We connect patients to appropriate treatment and provide ongoing support.",
    step: "04",
  },
]

export function ServiceProcess() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures quality care delivery and maximum impact in every community we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-gray-700 font-medium">Quality assured at every step</span>
          </div>
        </div>
      </div>
    </section>
  )
}
