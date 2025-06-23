"use client"

import { useRef } from "react"
import { ChevronRight } from "lucide-react"
import cat1 from '../../asset/images/search-page/cat1.png'
import cat2 from '../../asset/images/search-page/cat2.png'
import cat3 from '../../asset/images/search-page/cat3.png'
import cat4 from '../../asset/images/search-page/cat4.png'
import cat5 from '../../asset/images/search-page/cat5.png'
import cat6 from '../../asset/images/search-page/cat6.png'
import cat7 from '../../asset/images/search-page/cat7.png'
// import cat8 from '../../asset/images/search-page/cat.png'




const categories = [
  {
    name: "UI/UX",
    icon: cat1,
  },
  {
    name: "Website Development",
    icon: cat2,
  },
  {
    name: "SEO",
    icon: cat3,
  },
  {
    name: "Video & Animation",
    icon: cat4,
  },
  {
    name: "E-Commerce",
    icon: cat5,
  },
  {
    name: "AI & Chatbots",
    icon: cat6,
  },
  {
    name: "Mobile Development",
    icon: cat7
  },
  {
    name: "Game Development",
    icon: cat3,
  },
]

export default function ServiceCategories() {
  const scrollRef = useRef(null)

  const scroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative px-4 py-8 font-inter">
      <div className="container mx-auto">
        <div className="relative">
          {/* Scroll Container */}
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex min-w-[150px] cursor-pointer items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative ">
                  <img
                    src={category.icon || "/placeholder.svg"}
                    alt={`${category.name} icon`}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-gray-900">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Scroll Button */}
          <button
            onClick={scroll}
            className="absolute -right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}


