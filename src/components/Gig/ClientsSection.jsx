"use client"

import { Info } from "lucide-react";

const clients = [
  {
    id: 1,
    name: "Creative Critters",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile6.PNG-0pWRGJhtYqIhthWvM7z0UtUIGzxg6J.png",
    description:
      "Within 2 weeks, the primary 8 keywords managed to secure a spot on the first page of Google's search results, with a few of them even competing in the top 3. This led to a doubling of SEMrush visibility as well.",
    dateRange: "Sep 2021-Oct 2021",
  },
  {
    id: 2,
    name: "Front Range Locksmith",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile6.PNG-0pWRGJhtYqIhthWvM7z0UtUIGzxg6J.png",
    description:
      "I worked on the off-page SEO of the website for Front Range Locksmith. As a result of this project, the website achieved a significant boost in its organic rankings for highly competitive keywords.",
    dateRange: "Nov 2021-Dec 2021",
  },
];

export default function ClientsSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Warning Box */}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-medium text-gray-900">SEO service providers cannot guarantee results</h3>
            <p className="text-sm text-gray-600">
              SEO services offer implementation of SEO practices only, which may take weeks or months before any results begin to show.
            </p>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Clients I've worked with</h2>
          <button className="text-sm text-blue-600 hover:underline">Show all (5)</button>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {clients.map((client) => (
            <div key={client.id} className="border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* Client Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        client.id === 1 ? "bg-[#8CC63F]" : "bg-[#3B82F6]"
                      }`}
                    >
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900">{client.name}</h3>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Info className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600">{client.description}</p>

                {/* Date */}
                <div className="text-sm text-gray-500">{client.dateRange}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
