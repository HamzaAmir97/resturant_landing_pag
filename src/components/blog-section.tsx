"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import BlogCard from "@/components/blog-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
}

interface BlogSectionProps {
  title?: string
  subtitle?: string
  posts: BlogPost[]
  categories?: string[]
  showSearch?: boolean
  showFilters?: boolean
  showNewsletter?: boolean
  newsletterTitle?: string
  newsletterSubtitle?: string
  className?: string
}

export default function BlogSection({
  title = "المدونة",
  subtitle = "أحدث المقالات والمدونات حول تطوير الويب والتقنيات الحديثة",
  posts,
  categories = ["الكل"],
  showSearch = true,
  showFilters = true,
  showNewsletter = true,
  newsletterTitle = "اشترك في النشرة الإخبارية",
  newsletterSubtitle = "احصل على أحدث المقالات والتحديثات مباشرة في بريدك الإلكتروني",
  className = "",
}: BlogSectionProps) {
  // Add "الكل" if it's not already included
  const allCategories = categories.includes("الكل") ? categories : ["الكل", ...categories]

  // State for filtering and search
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(posts)

  // Filter posts based on category and search query
  useEffect(() => {
    let result = posts

    // Filter by category
    if (selectedCategory !== "الكل") {
      result = result.filter((post) => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query),
      )
    }

    setFilteredPosts(result)
  }, [selectedCategory, searchQuery, posts])

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        {/* Section Header */}
        <SectionHeading title={title} subtitle={subtitle} />

        {/* Search and Filter */}
        {(showSearch || showFilters) && (
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {showSearch && (
                <div className="w-full md:w-1/3 relative">
                  <Input
                    type="search"
                    placeholder="ابحث عن مقالات..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              )}

              {showFilters && (
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((category) => (
                    <Button
                      key={category}
                      variant={category === selectedCategory ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">لا توجد مقالات تطابق معايير البحث</p>
              <Button
                variant="link"
                onClick={() => {
                  setSelectedCategory("الكل")
                  setSearchQuery("")
                }}
                className="mt-2"
              >
                عرض جميع المقالات
              </Button>
            </div>
          )}
        </div>

        {/* Pagination - Only show if we have filtered posts */}
        {filteredPosts.length > 0 && filteredPosts.length > 6 && (
          <div className="flex justify-center gap-2">
            <Button variant="outline" disabled>
              السابق
            </Button>
            <Button variant="outline" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">التالي</Button>
          </div>
        )}

        {/* Newsletter */}
        {showNewsletter && (
          <div className="mt-20 bg-muted/50 rounded-lg p-8 text-center">
            <SectionHeading title={newsletterTitle} subtitle={newsletterSubtitle} />
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input type="email" placeholder="البريد الإلكتروني" />
                <Button>اشتراك</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                لن نرسل لك أي رسائل غير مرغوب فيها. يمكنك إلغاء الاشتراك في أي وقت.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

