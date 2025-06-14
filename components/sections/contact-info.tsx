import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Phone / WhatsApp</div>
            <div className="text-gray-600">+233 XX XXX XXXX</div>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Email</div>
            <div className="text-gray-600">info@rayhealthcare.org</div>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Address</div>
            <div className="text-gray-600">Accra, Ghana</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Follow Us</h3>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
