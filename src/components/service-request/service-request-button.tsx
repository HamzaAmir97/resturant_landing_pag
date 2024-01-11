"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { useServiceRequestModal } from "./service-request-context"

export default function ServiceRequestButton() {
  const { openModal } = useServiceRequestModal()
  const [isVisible, setIsVisible] = useState(false)

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          onClick={openModal}
          className={cn(
            "fixed z-40 flex items-center gap-2 shadow-lg rounded-l-full py-3 px-5 bg-primary text-primary-foreground",
            "hover:pr-8 transition-all duration-300",
            "right-0 top-1/2 -translate-y-1/2 group",
          )}
        >
          <div className="relative">
            <MessageSquare className="h-6 w-6" />
            {/* Heartbeat animation */}
            <motion.span
              className="absolute -inset-1 rounded-full border-2 border-primary-foreground"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </div>
          <span className="text-sm text-right font-medium group-hover:scale-105 transition-transform">
            طلب خدمة
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
