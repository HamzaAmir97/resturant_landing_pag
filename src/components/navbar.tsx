"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { ColorThemeSwitcher } from "./color-theme-switcher"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import WhatsAppButton from "./whatsapp-button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من أنا" },
    { href: "/projects", label: "أعمالي" },
    //{ href: "/blog", label: "المدونة" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="text-xl font-bold">
            الملف الشخصي
            {mounted && theme === "dark" && <span className="text-xs text-primary mr-2">وضع داكن</span>}
            {mounted && theme === "light" && <span className="text-xs text-primary mr-2">وضع فاتح</span>}
          </Link>
        </motion.div>
              
        {/* Mobile menu button */}
        <button
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary font-bold" : ""
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  className="h-0.5 bg-primary mt-0.5"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <WhatsAppButton variant="icon" size="md" showText={false} />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ColorThemeSwitcher />
          </div>
        </motion.nav>

        {/* Mobile navigation */}

        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-background border-b md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >

            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium hover:text-primary ${
                    isActive(link.href) ? "text-primary font-bold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}


              <WhatsAppButton size="md" />
              <div className="flex justify-start gap-2">
                <ThemeToggle />
                <ColorThemeSwitcher />
              </div>
            </div>
          </motion.div>

        )}
        
      </div>
    </header>
  )
}

