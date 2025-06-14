"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X, Home, Info, Settings, Target, Globe, Users, Calendar, Phone, Heart } from "lucide-react"
import Image from "next/image"

const navigationItems = [
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Settings },
  { href: "/impact", label: "Impact", icon: Target },
  { href: "/sdg", label: "SDG", icon: Globe },
  { href: "/get-involved", label: "Get Involved", icon: Users },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/contact", label: "Contact", icon: Phone },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsSheetOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg" 
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-10">
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 ${
                  pathname === item.href 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden lg:flex">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/donate" className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Donate Now</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Sheet Menu */}
          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[350px] p-0"
              >
                <SheetHeader className="px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-green-50">
                  <SheetTitle className="text-left flex items-center space-x-3">
                    <Image 
                      src='/logo-bg.png' 
                      alt="Logo" 
                      width={120} 
                      height={90}
                      className="h-8 w-auto"
                    />
                  </SheetTitle>
                  <SheetDescription className="text-left text-sm text-gray-600">
                    Navigate through our platform
                  </SheetDescription>
                </SheetHeader>
                
                <div className="flex flex-col h-full">
                  {/* Navigation Links */}
                  <nav className="flex-1 px-4 py-6">
                    <div className="space-y-2">
                      {navigationItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                              pathname === item.href
                                ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            }`}
                          >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </nav>
                  
                  {/* Mobile Donate Button */}
                  <div className="p-6 border-t bg-gray-50">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg"
                      onClick={handleLinkClick}
                    >
                      <Link href="/donate" className="flex items-center justify-center space-x-2">
                        <Heart className="w-4 h-4" />
                        <span>Donate Now</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}