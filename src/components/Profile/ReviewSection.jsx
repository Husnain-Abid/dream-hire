"use client";

import { ChevronDown, ChevronUp, Search, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    id: "1",
    user: {
      name: "bobbi1053",
      initial: "A",
      country: "United States",
      isRepeatClient: true,
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
      isRepeatClient: true,
    },
    rating: 5,
    timeAgo: "6 days ago",
    content:
      "I had the privilege of working with them on the frontend development of our website, and I am thoroughly impressed by their skills and professionalism. He has an excellent eye for design and user experience. They transformed our vision into a visually stunning and intuitive interface, ensuring the website...",
    price: "PKR170,400-PKR227,200",
    duration: "3 weeks",
    projectType: "Web Application",
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
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Section */}
      <div className="max-w-xs mb-6 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search reviews"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 text-sm rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 p-2 ">
            <Search className="w-4 h-4 text-white" />
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
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-gray-600">1-5 out of 1810 Reviews</span>
          <div className="relative">
            <select
              className="appearance-none border rounded-lg px-4 py-2 pr-8 text-sm bg-white"
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

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-6 bg-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF1F0] flex items-center justify-center text-[#F55B53] font-medium">
                  {review.user.initial}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{review.user.name}</span>
                    {review.user.isRepeatClient && (
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        Repeat Client
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{review.user.country}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{review.timeAgo}</span>
              </div>

              <p className="text-gray-700 mb-4">{review.content}</p>

              <div className="mt-4 pt-4 border-t">
                {review.sellerResponse && (
                  <button
                    className="flex items-center gap-2 text-sm font-medium"
                    onClick={() => toggleResponse(review.id)}
                  >
                    Seller's Response
                    {expandedResponses.has(review.id) ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                )}
                {expandedResponses.has(review.id) && (
                  <p className="mt-2 text-sm text-gray-600 pl-8">
                    {review.sellerResponse}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          Show More Reviews
        </button>
      </div>
    </div>
  );
}
