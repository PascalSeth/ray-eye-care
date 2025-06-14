"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Handshake, TrendingUp, Globe, CheckCircle } from "lucide-react"

const partnershipTypes = [
  {
    title: "Corporate Sponsorship",
    description: "Partner with us to sponsor community programs and gain visibility while making a social impact.",
    benefits: ["Brand visibility", "CSR impact", "Employee engagement", "Tax benefits"],
    icon: Building,
    color: "blue",
  },
  {
    title: "Healthcare Collaboration",
    description: "Join our network of healthcare providers to expand access to eye care services.",
    benefits: ["Referral network", "Shared resources", "Professional development", "Community impact"],
    icon: Handshake,
    color: "green",
  },
  {
    title: "Educational Partnership",
    description: "Collaborate with schools and educational institutions to promote student eye health.",
    benefits: ["Student health programs", "Teacher training", "Health curriculum", "Research opportunities"],
    icon: TrendingUp,
    color: "purple",
  },
  {
    title: "International Cooperation",
    description: "Work with international organizations to scale our impact and share best practices.",
    benefits: ["Global network", "Knowledge exchange", "Funding opportunities", "Capacity building"],
    icon: Globe,
    color: "orange",
  },
]

export function PartnershipSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert("Thank you for your interest in partnering with us! We'll be in touch within 48 hours.")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner with Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in creating sustainable change by partnering with R.A.Y. Healthcare to expand access to quality eye
            care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 bg-${type.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <type.icon className={`w-8 h-8 text-${type.color}-600`} />
                </div>
                <CardTitle className="text-lg">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Partner with R.A.Y. Healthcare?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Proven Impact</h4>
                    <p className="text-gray-600">
                      Our track record shows measurable results in improving community health outcomes and reaching
                      underserved populations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sustainable Approach</h4>
                    <p className="text-gray-600">
                      We focus on building long-term solutions that create lasting change in communities across Ghana.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Collaborative Partnership</h4>
                    <p className="text-gray-600">
                      We work closely with partners to ensure mutual benefit and shared success in achieving our goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-white">
              <CardContent className="p-0">
                <h4 className="font-semibold text-gray-900 mb-4">Partnership Success</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Active Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Partner Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Partnership Inquiry</CardTitle>
              <CardDescription>
                Interested in partnering with us? Fill out this form and we'll discuss how we can work together.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Contact Name</label>
                    <Input placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Organization</label>
                    <Input placeholder="Organization name" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <Input placeholder="+233 XX XXX XXXX" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Partnership Type</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select partnership type</option>
                    <option value="corporate">Corporate Sponsorship</option>
                    <option value="healthcare">Healthcare Collaboration</option>
                    <option value="educational">Educational Partnership</option>
                    <option value="international">International Cooperation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Partnership Goals</label>
                  <textarea
                    className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your organization and what you hope to achieve through this partnership..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Partnership Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
