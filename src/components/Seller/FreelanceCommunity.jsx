import { Heart } from "lucide-react"

import cat1 from '../../asset/images/seller-page/img1.png'
import cat2 from '../../asset/images/seller-page/img2.png'
import cat3 from '../../asset/images/seller-page/img3.png'
import cat4 from '../../asset/images/seller-page/img4.png'
import cat5 from '../../asset/images/seller-page/img5.png'
import cat6 from '../../asset/images/seller-page/img6.png'
import cat7 from '../../asset/images/seller-page/img7.png'
import { useNavigate } from "react-router-dom"


const professionals = [
  {
    role: "Designer",
    image: cat1,
  },
  {
    role: "Developer",
    image: cat2,
  },
  {
    role: "Writer",
    image: cat3,
  },
  {
    role: "Video Editor",
    image: cat4,
  },
  {
    role: "Musician",
    image: cat5,
  },
  {
    role: "Voiceover Artist",
    image: cat6,
  },
  {
    role: "Social Media Marketer",
    image: cat7,
  },
]



export default function FreelanceCommunity() {

  const navigate = useNavigate(); // 🔑

  return (

    <section className="px-4 py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-lg font-medium text-gray-900 md:text-2xl">
          Join our growing freelance community
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Professional Cards */}
          {professionals.map((professional, index) => (
            <div key={index}
onClick={() => {
  console.log("Navigating to /profile");
  navigate("/profile");
}}              className="group relative  rounded-2xl">

              <img
                src={professional.image}
                alt={`${professional.role} professional`}

                className=" w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-0  p-4 ">
                <div className="text-white " >
                  <p className="text-base font-medium">I am</p>
                  <p className="text-xl font-medium">a {professional.role}</p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#EEEEEE] p-6 text-center">
            <Heart className="mb-4 h-8 w-8 text-red-500 fill-red-500" />
            <h3 className="mb-6 text-2xl font-medium text-gray-500">
              What&apos;s
              <br />
              your skill?
            </h3>
            <button className="rounded-sm text-sm bg-[#6366F1] px-8 py-3 text-white transition-colors hover:bg-[#5558E3]">
              Become a Seller
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

