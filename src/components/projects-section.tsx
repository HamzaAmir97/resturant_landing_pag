import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import { ArrowRight } from "lucide-react"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

interface ProjectsSectionProps {
  title?: string
  subtitle?: string
  projects: Project[]
  showViewAllButton?: boolean
  viewAllButtonText?: string
  viewAllButtonLink?: string
  background?: "default" | "muted"
  className?: string
}

export default function ProjectsSection({
  title = "المشاريع",
  subtitle = "بعض المشاريع التي قمت بانجازها ",
  projects,
  showViewAllButton = true,
  viewAllButtonText = "عرض جميع المشاريع",
  viewAllButtonLink = "/projects",
  background = "muted",
  className = "",
}: ProjectsSectionProps) {
  const bgClass = background === "muted" ? "bg-muted/50" : ""

  return (
    <section className={`py-20 ${bgClass} ${className}`} id="projects">
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
        {showViewAllButton && projects.length > 3 && (
          <div className="text-center mt-12">
            <Button asChild>
              <Link href={viewAllButtonLink}>
                {viewAllButtonText} <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

