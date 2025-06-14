export function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While we bring our services directly to communities, you can also visit our main office in Accra.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Locations</h3>

              <div className="space-y-4">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Main Office</h4>
                  <p className="text-gray-600 mb-2">
                    123 Healthcare Avenue
                    <br />
                    East Legon, Accra
                    <br />
                    Ghana
                  </p>
                  <p className="text-sm text-gray-500">Administrative headquarters and coordination center</p>
                </div>

                <div className="p-6 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Mobile Services</h4>
                  <p className="text-gray-600 mb-2">
                    Serving communities across:
                    <br />
                    Greater Accra, Ashanti, Central, Volta, and Northern Regions
                  </p>
                  <p className="text-sm text-gray-500">Our mobile teams travel to bring services directly to you</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Office Hours</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Monday - Friday</div>
                  <div className="text-gray-600">8:00 AM - 5:00 PM</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Saturday</div>
                  <div className="text-gray-600">9:00 AM - 2:00 PM</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Sunday</div>
                  <div className="text-gray-600">Closed</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Emergency</div>
                  <div className="text-gray-600">24/7 Hotline</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">Map integration would be implemented here</p>
              <p className="text-xs mt-2">Google Maps or similar service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
