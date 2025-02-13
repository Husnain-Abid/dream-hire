import { Search } from 'lucide-react'
import React from 'react'

import home1 from '../../asset/images/homeslider_1.png'
import home2 from '../../asset/images/homeslider_2.png'


import logo1 from '../../asset/images/trust/logo1.png'
import logo2 from '../../asset/images/trust/logo2.png'
import logo3 from '../../asset/images/trust/logo3.png'
import logo4 from '../../asset/images/trust/logo4.png'
import logo5 from '../../asset/images/trust/logo5.png'
import logo6 from '../../asset/images/trust/logo6.png'



export default function HomeBanner() {


    const profiles = {
        left: [
          home1,
          home2,
          home1
        ],
        right: [
          home2,
          home1,
          home2,
        ],
      }
      
      const trustedCompanies = [
        { name: "Meta", logo: logo1 },
        { name: "Google", logo: logo2 },
        { name: "Netflix", logo: logo3 },
        { name: "P&G", logo: logo4 },
        { name: "PayPal", logo: logo5 },
        { name: "Payoneer", logo: logo6 },
      ]




  return (
    <>
    

    <div
  className="relative min-h-[400px] container mx-auto my-16 bg-gradient-radial from-[#6366F1] to-[#5558E3] border rounded-2xl px-4 py-16"
  style={{
    background: "radial-gradient(50% 50% at 50% 50%, #5865F2 0%, #6269BD 100%)"
  }}
>

      {/* Left sliding images */}
      <div className="absolute left-8 top-0 hidden h-full overflow-hidden md:block w-[110px]">
        <div className="animate-slide-up flex flex-col gap-4">
          {[...profiles.left, ...profiles.left].map((src, i) => (
            <div key={i} className="h-[125px] w-[110px] rounded-2xl overflow-hidden bg-white">
              <img src={src || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Right sliding images */}
      <div className="absolute right-8 top-0 hidden h-full overflow-hidden md:block w-[110px]">
        <div className="animate-slide-down flex flex-col gap-4">
          {[...profiles.right, ...profiles.right].map((src, i) => (
            <div key={i} className="h-[125px] w-[110px] rounded-2xl overflow-hidden bg-white">
              <img src={src || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-8 text-3xl font-medium text-white md:text-5xl">
          We connect people to
          <br />
          bring projects to <span className="italic">life</span>
        </h1>




        {/* Search bar */}
        <div className="relative mx-auto mb-16 max-w-md">
          <input
            type="text"
            placeholder="Search for any service..."
            className="w-full rounded-lg py-2 pl-6 pr-12 text-[10px] shadow-lg outline-none"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-lg bg-[#6366F1] p-2 text-white">
            <Search className="h-3 w-3" />
          </button>
        </div>

        {/* Trusted by section */}
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
          <p className="text-xs font-normal text-white">Trusted by:</p>
            {trustedCompanies.map((company) => (
              <img
                key={company.name}
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                className=" h-2.5 "
              />
            ))}
          </div>
        </div>



        
      </div>
    </div>
    
    </>
  )
}
