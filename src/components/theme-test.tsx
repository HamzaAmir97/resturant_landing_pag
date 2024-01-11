"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun, Monitor } from "lucide-react"

export default function ThemeTest() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">اختبار السمة</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <p>
            السمة الحالية:{" "}
            <span className="font-bold">{theme === "dark" ? "داكن" : theme === "light" ? "فاتح" : "النظام"}</span>
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            onClick={() => setTheme("light")}
            className="flex items-center gap-2"
          >
            <Sun className="h-4 w-4" />
            فاتح
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            onClick={() => setTheme("dark")}
            className="flex items-center gap-2"
          >
            <Moon className="h-4 w-4" />
            داكن
          </Button>
          <Button
            variant={theme === "system" ? "default" : "outline"}
            onClick={() => setTheme("system")}
            className="flex items-center gap-2"
          >
            <Monitor className="h-4 w-4" />
            النظام
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

