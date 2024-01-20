"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import { useServiceRequestModal } from "./service-request-context"
import ServiceFormStep1 from "./service-form-step1"
import ServiceFormStep2 from "./service-form-step2"
import ServiceFormStep3 from "./service-form-step3"
import ServiceFormSuccess from "./service-form-success"
import { prepareWhatsAppMessage } from "./service-utils"

interface ServiceFormData  {
  name: string
  email: string
  phone: string
  serviceType: string
  description: string
}

export default function ServiceRequestModal() {
  const { isOpen, closeModal } = useServiceRequestModal()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ServiceFormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
  })

  const updateFormData = (data: Partial<ServiceFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => setCurrentStep((prev) => prev + 1)
  const prevStep = () => setCurrentStep((prev) => prev - 1)

  const handleSubmit = async (): Promise<void> => {
    setIsSubmitting(true);
  
    try {
      const message = prepareWhatsAppMessage(formData);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated delay
  
      const phoneNumber = "201098478583"; // Replace with actual number
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
      if (!whatsappUrl) {
        throw new Error("Failed to generate WhatsApp URL.");
      }
  
      setCurrentStep(4);
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleClose = () => {
    closeModal()
    setTimeout(() => {
      setCurrentStep(1)
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        description: "",
      })
    }, 300)
  }

  const getProgressWidth = () => (currentStep === 4 ? "100%" : `${(currentStep / 3) * 100}%`)

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{"طلب خدمة"}</DialogTitle>
        </DialogHeader>

        {/* Progress Bar */}
        {currentStep < 4 && (
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: getProgressWidth() }}
              animate={{ width: getProgressWidth() }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Step Indicators */}
        {currentStep < 4 && (
          <div className="flex justify-between px-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                <span className="text-xs mt-1">
                  {step === 1 ? "المعلومات" : ""}
                  {step === 2 ? "التفاصيل" : ""}
                  {step === 3 ? "المراجعة" : ""}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Form Steps */}
        <div className="mt-4 overflow-hidden relative">
          {isSubmitting && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-50">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <ServiceFormStep1
                  formData={formData}
                  updateFormData={updateFormData}
                  nextStep={nextStep}
                />
              )}

              {currentStep === 2 && (
                <ServiceFormStep2
                  formData={formData}
                  updateFormData={updateFormData}
                  prevStep={prevStep}
                  nextStep={nextStep}
                />
              )}

              {currentStep === 3 && (
                <ServiceFormStep3
                formData={formData}
                prevStep={prevStep}
                onSubmit={handleSubmit}
                />
              )}

              {currentStep === 4 && <ServiceFormSuccess onClose={handleClose} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  )
}
