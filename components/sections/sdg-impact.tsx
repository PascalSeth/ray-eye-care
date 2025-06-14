import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Globe, Award } from "lucide-react"

export function SDGImpact() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Measuring Our SDG Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We track our progress against the UN Sustainable Development Goals to ensure meaningful, measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Measurable Progress</h3>
                  <p className="text-gray-600">
                    We track key performance indicators aligned with SDG targets to measure our real-world impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community-Centered</h3>
                  <p className="text-gray-600">
                    Our programs are designed with community input to ensure they address real needs and create lasting
                    change.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Standards</h3>
                  <p className="text-gray-600">
                    We follow international best practices and contribute to global efforts in achieving the SDGs by
                    2030.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recognized Impact</h3>
                  <p className="text-gray-600">
                    Our work has been recognized by local and international organizations for its contribution to
                    sustainable development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-blue-600">
                    2024 Progress
                  </Badge>
                  <div className="text-2xl font-bold">6/17</div>
                </div>
                <h3 className="text-xl font-bold mb-2">SDGs Directly Impacted</h3>
                <p className="text-blue-100">Our programs contribute to 6 of the 17 UN Sustainable Development Goals</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Lives Improved</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Communities</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-purple-600 mb-1">5</div>
                  <div className="text-sm text-gray-600">Regions</div>
                </CardContent>
              </Card>
              <Card className="p-4 text-center">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Commitment</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
