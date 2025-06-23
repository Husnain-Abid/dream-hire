"use client"

import { Link } from "react-router-dom"
import cat1 from "../../asset/images/cat1.png"; 
import cat2 from "../../asset/images/cat2.png"; 
import cat3 from "../../asset/images/cat3.png"; 


export default function GuidesSection() {
  const guides = [
    {
      title: "Build a website from scratch",
      image: cat1,
      link: "/guides/website",
    },
    {
      title: "Grow your business with AI",
      image: cat2,
      link: "/guides/ai-business",
    },
    {
      title: "Create a logo for your business",
      image: cat3,
      link: "/guides/logo-design",
    },
  ]

  return (
    <>
      {/* Guides Section */}
      <section className="container mx-auto px-4 my-10 font-inter">
        <div className="mb-6 ">
          <h2 className="text-4xl text-gray-900 mb-1">Guides to help you grow</h2>
          <Link href="/guides" className="text-gray-900 text-sm hover:underline">
            See more
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href={guide.link}
              className="group block overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
            >
              <div className={`aspect-[4/3] relative `}>
                <img src={guide.image} alt={guide.title} className="h-full w-full object-cover rounded-2xl" />
              </div>
              <h3 className="mt-4 font-bold text-gray-900">{guide.title}</h3>
            </Link>
          ))}
        </div>
      </section>

    </>
  )
}

