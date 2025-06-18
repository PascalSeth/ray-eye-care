import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Heart, Users, Star, Award } from "lucide-react"

const founder = {
  name: "Dr. Danso Yaw Poakwa",
  role: "Founder & Lead Optometrist",
  image: "/founder.jpeg",
  bio: "As a visionary student optometrist and emerging eye care leader at KNUST, I'm pioneering accessible eye care solutions across Ghana through strategic community impact initiatives. Having successfully orchestrated mass eye screenings for over 40,000 students and spearheaded multiple national and regional outreach programs, I established RAY Healthcare to systematically eliminate barriers to quality eye care nationwide. My expertise spans from conducting cutting-edge low vision research to delivering specialized care for children with special needs, while my leadership in Christian youth programs demonstrates my commitment to integrating faith-driven service with professional excellence. I don't just advocate for change—I architect it, transforming how Ghana approaches community eye health through innovative partnerships and scalable healthcare solutions.",
  specialties: ["Community Health Leadership", "Strategic Healthcare Development", "Pediatric Optometry", "Public Health Innovation", "Research & Development"],
  isFounder: true
}

const volunteerTeam = [
  {
    name: "Janet Adjei",
    image: "/girl.jpeg",
    role: "Community Outreach Coordinator",
    specialty: "Public Health"
  },
  {
    name: "Boateng Osei Tutu", 
    image: "/boy.jpeg",
    role: "Program Assistant",
    specialty: "Healthcare Management"
  },
  {
    name: "Adwoa Obenewaa",
    image: "/girl2.jpeg",
    role: "Health Educator",
    specialty: "Community Education"
  },
  {
    name: "Baffour Micheal Kyei", 
    image: "/boy2.jpeg",
    role: "Field Coordinator",
    specialty: "Operations"
  },
  {
    name: "Charlotte Agyei", 
    image: "/girl3.jpeg",
    role: "Research Assistant",
    specialty: "Data Analysis"
  },
  {
    name: "Andrey Prosper", 
    image: "/andrey.jpg",
    role: "Technology Specialist",
    specialty: "Digital Solutions"
  },
  {
    name: "Agnes Adjei", 
    image: "/girl4.jpeg",
    role: "Patient Care Coordinator",
    specialty: "Patient Relations"
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by our founder and powered by passionate volunteers, we're committed to bringing quality eye care to every corner of Ghana.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-20">
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

        {/* Enhanced Volunteer Team Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Heart className="w-4 h-4 animate-pulse" />
              Volunteer Heroes
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Dedicated Volunteers</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet the passionate individuals who generously donate their time, skills, and hearts to transform eye care across Ghana.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>7 Active Volunteers</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-green-500" />
                <span>1000+ Hours Contributed</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {volunteerTeam.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:-translate-y-2 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Floating volunteer badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <Heart className="w-3 h-3 animate-pulse" />
                      Volunteer
                    </div>
                  </div>

                  {/* Specialty badge */}
                  {/* <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                      {member.specialty}
                    </div>
                  </div> */}
                  
                  {/* Hover overlay with social icons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-center space-x-3">
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg">
                          <Linkedin className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {member.name}
                  </h4>
                  {/* <p className="text-sm text-gray-600 font-medium mb-3">
                    {member.role}
                  </p> */}
                  {/* <div className="flex justify-center">
                    <Badge className="bg-green-50 text-green-700 hover:bg-green-100 text-xs">
                      {member.specialty}
                    </Badge>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced statistics section */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Impact</h4>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our incredible volunteers make a real difference in communities across Ghana.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1,000+</div>
                <div className="text-gray-600">Hours Volunteered</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5,000+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                We're always looking for passionate volunteers to help us expand our reach and impact more communities across Ghana. Every skill matters, every hour counts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-lg">
                  Volunteer With Us
                </button>
                {/* <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-105">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}