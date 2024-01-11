import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/section-heading"

export interface Course {
  title: string
  platform: string
  instructor: string
  date: string
  certificate: boolean
}

interface CoursesSectionProps {
  title?: string
  subtitle?: string
  courses: Course[]
  columns?: 2 | 3 | 4
  background?: "default" | "muted"
  className?: string
}

export default function CoursesSection({
  title = "الكورسات",
  subtitle = "الدورات التدريبية التي أكملتها",
  courses,
  columns = 3,
  background = "muted",
  className = "",
}: CoursesSectionProps) {
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

  const bgClass = background === "muted" ? "bg-muted/50" : ""

  return (
    <section className={`py-20 ${bgClass} ${className}`} id="courses">
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className={`grid grid-cols-1 ${getColumnsClass()} gap-6`}>
          {courses.map((course, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>المنصة: {course.platform}</p>
                  <p>المدرب: {course.instructor}</p>
                  <p>تاريخ الإكمال: {course.date}</p>
                </div>
                {course.certificate && (
                  <Badge className="mt-4" variant="outline">
                    شهادة إتمام
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

