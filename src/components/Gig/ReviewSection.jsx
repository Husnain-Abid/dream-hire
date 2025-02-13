"use client";

import {
  ChevronDown,
  ChevronUp,
  Search,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

import usa from "../../asset/images/profile/usa.png";
import spain from "../../asset/images/profile/spain.png";
import repeat from "../../asset/images/profile/repeat.png";
import project from "../../asset/images/profile/project1.png";

const reviews = [
  {
    id: "1",
    user: {
      name: "bobbi1053",
      initial: "A",
      country: "United States",
      isRepeatClient: true,
      flag: usa,
      textColor: "text-amber-800",
      bgColor: "bg-[#FFE0D4]",
    },
    rating: 5,
    timeAgo: "1 month ago",
    content:
      "I am absolutely thrilled with the website that was created for my business! From start to finish, the team was professional, attentive, and incredibly skilled. They really took the time to understand my needs and vision, and the result exceeded my expectations. The design is modern, user-friendly, and...",
    price: "PKR56,800-PKR113,600",
    duration: "2 months",
    projectType: "WordPress",
  },
  {
    id: "2",
    user: {
      name: "jonhouston993",
      initial: "J",
      country: "United States",
      flag: usa,
      textColor: "text-amber-800",
      bgColor: "bg-[#FFD3E2]",
    },
    rating: 4,
    timeAgo: "2 months ago",
    content:
      "Shaikh Hamza delivered a good website development project; however, there is room for improvement in documentation and the professionalism of his work. Better understanding, politeness, and a higher level of cooperation would enhance the overall collaboration experience.",
    price: "PKR113,600-PKR170,400",
    duration: "3 weeks",
    projectType: "WordPress",
    sellerResponse:
      "Thank you for your feedback. We continuously strive to improve our services.",
  },
  {
    id: "3",
    user: {
      name: "pachums",
      initial: "P",
      country: "Spain",
      flag: spain,
      isRepeatClient: true,
      textColor: "text-white",
      bgColor: "bg-[#465A00]",
    },
    rating: 5,
    timeAgo: "6 days ago",
    content:
      "I had the privilege of working with them on the frontend development of our website, and I am thoroughly impressed by their skills and professionalism. He has an excellent eye for design and user experience. They transformed our vision into a visually stunning and intuitive interface, ensuring the website...",
    price: "PKR170,400-PKR227,200",
    duration: "3 weeks",
    projectType: "Web Application",
    sellerResponse:
      "Thank you for your feedback. We continuously strive to improve our services.",
  },
  {
    id: "4",
    user: {
      name: "albenboo",
      initial: "A",
      country: "United States",
      isRepeatClient: true,
      flag: usa,
      textColor: "text-amber-800",
      bgColor: "bg-[#FFE0D4]",
    },
    rating: 5,
    timeAgo: "1 month ago",
    content:
      "I am absolutely thrilled with the website that was created for my business! From start to finish, the team was professional, attentive, and incredibly skilled. They really took the time to understand my needs and vision, and the result exceeded my expectations. The design is modern, user-friendly, and...",
    price: "PKR56,800-PKR113,600",
    duration: "2 months",
    projectType: "WordPress",
    sellerResponse:
      "Thank you for your feedback. We continuously strive to improve our services.",
  },
  {
    id: "5",
    user: {
      name: "taslimakamali",
      initial: "A",
      country: "United States",
      isRepeatClient: true,
      flag: usa,
      textColor: "text-amber-800",
      bgColor: "bg-[#FFE0D4]",
    },
    rating: 5,
    timeAgo: "1 month ago",
    content:
      "I am absolutely thrilled with the website that was created for my business! From start to finish, the team was professional, attentive, and incredibly skilled. They really took the time to understand my needs and vision, and the result exceeded my expectations. The design is modern, user-friendly, and...",
    price: "PKR56,800-PKR113,600",
    duration: "2 months",
    projectType: "WordPress",
    sellerResponse:
      "Thank you for your feedback. We continuously strive to improve our services.",
  },
];

export default function ReviewSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showWithFiles, setShowWithFiles] = useState(false);

  const [expandedResponses, setExpandedResponses] = useState(new Set());
  const [sortBy, setSortBy] = useState("most-relevant");

  const toggleResponse = (reviewId) => {
    const newExpanded = new Set(expandedResponses);
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId);
    } else {
      newExpanded.add(reviewId);
    }
    setExpandedResponses(newExpanded);
  };

  return (
    <div className="container mx-auto mt-14">
      <div className="max-w-2xl">
        {/* Search and Filter Section */}
        <div className="max-w-xs mb-6 space-y-5 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search reviews"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 text-sm rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="absolute right-0 top-0 h-full flex items-center bg-[#5865F2] px-3 rounded-r-[4px] border-l border-gray-300">
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="flex items-center  mb-6 ">
            <span className="text-sm text-gray-600">Sort By</span>
            <div className="relative">
              <select
                className="appearance-none font-semibold px-4 py-2 pr-10 text-sm bg-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="most-relevant">Most relevant</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="showFiles"
              checked={showWithFiles}
              onChange={(e) => setShowWithFiles(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="showFiles" className="text-sm text-gray-600">
              Only show reviews with files (438)
            </label>
          </div>
        </div>

        {/* Reviews List */}

        <div className="">
          <div className="">
            {reviews.map((review) => (
              <>
                <div key={review.id} className="border rounded-lg p-6 bg-white">
                  <div className="flex items-start gap-4 mb-4 border-b pb-4">
                    <div
                      className={`w-11 h-11 rounded-full ${review.user.bgColor} ${review.user.textColor} flex items-center justify-center  font-medium`}
                    >
                      {review.user.initial}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold">
                          {review.user.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <img src={review.user.flag} alt={review.user.country} />
                        <span>{review.user.country}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3  ${
                            i < review.rating
                              ? "fill-black text-gray-900"
                              : "text-gray-900"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">
                      {" "}
                      . {review.timeAgo}
                    </span>
                  </div>

                  {/* <p className="text-sm text-gray-700 mb-4">{review.content}</p> */}

                  {/* Content */}
                  <p className="text-sm text-gray-700 mb-4">
                    {review.content} <br />
                    {review.content.length > 300 && (
                      <button className="text-black hover:underline ">
                        See more
                      </button>
                    )}
                  </p>

                  {/* Project Details */}
                  <div className="flex items-center gap-8 mb-4 text-sm">
                    <div>
                      <div className="text-sm font-semibold">
                        {review.price}
                      </div>
                      <div className="text-xs text-gray-500">Price</div>
                    </div>

                    {/* Border between divs */}
                    <div className="h-6 border-l border-gray-300"></div>

                    <div>
                      <div className="text-sm font-semibold">
                        {review.duration}
                      </div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                  </div>

                  {/* Seller's Response */}
                  {review.sellerResponse && (
                    <>
                      <div className="mt-4 pt-4 border-t flex items-center justify-between gap-2 text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center text-xs">
                            H
                          </div>

                          <span className="text-xs font-bold">
                            Seller's Response
                          </span>
                        </div>

                        <button
                          className=""
                          onClick={() => toggleResponse(review.id)}
                        >
                          <div>
                            {expandedResponses.has(review.id) ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </button>
                      </div>

                      {expandedResponses.has(review.id) && (
                        <div>
                          <p className="mt-2 text-sm text-gray-600 pl-8">
                            {review.sellerResponse}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
                {/* Helpful Buttons */}
                <div className="flex items-center gap-4 ml-2 mt-2  mb-6">
                  <span className="text-sm text-gray-600">Helpful?</span>
                  <button className="flex gap-2 text-xs text-gray-600 hover:text-gray-900">
                    <ThumbsUp className="w-4 h-4" /> Yes
                  </button>
                  <button className="flex gap-2 items-center text-xs text-gray-600 hover:text-gray-900">
                    <ThumbsDown className="w-4 h-4" /> No
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        <div className="mt-8 text-start">
          <button className="px-6 py-2 border border-gray-900 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">
            Show More Reviews
          </button>
        </div>


        {/* Tags */}
        <div className="my-14 ">
          <h2 className="text-lg font-bold mb-7">Related tags</h2>

          <div className="flex flex-wrap gap-2.5 text-gray-400">
            
            <div className="px-4 py-2 border rounded-md text-sm  bg-[#FAFAFA]">
              <h4>seo service</h4>
            </div>

            <div className="px-4 py-2 border rounded-md text-sm bg-[#FAFAFA]">
              <h4>high da backlinks</h4>
            </div>

            <div className="px-4 py-2 border rounded-md text-sm bg-[#FAFAFA]">
              <h4>seo backlinks</h4>
            </div>

            <div className="px-4 py-2 border rounded-md text-sm bg-[#FAFAFA]">
              <h4>backlinks</h4>
            </div>

            <div className="px-4 py-2 border rounded-md text-sm bg-[#FAFAFA]">
              <h4>link backlinks</h4>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}
