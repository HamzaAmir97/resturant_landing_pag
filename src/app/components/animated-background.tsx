"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface AnimatedBackgroundProps {
  className?: string
}

export default function AnimatedBackground({ className = "" }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return // Ensure ctx is not null

    let particles: Particle[] = []
    let animationFrameId: number

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = (canvas?.offsetWidth || 0) * dpr
      canvas.height = (canvas?.offsetHeight || 0) * dpr
      ctx.scale(dpr, dpr)
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.offsetWidth || 0)
        this.y = Math.random() * (canvas?.offsetHeight || 0)
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > (canvas?.offsetWidth || 0)) this.x = 0
        else if (this.x < 0) this.x = canvas?.offsetWidth || 0

        if (this.y > (canvas?.offsetHeight || 0)) this.y = 0
        else if (this.y < 0) this.y = canvas?.offsetHeight || 0
      }

      draw() {
        if (ctx) { // Check if ctx is not null before drawing
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    function initParticles() {
      particles = []
      const particleCount = Math.floor(((canvas?.offsetWidth || 0) * (canvas?.offsetHeight || 0)) / 10000)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function connectParticles() {
      const maxDistance = 100

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            if (ctx) { // Ensure ctx is available before drawing the connection
              ctx.strokeStyle =
                resolvedTheme === "dark" ? `rgba(255, 255, 255, ${opacity * 0.15})` : `rgba(0, 0, 0, ${opacity * 0.05})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particles[a].x, particles[a].y)
              ctx.lineTo(particles[b].x, particles[b].y)
              ctx.stroke()
            }
          }
        }
      }
    }

    function animate() {
      if (ctx) { // Make sure ctx is available before clearing and drawing
        ctx.clearRect(0, 0, (canvas?.offsetWidth || 0), (canvas?.offsetHeight || 0))

        for (const particle of particles) {
          particle.update()
          particle.draw()
        }

        connectParticles()
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    // Initialize
    resizeCanvas()
    animate()

    // Handle resize
    window.addEventListener("resize", resizeCanvas)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}
