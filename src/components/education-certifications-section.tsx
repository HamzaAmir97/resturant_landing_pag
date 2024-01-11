import SectionHeading from "@/components/section-heading"

export interface Education {
  degree: string
  institution: string
  period: string
  description?: string
}

export interface Certification {
  title: string
  issuer: string
  date: string
  description?: string
}

interface EducationCertificationsSectionProps {
  educationTitle?: string
  educationSubtitle?: string
  certificationTitle?: string
  certificationSubtitle?: string
  education: Education[]
  certifications: Certification[]
  className?: string
}

export default function EducationCertificationsSection({
  educationTitle = "الدراسات",
  educationSubtitle = "مؤهلاتي الأكاديمية",
  certificationTitle = "الشهادات",
  certificationSubtitle = "شهاداتي المهنية",
  education,
  certifications,
  className = "",
}: EducationCertificationsSectionProps) {
  return (
    <section className={`py-20 ${className}`} id="education">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionHeading title={educationTitle} subtitle={educationSubtitle} className="md:text-right" />
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="border-r-4 border-primary pr-6 py-2">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-muted-foreground">
                    {item.institution}، {item.period}
                  </p>
                  {item.description && <p className="mt-2">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title={certificationTitle} subtitle={certificationSubtitle} className="md:text-right" />
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <div key={index} className="border-r-4 border-primary pr-6 py-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.issuer}, {item.date}
                  </p>
                  {item.description && <p className="mt-2">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

