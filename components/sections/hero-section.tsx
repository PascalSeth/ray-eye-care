"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Play } from "lucide-react"
import { Hero3DScene } from "@/components/3d/hero-3d-scene"
import { useState } from "react"

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpeg"
          alt="Healthcare professionals providing eye care services in the community"
          className="object-cover w-full h-full"
          fill
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-green-900/30"></div>
      </div>

      {/* 3D Background Scene - lighter opacity since we have image bg */}
      <div className="absolute inset-0 opacity-20">
        <Hero3DScene />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-8 duration-1000">
            <div className="space-y-6">
              <Badge className="bg-blue-100/90 text-blue-800 hover:bg-blue-200/90 animate-bounce backdrop-blur-sm">
                Healthcare • Vision • Community
              </Badge>

              <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                Bringing Vision to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient-x drop-shadow-none">
                  Communities
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-lg">
                Everyone deserves access to quality healthcare. We bring essential eye care services directly to
                communities and schools, preventing vision loss through early intervention and education.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/services">
                  Our Services
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              {/* <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                onClick={() => setShowVideo(true)}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </Button> */}
            </div>

            {/* Interactive stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "500+", label: "Lives Changed", color: "text-blue-400" },
                { value: "50+", label: "Schools Reached", color: "text-green-400" },
                { value: "6", label: "SDG Goals", color: "text-purple-400" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-1 drop-shadow-lg`}>{stat.value}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative">
              {/* Content card over background */}
           

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30 animate-bounce delay-500"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-30 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <Button variant="ghost" onClick={() => setShowVideo(false)}>
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Play className="w-16 h-16 mx-auto mb-4" />
                <p>No Video Available right now</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}