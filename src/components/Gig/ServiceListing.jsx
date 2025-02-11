"use client"


import { BadgeCheck, Clock3, Heart, House, MapPin, MessageCircle, Share2, Star } from "lucide-react"


export default function ServiceListing() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb and Actions */}
      <div className="flex items-center justify-between mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <House className="w-4 h-4" />
          <span>/</span>
          <span>Digital Marketing</span>
          <span>/</span>
          <span>Search Engine Optimization (SEO)</span>
          <span>/</span>
          <span className="text-gray-900">Off-Page SEO</span>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Heart className="w-5 h-5" />
            <span>13,783</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            I will seo backlinks high da authority link building service for google ranking
          </h1>

          {/* Seller Info */}
          <div className="flex items-start gap-4 mb-8">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile1.PNG-uotoQ3RH7MLiHyQGmrAt1q0knqF8IZ.png"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <BadgeCheck  className="w-6 h-6 text-blue-600 bg-white rounded-full absolute -bottom-1 -right-1" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-semibold">Jacob M.</h2>
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">Pro</span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                  <span className="ml-1 font-medium">4.9</span>
                  <span className="ml-1 text-gray-500">(3224)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>I speak English</span>
                </div>
              </div>
            </div>

            <button className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
              Contact me
            </button>
          </div>

          {/* Description */}
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">
              Outrank your competition with proven link building and SEO strategies
            </h3>
            <p className="text-gray-600">
              With over 14 years of experience in the field of SEO, I have gained extensive knowledge and expertise that
              enables me to provide effective SEO services to businesses. I previously worked for one of th...
            </p>
            <button className="text-blue-600 font-medium mt-2">Read More</button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">150 White Hat SEO Backlinks</h3>
              <span className="font-bold">PKR 53,817</span>
            </div>

            <div className="text-sm text-gray-600 break-all mb-4">
              https://gyazo.com/ffab55f24414c945bb29fd6a12e07f29
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Clock3 className="w-4 h-4" />
              <span>21-day delivery</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
              Continue
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

