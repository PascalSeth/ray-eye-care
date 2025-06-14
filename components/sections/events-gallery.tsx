"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface EventImage {
  id: number
  src: string
  alt: string
  category: string
}

// Generate zonal images array programmatically
const eventImages: EventImage[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `/zonals/zonals (${i + 1}).jpg`,
  alt: "SHS Zonal Screening",
  category: "School Zonal"
}))

const getCategories = (images: EventImage[]): string[] => {
  const categories = Array.from(new Set(images.map(img => img.category)))
  return ["All", ...categories]
}

export function EventsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = getCategories(eventImages)
  
  const filteredImages = eventImages.filter((image) => 
    selectedCategory === "All" || image.category === selectedCategory
  )

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Gallery</h2>
          
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images available for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  )
}