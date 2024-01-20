"use client"

import { ServiceRequestProvider } from "./service-request-context"
import ServiceRequestButton from "./service-request-button"
import ServiceRequestModal from "./service-request-modal"

export default function ServiceRequestWrapper() {
  return (
    <ServiceRequestProvider>
      <ServiceRequestButton />
      <ServiceRequestModal />
    </ServiceRequestProvider>
  )
}

