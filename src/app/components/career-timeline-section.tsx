import { Briefcase, GraduationCap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import SectionHeading from "@/app/components/section-heading"

export interface TimelineItem {
  title: string
  subtitle: string
  period: string
  description: string
  icon?: LucideIcon
  iconType?: "work" | "education" | "custom"
}

interface CareerTimelineSectionProps {
  title?: string
  subtitle?: string
  items: TimelineItem[]
  className?: string
}

export default function CareerTimelineSection({
  title = "مسيرتي المهنية",
  subtitle = "رحلتي في عالم التصميم",
  items,
  className = "",
}: CareerTimelineSectionProps) {
  const getIcon = (item: TimelineItem) => {
    if (item.icon) return item.icon

    if (item.iconType === "education") return GraduationCap

    return Briefcase // Default to work icon
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="relative border-r-2 border-primary/20 pr-10">
          {items.map((item, index) => {
            const IconComponent = getIcon(item)

            return (
              <div key={index} className={`mb-12 relative ${index === items.length - 1 ? "mb-0" : ""}`}>
                <div className="absolute right-[-41px] top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <IconComponent className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.subtitle}، {item.period}
                  </p>
                  <p className="mt-2">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

