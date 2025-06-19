"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Clock, Award, CheckCircle } from "lucide-react"
import { Toaster, toast } from "sonner"

const volunteerRoles = [
  {
    title: "Healthcare Assistant",
    description: "Support our medical team during screenings and help with patient care.",
    requirements: ["Basic healthcare knowledge", "Good communication skills", "Compassionate nature"],
    commitment: "4-8 hours per month",
    icon: Heart,
  },
  {
    title: "Community Educator",
    description: "Help educate communities about eye health and prevention strategies.",
    requirements: ["Public speaking skills", "Local language fluency", "Teaching experience preferred"],
    commitment: "6-10 hours per month",
    icon: Users,
  },
  {
    title: "Administrative Support",
    description: "Assist with scheduling, data entry, and program coordination.",
    requirements: ["Computer literacy", "Organizational skills", "Attention to detail"],
    commitment: "3-5 hours per week",
    icon: Clock,
  },
  {
    title: "Program Coordinator",
    description: "Lead outreach programs and coordinate with local communities.",
    requirements: ["Leadership experience", "Project management skills", "Community connections"],
    commitment: "10-15 hours per month",
    icon: Award,
  },
]

export function VolunteerSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Handle checkbox data
    const interests: string[] = []
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked') as NodeListOf<HTMLInputElement>
    checkboxes.forEach(checkbox => {
      interests.push(checkbox.value)
    })
    formData.set('interests', interests.join(', '))

    try {
      const response = await fetch('https://formspree.io/f/xldnlqlg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        toast.success("Thank you for your interest! We'll contact you within 48 hours with next steps.")
        form.reset()
      } else {
        toast.error("There was an error submitting your application. Please try again.")
      }
    } catch (error) {
      toast.error("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Volunteer with Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of dedicated volunteers and help us bring quality eye care to communities across Ghana.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Why Volunteer with R.A.Y.?</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Make a Real Difference</h4>
                      <p className="text-gray-600">
                        Directly impact lives by helping provide essential healthcare services to underserved communities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Gain Valuable Experience</h4>
                      <p className="text-gray-600">
                        Develop skills in healthcare, community outreach, and program management while serving others.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Join a Supportive Community</h4>
                      <p className="text-gray-600">
                        Work alongside passionate individuals who share your commitment to improving community health.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Flexible Commitment</h4>
                      <p className="text-gray-600">
                        Choose volunteer opportunities that fit your schedule and availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-gray-900 mb-3">Volunteer Benefits</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Active Volunteers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Join Our Volunteer Team</CardTitle>
                <CardDescription>
                  Fill out this form to express your interest in volunteering with R.A.Y. Healthcare.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input name="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input name="lastName" placeholder="Your last name" required />
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
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <Input name="location" placeholder="City, Region" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Areas of Interest</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Healthcare Support", "Community Education", "Administrative", "Program Coordination"].map(
                        (area) => (
                          <label key={area} className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              value={area}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                            />
                            <span className="text-sm text-gray-700">{area}</span>
                          </label>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Experience & Skills</label>
                    <textarea
                      name="experience"
                      className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your relevant experience, skills, and why you want to volunteer with us..."
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting Application..." : "Apply to Volunteer"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <role.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {role.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Badge variant="secondary">{role.commitment}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Toaster richColors />
    </>
  )
}