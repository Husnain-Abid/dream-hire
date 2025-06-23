"use client";

import { useState } from "react";

import { CircleHelp, Clock3, Info } from "lucide-react";

const orderOptions = [
  {
    id: "links",
    label: "250 Links in Total",
    price: 27636,
    info: "Total number of backlinks provided",
  },
  {
    id: "da80",
    label: "Include Da80 Links",
    price: 7273,
    info: "Domain Authority 80+ websites",
  },
  {
    id: "da90",
    label: "Include Da90 Links",
    price: 7273,
    info: "Domain Authority 90+ websites",
  },
  {
    id: "delivery",
    label: "10 Days Delivery",
    price: 11637,
    info: "Faster delivery option",
  },
];

export default function OrderDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState(new Set(["links"]));
  const basePrice = 817;

  const totalPrice = [...selectedOptions].reduce(
    (sum, option) =>
      sum + (orderOptions.find((o) => o.id === option)?.price || 0),
    basePrice * quantity
  );

  const toggleOption = (optionId) => {
    const newSelected = new Set(selectedOptions);
    if (newSelected.has(optionId)) {
      newSelected.delete(optionId);
    } else {
      newSelected.add(optionId);
    }
    setSelectedOptions(newSelected);
  };

  return (
    <div className="container mx-auto mt-14 font-inter">
      <div className="max-w-2xl space-y-8">
        <h2 className="text-xl font-bold">Order details</h2>
        <div className="bg-white border rounded-sm p-6 ">
        <div className="text-sm space-y-4 border-b border-gray-300 pb-4">
        <h3 className="font-bold">150 White Hat SEO Backlinks</h3>
            <p className="text-gray-600 ">
              White hat link building service offering 150 manually built SEO
              backlinks
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-9500">
              <Clock3 className="w-3 h-3 " />
              <span>21-day delivery</span>
            </div>
          </div>

          <div className="">
            <div className="flex justify-between items-center py-4 ">
              <span className="text-sm text-gray-600 font-medium">
                Gig Quantity
              </span>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-36 border rounded-sm px-3 py-2 text-sm text-gray-600"
              >
                <option value={1}>1 (PKR {basePrice})</option>
                <option value={2}>2 (PKR {basePrice * 2})</option>
                <option value={3}>3 (PKR {basePrice * 3})</option>
              </select>
            </div>

            {orderOptions.map((option, index) => (
              
              
              <div
                key={option.id}
                className={`flex justify-between items-center p-2 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={option.id}
                    checked={selectedOptions.has(option.id)}
                    onChange={() => toggleOption(option.id)}
                    className="rounded border-gray-300 text-gray-600 focus:ring-gray-600 peer"
                  />
                  <label htmlFor={option.id} className="text-sm text-gray-600">
                    {option.label}
                  </label>
                  {option.info && (
                    <button className="text-gray-400 hover:text-gray-600">
                      <CircleHelp className="w-4 h-4 fill-gray-950 text-white " />
                    </button>
                  )}
                </div>

                <select className="border rounded-sm w-36 px-3 py-2 text-sm text-gray-600">
                  <option>1 (PKR {option.price.toLocaleString()})</option>
                </select>
              </div>
            ))}
          </div>


          <div className="flex justify-end border-t border-gray-300 pt-4">
            <button className="flex gap-4 justify-end text-sm bg-black text-white rounded-lg py-2 px-4 font-medium hover:bg-gray-800">
              <span> Continue </span>

              <span> (PKR {totalPrice.toLocaleString()}) </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
