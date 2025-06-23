"use client"

import { Link } from "react-router-dom"
import cat1 from '../../asset/images/search-page/card1.png'
import cat2 from '../../asset/images/search-page/card2.png'
import cat3 from '../../asset/images/search-page/card3.png'
import cat4 from '../../asset/images/search-page/card4.png'


const features = [
  {
    title: "Tailored hiring services",
    description: "Dedicated hiring experts help you find the right freelance talent for your specific needs.",
    image: cat1,
    bgColor: "bg-[#4A5C00]",
  },
  {
    title: "Satisfaction guaranteed",
    description:
      "DreamHire Pro talent delivers high-quality work. If you're not satisfied with the deliverables, we'll refund you.",
      image: cat2,
      bgColor: "bg-[#F7F9C5]",
  },
  {
    title: "Multiple hiring models",
    description: "Option to hire on an hourly basis or by the project – for either long or short-term needs.",
    image: cat3,
    bgColor: "bg-[#5F1127]",
  },
  {
    title: "Integrated into your team",
    description: "Tools to manage and collaborate with freelance talent as an integrated part of your team.",
    image: cat4,
    bgColor: "bg-[#005C2E]",
  },
]

export default function BusinessBenefits() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="mb-6 text-start text-base font-normal text-[#222325] md:text-2xl lg:mb-8">
          Everything businesses need to work with top freelancers
        </h2>

        {/* Features Grid */}
        <div className="mb-12 font-inter grid gap-3 md:grid-cols-4 lg:mb-16  ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col  rounded-2xl border shadow-sm">
              {/* Text Content */}
              <div className="mb-10 p-6">
                <h3 className="mb-2 text-sm font-medium text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-xs">{feature.description}</p>
              </div>

              {/* Image */}
              <div className={`mt-auto aspect-[4/3] overflow-hidden rounded-xl ${feature.bgColor}`}>
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/pro"
            className="inline-flex rounded-lg bg-[#6366F1] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#5558E3]"
          >
            Get Started with DreamHire Pro
          </Link>
        </div>
      </div>
    </section>
  )
}

