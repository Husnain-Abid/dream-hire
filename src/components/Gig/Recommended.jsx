import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

import img1 from "../../asset/images/gig/img1.png";
import img2 from "../../asset/images/gig/img2.png";

export default function Recommended() {
  return (
    <>
      {/* Recommended Section */}

      <div className="container mx-auto mt-14 font-inter">
        <div className="max-w-2xl space-y-6 border rounded-lg p-8 bg-white/40">
          <h2 className="text-xl font-semibold">Recommended for you</h2>

          <div className="relative">
            <div className="flex gap-4  overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
              {[
                {
                  title:
                    "I will build SEO backlinks high da authority link building service for website ranking",
                  seller: "Supperb SEO",
                  rating: 4.0,
                  reviews: 88,
                  price: 36363,
                  image: img1,
                },
                {
                  title:
                    "Our agency will do high da SEO backlinks service for top google ranking",
                  seller: "RankJack",
                  rating: 5.0,
                  reviews: 60,
                  price: 72726,
                  image: img2,
                },
              ].map((gig, index) => (
                <div key={index} className="flex-none w-[300px]">
                  <div className=" overflow-hidden group">
                    <div className="relative aspect-video">
                      <img
                        src={gig.image || "/placeholder.svg"}
                        alt={gig.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200" />

                        <span className="text-sm font-medium">
                          {gig.seller}
                        </span>
                        {/* <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">Pro</span> */}

                        <span class="ml-auto px-2 py-0.5 flex items-center gap-1 bg-[#2E25AD] text-white text-xs rounded-md">
                          <BadgeCheck className="w-3 h-3 fill-gray-950 " />
                          Pro
                        </span>
                      </div>
                      <h3 className="text-sm font-normal text-gray-600 line-clamp-2">
                        {gig.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-gray-950 text-gray-950" />
                        <span className="text-sm font-medium">
                          {gig.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({gig.reviews})
                        </span>
                      </div>
                      <div className="text-sm font-bold">
                        From{" "}
                        <span className="ml-1">
                          PKR {gig.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <button className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronRight className="w-5 h-5" />
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
