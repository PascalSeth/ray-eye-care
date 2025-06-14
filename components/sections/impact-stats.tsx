"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    value: 500,
    label: "People Screened in 2024",
    suffix: "+",
    color: "blue",
    description: "Comprehensive eye examinations conducted",
  },
  {
    value: 50,
    label: "Schools Visited",
    suffix: "+",
    color: "green",
    description: "Educational institutions reached",
  },
  {
    value: 200,
    label: "Referrals Made",
    suffix: "+",
    color: "purple",
    description: "Patients connected to treatment",
  },
  {
    value: 15,
    label: "Community Partners",
    suffix: "+",
    color: "orange",
    description: "Local organizations collaborating",
  },
  {
    value: 98,
    label: "Patient Satisfaction",
    suffix: "%",
    color: "red",
    description: "Based on follow-up surveys",
  },
  {
    value: 5,
    label: "Regions Covered",
    suffix: "",
    color: "teal",
    description: "Across Ghana",
  },
]

export function ImpactStats() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      return setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = stat.value / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev]
            newStats[index] = Math.floor(current)
            return newStats
          })
        }, duration / steps)
      }, index * 200)
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These numbers represent real lives touched and communities transformed through accessible eye care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border-${stat.color}-200`}
            >
              <CardContent className="p-0">
                <div className={`text-5xl font-bold text-${stat.color}-600 mb-2`}>
                  {animatedStats[index]}
                  {stat.suffix}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
