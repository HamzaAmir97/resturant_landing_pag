import type { LucideIcon } from "lucide-react"
import SectionHeading from "@/app/components/section-heading"
import ServiceCard from "@/app/components/service-card"

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

interface ServicesSectionProps {
  title?: string
  subtitle?: string
  services: Service[]
  columns?: 2 | 3 | 4
  className?: string
}

export default function ServicesSection({
  title = "الخدمات",
  subtitle = "أقدم مجموعة متنوعة من الخدمات لتلبية احتياجاتك  الافراد والشركات ",
  services,
  columns = 3,
  className = "",
}: ServicesSectionProps) {
  const getColumnsClass = () => {
    switch (columns) {
      case 2:
        return "md:grid-cols-2"
      case 3:
        return "md:grid-cols-2 lg:grid-cols-3"
      case 4:
        return "md:grid-cols-2 lg:grid-cols-4"
      default:
        return "md:grid-cols-2 lg:grid-cols-3"
    }
  }

  return (
    <section className={`py-20 ${className}`} id="services">
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className={`grid grid-cols-1 ${getColumnsClass()} gap-6`}>
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

