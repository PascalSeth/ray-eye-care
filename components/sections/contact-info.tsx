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
            <Link
              href="tel:+2330548064492"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              +233 0548064492
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Email</div>
            <Link
              href="mailto:rayhealthcareafrica@gmail.com"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              rayhealthcareafrica@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Address</div>
            <Link
              href="https://maps.google.com/?q=Accra,Ghana"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accra, Ghana
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Follow Us</h3>
        <div className="flex space-x-4">
          {/* <Link
            href="https://www.facebook.com/rayhealthcare"
            className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6" />
          </Link> */}
          <Link
            href="https://www.instagram.com/r.a.y._healthcare_africa/"
            className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          {/* <Link
            href="https://www.linkedin.com/company/rayhealthcare"
            className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </Link> */}
        </div>
      </div>
    </div>
  )
}