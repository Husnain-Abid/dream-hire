import {
  Award,
  ChevronLeft,
  CircleCheck,
  Gift,
  Star,
} from "lucide-react";

import gift from "../../src/asset/images/price1.png";
import award from "../../src/asset/images/price2.png";
import star from "../../src/asset/images/price3.png";

import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = {
    free: {
      name: "Free Plan",
      description: "The basic Remote Latinos service for employers.",
      price: 0,
      icon: gift,
      features: {
        company: [
          { title: "Admin user", included: true },
          { title: "No team members", included: true },
        ],
        employers: [
          { title: "View Matched Candidates", included: true },
          { title: "Access to recommended candidates", included: true },
          { title: "No invite or contact candidates", included: true },
        ],
        jobPosts: [
          { title: "3 active jobs offers per company", included: true },
          { title: "Up to 60 applicants per job", included: true },
          { title: "Job posts active for 14 days", included: true },
          { title: "Contact 15 applicants per company", included: true },
        ],
        support: [
          { title: "Basic email support", included: true },
          { title: "Chat bot support", included: true },
        ],
      },
    },
    pro: {
      name: "Pro Plan",
      description:
        "An enhanced recruiting service with more tools and less operational limitations.",
      price: 99,
      icon: award,
      features: {
        company: [
          { title: "Up to 1 team member", included: true },
          { title: "Unlimited admin users", included: true },
        ],
        employers: [
          { title: "View matched candidates", included: true },
          {
            title: "Exclusive Access to Pre-Verified Top Talent",
            included: true,
          },
          { title: "Contact 50 candidates per month", included: true },
          { title: "Contact recommended candidates", included: true },
        ],
        jobPosts: [
          { title: "5 active jobs offers per company", included: true },
          { title: "Up to 60 applicants per job", included: true },
          { title: "Invite applicants to apply", included: true },
          { title: "Unlimited applicants per company", included: true },
        ],
        support: [
          { title: "Preferential email support", included: true },
          { title: "Chat bot support", included: true },
        ],
      },
    },
    premium: {
      name: "Premium Plan",
      description:
        "A high end service to optimize time management and reduce effort.",
      price: 297,
      icon: star,
      features: {
        company: [
          { title: "Up to 3 team member", included: true },
          { title: "Unlimited admin users", included: true },
        ],
        employers: [
          { title: "View matched candidates", included: true },
          {
            title: "Exclusive Access to Pre-Verified Top Talent",
            included: true,
          },
          { title: "Contact 300 candidates per month", included: true },
          { title: "Contact recommended candidates", included: true },
        ],
        jobPosts: [
          { title: "10 active jobs offers per company", included: true },
          { title: "Up to 120 applicants per job", included: true },
          { title: "Invite applicants to apply", included: true },
          { title: "Unlimited applicants per company", included: true },
        ],
        support: [
          { title: "Preferential email support", included: true },
          { title: "Dedicated chat support service", included: true },
          { title: "Hiring Mentoring Services", included: true },
        ],
      },
    },
  };

  return (
    <div className="min-h-screen container mx-auto  py-12 px-4 ">
      {/* Back Button */}
      <button className="flex items-center text-gray-950 font-medium mb-8 text-sm hover:text-gray-600">
        <ChevronLeft className="w-3 h-3 mr-2" />
        Go back
      </button>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">
          The best solution, for the{" "}
          <span className="text-[#5865F2] italic">best price</span>
        </h1>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl font-inter mx-auto grid grid-cols-1  gap-8 lg:grid-cols-3">
        {Object.entries(plans).map(([key, plan]) => (
          <div
            key={key}
            className={`bg-white rounded-2xl shadow-lg p-6 hover:border-2 hover:border-blue-600 `}
          >
            {/* Plan Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between gap-2 mb-2">
               
               <img src={plan.icon} alt="" className="w-4 " />
              
                {key === "free" && (
                  <span className="inline-block bg-[#EBECFC] text-[#5865F2] text-xs px-3 py-1 rounded-full">
                    Free Trial (14 days)
                  </span>
                )}
              </div>
              <h2 className="text-xl font-semibold mb-3 ">{plan.name}</h2>
              <p className="text-gray-600 text-xs mb-10">{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">${plan.price}</span>
                {/* {plan.price > 0 && (
                  <span className="text-gray-500 ml-2">/month</span>
                )} */}
              </div>
              {key !== "free" ? (
                <div className="mt-4 flex gap-2">
                  <button
                    className={`px-4 py-1 rounded-lg border text-sm ${
                      billingCycle === "monthly"
                        ? "bg-[#DADDFF]  text-[#5865F2] border-[#5865F2]   "
                        : "bg-gray-100 text-gray-600 border-gray-700"
                    }`}
                    onClick={() => setBillingCycle("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-6 py-1 rounded-lg border text-xs ${
                      billingCycle === "annually"
                        ? "bg-blue-50 text-[#5865F2] border-gray-400"
                        : "bg-gray-50 text-gray-600 border-gray-400"
                    }`}
                    onClick={() => setBillingCycle("annually")}
                  >
                    <h1 className="font-bold"> Annually </h1>
                    <span className="text-xs ml-1">(64% Savings)</span>
                  </button>
                </div>
              ) : (
                <div className="mt-4  ">
                  <h1 className="text-5xl font-semibold">Free</h1>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-3 px-4 rounded-full text-sm font-medium mb-5 ${
                key === "free"
                  ? "bg-white border border-[#5865F2] text-[#5865F2] hover:bg-gray-50"
                  : "bg-[#5865F2] text-white hover:bg-blue-700"
              }`}
            >
              {key === "free"
                ? "Free trial"
                : key === "pro"
                ? "Go pro!"
                : "Go premium!"}
            </button>

            <div className="border-b mb-5"></div>

            {/* Features */}
            <div className="space-y-6">
              <h4 className="text-xs font-semibold">WHAT’S INCLUDED...</h4>

              {Object.entries(plan.features).map(([category, features]) => (
                <div key={category}>
                  <h3 className=" text-xs font-semibold capitalize mb-3">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CircleCheck className="w-3 h-3 text-green-500" />

                        <span className="text-gray-700 text-xs">
                          {feature.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
