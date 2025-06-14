import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Users } from "lucide-react"

export function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                R.A.Y. Healthcare was founded on the belief that good vision is a basic human right. We serve
                communities that are often overlooked by traditional healthcare systems—bringing high-quality services
                directly to their doorsteps.
              </p>
              <p className="leading-relaxed">
                Our name, R.A.Y., stands not only for our founder's initials but also symbolizes our mission to shine a
                light on the importance of eye health in every home, classroom, and community we serve.
              </p>
              <p className="leading-relaxed">
                What started as a small initiative has grown into a comprehensive healthcare program that has touched
                hundreds of lives across Ghana, providing hope and clear vision to those who need it most.
              </p>
            </div>

            <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border-none">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Mission</h3>
                    <p className="text-sm text-gray-600">
                      Making eye care accessible, affordable, and equitable for all communities across Ghana.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Image
              src="/members.jpeg"
              alt="R.A.Y. Healthcare founder and team"
              width={500}
              height={300}
              className="rounded-xl shadow-lg w-full h-[80vh] max-lg:h-72 object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-xl font-bold text-blue-600 mb-1">2025</div>
              <div className="text-xs text-gray-600">Founded</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-sm">
                Every patient receives personalized attention and care, treating each individual with dignity and
                respect.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community Focus</h3>
              <p className="text-gray-600 text-sm">
                We work closely with local communities to understand their unique needs and provide tailored solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards of healthcare delivery while making services accessible to all.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}