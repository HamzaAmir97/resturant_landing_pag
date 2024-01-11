import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
   
    <Card className="hover-scale   text-center h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
         
          <Icon className="hover-scale  h-8 w-8 text-primary" />

          
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>


  )
}

