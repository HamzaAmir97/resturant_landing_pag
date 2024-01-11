import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export default function TestimonialCard({ name, role, company, content, avatar, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full hover-scale">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4 ">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="mb-6 text-muted-foreground">{content}</p>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ">
            <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover " />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-muted-foreground">
              {role}، {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

