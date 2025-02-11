"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function FreelancerProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Expert Section */}
      <div className="space-y-2">
        <h2 className="text-sm font-medium text-gray-700">Expert in:</h2>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516z" />
            </svg>
            Search Engine Optimization (SEO)
          </span>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">What people loved about this freelancer</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            See all reviews
          </a>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-4">
              <div className="flex-none w-full max-w-lg border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">maximus3630</span>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile5.PNG-R13IkQH4hLyXI55Vn6Cbd8YHjKjZg8.png"
                        alt="United States"
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-500">United States</span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">
                      Easily the best link-building package on Fiverr. This is the second time I've ordered from Jacob
                      because a month or two ago I ordered 20 different packages...
                      <button className="text-blue-600 hover:underline ml-1">See more</button>
                    </p>
                    <span className="block mt-2 text-xs text-gray-500">2 years ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">About this Gig</h2>
          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">Pro</span>
        </div>
        <p className="text-gray-600">
          One of The Most Trusted SEO Professionals on Fiverr With 15 Years Of Experience In SEO
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Reviews:</span>
            <a href="https://tinyurl.com/jacob2reviews" className="text-blue-600 hover:underline">
              https://tinyurl.com/jacob2reviews
            </a>
          </div>
          <button className="text-blue-600 hover:underline text-sm">Read More</button>
        </div>
      </div>

      {/* Industry Expertise */}
      <div className="space-y-4">
        <h2 className="text-sm font-medium text-gray-700">Industry expertise:</h2>
        <div className="flex flex-wrap gap-2">
          {["Agriculture", "Animals & pets", "Art & design"].map((industry) => (
            <span key={industry} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {industry}
            </span>
          ))}
          <button className="px-3 py-1 text-blue-600 text-sm hover:underline">+33 more</button>
        </div>
      </div>

      {/* Language */}
      <div className="space-y-2">
        <h2 className="text-sm font-medium text-gray-700">Language:</h2>
        <span className="text-gray-600">English</span>
      </div>
    </div>
  )
}

