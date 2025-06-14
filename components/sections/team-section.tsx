import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Heart, Users } from "lucide-react"

const founder = {
  name: "Dr. R.A.Y. Founder",
  role: "Founder & Lead Optometrist",
  image: "/founder.jpeg",
  bio: "As a visionary student optometrist and emerging eye care leader at KNUST, I'm pioneering accessible eye care solutions across Ghana through strategic community impact initiatives. Having successfully orchestrated mass eye screenings for over 40,000 students and spearheaded multiple national and regional outreach programs, I established RAY Healthcare to systematically eliminate barriers to quality eye care nationwide. My expertise spans from conducting cutting-edge low vision research to delivering specialized care for children with special needs, while my leadership in Christian youth programs demonstrates my commitment to integrating faith-driven service with professional excellence. I don't just advocate for change—I architect it, transforming how Ghana approaches community eye health through innovative partnerships and scalable healthcare solutions.",
  specialties: ["Community Health Leadership", "Strategic Healthcare Development", "Pediatric Optometry", "Public Health Innovation", "Research & Development"],
  isFounder: true
}

const volunteerTeam = [
  {
    name: "Sarah Mensah",
    image: "/girl.jpeg"
  },
  {
    name: "Dr. Kwame Asante", 
    image: "/boy.jpeg"
  },
  {
    name: "Grace Osei",
    image: "/girl2.jpeg"
  },
    {
    name: "Dr. Kwame Asante", 
    image: "/boy2.jpeg"
  },
    {
    name: "Dr. Kwame Asante", 
    image: "/girl3.jpeg"
  },
     {
    name: "Dr. Kwame Asante", 
    image: "/boy3.jpeg"
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by our founder and powered by passionate volunteers, we're committed to bringing quality eye care to every corner of Ghana.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Leadership
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Founder</h3>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-100">
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    width={400}
                    height={400}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2">
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Mail className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4 text-lg">{founder.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{founder.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((specialty, idx) => (
                      <Badge key={idx} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>

        {/* Volunteer Team Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Volunteer Team
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Dedicated Volunteers</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These passionate individuals generously donate their time and expertise to make our vision a reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerTeam.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      Volunteer
                    </div>
                  </div>
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
                  <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">{member.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate volunteers to help us expand our reach and impact more communities across Ghana.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Volunteer With Us
          </button>
        </div>
      </div>
    </section>
  )
}