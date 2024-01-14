"use client"

import type React from "react"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AnimatePresence, motion } from "framer-motion"
import ServiceRequestWrapper from "@/components/service-request"
import PageLoading from "@/components/page-loading"
import { useState, useEffect } from "react"
const cairo = Cairo({ subsets: ["arabic"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${cairo.className} antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="arabic-profile-theme"
        >
            {mounted && <PageLoading />}
          <Navbar />
          <main className="min-h-screen">
            <AnimatePresence mode="wait">
              <motion.div
                key={Math.random()} // Force re-render on route change
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
          <ServiceRequestWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}

