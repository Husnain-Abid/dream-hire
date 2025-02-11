"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const features = [
  {
    title: "Tailored services",
    content:
      "Get personalized service recommendations based on your business needs and project requirements. Our expert team will help you find the perfect match for your specific industry and goals.",
  },
  {
    title: "Hiring solutions",
    content:
      "Access advanced hiring tools and dedicated support to help you find, vet, and hire top talent quickly. Get assistance with job postings, candidate screening, and interview coordination.",
  },
  {
    title: "Quality assurance",
    content:
      "Benefit from our rigorous quality control processes and satisfaction guarantee. Every project is monitored for quality, and we ensure timely delivery of work that meets your standards.",
  },
  {
    title: "Management tools",
    content:
      "Use our comprehensive suite of project management tools to track progress, communicate with freelancers, and manage deliverables efficiently. Includes time tracking, milestone setting, and reporting features.",
  },
  {
    title: "Easy payment options",
    content:
      "Flexible payment solutions that work for your business. Choose from various payment methods, set up automated payments, and manage all your freelancer payments in one place.",
  },
  {
    title: "Compliance add-ons",
    content:
      "Stay compliant with our built-in tools and features that handle contracts, NDAs, and tax documentation. We help you manage legal requirements and maintain proper documentation.",
  },
]

export default function WhyUpgrade() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index)
  }

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto grid  md:grid-cols-2 ">
        {/* Header */}
        <div className="mb-12 max-w-lg">
          <h2 className="mb-4 text-3xl font-light text-gray-900 md:text-3xl">Why upgrade to DreamHire Pro?</h2>
          <p className="text-sm text-gray-600">
            DreamHire Pro is an all-in-one, premium business solution enabling you to recruit, onboard, manage, and pay
            freelance talent without hassle, so you can seamlessly execute complex projects of any size.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} >
              <button
                onClick={() => toggleSection(index)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="text-sm font-medium text-gray-900">{feature.title}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                    openSection === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSection === index && (
                <div className="border-t border-gray-200 p-4 text-sm">
                  <p className="text-gray-600">{feature.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

