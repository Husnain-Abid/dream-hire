"use client";

import { Eye, ShoppingCart, CheckSquare, Check } from "lucide-react";

import home from "../../asset/images/category-page/image1.png";

export default function HowItWorks() {
  const steps = [
    {
      icon: Eye,
      title: "Browse",
      description:
        "Find the type of work you need, clearly defined and ready to start.",
    },
    {
      icon: ShoppingCart,
      title: "Buy",
      description:
        "Work begins as soon as you purchase and provide requirements.",
    },
    {
      icon: CheckSquare,
      title: "Approve",
      description:
        "Receive your project by a set deadline. Review, approve, and pay.",
    },
  ];

  const projectDetails = [
    { label: "Project price", value: "$100" },
    { label: "Delivery Time", value: "1 day" },
    { label: "Number of Revisions", value: "Unlimited" },
    { label: "Printable Resolution File", hasCheck: true },
    { label: "Logo Transparency", hasCheck: true },
    { label: "Source Files", hasCheck: true },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Left Column - Steps */}
        <div className="space-y-9 self-center">
          <h2 className="text-3xl font-medium md:text-4xl">How it works</h2>

          <div className="space-y-9">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <step.icon className="mt-1 h-5 w-5 text-gray-900" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <p className="">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Project Image */}
        <div className="mb-6 overflow-hidden rounded-xl ">
          <img
            src={home}
            alt="Project preview"
            className="w-full object-cover"
          />
        </div>




      </div>
    </section>
  );
}
