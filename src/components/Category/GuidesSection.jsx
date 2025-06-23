"use client"

import { Link } from "react-router-dom"
import cat1 from "../../asset/images/category-page/Category/service1.png"; 
import cat2 from "../../asset/images/category-page/Category/service2.png"; 
import cat3 from "../../asset/images/category-page/Category/service3.png"; 



export default function GuidesSection() {
  const guides = [
    {
      title: "How to build a WordPress website for your small business",
      image: cat1,
      link: "/guides/website",
    },
    {
      title: "How to Find a Web Developer in 2023",
      image: cat2,
      link: "/guides/ai-business",
    },
    {
      title: "10 Best Website Builders for Small Business",
      image: cat3,
      link: "/guides/logo-design",
    },
  ]

  return (
    <>
      {/* Guides Section */}
      <section className="container mx-auto px-4 my-10 font-inter">
        <div className="mb-6 ">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Guides related to Programming & Tech</h2>
       
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href={guide.link}
              className="group block overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
            >
              <div className={`aspect-[4/3] relative `}>
                <img src={guide.image} alt={guide.title} className="h-full w-full object-cover rounded-2xl" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900 md:max-w-80">{guide.title}</h3>
            </Link>
          ))}
        </div>
      </section>

    </>
  )
}

