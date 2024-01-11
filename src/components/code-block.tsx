"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const { theme } = useTheme()
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Determine background color based on theme
  const bgColor = mounted && theme === "dark" ? "bg-gray-900" : "bg-gray-100"
  const textColor = mounted && theme === "dark" ? "text-gray-100" : "text-gray-900"
  const borderColor = mounted && theme === "dark" ? "border-gray-700" : "border-gray-300"

  return (
    <div className={`relative group rounded-md overflow-hidden mb-6 ${bgColor} ${borderColor} border`}>
      {/* Language badge */}
      {language && (
        <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono">
          {language}
        </div>
      )}

      {/* Copy button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">نسخ الكود</span>
      </Button>

      {/* Code content */}
      <pre className={`p-4 pt-10 overflow-x-auto font-mono text-sm ${textColor}`}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

