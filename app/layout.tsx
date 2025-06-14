import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.A.Y. Healthcare - Bringing Vision to Communities",
  description:
    "Making eye care accessible, affordable, and equitable for all communities across Ghana. Professional healthcare services, community outreach, and vision education.",
  keywords: ["healthcare", "eye care", "Ghana", "community health", "vision screening", "SDG"],
  authors: [{ name: "R.A.Y. Healthcare" }],
  icons: {
    icon: "/logo-bg.png",
  },
  openGraph: {
    title: "R.A.Y. Healthcare - Bringing Vision to Communities",
    description: "Making eye care accessible, affordable, and equitable for all communities across Ghana.",
    type: "website",
    images: [
      {
        url: "/logo-bg.png",
        width: 150,
        height: 50,
        alt: "R.A.Y. Healthcare Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}