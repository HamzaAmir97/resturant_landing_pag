"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"

interface TechnologyProps {
  name: string
  percentage: number
}

export default function TechnologySlider({ name, percentage }: TechnologyProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 300)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

