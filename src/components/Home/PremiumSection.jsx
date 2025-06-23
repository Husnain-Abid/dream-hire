"use client";

import { Link } from "react-router-dom";
import icon from "../../asset/icons/home/icon4.png";
import home from "../../asset/images/home2.png";

export default function PremiumSection() {
  const features = [
    {
      title: "Dedicated hiring experts",
      description:
        "Count on an account manager to find you the right talent and see to your project's every need.",
    },
    {
      title: "Satisfaction guarantee",
      description:
        "Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.",
    },
    {
      title: "Advanced management tools",
      description:
        "Seamlessly integrate freelancers into your team and projects.",
    },
    {
      title: "Flexible payment models",
      description:
        "Pay per project or opt for hourly rates to facilitate longer-term collaboration.",
    },
  ];

  return (
    <section className="container mx-auto bg-[#F4F5FF] p-16 rounded-2xl">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Column */}
        <div className="">
          {/* Logo */}
          <h1 className="text-2xl font-medium text-[#6366F1] mb-10">
            DreamHire
          </h1>

          {/* Heading */}
          <h2 className="text-2xl font-medium lg:text-[32px] mb-7">
            The <span className="text-[#6366F1] font-bold">premium</span>{" "}
            freelance
            <br />
            solution for businesses
          </h2>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 mb-9">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2 font-inter">
                <div className="flex items-start flex-col gap-2">
                  <img src={icon} alt="icon" className="mb-2" />

                  <h3 className="text-sm font-bold ">{feature.title}</h3>
                </div>
                <p className="text-[10px]">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="font-inter text-xs">
            <Link
              href="/try"
              className="relative inline-flex items-center rounded-md bg-[#6366F1] px-6 py-3 text-white hover:bg-[#5558E3] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative rounded-2xl self-center mx-auto overflow-hidden">
          <img
            src={home}
            alt="People working together"
            className="object-cover "
          />
        </div>
      </div>
    </section>
  );
}
