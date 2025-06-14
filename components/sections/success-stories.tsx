import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, CheckCircle, Star } from "lucide-react"

const stories = [
  {
    title: "SHS Super Zonal Screening Success",
    location: "Kumasi, Ashanti Region",
    participants: 150,
    impact: "30 students identified for immediate vision correction",
    image: "/zonals.jpeg",
    testimonial:
      "The screening helped us identify students who were struggling academically due to vision problems. Now they can see the board clearly and their grades have improved significantly.",
    author: "Mrs. Akosua Mensah, Headteacher",
    category: "School Program",
  },
  {
    title: "Rural Community Outreach",
    location: "Koforidua, Eastern Region",
    participants: 200,
    impact: "45 individuals connected to affordable treatment",
    image: "/community.jpeg",
    testimonial:
      "For the first time in years, I can see my grandchildren's faces clearly. The team not only tested my eyes but helped me get the glasses I needed at a price I could afford.",
    author: "Alhaji Mohammed, Community Elder",
    category: "Community Outreach",
  },
  {
    title: "Early Detection Program",
    location: "Accra Metropolitan Area",
    participants: 100,
    impact: "12 cases of early-stage glaucoma detected",
    image: "/detection.jpeg",
    testimonial:
      "The early detection saved my sight. I had no symptoms, but the screening caught the glaucoma before it progressed. I'm grateful for this life-changing service.",
    author: "Grace Osei, Teacher",
    category: "Prevention",
  },
]

export function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from the communities we serve, showcasing the transformative power of accessible eye care.
          </p>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{story.category}</Badge>
                  </div>
                </div>

                <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h3>
                      <p className="text-blue-600 font-medium mb-4">{story.location}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{story.participants}</div>
                          <div className="text-sm text-gray-600">Participants</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
                          <div className="text-sm text-gray-600">Success</div>
                        </div>
                      </div>

                      <p className="text-gray-700 font-medium mb-4">{story.impact}</p>
                    </div>

                    <div className="relative">
                      <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                      <blockquote className="text-gray-600 italic pl-6 mb-4">"{story.testimonial}"</blockquote>
                      <div className="flex items-center space-x-2 pl-6">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-gray-900">— {story.author}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
