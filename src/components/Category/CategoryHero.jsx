import { Search } from "lucide-react";
import banner from "../../asset/images/category-page/banner.png";
import React from "react";

export default function CategoryHero() {
  return (
    <section
      className="relative container mx-auto my-16 border rounded-2xl px-6 py-12  min-h-[480px] overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`, // Correctly referencing the banner variable
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        {/* Content Container */}
        <div className="max-w-2xl space-y-9">
          {/* Project Catalog Text */}
          <p className="mb-8 text-xl text-white">Project Catalog™</p>

          {/* Main Heading */}
          <h1 className="mb-14 text-5xl font-medium leading-tight text-white md:text-6xl">
            Clear scope.
            <br />
            Upfront price.
            <br />
            No surprises.
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-md mb-40 ">
            <input
              type="text"
              placeholder="Search for any service..."
              className="w-full rounded-lg py-2 pl-6 pr-12 text-lg shadow-lg  outline-none"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-[#1D2939] p-2 text-white transition-colors hover:bg-[#2C3E50]"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}
