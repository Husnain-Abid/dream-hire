"use client"

import { Search } from "lucide-react"

export default function SellerHero() {
  return (
    <section className="relative min-h-[600px] bg-black px-4 py-16">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10 space-y-12">
            {/* Project Catalog Text */}
            <p className="text-xl text-white/90">Project Catalog™</p>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl font-medium text-white md:text-6xl">
                Premium business solution.
                <br />
                Unmatched results.
                <br />
                No compromises.
              </h1>
            </div>

            {/* Custom Search Input */}
            <div className="flex items-center text-4xl font-medium text-white md:text-6xl">
              <span>se</span>
              <div className="relative mx-2 flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="arch"
                  className="w-full rounded-lg border-2 border-[#00C8C8] bg-transparent px-4 py-2 text-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00C8C8]"
                />
                <Search className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 text-[#00C8C8]" />
              </div>
              <span>rch</span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="absolute right-0 top-0 h-full w-1/2">
            {/* Glow Effect */}
            <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-[#00C8C8] blur-[100px] opacity-30" />

            {/* Stairs Image */}
            <div className="relative h-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2087-vWefXuB5KQeZV6iRhiVvYmEnecv1J9.png"
                alt="Person climbing glowing stairs"
                className="absolute right-0 h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

