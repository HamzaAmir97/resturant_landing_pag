"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ServiceRequestContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ServiceRequestContext = createContext<ServiceRequestContextType | undefined>(undefined)

export function ServiceRequestProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <ServiceRequestContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ServiceRequestContext.Provider>
  )
}

export function useServiceRequestModal() {
  const context = useContext(ServiceRequestContext)
  if (context === undefined) {
    throw new Error("useServiceRequestModal must be used within a ServiceRequestProvider")
  }
  return context
}

