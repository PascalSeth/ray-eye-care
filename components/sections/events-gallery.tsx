"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Eye } from "lucide-react"

const events = [
  {
    id: 1,
    title: "SHS Super Zonal Screening",
    date: "March 15, 2024",
    location: "Kumasi, Ashanti Region",
    participants: 150,
    category: "School Program",
    image: "/placeholder.svg?height=300&width=400",
    description: "Comprehensive eye screenings for senior high school students during the super zonal competition.",
    results: "30 students identified for immediate vision correction",
  },
  {
    id: 2,
    title: "Rural Community Outreach",
    date: "February 28, 2024",
    location: "Northern Region Villages",
    participants: 200,
    category: "Community Health",
    image: "/placeholder.svg?height=300&width=400",
    description: "Mobile clinic services brought to remote villages with limited healthcare access.",
    results: "45 individuals connected to affordable treatment",
  },
  {
    id: 3,
    title: "Teacher Training Workshop",
    date: "January 20, 2024",
    location: "Accra, Greater Accra",
    participants: 75,
    category: "Education",
    image: "/placeholder.svg?height=300&width=400",
    description: "Training educators to identify vision problems in students and promote eye health.",
    results: "75 teachers trained across 25 schools",
  },
  {
    id: 4,
    title: "World Sight Day Celebration",
    date: "October 12, 2023",
    location: "Cape Coast, Central Region",
    participants: 300,
    category: "Awareness",
    image: "/placeholder.svg?height=300&width=400",
    description: "Community celebration with free screenings and eye health education.",
    results: "12 cases of early-stage glaucoma detected",
  },
  {
    id: 5,
    title: "Corporate Wellness Program",
    date: "September 5, 2023",
    location: "Tema, Greater Accra",
    participants: 120,
    category: "Workplace",
    image: "/placeholder.svg?height=300&width=400",
    description: "Employee eye health screenings and workplace vision safety education.",
    results: "100% employee participation achieved",
  },
  {
    id: 6,
    title: "Community Health Fair",
    date: "August 18, 2023",
    location: "Tamale, Northern Region",
    participants: 250,
    category: "Community Health",
    image: "/placeholder.svg?height=300&width=400",
    description: "Comprehensive health fair with eye care as a key component.",
    results: "60 referrals made for specialized care",
  },
]

const categories = ["All", "School Program", "Community Health", "Education", "Awareness", "Workplace"]

export function EventsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filteredEvents = events.filter((event) => selectedCategory === "All" || event.category === selectedCategory)

  const displayedEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">{event.category}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm opacity-90">{event.results}</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">{event.results}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length > 6 && (
          <div className="text-center mt-12">
            <Button onClick={() => setShowAll(!showAll)} variant="outline" size="lg">
              {showAll ? "Show Less" : `View All ${filteredEvents.length} Events`}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
