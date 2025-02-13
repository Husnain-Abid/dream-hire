"use client";

import { Info } from "lucide-react";
import img1 from "../../asset/images/gig/client1.png";
import img2 from "../../asset/images/gig/client2.png";

const clients = [
  {
    id: 1,
    name: "Creative Critters",
    logo: img1,
    description:
      "Within 2 weeks, the primary 8 keywords managed to secure a spot on the first page of Google's search results, with a few of them even competing in the top 3. This led to a doubling of SEMrush visibility as well.",
    dateRange: "Sep 2021-Oct 2021",
  },
  {
    id: 2,
    name: "Front Range Locksmith",
    logo: img2,
    description:
      "I worked on the off-page SEO of the website for Front Range Locksmith. As a result of this project, the website achieved a significant boost in its organic rankings for highly competitive keywords.",
    dateRange: "Nov 2021-Dec 2021",
  },
];

export default function ClientsSection() {
  return (
    <div className="container mx-auto ">
      <div className="max-w-2xl space-y-8">
        {/* Warning Box */}
        <div className="bg-white border rounded-sm p-4">
          <div className="flex items-start gap-3">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm text-gray-900 flex items-center gap-2">
                <Info className="w-4 h-4  fill-black text-white " />
                SEO service providers cannot guarantee results
              </h3>
              <p className="text-sm text-gray-600 ">
                SEO services offer implementation of SEO practices only, which
                may take weeks or months before any results begin to show.
              </p>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              Clients I've worked with
            </h2>
            <button className="text-black font-bold hover:underline">
              Show all (5)
            </button>
          </div>

          {/* Clients Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {clients.map((client) => (
              <div
                key={client.id}
                className="border rounded-lg p-6 bg-white hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  {/* Client Header */}
                  <div className="space-y-4">

                    <img src={client.logo} alt="logo" />


                    <div className="flex items-center gap-6">
                      <h3 className="text-sm font-medium text-gray-900">
                        {client.name}
                      </h3>
                      <button className="text-gray-500 hover:text-gray-600">
                        <Info className="w-3 h-3" />
                      </button>
                    </div>
                 
                  </div>


                  {/* Description */}
                  <p className="text-sm  text-gray-600">{client.description}</p>

                  {/* Date */}
                  <div className="text-xs text-gray-400">
                    {client.dateRange}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
