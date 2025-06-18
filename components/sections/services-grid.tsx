import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stethoscope, BookOpen, Globe, Users, Heart, Award } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Community Eye Screenings",
    description: "Free comprehensive eye examinations in local communities",
    details:
      "We conduct thorough eye screenings for early detection of conditions such as glaucoma, cataract, refractive errors etc",
    color: "blue",
  },
  {
    icon: BookOpen,
    title: "School Outreach Programs",
    description: "Vision screenings and education in schools",
    details:
      "We visit schools to screen students and teach them about eye health, helping them to see clearly,comfortably and confidently, so they can focus better and learn without strain.",
    color: "green",
  },
  {
    icon: Globe,
    title: "Awareness Campaigns",
    description: "Public education about eye health and prevention",
    details: "We combat misinformation and educate communities about preventable causes of vision loss.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Vision Education",
    description: "Training and workshops on eye health",
    details: "We provide educational workshops for teachers, parents, and community leaders about eye health.",
    color: "orange",
  },
  {
    icon: Heart,
    title: "Treatment Access",
    description: "Connecting patients to affordable treatment",
    details: "We help patients access affordable treatment options and provide referrals to specialized care.",
    color: "red",
  },
  {
    icon: Award,
    title: "Follow-up Care",
    description: "Ongoing support and monitoring",
    details: "We provide continued support and follow-up care to ensure the best outcomes for our patients.",
    color: "teal",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.details}</p>
                {/* <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
