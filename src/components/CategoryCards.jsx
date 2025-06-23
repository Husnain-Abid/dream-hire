"use client";

import { useRef } from "react";
import logo1 from "../asset/images/category/logo1.svg";
import logo2 from "../asset/images/category/logo2.svg";
import logo3 from "../asset/images/category/logo3.svg";
import logo4 from "../asset/images/category/logo4.svg";
import logo5 from "../asset/images/category/logo5.svg";
import logo6 from "../asset/images/category/logo6.svg";
import logo7 from "../asset/images/category/logo7.svg";
import logo8 from "../asset/images/category/logo8.svg";
import logo9 from "../asset/images/category/logo9.svg";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    icon: logo1,
    name: "Programming <br/> & Tech",
  },
  {
    icon: logo2,
    name: "Graphics & <br/> Design",
  },
  {
    icon: logo3,
    name: "Digital <br/> Marketing",
  },
  {
    icon: logo4,
    name: "Writing & <br/> Translation",
  },
  {
    icon: logo5,
    name: "Video & <br/> Animation",
  },
  {
    icon: logo6,
    name: "AI Services",
  },
  {
    icon: logo7,
    name: "Music & Audio",
  },
  {
    icon: logo8,
    name: "Business",
  },
  {
    icon: logo9,
    name: "Consulting",
  },
];

export default function CategoryCards() {
  const navigate = useNavigate();

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -280 : 280;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full px-4 py-8">
      {/* Category Cards Container */}
      <div className="mx-auto container">
        <div className="relative">
          {/* Scroll Buttons - Only visible on mobile/tablet */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 md:hidden"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M7 1L1 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 md:hidden"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-9 md:overflow-x-hidden scrollbar-hide"
          >
            {categories.map((category, index) => (
              <div
                key={index}
                 onClick={() => navigate('/category')}
                className="group flex min-w-[103px] cursor-pointer flex-col items-start rounded-lg bg-white px-2 py-3 text-center shadow-[0px_8px_8px_0px_rgba(0,0,0,0.1)] transition-all hover:shadow-[8px_8px_8px_0px_rgba(0,0,0,0.1)]">

                <div className="mb-4 rounded-full transition-colors group-hover:bg-gray-100">
                  <img src={category.icon} alt={category.name} />
                </div>

                <h3 className="text-[10px] text-start font-medium text-gray-700 mb-2.5" dangerouslySetInnerHTML={{ __html: category.name }} />

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
