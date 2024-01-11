import SectionHeading from "@/components/section-heading"
import TestimonialCard from "@/components/testimonial-card"

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

interface TestimonialsSectionProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  columns?: 1 | 2 | 3
  className?: string
}

export default function TestimonialsSection({
  title = "آراء العملاء",
  subtitle = "ما يقوله العملاء عن خدماتي",
  testimonials,
  columns = 3,
  className = "",
}: TestimonialsSectionProps) {
  const getColumnsClass = () => {
    switch (columns) {
      case 1:
        return ""
      case 2:
        return "md:grid-cols-2"
      case 3:
        return "md:grid-cols-2 lg:grid-cols-3"
      default:
        return "md:grid-cols-2 lg:grid-cols-3"
    }
  }

  return (
    <section className={`py-20 ${className}`} id="testimonials">
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className={`grid grid-cols-1 ${getColumnsClass()} gap-6`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

