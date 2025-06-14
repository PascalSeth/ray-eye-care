"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, CreditCard, Smartphone, Building } from "lucide-react"

const donationTiers = [
  { amount: 50, impact: "1 comprehensive eye screening" },
  { amount: 100, impact: "2 students receive vision correction" },
  { amount: 200, impact: "Full school visit with materials" },
  { amount: 500, impact: "Community outreach program" },
]

const paymentMethods = [
  { id: "mobile", name: "Mobile Money", icon: Smartphone, description: "MTN, Vodafone, AirtelTigo" },
  { id: "card", name: "Credit/Debit Card", icon: CreditCard, description: "Visa, Mastercard" },
  { id: "bank", name: "Bank Transfer", icon: Building, description: "Direct bank transfer" },
]

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert("Thank you for your generous donation! You will receive a confirmation email shortly.")
  }

  const finalAmount = selectedAmount || Number.parseInt(customAmount) || 0

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Make a Donation</h2>
                <p className="text-gray-600 mb-8">
                  Your donation directly funds our mobile healthcare services, educational materials, and follow-up
                  care. Together, we can prevent unnecessary vision loss and transform lives.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Your Impact</h3>
                {donationTiers.map((tier, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      ₵{tier.amount}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">GH₵{tier.amount}</div>
                      <div className="text-sm text-gray-600">{tier.impact}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-6 h-6 text-red-600" />
                    <h4 className="font-semibold text-gray-900">Why Your Support Matters</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Every donation directly funds our mobile healthcare services, educational materials, and follow-up
                    care. Your contribution helps us reach more communities and prevent unnecessary vision loss.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Donation Details</CardTitle>
                <CardDescription>
                  Choose your donation amount and payment method to support our mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">Donation Amount</label>
                    <div className="grid grid-cols-2 gap-3">
                      {donationTiers.map((tier) => (
                        <button
                          key={tier.amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(tier.amount)
                            setCustomAmount("")
                          }}
                          className={`p-3 border rounded-lg text-center transition-colors ${
                            selectedAmount === tier.amount
                              ? "border-blue-600 bg-blue-50 text-blue-600"
                              : "border-gray-300 hover:border-blue-300"
                          }`}
                        >
                          <div className="font-semibold">GH₵{tier.amount}</div>
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">Custom Amount</label>
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setSelectedAmount(null)
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">Payment Method</label>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.id}
                          className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                            paymentMethod === method.id
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-300 hover:border-blue-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="sr-only"
                          />
                          <method.icon className="w-6 h-6 text-gray-600" />
                          <div>
                            <div className="font-medium text-gray-900">{method.name}</div>
                            <div className="text-sm text-gray-600">{method.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                    <Input placeholder="+233 XX XXX XXXX" />
                  </div>

                  {finalAmount > 0 && (
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Total Donation:</span>
                        <span className="text-2xl font-bold text-green-600">GH₵{finalAmount}</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Your donation will help us provide essential eye care services to those in need.
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 py-3 text-lg"
                    disabled={isSubmitting || finalAmount === 0 || !paymentMethod}
                  >
                    {isSubmitting ? "Processing Donation..." : `Donate GH₵${finalAmount}`}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Secure payment processing. You will receive a receipt via email.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
