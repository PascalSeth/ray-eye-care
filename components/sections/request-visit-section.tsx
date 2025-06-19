"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Clock, CheckCircle } from "lucide-react"
import { Toaster, toast } from "sonner"

const visitTypes = [
  {
    title: "School Screening Program",
    description: "Comprehensive eye screenings for students with educational materials for teachers.",
    duration: "Half day (4 hours)",
    capacity: "50-200 students",
    includes: ["Vision screening", "Educational materials", "Teacher training", "Follow-up reports"],
  },
  {
    title: "Community Health Fair",
    description: "Eye care services as part of a larger community health initiative.",
    duration: "Full day (8 hours)",
    capacity: "100-300 people",
    includes: ["Eye screenings", "Health education", "Referral services", "Community resources"],
  },
  {
    title: "Workplace Wellness",
    description: "Employee eye health screenings and workplace vision safety education.",
    duration: "Half day (4 hours)",
    capacity: "30-100 employees",
    includes: ["Employee screenings", "Workplace safety tips", "Vision care resources", "Health reports"],
  },
]

export function RequestVisitSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/movwlgll', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
        toast.success("Thank you for your request! We'll contact you within 24 hours to discuss scheduling.")
      } else {
        setSubmitStatus('error')
        toast.error("There was an error submitting your request. Please try again or contact us directly.")
      }
    } catch (error) {
      setSubmitStatus('error')
      toast.error("There was an error submitting your request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Request a Visit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invite R.A.Y. Healthcare to your school, community, or workplace for professional eye care services and
            health education.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {visitTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{type.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{type.capacity}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {type.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pre-Visit Planning</h4>
                    <p className="text-gray-600">
                      We'll work with you to plan the visit, coordinate logistics, and prepare materials tailored to
                      your community's needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Team</h4>
                    <p className="text-gray-600">
                      Our qualified healthcare professionals bring all necessary equipment and provide high-quality
                      screening services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Follow-up Support</h4>
                    <p className="text-gray-600">
                      We provide detailed reports, referral information, and ongoing support to ensure continuity of
                      care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50">
              <CardContent className="p-0">
                <h4 className="font-semibold text-gray-900 mb-4">Visit Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Minimum 2 weeks advance notice</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Suitable venue with adequate space</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Local coordinator for logistics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Participant registration assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Request a Visit</CardTitle>
              <CardDescription>Fill out this form to request a visit from our mobile healthcare team.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Contact Name</label>
                    <Input name="contactName" placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Organization</label>
                    <Input name="organization" placeholder="School/Organization name" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <Input name="phone" placeholder="+233 XX XXX XXXX" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Visit Type</label>
                  <select
                    name="visitType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select visit type</option>
                    <option value="school">School Screening Program</option>
                    <option value="community">Community Health Fair</option>
                    <option value="workplace">Workplace Wellness</option>
                    <option value="custom">Custom Program</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <Input name="location" placeholder="City, Region" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Expected Participants</label>
                    <Input name="expectedParticipants" placeholder="Approximate number" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                    <Input name="preferredDate" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Alternative Date</label>
                    <Input name="alternativeDate" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Any special requirements, venue details, or additional information..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Request..." : "Request Visit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster richColors />
    </section>
  )
}