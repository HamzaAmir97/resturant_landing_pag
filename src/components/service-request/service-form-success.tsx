"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface ServiceFormSuccessProps {
  onClose: () => void
}

export default function ServiceFormSuccess({ onClose }: ServiceFormSuccessProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-8 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>

      <h3 className="text-xl font-bold mb-2">تم إرسال طلبك بنجاح!</h3>
      <p className="text-muted-foreground max-w-md mb-6">
        سنتواصل معك قريبًا عبر واتساب أو البريد الإلكتروني لمناقشة التفاصيل.
      </p>

      <Button onClick={onClose}>إغلاق</Button>
    </motion.div>
  );
}
