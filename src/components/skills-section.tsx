"use client"

import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/section-heading"
import type { LucideIcon } from "lucide-react"

export interface Skill {
  name: string
  percentage: number
  icon?: LucideIcon
  color?: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

interface SkillsSectionProps {
  title?: string
  subtitle?: string
  categories: SkillCategory[]
  background?: "default" | "muted"
  className?: string
}

export default function SkillsSection({
  title = "مهاراتي",
  subtitle = "المهارات التقنية التي أتقنها",
  categories,
  background = "default",
  className = "",
}: SkillsSectionProps) {
  const bgClass = background === "muted" ? "bg-muted/50" : ""

  // Function to get CSS color variable from percentage
  const getColorFromPercentage = (percentage: number, color?: string) => {
    if (color) return color
    if (percentage >= 90) return "hsl(19, 70%, 41%)"
    if (percentage >= 75) return "hsl(169, 70%, 41%)"
    if (percentage >= 60) return "hsl(215, 80%, 56%)"
    return "hsl(215, 20%, 65%)"
  }

  return (
    <section className={`py-20 ${bgClass} ${className}`} id="skills">
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-2 after:content-[''] after:h-1 after:flex-1 after:bg-primary/20 after:mr-4">
                {category.title}
              </h3>

              <div className="grid gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  const color = getColorFromPercentage(skill.percentage, skill.color)

                  return (
                    <Card key={skillIndex} className="overflow-hidden border-0 shadow-md">
                      <CardContent className="p-0">
                        <div className="flex items-center">
                          {/* Skill info */}
                          <div className="p-4 flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                {Icon && <Icon className="h-5 w-5" style={{ color }} />}
                                <h4 className="font-bold">{skill.name}</h4>
                              </div>
                              <span className="font-semibold" style={{ color }}>
                                {skill.percentage}%
                              </span>
                            </div>

                            {/* Modern progress bar */}
                            <div className="h-2 bg-muted/50 rounded-full w-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${skill.percentage}%`,
                                  backgroundColor: color,
                                  transition: "width 1s ease-in-out",
                                }}
                              />
                            </div>
                          </div>

                          {/* Percentage indicator with colored background */}
                          <div
                            className="h-full min-h-[5rem] w-[5rem] flex items-center justify-center font-bold text-primary-foreground"
                            style={{
                              backgroundColor: color,
                            }}
                          >
                            <div className="flex items-baseline">
                              <span className="text-2xl">{skill.percentage}</span>
                              <span className="text-sm">%</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

