"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

type ThemeColor = "blue" | "green" | "purple" | "orange" | "pink" | "red"

type ThemeProviderContextProps = {
  themeColor: ThemeColor
  setThemeColor: (color: ThemeColor) => void
}

const ThemeProviderContext = createContext<ThemeProviderContextProps>({
  themeColor: "blue",
  setThemeColor: () => null,
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [themeColor, setThemeColor] = useState<ThemeColor>("blue")

  // Load theme color from localStorage on mount
  useEffect(() => {
    const savedColor = localStorage.getItem("arabic-profile-color") as ThemeColor
    if (savedColor) {
      setThemeColor(savedColor)
      document.documentElement.setAttribute("data-theme-color", savedColor)
    } else {
      document.documentElement.setAttribute("data-theme-color", "blue")
    }
  }, [])

  // Save theme color to localStorage and update data attribute
  const handleSetThemeColor = (color: ThemeColor) => {
    setThemeColor(color)
    localStorage.setItem("arabic-profile-color", color)
    document.documentElement.setAttribute("data-theme-color", color)
  }

  return (
    <ThemeProviderContext.Provider value={{ themeColor, setThemeColor: handleSetThemeColor }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ThemeProviderContext.Provider>
  )
}

export const useThemeColor = () => useContext(ThemeProviderContext)

