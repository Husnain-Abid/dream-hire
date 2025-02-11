"use client"

import { useState } from "react"

import { Clock3, Info } from "lucide-react"

const orderOptions = [
  { id: "links", label: "250 Links in Total", price: 27636, info: "Total number of backlinks provided" },
  { id: "da80", label: "Include Da80 Links", price: 7273, info: "Domain Authority 80+ websites" },
  { id: "da90", label: "Include Da90 Links", price: 7273, info: "Domain Authority 90+ websites" },
  { id: "delivery", label: "10 Days Delivery", price: 11637, info: "Faster delivery option" },
]

export default function OrderDetails() {
  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState(new Set(["links"]))
  const basePrice = 817

  const totalPrice = [...selectedOptions].reduce(
    (sum, option) => sum + (orderOptions.find((o) => o.id === option)?.price || 0),
    basePrice * quantity
  )

  const toggleOption = (optionId) => {
    const newSelected = new Set(selectedOptions)
    if (newSelected.has(optionId)) {
      newSelected.delete(optionId)
    } else {
      newSelected.add(optionId)
    }
    setSelectedOptions(newSelected)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white border rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Order details</h2>
        <div className="space-y-4">
          <h3 className="font-medium">150 White Hat SEO Backlinks</h3>
          <p className="text-gray-600 text-sm">White hat link building service offering 150 manually built SEO backlinks</p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock3 className="w-4 h-4" />
            <span>21-day delivery</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Gig Quantity</span>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value={1}>1 (PKR {basePrice})</option>
              <option value={2}>2 (PKR {basePrice * 2})</option>
              <option value={3}>3 (PKR {basePrice * 3})</option>
            </select>
          </div>

          {orderOptions.map((option) => (
            <div key={option.id} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={option.id}
                  checked={selectedOptions.has(option.id)}
                  onChange={() => toggleOption(option.id)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={option.id} className="text-sm">{option.label}</label>
                {option.info && (
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-4 h-4" />
                  </button>
                )}
              </div>
              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>1 (PKR {option.price.toLocaleString()})</option>
              </select>
            </div>
          ))}
        </div>

        <button className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800">
          Continue (PKR {totalPrice.toLocaleString()})
        </button>
      </div>
    </div>
  )
}
