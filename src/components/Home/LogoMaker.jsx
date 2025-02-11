"use client";

import { Link } from "react-router-dom";

import home from "../../asset/images/home4.png";


export default function LogoMaker() {
  return (
    <section className="container mx-auto">
      <div className=" bg-[#A5BEFF] rounded-2xl  ">
        <div className="grid gap-12 px-4 py-16 md:px-16 md:pt-10 md:pb-16 md:grid-cols-2 md:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h1 className="text-[#5865F2] text-2xl font-normal">
                <span className="font-bold"> DreamHire </span> logo maker.
              </h1>
              <h2 className="text-white text-3xl md:text-4xl font-medium leading-tight">
                Make an incredible
                <br />
                logo <span className="text-[#6366F1]"> in seconds </span> 
              </h2>
              <p className="text-sm text-white">
                Pre-designed by top talent. Just add your touch.
              </p>
            </div>

            <Link
              href="/logo-maker"
              className="inline-flex rounded-lg text-sm bg-[#5865F2] px-4 py-2 text-white hover:bg-[#6366F1] transition-colors"
            >
              Try DreamHire Logo Maker
            </Link>
          </div>

          {/* Right Column - Images */}
          <div className="relative ">
            
            <img src={home} alt="home4" className="mx-auto" />


          </div>
        </div>
      </div>
    </section>
  );
}
