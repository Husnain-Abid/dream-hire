"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Image } from "lucide-react"
import image1 from "../../asset/images/profile/portfolio1.png";
import image2 from "../../asset/images/profile/portfolio2.png";


const PortfolioSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const project = {
    title: "Z Clinic - Website Design",
    date: "January 2024",
    description:
      "The Z Clinic project involved creating a luxury WordPress website for a premier aesthetics clinic specializing in facial contouring, led by Dr. Zerach. The user-friendly,visually appealing, and informative platform boasts a bespoke luxury",
    tags: ["Beauty & Cosmetics", "Beauty & Cosmetics Blog/Channel", "Beauty Salon", "Nail Salon"],
    cost: "$600-$800",
    duration: "7-30 days",
    images: [
      image1,
      image2
    ],
    totalProjects: 28,
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="container font-inter mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-lg font-semibold text-gray-900 mb-8">Portfolio</h2>

      <div className="bg-white ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,160px] gap-3">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 space-x-6 rounded-2xl border p-6">
            {/* Image Gallery */}
            <div className="relative rounded-lg overflow-hidden bg-gray-100">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              {/* <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={previousImage}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div> */}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 rounded-md bg-black/50 text-white text-sm">
                <Image className="w-4 h-4" />
                <span>{currentImageIndex + 1}</span>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4 self-center">
              <div className="text-xs text-gray-500">From: {project.date}</div>

              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>

              <p className="text-gray-600 text-sm">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 rounded-full border text-gray-700 text-xs">
                    {tag}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full border text-gray-700 text-xs">+12</span>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-xs text-gray-500">Project cost</div>
                  <div className="font-medium text-sm">{project.cost}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Project duration</div>
                  <div className="font-medium text-sm">{project.duration}</div>
                </div>
              </div>
            </div>


          </div>

          {/* Thumbnails */}
          <div className="space-y-4">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-full rounded-lg overflow-hidden ${
                  currentImageIndex === index ? "ring-2 ring-gray-900 border  border-gray-950 p-0.5" : ""
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            <div className="relative w-full aspect-square rounded-lg border flex justify-center items-center   ">
              <span className="font-medium ">+{project.totalProjects} </span>
              <span className="text-gray-500 ml-1">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection

