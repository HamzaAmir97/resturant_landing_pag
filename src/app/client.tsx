"use client"

import type React from "react"
import { Cairo } from "next/font/google"
import "./globals.css"


import Home from "./page"
const cairo = Cairo({ subsets: ["arabic"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

 

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${cairo.className} antialiased transition-colors duration-300`}>
       <Home/>
           
         
          <main className="min-h-screen">
           
                {children}
             
           
          </main>

         
       
      </body>
    </html>
  )
}

