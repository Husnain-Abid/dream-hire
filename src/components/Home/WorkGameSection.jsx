"use client"

import { Link } from "react-router-dom"
import home1 from "../../asset/images/home1.png";
import icon1 from "../../asset/icons/home/icon1.png";
import icon2 from "../../asset/icons/home/icon2.png";
import icon3 from "../../asset/icons/home/icon3.png";


export default function WorkGameSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-center">
        {/* Image Column */}
        <div className="relative rounded-lg col-span-5 overflow-hidden">
          <img
            src={home1}
            alt="Person working at desk"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Content Column */}
        <div className="space-y-8 col-span-7">
          {/* Heading */}
          <h2 className="text-4xl font-medium lg:text-5xl">
            Up your work game, <span className="text-[#5865F2] ">it's easy</span>
          </h2>

          {/* Features List */}
          <div className="space-y-5">
            {/* Feature 1 */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">

<img src={icon1} alt="icon1" />

                <h3 className="text-lg font-medium">No cost to join</h3>
              </div>
              <p className="text-sm font-medium pl-7">
                Register and browse talent profiles, explore projects, or even book a consultation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                
                
                <img src={icon2} alt="icon1" />
               
                <h3 className="text-lg font-medium">Post a job and hire top talent</h3>
              </div>
              <p className="text-sm font-medium pl-7">
                Finding talent doesn't have to be a chore. Post a job or we can search for you!
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                
                
                <img src={icon3} alt="icon1" />
                
                <h3 className="text-lg font-medium">Work with the best-without breaking the bank</h3>
              </div>
              <p className="text-sm font-medium pl-7">
                DreamHire makes it affordable to up your work and take advantage of low transaction rates.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/signup"
              className="inline-flex justify-center rounded-lg text-sm bg-[#5865F2] px-6 py-2 font-medium text-white hover:bg-[#5558E3] transition-colors"
            >
              Sign up for free
            </Link>
            <Link
              href="/learn"
              className="inline-flex justify-center rounded-lg text-sm border border-[#5865F2] px-6 py-2  font-medium text-[#6366F1] hover:bg-[#6366F1]/5 transition-colors"
            >
              Learn how to hire
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

