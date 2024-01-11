import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import type { LucideIcon } from "lucide-react"

export interface AboutStat {
  value: string
  label: string
}

export interface AboutHighlight {
  title: string
  description: string
  icon: LucideIcon
}

interface AboutMeSectionProps {
  title?: string
  subtitle?: string
  content: string[]
  image?: string
  stats?: AboutStat[]
  highlights?: AboutHighlight[]
  className?: string
}

export default function AboutMeSection({
  title = "من أنا",
  subtitle = "نبذة عن حياتي المهنية",
  content,
  image = "/placeholder.svg?height=400&width=400",
  stats,
  highlights,
  className = "",
}: AboutMeSectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      <SectionHeading title={title} subtitle={subtitle} />

      <Card className="border-primary/20 overflow-hidden">
        <div className="md:flex">
          {/* Left side - Career journey image */}
          <div className="md:w-1/3 relative min-h-[300px] bg-primary/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={image || "/placeholder.svg"}
                alt="رحلتي المهنية"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <CardContent className="md:w-2/3 p-8">
            <div className="space-y-6 text-lg leading-relaxed">
              {content.map((paragraph, index) => {
                if (index === 0) {
                  return (
                    <p
                      key={index}
                      className="first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1"
                    >
                      {paragraph}
                    </p>
                  )
                } else if (index === 1) {
                  return (
                    <div key={index} className="border-r-4 border-primary pr-4 py-2">
                      <p>{paragraph}</p>
                    </div>
                  )
                } else {
                  return <p key={index}>{paragraph}</p>
                }
              })}

              {stats && stats.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-background shadow-sm rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Additional career highlights */}
      {highlights && highlights.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon

            return (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full ml-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </span>
                  {highlight.title}
                </h3>
                <p>{highlight.description}</p>
              </Card>
            )
          })}
        </div>
      )}
    </section>
  )
}

