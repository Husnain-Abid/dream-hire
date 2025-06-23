"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import avatar from "../../asset/images/search-page/avatar.png";
import img from "../../asset/images/search-page/img4.png";



const testimonials = [
  {
    name: "Eduardo Gutierrez",
    role: "Director of Product Marketing | Sprout Solutions",
    image:  avatar,
    companyLogo: img,
    quote:
      "Fiverr Pro has helped us rethink the way we execute our product marketing projects. We live moving fast, and hiring freelancers allows us to accomplish projects that have many moving parts at the highest quality and scale.",
  },
  // Add more testimonials as needed
]

const faqs = [
  {
    question: "Will freelancers be committed to my business's NDA?",
    answer:
      "Yes, all DreamHire Pro freelancers are bound by our standard confidentiality agreement and can sign additional NDAs as required.",
  },
  {
    question: "How do I know that a freelancer is qualified to complete my project?",
    answer:
      "All Pro freelancers undergo thorough vetting for their expertise, experience, and professional background.",
  },
  {
    question: "What if I didn't find the exact service that suits my project needs?",
    answer:
      "Our Business Success Team can help you find the right service or customize a solution for your specific needs.",
  },
  {
    question: "How does DreamHire protect us in the order process?",
    answer: "We offer secure payment processing, dispute resolution, and our satisfaction guarantee for all projects.",
  },
  {
    question: "How do I see a freelancer's hourly rate?",
    answer: "Hourly rates are clearly displayed on freelancer profiles and project proposals.",
  },
  {
    question: "How many team members can join my DreamHire Pro account?",
    answer: "You can add unlimited team members to your Pro account, each with customizable permissions.",
  },
  {
    question: "How do I become a DreamHire Pro freelancer?",
    answer: "Pro freelancers are invited based on their expertise, track record, and professional achievements.",
  },
]

export default function TestimonialsAndFaqs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto">
        {/* Testimonials */}
        <div className="mb-16 max-w-[700px] mx-auto">
          <h2 className="mb-8 text-center text-xl font-normal text-gray-900">What customers are saying</h2>

          <div className="relative rounded-2xl  font-inter border border-gray-200 bg-white p-6 shadow-sm">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute -right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Company Logo */}
              <div className=" rounded-xl mx-auto ">
                <img
                  src={testimonials[currentTestimonial].companyLogo || "/placeholder.svg"}
                  alt="Company logo"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Testimonial Content */}
              <div className="">
                <div className="flex items-center gap-3 my-6">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{testimonials[currentTestimonial].name}</p>
                    <p className="text-xs text-gray-800">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-[10px] mb-6">{testimonials[currentTestimonial].quote}</p>
                <button className="rounded-md bg-gray-900 px-4 py-2 text-xs text-white hover:bg-gray-800">
                  Read case study
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-5xl mx-auto  font-inter">
          <h2 className="mb-6 text-3xl font-light text-gray-900">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="font-normal text-sm text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && <div className="border-t border-gray-200 p-4 text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

