import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import WhatsAppButton from "./whatsapp-button"
import AnimatedSection from "./animated-section"

export default function Footer() {
  return (
    <footer className="bg-background border-t" id="contact " >
      <AnimatedSection className="container py-12 md:py-16" delay={0.1} animation="fadeInUp">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
        initial={{ translateX: 100 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 1 }}
        >
            <motion.h3 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg font-bold mb-4">الملف الشخصي</motion.h3>


            <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-muted-foreground mb-4"
            >
            موقع الملف الشخصي الخاص بي، يعرض مهاراتي وخبراتي ومشاريعي.


            </motion.p>


            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="flex gap-4"
            >
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.instagram.com/tasnim_des/" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/tasnim-alamir/" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            </motion.div> 
          

          <motion.div
          initial={{ translateX: 100 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 3 }}
          >
            <motion.h3 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg font-bold mb-4">روابط سريعة
            </motion.h3>
            <motion.ul className="space-y-2">
              <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              >
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  الرئيسية
                </Link>
              </motion.li>
              <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              >
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  من أنا
                </Link>
              </motion.li>
              {/* This is the first comment 
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  المدونة
                </Link>

                
              </li>

              */}
              <motion.li
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              >


                <Link href="#projects" className="text-muted-foreground hover:text-foreground">
                  المشاريع
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>




          <motion.div
          initial={{ opacity: 0 ,y: 10 }}
          animate={{ opacity: 1 ,y: 0 }}
          transition={{ duration: 4 }}
          >
            <motion.h3 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg font-bold mb-4">تواصل معي
            </motion.h3>

            
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
            >
              <p className="text-muted-foreground">يمكنك التواصل معي مباشرة عبر واتساب أو من خلال النموذج أدناه</p>
              <WhatsAppButton message="مرحباً، أود التواصل معك بخصوص مشروع..." />
              <form className="space-y-4 mt-4">
                <Input type="email" placeholder="البريد الإلكتروني" />
                <Input type="text" placeholder="الموضوع" />
                <textarea
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="الرسالة"
                ></textarea>
                <Button type="submit" className="w-full hover-lift">
                  إرسال
                </Button>
              </form>
            </motion.div>

          </motion.div>

          
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
        </div>


      </div>
      </AnimatedSection>
    </footer>
  )
}

