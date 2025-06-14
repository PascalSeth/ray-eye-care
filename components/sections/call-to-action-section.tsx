import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Join us in our mission to bring quality eye care to communities across Ghana. Every action counts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/get-involved">Get Involved</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-black hover:text-blue-600"
            asChild
          >
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
