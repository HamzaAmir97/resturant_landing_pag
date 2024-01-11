"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import AnimatedBackground from "@/components/animated-background"

interface HeroButton {
  text: string
  href: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  icon?: React.ReactNode
}

interface HeroSectionProps {
  title: string
  animatedText: string
  subtitle: string
  buttons?: HeroButton[]
  showBackground?: boolean
  className?: string
  children?: React.ReactNode
}

export default function HeroSection({
  title,
  animatedText,
  subtitle,
  buttons = [],
  showBackground = true,
  className = "",
  children,
}: HeroSectionProps) {
  return (
    <section className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      {showBackground && <AnimatedBackground className="opacity-70" />}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title} <AnimatedText text={animatedText} className="text-primary" />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">{subtitle}</p>

          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((button, index) => (
                <Button key={index} size="lg" variant={button.variant || (index === 0 ? "default" : "outline")} asChild>
                  <Link href={button.href}>
                    {button.text}
                    {button.icon}
                  </Link>
                </Button>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  )
}

