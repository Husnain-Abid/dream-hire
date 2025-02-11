"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const qaItems = [
  {
    question: "What can I sell?",
    answer:
      "You can sell any professional service that you specialize in, including digital marketing, writing, programming, design, video production, voice-over work, and more. The key is to focus on your expertise and skills that can be delivered digitally.",
  },
  {
    question: "How much time will I need to invest?",
    answer:
      "The time investment varies depending on your services and availability. You can choose to work part-time or full-time, and manage your own schedule. Initially, you'll need to invest time in setting up your profile and creating your service offerings.",
  },
  {
    question: "How much money can I make?",
    answer:
      "Your earnings potential depends on various factors including your skills, pricing strategy, and the time you invest. Many sellers start with competitive rates and increase their prices as they build a positive reputation and client base.",
  },
  {
    question: "How do I price my service?",
    answer:
      "Consider factors like your expertise level, market rates, time investment, and the value you provide. Research similar services on the platform and position your pricing competitively while ensuring profitability.",
  },
  {
    question: "How much does it cost",
    answer:
      "Creating an account and listing your services is free. DreamHire takes a percentage of each completed order as a service fee. This fee covers platform maintenance, payment processing, and customer support.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Payments are processed securely through our platform. Once a client approves your delivered work, the payment is released to your account. You can withdraw your earnings through various payment methods including bank transfer and PayPal.",
  },
]

export default function QASection() {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto ">
        <h2 className="mb-12 text-center text-lg font-bold  md:text-2xl">Q&A</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {qaItems.map((item, index) => (
            <div key={index} className="group">
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between rounded-md bg-[#EFEFEF] p-4 text-left transition-colors hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openItem === index && <div className="mt-2 rounded-lg bg-gray-50 p-4 text-gray-600">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

