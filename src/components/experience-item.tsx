import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  skills?: string[]
}

export default function ExperienceItem({ title, company, period, description, skills }: ExperienceItemProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
          </div>
          <Badge variant="outline" className="w-fit">
            {period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        {skills && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

