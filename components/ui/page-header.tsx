import { Badge } from "@/components/ui/badge"

interface PageHeaderProps {
  title: string
  description: string
  badge: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 text-center">
        <Badge className="bg-blue-100 text-blue-800 mb-4">{badge}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  )
}
