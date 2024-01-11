import SectionHeading from "@/components/section-heading"
import ExperienceItem from "@/components/experience-item"

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  skills?: string[]
}

interface ExperienceSectionProps {
  title?: string
  subtitle?: string
  experiences: Experience[]
  background?: "default" | "muted"
  className?: string
}

export default function ExperienceSection({
  title = "خبراتي",
  subtitle = "مسيرتي المهنية في مجال تطوير الويب",
  experiences,
  background = "muted",
  className = "",
}: ExperienceSectionProps) {
  const bgClass = background === "muted" ? "bg-muted/50" : ""

  return (
    <section className={`py-20 ${bgClass} ${className}`} id="experience">
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

