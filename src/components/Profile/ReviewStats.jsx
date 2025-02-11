import { Star } from 'lucide-react'
import React from 'react'

export default function ReviewStats() {
    const ratings = [
        { stars: 5, count: 1741 },
        { stars: 4, count: 44 },
        { stars: 3, count: 11 },
        { stars: 2, count: 3 },
        { stars: 1, count: 11 },
      ]
    
      const totalReviews = ratings.reduce((sum, rating) => sum + rating.count, 0)
      const maxCount = Math.max(...ratings.map((r) => r.count))
    
      const breakdownMetrics = [
        { label: "Seller communication level", rating: 4.9 },
        { label: "Quality of delivery", rating: 4.9 },
        { label: "Value of delivery", rating: 4.9 },
      ]
    
      const StarRating = ({ rating }) => (
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-black text-black" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      )
    
      return (
        <div className="space-y-8 container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold">{totalReviews.toLocaleString()} Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex ">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-black text-black" />
                ))}
              </div>
              <span className="text-sm font-bold">4.9</span>
            </div>
          </div>
    
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl">
            {/* Star Rating Breakdown */}
            <div className="space-y-3">
              {ratings.map(({ stars, count }) => (
                <div key={stars} className="flex items-center gap-3">
                  <div className="w-14 text-sm text-gray-700 font-bold">{stars} Stars</div>
                  <div className="flex-1">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-300">
                      <div
                        className="h-full bg-gray-800"
                        style={{
                          width: `${(count / maxCount) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-12 text-left text-sm text-gray-900">({count})</div>
                </div>
              ))}
            </div>
    
            {/* Rating Breakdown */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Rating Breakdown</h3>
              <div className="space-y-4">
                {breakdownMetrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{metric.label}</span>
                    <StarRating rating={metric.rating} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
}
