"use client";

import { Link } from "react-router-dom";

import home from "../../asset/images/home5.png";

export default function FindWork() {
  const features = [
    "Find opportunities for  <br/> every  stage of your freelance career",
    "Control when, where, and how you work",
    "Explore different ways to earn",
  ];

  return (
    <section className="container mx-auto mt-24 grid md:grid-cols-2  rounded-xl"
    
    style={{
      background: 'radial-gradient(50% 50% at 50% 50%, #5865F2 0%, #7E88F4 100%)'
    }}    
    >
      {/* Left Column - Image */}
      <div className=" h-full rounded-r-lg ">
        <img
          src={home}
          alt="People working in modern office"
          className="h-full w-full object-cover"
        />
        {/* Overlay gradient for better text contrast */}
      </div>

      {/* Right Column - Content */}
      <div className="px- py-16 md:p-6 rounded-lg text-white"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #5865F2 0%, #7E88F4 100%)'
      }}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Header Content */}
          <div className="mb-12 space-y-4">
            <p className="text-xl">For talent</p>
            <h2 className="text-3xl font-medium md:text-5xl">
              Find great
              <br />
              work
            </h2>
            <p className="text-base leading-relaxed">
              Meet clients you&apos;re excited to work with and take <br /> your
              career or business to new heights.
            </p>
          </div>

          {/* Features List */}
          <div>
            <div className="mb-12 space-x-8 flex border-t">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start p-3  text-lg">
                  <p
                    className="text-xs font-medium"
                    dangerouslySetInnerHTML={{ __html: feature }}
                  ></p>
                </div>
              ))}

              {/* CTA Button */}
            </div>

            <div>
              <Link
                href="/opportunities"
                className="inline-flex font-inter rounded-md text-xs bg-white px-8 py-2 font-medium text-[#6366F1] hover:bg-white/90 transition-colors"
              >
                Find opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
