"use client"

import img1 from "../../asset/images/category-page/Category/img1.png";
import img2 from "../../asset/images/category-page/Category/img2.png";
import img3 from "../../asset/images/category-page/Category/img3.png";
import img4 from "../../asset/images/category-page/Category/img4.png";
import img5 from "../../asset/images/category-page/Category/img5.png";
import img6 from "../../asset/images/category-page/Category/img6.png";
import img7 from "../../asset/images/category-page/Category/img7.png";
import img8 from "../../asset/images/category-page/Category/img8.png";


const categories = [
  {
    title: "Websites",
    image: img1,
    bgColor: "bg-[#FFE5E0]",
    subcategories: ["Website Development", "Website Maintenance", "WordPress", "Shopify", "Custom Websites"],
  },
  {
    title: "Application Development",
    image: img2,
    bgColor: "bg-[#005C2E]",
    subcategories: [
      "Web Applications",
      "Desktop Applications",
      "Game Development",
      "Chatbot Development",
      "Browser Extensions",
    ],
  },
  {
    title: "Software Development",
    image: img3,
    bgColor: "bg-[#D1FFE3]",
    subcategories: [
      "Software Development",
      "AI Development",
      "APIs & Integrations",
      "Scripting",
      "Plugins Development",
    ],
  },
  {
    title: "Mobile Apps",
    image: img4,
    bgColor: "bg-[#B84A77]",
    subcategories: [
      "Mobile App Development",
      "Cross-platform Apps",
      "Android App Development",
      "iOS App Development",
      "Mobile App Maintenance",
    ],
  },
  {
    title: "Website Platforms",
    image: img5,
    bgColor: "bg-[#4A5C00]",
    subcategories: ["Wix", "Webflow", "GoDaddy", "Squarespace", "WooCommerce"],
  },
  {
    title: "Support & Cybersecurity",
    image: img6,
    bgColor: "bg-[#3D001F]",
    subcategories: [
      "Support & IT",
      "Cloud Computing",
      { name: "DevOps Engineering", isNew: true },
      "Cybersecurity",
      "Development for Streamers",
      "Convert Files",
    ],
  },
  {
    title: "Blockchain & Cryptocurrency",
    image: img7,
    bgColor: "bg-[#FFF5F5]",
    subcategories: [
      { name: "Blockchain Development & Solutions", isNew: true },
      "Decentralized Apps (dApps)",
      "Coin Design & Tokenization",
      "Blockchain Security & Auditing",
      "Exchange Platforms",
    ],
  },
  {
    title: "Miscellaneous",
    image: img8,
    bgColor: "bg-gray-100",
    subcategories: ["Electronics Engineering", "QA & Review", "User Testing", "Online Coding Lessons"],
  },
]

export default function ProgrammingCategories() {
  return (
    <div className="px-4 py-16 font-inter">
      <div className="container mx-auto">
        <h2 className=" font-bold text-xl text-gray-900">Explore Programming & Tech</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div key={index} className="group space-y-6 mt-6">
              {/* Card Image */}
              <div
                className={`relative aspect-[3/2] overflow-hidden rounded-2xl transition-transform group-hover:scale-[1.02]`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Category Content */}
              <div className="space-y-5">
                <h3 className="text-lg font-medium mb-2 ">{category.title}</h3>
                <ul className="space-y-4">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      <a href="#" className="flex items-center text-sm gap-2 text-gray-400 hover:text-white transition-colors">
                        {typeof subcategory === "string" ? (
                          subcategory
                        ) : (
                          <>
                            <div>
                               {subcategory.name}
                            {subcategory.isNew && (
                              <span className="rounded-full border border-[#6366F1] text-[#6366F1] px-2 py-0.5 ml-3 text-[10px] ">New</span>
                            )}
                              
                              </div>
                          </>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

