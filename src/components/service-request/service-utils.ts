export function formatServiceType(type: string): string {
  // Service type translations (Arabic only)
  const serviceTypes: Record<string, string> = {
    "web-development": "تصميم الهويات المتكاملة",
    "mobile-development":  "تصميمات السوشل ميديا",
    "ui-ux-design": "إدارة حسابات السوشل ميديا",
    ecommerce: "استشارات تصميم هوية العلامة التجارية",
    seo: "تصميم إعلانات مرئية (Display Ads) وحملات تسويقية",
    other: "أخرى",
  }

  return serviceTypes[type] || type
}

interface ServiceFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
}
export function prepareWhatsAppMessage(formData: ServiceFormData): string {
  const serviceType = formatServiceType(formData.serviceType);

  return `مرحباً، أنا ${formData.name}.

طلب خدمة جديد:
نوع الخدمة: ${serviceType}
الوصف: ${formData.description}

معلومات التواصل:
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}`;
}

