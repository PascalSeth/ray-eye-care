import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const upcomingEvents = [
  {
    title: "Community Health Fair - Volta Region",
    date: "April 15, 2024",
    time: "8:00 AM - 4:00 PM",
    location: "Ho, Volta Region",
    expectedParticipants: 200,
    type: "Community Outreach",
    description: "Comprehensive health fair with eye screenings, health education, and referral services.",
    status: "Registration Open",
  },
  {
    title: "School Vision Week - Ashanti Schools",
    date: "April 22-26, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Multiple Schools, Kumasi",
    expectedParticipants: 500,
    type: "School Program",
    description: "Week-long program visiting 10 schools for student screenings and teacher training.",
    status: "Confirmed",
  },
  {
    title: "Corporate Wellness - Tech Companies",
    date: "May 8, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Accra Digital Centre",
    expectedParticipants: 150,
    type: "Workplace Wellness",
    description: "Employee eye health screenings focusing on digital eye strain and workplace ergonomics.",
    status: "Planning",
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at our upcoming programs and help us bring quality eye care to more communities across Ghana.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    variant={event.status === "Registration Open" ? "default" : "secondary"}
                    className={event.status === "Registration Open" ? "bg-green-600" : ""}
                  >
                    {event.status}
                  </Badge>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.expectedParticipants} expected participants</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Button className="w-full" variant={event.status === "Registration Open" ? "default" : "outline"}>
                      {event.status === "Registration Open" ? "Register Now" : "Learn More"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Host an Event?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Interested in bringing R.A.Y. Healthcare to your community, school, or workplace? We'd love to partner with
            you to organize a health screening event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
              Request a Visit
            </Button>
            <Button size="lg" variant="outline">
              View Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
