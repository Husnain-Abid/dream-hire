"use client"

import { Link } from "react-router-dom"
import cat1 from '../../asset/images/search-page/img1.png'


export default function BusinessRewards() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto">
        <div className="grid items-center gap-7 md:grid-cols-2 md:gap-16">
          {/* Left Column - Image */}
            <div className="relative">
              <img
                src = {cat1} 
                alt="Account tier display showing platinum status"
                className="w-full rounded-2xl"
              />

            </div>

          {/* Right Column - Content */}
          <div className="space-y-6 max-w-lg">
            <h2 className="text-2xl font-medium text-gray-900 md:text-3xl">
              Maximize your budget with  business rewards
            </h2>
            <p className="text-sm text-gray-600">
              Access exclusive benefits like 5% back in Fiverr credits, waivers on project planning fees, freelancer
              sourcing services, and more. Make hiring more rewarding for your business.
            </p>
            <Link
              href="/benefits"
              className="inline-flex rounded-lg bg-[#6366F1] px-6 py-3 text-white transition-colors hover:bg-[#5558E3]"
            >
              Discover the benefits
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

