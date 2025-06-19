import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, CheckCircle, Star, Users, Heart, Eye } from "lucide-react"
import Link from "next/link"

const stories = [
  {
    title: "SHS Super Zonal Screening Success",
    location: "Koforidua, Eastern Region",
    participants: 500,
    impact: "30 students identified for immediate vision correction",
    image: "/zonals.jpeg",
    category: "School Program",
    icon: Users,
    testimonials: [
      {
        text: "This initiative is a blessing, many of our students struggle in class simply because they can't see well. Now they have a chance to thrive.",
        author: "Teacher, Eastern Region School",
        role: "Educator"
      },
      {
        text: "I never knew I had an eye problem until today. I'm happy someone checked my eyes and explained what to do.",
        author: "Girls Prefect, SDA Senior High School",
        role: "Student"
      },
      {
        text: "Now I understand why I was always squinting in class. Thank you, R.A.Y.!",
        author: "Meredith Acquah",
        role: "Student"
      }
    ]
  },
  {
    title: "Rural Community Outreach",
    location: "Koforidua, Eastern Region", 
    participants: 200,
    impact: "45 individuals connected to affordable treatment",
    image: "/community.jpeg",
    category: "Community Outreach",
    icon: Heart,
    testimonials: [
      {
        text: "Preventive healthcare like this is what our community needs. R.A.Y. Healthcare is filling a major gap.",
        author: "Pastor Danny Praise",
        role: "Community Leader"
      },
      {
        text: "This screening has educated many of us about common eye diseases we previously misunderstood.",
        author: "Community Member",
        role: "Participant"
      },
      {
        text: "We welcome partnerships like this where health meets education and awareness. R.A.Y. is truly doing impactful work.",
        author: "Joel Olateru",
        role: "SAIH Liaison to SHS Sports Directors"
      }
    ]
  }
]

const additionalTestimonials = [
  {
    text: "R.A.Y. Healthcare has brought eye care to our doorstep. It's something our school has needed for a long time.",
    author: "School Administrator",
    role: "Education Sector",
    category: "Access to Care"
  },
  {
    text: "We are grateful for this screening. Several students have been referred for further care, and that could be life-changing.",
    author: "Teacher",
    role: "Educator", 
    category: "Impact"
  },
  {
    text: "I've never had an eye test before. It was quick, easy, and now I feel better knowing my eyes are okay.",
    author: "Kwaku Owusu",
    role: "Student",
    category: "First-time Experience"
  }
]

export function SuccessStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real voices from the communities we serve, showcasing the transformative impact of accessible eye care.
          </p>
        </div>

        {/* Main Story Cards */}
        <div className="space-y-16 mb-20">
          {stories.map((story, index) => {
            const IconComponent = story.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative lg:col-span-2 ${index % 2 === 1 ? "lg:col-start-4" : ""}`}>
                    <div className="relative h-80 lg:h-full">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white shadow-lg">
                          <IconComponent className="w-4 h-4 mr-1" />
                          {story.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <CardContent className={`lg:col-span-3 p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{story.title}</h3>
                        <p className="text-blue-600 font-semibold mb-6 flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          {story.location}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="text-3xl font-bold text-blue-600">{story.participants}+</div>
                            <div className="text-sm text-gray-600 font-medium">Participants</div>
                          </div>
                          <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="text-sm text-gray-600 font-medium">Successful Screening</div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl border-l-4 border-blue-500">
                          <p className="text-gray-800 font-semibold">{story.impact}</p>
                        </div>
                      </div>

                      {/* Testimonials Grid */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">What People Are Saying</h4>
                        {story.testimonials.map((testimonial, tIndex) => (
                          <div key={tIndex} className="relative bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                            <Quote className="w-6 h-6 text-blue-200 absolute top-2 left-2" />
                            <blockquote className="text-gray-700 pl-8 mb-3 leading-relaxed">
                              "{testimonial.text}"
                            </blockquote>
                            <div className="flex items-center justify-between pl-8">
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-gray-900">{testimonial.author}</div>
                                <div className="text-xs text-blue-600">{testimonial.role}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Additional Testimonials Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Voices from Our Community</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.category}
                      </Badge>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <Quote className="w-6 h-6 text-blue-200" />
                    <blockquote className="text-gray-700 text-sm leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <div className="text-sm font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-xs text-blue-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join R.A.Y. Healthcare in bringing accessible eye care to more communities across Ghana.
            </p>
            <Link href='get-involved' className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}