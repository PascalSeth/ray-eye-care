import Link from "next/link"
import { Eye, Facebook, Instagram, Linkedin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/impact", label: "Our Impact" },
  { href: "/get-involved", label: "Get Involved" },
]

const services = ["Community Screenings", "School Outreach", "Health Education", "Treatment Access"]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
          <div className="relative">
                        <Image 
                          src='/logo-bg.png' 
                          alt="Logo" 
                          width={160} 
                          height={120}
                          className="h-10 w-auto sm:h-12"
                          priority
                        />
                      </div>
              <div>
                <h3 className="text-xl font-bold">R.A.Y. Healthcare</h3>
                <p className="text-sm text-gray-400">Bringing Vision to Communities</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Making eye care accessible, affordable, and equitable for all communities across Ghana.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              {services.map((service) => (
                <div key={service} className="text-gray-400 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">+233 XX XXX XXXX</div>
              <div className="text-gray-400 text-sm">info@rayhealthcare.org</div>
              <div className="text-gray-400 text-sm">Accra, Ghana</div>
            </div>
            <div className="flex space-x-3 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} R.A.Y. Healthcare. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
