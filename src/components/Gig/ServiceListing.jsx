"use client";

import {
  BadgeCheck,
  BookmarkCheck,
  Clock3,
  Heart,
  House,
  MapPin,
  MessageCircle,
  Share2,
  Star,
} from "lucide-react";

import avatar from "../../asset/images/gig/avatar.png";

export default function ServiceListing() {
  return (
    <div className="container mx-auto px-4 py-6 font-inter">
      {/* Breadcrumb and Actions */}
      <div className="flex items-center justify-between mb-8">
        <nav className="flex items-center space-x-2 text-xs text-gray-600">
          <House className="w-3 h-3" />
          <span>/</span>
          <span>Digital Marketing</span>
          <span>/</span>
          <span>Search Engine Optimization (SEO)</span>
          <span>/</span>
          <span className="text-gray-900">Off-Page SEO</span>
        </nav>
    
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            I will seo backlinks high da authority link building service for
            google ranking
          </h1>

          {/* Seller Info */}
          <div className="flex items-start gap-4 mb-8">
            <div className="relative">
              <img
                src={avatar}
                alt="Profile"
                className="w-20 md:w-28 md:h-28 rounded-full object-cover"
              />
              <BadgeCheck className=" w-8 md:w-12 md:h-12 text-blue-600 fill-white rounded-full absolute bottom-1 right-0" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-bold">Jacob M.</h2>
                <span className="ml-4 px-2 p-1 flex items-center gap-2 bg-[#5865F2] text-white text-xs rounded-md">
                  <BadgeCheck className="w-3 h-3 text-[#5865F2] fill-white rounded-full " />
                  Pro
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2 flex-wrap">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gray-900 fill-gray-900"
                    />
                  ))}
                  <span className="ml-1 font-bold text-black">4.9</span>
                  <span className="ml-1 text-gray-500 ">(3224)</span>
                </div>

                <button className="px-3 py-2 border border-gray-300 rounded-lg text-xs font-bold hover:bg-gray-50">
                  Contact me
                </button>
              </div>

              <div className="flex items-center gap-4 text-[10px] md:text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>I speak English</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookmarkCheck className="w-4 h-4" />
                  <span>25,700 orders completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none text-sm ">
            <h3 className="font-semibold mb-3">
              Outrank your competition with proven link building and SEO
              strategies
            </h3>
            <p className="text-gray-600">
              With over 14 years of experience in the field of SEO, I have
              gained extensive knowledge and expertise that enables me to
              provide effective SEO services to businesses. I previously worked
              for one of th...
            </p>
            <button className="text-gray-700 font-bold mt-2">Read More</button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">

        <div className="flex items-center justify-end gap-4 mb-5">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Heart className="w-5 h-5 fill-black " />
            <span className="p-1 border rounded text-sm ">13,783</span>
          </button>
          <button className="px-2 py-1 border rounded  hover:bg-gray-100">
            <Share2 className="w-5 h-5 text-gray-700   " />
          </button>
        </div>


          <div className="border rounded-sm px-6 py-8 ">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-950 font-bold">
                150 White Hat SEO Backlinks
              </h3>
              <span className="text-base font-normal">PKR 53,817</span>
            </div>

            <div className="text-sm text-gray-600 break-all mb-4">
              https://gyazo.com/ <br /> ffab55f24414c945bb29fd6a12e07f29
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-950 mb-2.5">
              <Clock3 className="w-4 h-4" />
              <span>21-day delivery</span>
            </div>

            <button className="w-full bg-[#5865F2] text-white py-2 px-4 rounded text-sm font-semibold hover:bg-blue-700 flex items-center justify-center gap-2">
              <span className="flex-grow text-center">Continue</span>
              <span className="text-xl ml-auto">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
