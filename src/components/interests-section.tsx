import SectionHeading from "@/components/section-heading"

export interface Interest {
  name: string
  icon: string
}

interface InterestsSectionProps {
  title?: string
  subtitle?: string
  interests: Interest[]
  columns?: 2 | 3 | 4
  className?: string
}

export default function InterestsSection({
  title = "اهتماماتي",
  subtitle = "ما أحب القيام به في وقت فراغي",
  interests,
  columns = 4,
  className = "",
}: InterestsSectionProps) {
  const getColumnsClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-2"
      case 3:
        return "grid-cols-2 md:grid-cols-3"
      case 4:
        return "grid-cols-2 md:grid-cols-4"
      default:
        return "grid-cols-2 md:grid-cols-4"
    }
  }

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className={`grid ${getColumnsClass()} gap-6`}>
          {interests.map((interest, index) => (
            <div key={index} className="bg-muted rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-2">{interest.icon}</div>
              <h3 className="font-medium">{interest.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

