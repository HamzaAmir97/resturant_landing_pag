"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Clock } from "lucide-react"
import { formatServiceType } from "./service-utils"

interface ServiceFormStep3Props {
  formData: {
    name: string
    email: string
    phone: string
    serviceType: string
    description: string
  }
  prevStep: () => void
  onSubmit: () => void
}

export default function ServiceFormStep3({ formData, prevStep, onSubmit }: ServiceFormStep3Props) {

  const labels = {
    title:"ملخص الطلب",
    personalInfo:"المعلومات الشخصية",
    name:"الاسم",
    email:"البريد الإلكتروني",
    phone:"رقم الهاتف",
    serviceDetails:"تفاصيل الخدمة",
    serviceType:"نوع الخدمة",
    description:"وصف المشروع",
    estimated:"الوقت المقدر للرد",
    estimatedTime:"24 ساعة",
    back:"السابق",
    submit:"إرسال الطلب",
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{labels.title}</h3>

      <div className="bg-muted rounded-md p-4 space-y-4">
        {/* Personal Information */}
        <div>
          <h4 className="font-medium mb-2">{labels.personalInfo}</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <p className="text-sm text-muted-foreground">{labels.name}</p>
              <p>{formData.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{labels.email}</p>
              <p>{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{labels.phone}</p>
              <p>{formData.phone}</p>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div>
          <h4 className="font-medium mb-2">{labels.serviceDetails}</h4>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-muted-foreground">{labels.serviceType}</p>
              <p>{formatServiceType(formData.serviceType)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{labels.description}</p>
              <p className="text-sm whitespace-pre-wrap">{formData.description}</p>
            </div>
          </div>
        </div>

        {/* Response Time Estimate */}
        <div className="flex items-center gap-2 bg-primary/10 p-3 rounded text-sm">
          <Clock className="h-4 w-4 text-primary" />
          <span>{labels.estimated}: </span>
          <span className="font-medium">{labels.estimatedTime}</span>
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {labels.back}
        </Button>
        <Button onClick={onSubmit}>
          <Check className="mr-2 h-4 w-4" />
          {labels.submit}
        </Button>
      </div>
    </div>
  )
}

