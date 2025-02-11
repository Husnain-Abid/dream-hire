"use client";

import { Link } from "react-router-dom";
import cat1 from "../../asset/images/search-page/img2.png";
import cat2 from "../../asset/images/search-page/img3.png";

export default function ExpertGuidance() {
  const cards = [
    {
      title: "Dedicated Business Success Manager",
      description:
        "Our Business Success Team will help you set up projects, find you the right freelance talent, and get more out of your budget.",
      image: cat1,
      hasLink: false,
    },
    {
      title: "Project Manager",
      description:
        "A project manager, experienced in your industry, will plan, coordinate, and execute your projects with a team of freelance talent.",
      image: cat2,
      hasLink: true,
    },
  ];

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="mb-10 text-lg font-normal text-gray-900 md:text-[22px]">
          Expert guidance at every step
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {cards.map((card, index) => (
            <div key={index}>
              {/* Card Image */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="py-5 max-w-xl ">
                <h3 className="mb-2 text-base font-semibold">{card.title}</h3>
                <p className="text-gray-700 text-sm">
                  {card.description}
                  {card.hasLink && (
                    <Link
                      href="/learn-more"
                      className="ml-1 text-white underline hover:text-white/90"
                    >
                      Learn more
                    </Link>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
