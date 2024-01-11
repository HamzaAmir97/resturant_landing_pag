import { Code } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import SectionHeading from "@/components/section-heading"

export interface Technology {
  name: string
  icon?: LucideIcon
}

interface TechnologiesSectionProps {
  title?: string
  subtitle?: string
  technologies: Technology[]
  columns?: 2 | 3 | 4
  background?: "default" | "muted"
  className?: string
}

export default function TechnologiesSection({
  title = "التقنيات التي استخدمها",
  subtitle = "أدوات وتقنيات أستخدمها في مشاريعي",
  technologies,
  columns = 4,
  background = "muted",
  className = "",
}: TechnologiesSectionProps) {
  const getColumnsClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-2"
      case 3:
        return "grid-cols-2 md:grid-cols-3"
      case 4:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      default:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    }
  }

  const bgClass = background === "muted" ? "bg-muted/50" : ""

  return (
    <section className={`py-20 ${bgClass} ${className}`} id="technologies">
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className={`grid ${getColumnsClass()} gap-6`}>
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon || Code

            return (
              <div
                key={index}
                className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium">{tech.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

