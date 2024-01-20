"use client"

import type React from "react"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

interface ServiceFormStep2Props {
  formData: {
    serviceType: string
    description: string
  }
  updateFormData: (data: Partial<ServiceFormStep2Props["formData"]>) => void
  prevStep: () => void
  nextStep: () => void
}


export default function ServiceFormStep2({
  formData,
  updateFormData,
  prevStep,
  nextStep,
}: ServiceFormStep2Props) {
  const [errors, setErrors] = useState({
    serviceType: "",
    description: "",
  })

  const handleSelectChange = (value: string) => {
    updateFormData({ ...formData, serviceType: value })
    if (errors.serviceType) {
      setErrors({ ...errors, serviceType: "" })
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({ ...formData, description: e.target.value })
    if (errors.description) {
      setErrors({ ...errors, description: "" })
    }
  }

  const validateStep = () => {
    const newErrors = {
      serviceType: formData.serviceType ? "" : "نوع الخدمة مطلوب",
      description: formData.description ? "" : "وصف المشروع مطلوب",
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = () => {
    if (validateStep()) {
      nextStep()
    }
  }

  const labels = {
    title: "تفاصيل الخدمة",
    serviceType: "نوع الخدمة",
    webDev: "تصميم الهويات المتكاملة",
    mobileDev: "تصميمات السوشل ميديا",
    uiUxDesign: "إدارة حسابات السوشل ميديا",
    ecommerce: "استشارات تصميم هوية العلامة التجارية",
    seo: "تصميم إعلانات مرئية (Display Ads) وحملات تسويقية",
    other: "أخرى",
    description: "وصف المشروع",
    descriptionPlaceholder: "يرجى وصف مشروعك والمتطلبات الخاصة به...",
    back: "السابق",
    next: "التالي",
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{labels.title}</h3>

      <div className="space-y-3">
        <div>
          <Label htmlFor="serviceType">{labels.serviceType}</Label>
          <Select value={formData.serviceType} onValueChange={handleSelectChange}>
            <SelectTrigger className={errors.serviceType ? "border-red-500" : ""}>
              <SelectValue placeholder={labels.serviceType} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-development">{labels.webDev}</SelectItem>
              <SelectItem value="mobile-development">{labels.mobileDev}</SelectItem>
              <SelectItem value="ui-ux-design">{labels.uiUxDesign}</SelectItem>
              <SelectItem value="ecommerce">{labels.ecommerce}</SelectItem>
              <SelectItem value="seo">{labels.seo}</SelectItem>
              <SelectItem value="other">{labels.other}</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceType && <p className="text-sm text-red-500 mt-1">{errors.serviceType}</p>}
        </div>

        <div>
          <Label htmlFor="description">{labels.description}</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={handleTextareaChange}
            placeholder={labels.descriptionPlaceholder}
            className={`min-h-[120px] ${errors.description ? "border-red-500" : ""}`}
          />
          {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {labels.back}
        </Button>
        <Button onClick={handleSubmit}>{labels.next}</Button>
      </div>
    </div>
  )
}
