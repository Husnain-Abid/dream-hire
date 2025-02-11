"use client";

import { CircleCheck, CircleDollarSign, CirclePlus, Star } from "lucide-react";
import home from "../../asset/images/home3.png";

export default function WhyBusinesses() {
  const features = [
    {
      icon: CirclePlus,
      title: "Proof of quality",
      description:
        "Check any pro's work example client reviews, and identity <br/> verification.",
    },
    {
      icon: CircleDollarSign,
      title: "No cost until you hire",
      description:
        "Interview potential fits for your job, negotiate rates, and only pay <br/>  for work you approve.",
    },
    {
      icon: CircleCheck,
      title: "Safe and secure",
      description:
        "Focus on your work knowing we help protect your data and <br/>  privacy. We're here with 24/7 support if you need it.",
    },
  ];

  return (
    <section className="container  mx-auto grid gap-6 md:grid-cols-12 my-12 relative">
      {/* Left Column */}
      <div className="bg-[#F9F9F9] rounded-lg px-6 pb-10 pt-16 col-span-12 md:col-span-8">
        <h2 className="mb-8 text-5xl font-medium md:text-5xl">
          Why businesses
          <br /> turn to <span className="text-[#6366F1]">DreamHire</span>
        </h2>

        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex item gap-4">
              <div className="flex-shrink-0 mt-3">
                <feature.icon className="h-6 w-6 text-[#6366F1]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[28px] font-medium text-[#5865F2]">
                  {feature.title}
                </h3>
                <p
                  className="text-sm font-medium"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className=" hidden md:block absolute bottom-0 right-64 ">
        <img src={home} alt="bussiness" />
      </div>

      {/* Right Column */}
      <div className=" col-span-12 md:col-span-4  flex items-end rounded-b-lg md-rounded-lg bg-[#5865F2] px-4 py-16 md:pb-28 text-white md:p-11">
        <div className="max-w-xl">
          <h3 className="mb-8 text-xl font-medium md:text-[28px]">
            We&apos;re
            <br /> the world&apos;s work
            <br /> marketplace
          </h3>

          <div className="flex gap-2">
            <div className="mt-1">
              <Star className="h-6 w-6 fill-current" />
            </div>

            <div>
              <span className="text-2xl font-medium">4.9/5</span>
              <p className="mt-2 text-sm font-medium text-white/90">
                Clients rate professionals on DreamHire
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
