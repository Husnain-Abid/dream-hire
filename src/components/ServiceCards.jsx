"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import img1 from "../asset/images/serices/img1.png"
import img2 from "../asset/images/serices/img2.png"
import img3 from "../asset/images/serices/img3.png"
import img4 from "../asset/images/serices/img4.png"
import img5 from "../asset/images/serices/img5.png"
import img6 from "../asset/images/serices/img6.png"

const services = [
  {
    title: "Website <br/> Development",
    image: img1,
    bgColor: "bg-[#00732E]",
  },
  {
    title: "Logo Design",
    image: img2,
    bgColor: "bg-[#FF7640]",
  },
  {
    title: "SEO",
    image: img3,
    bgColor: "bg-[#003912]",
  },
  {
    title: "Architecture & <br/> Interior Design",
    image: img4,
    bgColor: "bg-[#4D1727]",
  },
  {
    title: "Social Media <br/> Marketing",
    image: img5,
    bgColor: "bg-[#687200]",
  },
  {
    title: "Voice Over",
    image: img6,
    bgColor: "bg-[#421300]",
  },

  {
    title: "Website <br/> Development",
    image: img1,
    bgColor: "bg-[#00732E]",
  },
  {
    title: "Logo Design",
    image: img2,
    bgColor: "bg-[#FF7640]",
  },
  {
    title: "SEO",
    image: img3,
    bgColor: "bg-[#003912]",
  },
  {
    title: "Architecture & <br/> Interior Design",
    image: img4,
    bgColor: "bg-[#4D1727]",
  },
  {
    title: "Social Media <br/> Marketing",
    image: img5,
    bgColor: "bg-[#687200]",
  },
  {
    title: "Voice Over",
    image: img6,
    bgColor: "bg-[#421300]",
  },




]

export default function ServiceCards() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
  
    // Function to scroll right
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    };
  
    // Function to scroll left
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    };
  
    // Function to handle the visibility of scroll buttons based on scroll position
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0); // Can scroll left if scrollLeft > 0
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth); // Can scroll right if scrollLeft is less than the max scroll position
    };
  
    useEffect(() => {
      // Handle the initial visibility of scroll buttons when the component mounts
      handleScroll();
  
      // Add event listener to handle scrolling
      if (scrollRef.current) {
        scrollRef.current.addEventListener("scroll", handleScroll);
      }
  
      // Clean up event listener when the component is unmounted
      return () => {
        if (scrollRef.current) {
          scrollRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);
  

  return (
    <div className="px-4 py-12">
      <div className="mx-auto container">
        <h2 className="mb-8 text-3xl font-medium text-black">Popular services</h2>

        <div className="relative">
          {/* Scroll Container */}
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative flex min-w-[160px] cursor-pointer flex-col justify-between rounded-xl ${service.bgColor} transition-transform hover:scale-[1.02]`}
              >

                <h3
            className="mb-3 text-xs font-medium p-3 pt-6 text-white"
            dangerouslySetInnerHTML={{ __html: service.title }}
          />

                <div className={`aspect-square h-[126px]  w-full overflow-hidden rounded-xl `}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[126px] p-1 w-full rounded-xl object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

       
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className={`absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 ${!canScrollLeft && "hidden"}`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={scrollRight}
            className={`absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 ${!canScrollRight && "hidden"}`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

