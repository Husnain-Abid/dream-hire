"use client";

import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import usa from "../../asset/images/profile/usa.png";
import Section from "../../asset/images/gig/Section.png";

export default function FreelancerProfile() {
  return (
    <div className="container  mx-auto px-4 py-10 space-y-8 font-inter">
      {/* Expert Section */}
      <div className="space-y-2 max-w-2xl">
        <h2 className="text-sm font-bold text-gray-700">Expert in:</h2>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 py-1 rounded-full text-sm">
            <BadgeCheck className="w-4 h-4 fill-[#2E25AD] text-white" />
            Search Engine Optimization (SEO)
          </span>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            What people loved about this freelancer
          </h2>
          <a href="#" className="text-sm font-semibold hover:underline">
            See all reviews
          </a>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-4">
              <div className="flex-none w-full border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">maximus3630</span>
                        <img
                          src={usa}
                          alt="United States"
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-500">
                          United States
                        </span>
                      </div>
                      <div className="flex items-center border-l-2 border-gray-300 pl-2  gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-gray-900 fill-black" />
                        ))}
                      </div>


                    </div>

                    <p className="text-gray-600 text-sm">
                      Easily the best link-building package on Fiverr. This is
                      the second time I've ordered from Jacob because a month or
                      two ago I ordered 20 different packages...
                      <button className="text-gray-600 hover:underline ml-1">
                        See more
                      </button>
                    </p>
                    <span className="block mt-2 text-xs text-gray-500">
                      2 years ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button className=" w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className=" w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button> */}
        </div>
      </div>

      {/* About Section */}
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">About this Gig</h2>

          <span className="ml-4 px-2 p-1 flex items-center gap-2 bg-[#5865F2] text-white text-xs rounded-md">
            <BadgeCheck className="w-3 h-3 text-[#5865F2] fill-white rounded-full " />
            Pro
          </span>
        </div>
        <p className="text-gray-900 text-sm font-bold">
          One of The Most Trusted SEO Professionals on Fiverr With 15 Years Of
          Experience In SEO
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold">Reviews:</span>
            <a
              href="https://tinyurl.com/jacob2reviews"
              className="text-gray-950 font-normal hover:underline"
            >
              https://tinyurl.com/jacob2reviews
            </a>
          </div>
          <button className="text-gray-950 font-bold hover:underline text-sm">
            Read More
          </button>
        </div>
      </div>

      {/* images */}

<div>

<img src={Section} alt="image" />

</div>

      {/* Industry Expertise */}
      <div className="space-y-2">

        <div className=" flex items-center gap-6 max-w-2xl">
          <h2 className="text-sm font-medium text-gray-700">
            Industry expertise:
          </h2>
          <div className="flex  flex-wrap gap-4">
            {["Agriculture", "Animals & pets", "Art & design"].map((industry) => (
              <span
                key={industry}
                className="  text-gray-700 rounded-full text-sm"
              >
                {industry}
              </span>
            ))}
            <button className="  text-sm hover:underline">+33 more</button>
          </div>
        </div>

        {/* Language */}
        <div className="flex gap-8 ">
          <h2 className="text-sm font-bold text-gray-700">Language:</h2>
          <span className="text-sm text-gray-600">English</span>
        </div>

      </div>

    </div>
  );
}
