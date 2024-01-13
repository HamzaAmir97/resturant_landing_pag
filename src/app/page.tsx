import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain,   Download, Image,  LayoutDashboard,  Megaphone, Palette, PenTool,  Share2,} from "lucide-react"
import AnimatedText from "@/components/animated-text"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import AnimatedBackground from "@/components/animated-background"
import SkillsSection from "@/components/skills-section"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground className="opacity-70" />
        
        <div className="container relative z-10">
          <AnimatedSection animation="fadeIn">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                مرحباً، أنا <AnimatedText text="تسنيم الأمير" className="text-primary" />
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                كل فكرة أرسمها، هي بداية قصة تُروى للعالم بدون كلمات

              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton size="lg" className="motion-safe:animate-bounce hover-lift" />
                <Button size="lg" variant="outline" asChild className="hover-lift">
                  <Link href="/projects">عرض أعمالي</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20" id="services">
        <div className="container">
          <SectionHeading title="الخدمات" subtitle="أقدم مجموعة متنوعة من الخدمات لتلبية احتياجاتك التقنية" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "تصميم الهويات المتكاملة",
                description:
                  "  بناء صورة بصرية قوية للعلامة التجارية تشمل الشعار، بطاقات العمل، البروشورات، الأوراق الرسمية، المطبوعات، ملفات التعريف، الإعلانات، ودليل استخدام موحد، بهدف خلق هوية احترافية وجذابة تعزز حضور العلامة في السوق.",
                icon: Palette,
                delay: 0,
              },
              {
                title: "تصميمات السوشل ميديا",
                description: "أقدم تصاميم إبداعية مخصصة لمنصات التواصل الاجتماعي، تشمل تصميم البوستات الإعلانية، القصص (Stories)، أغلفة الصفحات، الإعلانات المدفوعة، وتصاميم الحملات التسويقية، مع الحفاظ على هوية العلامة التجارية وجذب انتباه الجمهور بأسلوب احترافي وجذاب.",
                icon : Image,
                delay: 0.1,
              },
              {
                title: "إدارة حسابات السوشل ميديا",
                description: "أقدم خدمة إدارة حسابات السوشال ميديا باحترافية، تشمل إعداد المحتوى، تصميم المنشورات، جدولة النشر، التفاعل مع الجمهور، وتحليل الأداء. بالإضافة إلى إدارة الحملات الإعلامية الرقمية والإعلانات المدفوعة، بهدف تعزيز حضور العلامة التجارية وزيادة التفاعل والمبيعات عبر مختلف المنصات.",
                icon: Share2,
                delay: 0.2,
              },
              {
                title: "تصميم واجهات المستخدم (UI) وتجربة المستخدم (UX",
                description: "تصميم واجهات مستخدم مبتكرة وسهلة الاستخدام لتحسين تجربة التفاعل مع المواقع والتطبيقات.",
                icon: LayoutDashboard,
                delay: 0.3,
              },
              {
                title: "تصميم إعلانات مرئية (Display Ads) وحملات تسويقية",
                description: "تصميم إعلانات رقمية جذابة لمختلف المنصات (Google Ads، فيسبوك، إنستجرام) لتعزيز العلامة التجارية وجذب العملاء.",
                icon: Megaphone,
                delay: 0.4,
              },
              {
                title: "استشارات تصميم هوية العلامة التجارية",
                description: "تقديم استشارات للمساعدة في تطوير هوية العلامة التجارية، سواء للمشاريع الجديدة أو لتحديث الهويات الحالية.",
                icon: Brain,
                delay: 0.5,
              },
            ].map((service, index) => (
              
              <AnimatedSection key={index} delay={service.delay} className="hover-scale" animation="scaleIn">
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="py-20 bg-muted/50" id="projects">
        <div className="container">
          <SectionHeading title="أعمالي " subtitle="بعض المشاريع التي قمت بتصميمها " />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "project1",
                title: "Quest Travels",
                description: "هوية بصرية لشركة سياحة وسفر عالمية",
                image: "/imags/blog/quest (1).jpg",
                tags: ["Travel Branding", "Logo Design", "Tourism Identity"],
                delay: 0
              },
              
              
              
                {
                  id: "project3",
                  title: "سُفرة",
                  description: "تصميمات سوشل ميديا لمطعم سفره",
                  image: "/imags/blog/sofrah (1).jpg",
                  tags: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop",],
                  delay: 0.1
                } ,
                {
                  id: "project2",
                  title: "Direct تطبيق توصيل",
                  description: "تصميم بوستات لحملات اعلانية على السوشل ميديا",
                  image: "/imags/blog/direct (1).jpg",
                  tags: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop",],
                  delay: 0.2
                },

            ].map((project) => (
              <AnimatedSection key={project.id} delay={project.delay} className=" hover-scale" animation="scaleIn">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button asChild className="hover-lift">
              <Link href="/projects">
                عرض جميع المشاريع <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Skills Section - Modern Design */}
      <AnimatedSection delay={0.4} className="py-20" animation="fadeIn">
        <SkillsSection
          categories={[
            {
              title: "تصميم الشعارات والهويات البصرية",
              skills: [
                { name: "تصميم المطبوعات مثل الكتيبات والبروشورات", percentage: 95 },
                { name: "لتحرير الصور وإنشاء تصاميم مبدعة للمطبوعات", percentage: 90 },
                { name: "تصميم شعارات وهوية بصرية ذات جودة عالية", percentage: 100 },
                { name: "لتصميم محتوى مرئي بسيط وجذاب للمواد التسويقية السريعة", percentage: 80 },
                { name: "إنشاء تصميمات لواجهات المستخدم  بشكل متكامل", percentage: 80 },
              ],
            },
            {
              title: "إدارة حسابات السوشال ميديا",
              skills: [
                { name: "تصميم البوستات بشكل سريع واحترافي مع قوالب جاهزة", percentage: 85 },
                { name: "تصميم محتوى مرئي بسيط وجذاب للمواد التسويقية السريعة", percentage: 80 },
                { name: "جدولة وتنظيم الصور والمحتوى المخصص للسوشال ميديا", percentage: 75 },
                { name: "إنشاء وتصميم حملات إعلانات مدفوعة بشكل مبتكر", percentage: 70 },
                { name: "إنشاء إعلانات بصرية جذابة ومؤثرة", percentage: 70 },
              ],
            },
          ]}
        />

      </AnimatedSection>

      {/* Technologies Used Section */}
      <AnimatedSection className="py-20 bg-muted/50" id="technologies" animation="fadeIn">
        <div className="container">
          <SectionHeading title="الادوات والبرامج التي استخدمها" subtitle="أدوات وتقنيات أستخدمها في مشاريعي" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[

              "Adobe Illustrator",
              "Adobe InDesign",
              "Adobe Photoshop",
              "Canva",
              "Figma",
              "Facebook Ads Manager",
              "Instagram Ads",
              "Google Ads",
            ].map((tech, index) => (
              <AnimatedSection
                key={tech}
                delay={index * 0.05}
                className=" hover-scale  bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow hover-lift"
              >
                <div className=" hover-scale w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <PenTool className=" hover-scale h-8 w-8 text-primary" />
                  
                </div>
                <h3 className="font-medium">{tech}</h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 " id="testimonials" animation="fadeIn">
        <div className="container">
          <SectionHeading title="آراء العملاء" subtitle="ما يقوله العملاء عن خدماتي" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
 

              [


                {
                  name: "رنا الخالدي",
                  role: "مديرة التسويق",
                  company: "شركة أفق الأعمال",
                  content:
                    "تسنيم أنجزت مشروع تصميم الهوية البصرية لشركتنا بسرعة ودقة مذهلة. لم نحتج لأي تعديلات تقريبًا لأن العمل كان احترافيًا من أول مرة!",
                  avatar: "/w.png?height=100&width=100",
                  rating: 5,
                  delay: 0,
                },
                {
                  name: "سامي الجبيري",
                  role: "مدير العمليات",
                  company: "حلول رقمية",
                  content:
                    "طلبنا من تسنيم إعادة تصميم هويتنا القديمة، والنتيجة فاقت توقعاتنا! الهوية الجديدة عززت حضورنا في السوق وجعلت علامتنا أكثر جاذبية واحترافية.",
                  avatar: "/m.png?height=100&width=100",
                  rating: 5,
                  delay: 0.1,
                },
                {
                  name: "ليان بدر",
                  role: "مديرة مشروع",
                  company: "نوفا للتقنية",
                  content:
                    "ما يميز تسنيم حقًا هو قدرتها على الاستماع بعناية وفهم متطلبات العميل بدقة. كانت دائمًا صبورة مع كل التعديلات ومرنة جدًا في التعامل.",
                  avatar: "/w.png?height=100&width=100",
                  rating: 5,
                  delay: 0.2,
                },
                {
                  name: "خالد المريسي",
                  role: "المدير التنفيذي",
                  company: "معرض رؤية الإبداع",
                  content:
                    "تسنيم ساعدتنا في إدارة حملاتنا الإعلامية عبر السوشال ميديا. لاحظنا زيادة في تفاعل الجمهور خلال فترة قصيرة بفضل أفكارها الإبداعية وسرعة تنفيذها.",
                  avatar: "/m.png?height=100&width=100",
                  rating: 5,
                  delay: 0.3,
                },
                {
                  name: "هدى الجهني",
                  role: "مسؤولة العلاقات العامة",
                  company: "شركة إيليت",
                  content:
                    "أكثر ما أعجبني في تسنيم هو اهتمامها الدقيق بالتفاصيل وسعيها الدائم لتحقيق الكمال في كل تصميم. شعرت أنها تهتم بمشروعي كما لو كان مشروعها الشخصي.",
                  avatar: "/w.png?height=100&width=100",
                  rating: 5,
                  delay: 0.4,
                },
                {
                  name: "فهد العنزي",
                  role: "مدير تسويق رقمي",
                  company: "بلوسوم للتسويق",
                  content:
                    "تعاملت مع العديد من المصممين، لكن تسنيم مختلفة. طريقة تواصلها راقية ومحترفة جدًا، وكانت دومًا تقدم حلولًا ذكية لأي تحدي نواجهه.",
                  avatar: "/m.png?height=100&width=100",
                  rating: 5,
                  delay: 0.5,
                },



              ].map((testimonial, index) => (
                <AnimatedSection key={index} delay={index * 0.05} className="hover-scale" animation="scaleIn">
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    content={testimonial.content}
                    avatar={testimonial.avatar}
                    rating={testimonial.rating}
                    
                  />
                </AnimatedSection>
              ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-primary text-primary-foreground" animation="slideInLeft">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد للعمل معي؟</h2>
            <p className="text-primary-foreground/80 mb-8">دعنا نتعاون لتحويل أفكارك إلى واقع  مميز</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" className=" motion-safe:animate-bounce hover-lift" />
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift"
                asChild
              >
                <Link href="/imags/22.pdf" download>
                  <Download className="ml-2 h-4 w-4" /> تحميل السيرة الذاتية
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

