import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. R.A.Y. Founder",
    role: "Founder & Lead Optometrist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 10 years of experience in community healthcare, Dr. R.A.Y. founded the organization to address the critical gap in accessible eye care services.",
    specialties: ["Community Health", "Pediatric Optometry", "Public Health"],
  },
  {
    name: "Sarah Mensah",
    role: "Program Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah leads our outreach programs and coordinates with schools and communities to ensure effective service delivery.",
    specialties: ["Program Management", "Community Outreach", "Health Education"],
  },
  {
    name: "Dr. Kwame Asante",
    role: "Senior Optometrist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Asante brings expertise in advanced eye care and helps train our volunteer teams in screening techniques.",
    specialties: ["Clinical Optometry", "Training", "Quality Assurance"],
  },
  {
    name: "Grace Osei",
    role: "Community Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Grace builds relationships with local communities and ensures our programs meet the specific needs of each area we serve.",
    specialties: ["Community Relations", "Cultural Competency", "Local Partnerships"],
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of healthcare professionals and community advocates work tirelessly to bring quality eye
            care to every corner of Ghana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
