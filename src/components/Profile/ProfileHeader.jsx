"use client";

import { useState } from "react";
import { MapPin, MessageCircle, Send, Star } from "lucide-react";
import profile from "../../asset/images/profile/profile.png";

import icon1 from "../../asset/images/profile/star-fill.png";
import icon2 from "../../asset/images/profile/star.png";

export default function ProfileHeader() {
  const [isExpanded, setIsExpanded] = useState(false);

  const skills = [
    "JavaScript developer",
    "jQuery expert",
    "Web developer",
    "Web designer",
    "React expert",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Main Profile Content */}
        <div className="md:col-span-2 max-w-2xl space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col  sm:flex-row sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative h-32 w-32 flex-shrink-0">
              <img
                src={profile}
                alt="Shaikh Hamza"
                className="h-full w-full rounded-full object-cover ring-4 ring-[#00C853]"
              />
            </div>

            {/* Profile Info */}
            <div className="space-y-2 self-center">
              <div>
                <div className="flex items-center gap-5">
                  <h1 className="text-base font-bold">Shaikh Hamza</h1>
                  <span className="text-sm text-gray-500 font-normal">
                    @hamzakhalid2k16
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-gray-900 text-gray-900" />
                    <span className="text-sm font-medium">4.9</span>
                    <span className="text-sm text-gray-500">(1.8k)</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-s pl-3">
                    <span className="text-sm font-semibold ">Level 1</span>
                    <div className="flex ">
                      <img src={icon1} alt="star" />
                      <img src={icon2} alt="star" />
                      <img src={icon2} alt="star" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs">
                Expert in Websites, Web Applications And Mobile Apps Development
              </p>

              <div className="flex flex-wrap gap-4 text-xs ">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-3 w-3"/>
                  <span >Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MessageCircle className="h-3 w-3" />
                  <span >English, German, Dutch, Spanish</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold">About me</h2>
            <div className="relative ">
              <p className={`text-gray-600 text-sm ${!isExpanded && "line-clamp-3"}`}>
                DotClick is an experienced and expert team of specialists in
                Website Designing and Development, Custom Build Web Programs,
                and Mobile Applications. Our goal is to make user friendly and
                highly converting digital experience that boost your business
                success to new heights! We help yo
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-10 text-sm text-gray-600 font-normal hover:underline"
              >
                {isExpanded ? "Show less" : "...Read more"}
              </button>
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full border px-4 py-2 text-xs"
                >
                  {skill}
                </span>
              ))}
              <span className=" px-2 py-2 text-xs">
                +9
              </span>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="md:col-span-1 self-center">
            <div className="mb-6 flex justify-end">
              <button className="rounded-md py-2 px-4 font-semibold text-xs border text-gray-900 hover:text-gray-600 ">
                More about me
              </button>
            </div>


          <div className="rounded-lg border p-6 shadow-sm">

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={profile}
                  alt="Shaikh Hamza"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-sm">Shaikh Hamza</h3>
                  <p className="text-xs text-gray-500">
                    Offline • 12:15 AM local time
                  </p>
                </div>
              </div>

              <button className="w-full flex justify-center items-center gap-4 text-sm rounded-lg bg-[#6366F1] px-4 py-3 text-white hover:bg-[#5558E3]">
               
              <Send className="w-4 h-4" />
               
                Contact me
              </button>

              <p className="text-center text-sm text-gray-500">
                Average response time: 1 hour
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
