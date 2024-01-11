import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

export default function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  return (
    <Card className=" overflow-hidden group">
      <div className=" relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          href={`/projects/${id}`}
          className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          عرض المشروع <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

