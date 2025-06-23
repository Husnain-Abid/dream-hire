import { Grid3x3, Clock, Zap, MessageSquareDotIcon as MessageSquareDollar } from "lucide-react"
import icon1 from "../../asset/images/section/img1.png"
import icon2 from "../../asset/images/section/img2.png"
import icon3 from "../../asset/images/section/img3.png"
import icon4 from "../../asset/images/section/img4.png"
import icon5 from "../../asset/images/section/img5.png"
import img1 from "../../asset/images/section/cat1.png"
import img2 from "../../asset/images/section/cat2.png"
import img3 from "../../asset/images/section/cat3.png"
import img4 from "../../asset/images/section/cat4.png"




const ServicesSection = () => {
  const services = [
    {
      title: "3D Industrial Design",
      icon: icon1,
      link: "#",
    },
    {
      title: "E-commerce Website Development",
      icon: icon2,
      link: "#",
    },
    {
      title: "Email Marketing",
      icon: icon3,
      link: "#",
    },
    {
      title: "Press Releases",
      icon: icon4,
      link: "#",
    },
    {
      title: "Logo Design",
      icon: icon5,
      link: "#",
    },
  ]

  const benefits = [
    {
      icon: img1,
      title: "Access a pool of top talent",
      description: "across 700 categories",
    },
    {
      icon: img2,
      title: "Enjoy a simple, easy-to-use",
      description: "matching experience",
    },
    {
      icon:  img3,
      title: "Get quality work done quickly",
      description: "and within budget",
    },
    {
      icon:  img4,
      title: "Only pay when you're happy",
      description: "",
    },
  ]

  return (
    <div className="container mx-auto px-4 my-10  py-16 space-y-20">
      {/* Services Section */}
      <div>
        <h2 className="text-xl font-medium text-gray-900 mb-5">DreamHire go-to services</h2>
        <div className="grid grid-cols-1 font-inter sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group relative   bg-white shadow-[0px_8px_8px_0px_rgba(0,0,0,0.1)] transition-all hover:shadow-[8px_8px_8px_0px_rgba(0,0,0,0.1)] rounded-2xl p-6 "
            >
              <div className="mb-4  flex justify-center">
                <img src={service.icon || "/placeholder.svg"} alt="" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xs font-medium text-center text-gray-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
            </a>
          ))}
        </div>
      </div>






      {/* Benefits Section */}
      <div>
        <h2 className="text-3xl font-medium text-gray-900 mb-16">Make it all happen with freelancers</h2>
        <div className="grid grid-cols-1 font-inter  md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6">
                <img src={benefit.icon} alt={index} className=" text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-700">
                  {benefit.title}
                  {benefit.description && (
                    <>
                      <br />
                      <span >{benefit.description}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center font-inter">
          <button className="bg-[#5865F2] text-white px-8 py-3 text-xs rounded-lg font-medium hover:bg-blue-500 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection

