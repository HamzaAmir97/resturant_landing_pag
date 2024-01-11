import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAButton {
  text: string
  href: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  icon?: React.ReactNode
}

interface CTASectionProps {
  title: string
  subtitle: string
  buttons: CTAButton[]
  background?: "primary" | "muted" | "default"
  className?: string
}

export default function CTASection({
  title,
  subtitle,
  buttons,
  background = "primary",
  className = "",
}: CTASectionProps) {
  const getBgClass = () => {
    switch (background) {
      case "primary":
        return "bg-primary text-primary-foreground"
      case "muted":
        return "bg-muted"
      default:
        return ""
    }
  }

  const getButtonClass = (button: CTAButton, index: number) => {
    if (button.variant) return button.variant

    if (background === "primary") {
      return index === 0 ? "secondary" : "outline"
    }

    return index === 0 ? "default" : "outline"
  }

  // Special styling for outline buttons on primary background
  const getExtraButtonClass = (button: CTAButton) => {
    if (
      background === "primary" &&
      (button.variant === "outline" || (!button.variant && buttons.indexOf(button) !== 0))
    ) {
      return "bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
    }

    return ""
  }

  return (
    <section className={`py-20 ${getBgClass()} ${className}`}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className={`${background === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"} mb-8`}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button
                key={index}
                size="lg"
                variant={getButtonClass(button, index) as "outline"}
                className={getExtraButtonClass(button)}
                asChild
              >
                <Link href={button.href}>
                  {button.text}
                  {button.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

