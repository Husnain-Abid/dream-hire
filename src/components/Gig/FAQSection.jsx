"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const faqs = [
    {
      question: "Can you guarantee first page rankings? PLEASE READ THIS!",
      answer:
        "No, we cannot guarantee specific rankings as search engine algorithms are constantly changing and rankings depend on many factors including competition and existing website authority.",
    },
    {
      question: "Can I order this gig regularly as a monthly link building service?",
      answer: "Yes, you can order this service on a monthly basis. We offer special packages for regular clients.",
    },
    {
      question: "How long it will take to see the backlinks in third-party tools?",
      answer: "Backlinks typically start appearing in third-party tools within 2-4 weeks after implementation.",
    },
    {
      question: "Can I choose the niche of the websites you are going to build links on?",
      answer: "Yes, you can specify your preferred niche and we'll try to accommodate your requirements.",
    },
    {
      question: "Can I use multiple URLs and keywords?",
      answer: "Yes, you can use multiple URLs and keywords within the same order, depending on the package selected.",
    },
    {
      question: "Nofollow or dofollow links?",
      answer: "We provide a mix of both nofollow and dofollow links to maintain a natural link profile.",
    },
    {
      question: "Are the backlinks going to increase the DA (domain authority) and PA (page authority) of my domain?",
      answer:
        "While backlinks can positively influence your domain and page authority, the exact impact depends on various factors.",
    },
    {
      question: "Do you provide reports?",
      answer: "Yes, we provide detailed reports showing all the backlinks created and their metrics.",
    },
    {
      question: "Niches that are not accepted?",
      answer: "We don't accept adult content, gambling, or any illegal niches.",
    },
  ]

  return (
    
    
    <div className="container mx-auto mt-14 font-inter">


    <div className="max-w-2xl  ">
      {/* Services Section */}
      <div className="mb-12">
        <h2 className="text-base font-semibold mb-6">Other Search Engine Optimization (SEO) Services I Offer</h2>
        <div className="border rounded-lg p-4 max-w-sm hover:shadow-md transition-shadow cursor-pointer">
          <h3 className="font-base font-bold mb-1">Technical SEO</h3>
          <p className=" text-sm text-gray-600">Starting at PKR 23,273</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-400 last:border-0">
              <button
                className="w-full py-4 flex items-center justify-between text-left hover:text-gray-600"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-700">{faq.question}</span>
                <ChevronRight
                  className={`w-5 h-5 text-gray-700 transition-transform ${expandedIndex === index ? "rotate-90" : ""}`}
                />
              </button>
              {expandedIndex === index && <div className="pb-4 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>


    </div>




  )
}

export default FAQSection

