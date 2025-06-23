"use client"

import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import card1 from "../../asset/images/profile/card1.png";
import card2 from "../../asset/images/profile/card2.png";
import card3 from "../../asset/images/profile/card3.png";
import card4 from "../../asset/images/profile/card4.png";


const gigs = [
  {
    id: 1,
    title: "I will build luxury wordpress website design and website development",
    image: card1,
    rating: 4.9,
    reviews: 753,
    price: 44512,
  },
  {
    id: 2,
    title: "I will fix or migrate your wordpress website",
    image: card2,
    rating: 5.0,
    reviews: 140,
    price: 5935,
  },
  {
    id: 3,
    title: "I will provide maintenance and support for your wordpress website",
    image: card3,
    rating: 5.0,
    reviews: 96,
    price: 14838,
  },
  {
    id: 4,
    title: "I will develop custom web application and business application",
    image: card4,
    rating: 4.9,
    reviews: 85,
    price: 89024,
  },
]

export default function MyGigs() {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-8 font-inter">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-6">My Gigs</h2>

        {/* Gigs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {gigs.map((gig) => (
            <Link
              key={gig.id}
              href={`/gigs/${gig.id}`}
              className="group block overflow-hidden   transition-shadow"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden rounded-md border">
                <img
                  src={gig.image || "/placeholder.svg"}
                  alt={gig.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-4 space-y-2">
                {/* Title */}
                <h3 className="text-sm line-clamp-2 min-h-[40px]">{gig.title}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-gray-700 text-gray-700" />
                  <span className="text-sm font-medium">{gig.rating}</span>
                  <span className="text-gray-400 text-sm">({gig.reviews})</span>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-center justify-space gap-4 ">
                    <span className="text-sm font-bold text-gray-900">From</span>
                    <span className="font-medium">{formatPrice(gig.price)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-start">
          <Link
            href="/gigs"
            className="inline-flex items-center justify-center rounded-md border border-gray-950 px-6 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            View all (6)
          </Link>
        </div>
      </div>
    </section>
  )
}

