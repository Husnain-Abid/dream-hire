import { Search } from "lucide-react";
import hero from "../../asset/images/search-page/hero.png";

export default function SearchHero() {
  return (
    <section
      className="relative  container mx-auto my-16 border rounded-2xl px-7 py-14  "
      style={{
        backgroundImage: `url(${hero})`, // Correctly referencing the banner variable
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <div className="grid gap-12 md:grid-cols-1">
          {/* Left Content */}
          <div className="relative z-10 ">
            {/* Project Catalog Text */}
            <p className="text-xl font-medium text-white/90 mb-14">
              Project Catalog™
            </p>

            {/* Main Heading */}
            <div className="mb-7">
              <h1 className="text-3xl font-medium text-white md:text-5xl">
                Premium business solution.
                <br />
                Unmatched results.
                <br />
                No compromises.
              </h1>
            </div>

            {/* Custom Search Input */}

            <div className="flex items-center ">
              <span className="text-4xl font-medium text-white md:text-6xl">se</span>
              <div className="relative mx-2 flex-1 max-w-64 self-end">
                <input
                  type="text"
                  className="w-full rounded-full border-4 border-[#80CFD7] bg-transparent px-4 py-1 pl-10  text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00C8C8] pr-10" // Adjusted for right padding
                />
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#80CFD7]" />
                <div className="absolute right-0 top-0 h-full border-r-4 border-[#80CFD7]"></div>{" "}
                {/* Vertical line */}
              </div>
              <span className="text-4xl font-medium text-white md:text-6xl" >rch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
