import cat1 from "../../asset/images/seller-page/card1.png";
import cat2 from "../../asset/images/seller-page/card2.png";
import cat3 from "../../asset/images/seller-page/card3.png";
import cat4 from "../../asset/images/seller-page/card4.png";

export default function TestimonialSection() {
  const testimonials = [
    {
      image: cat1,
      quote: "People love our logo, and we love Fiverr.",
      author: "Jennifer Gore",
      title: "CEO of Weleet",
      imageLeft: true,
    },
    {
      image: cat2,
      quote: "Fiverr is an amazing resource for anyone in the startup space.",
      author: "Adam Mashaal",
      title: "CEO of Mashfeed",
      imageLeft: true,
    },
    {
      image: cat3,
      quote: "There is no way I could have produced anything without Fiverr.",
      author: "Christopher Sunami",
      title: "Music Producer",
      imageLeft: false,
    },
    {
      image: cat4,
      quote:
        "Fiverr enables me to quickly, efficiently and cost-effectively get things done.",
      author: "Cristina Dolan",
      title: "Entrepreneur",
      imageLeft: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-9 text-center text-lg font-bold text-gray-900 md:text-2xl">
        Buyer stories
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white overflow-hidden">
            <div
              className={`flex flex-col ${
                testimonial.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-[300px] bg-[#F5F5F5]">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.author} testimonial`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Section */}
              <div className="relative w-full md:w-1/2 p-8 flex items-center bg-[#EFEFEF]">
                {/* Arrow */}
                <div
                  className={`
                    hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#EFEFEF] transform rotate-45
                    ${
                      testimonial.imageLeft
                        ? "left-0 -translate-x-1/2"
                        : "right-0 translate-x-1/2"
                    }
                  `}
                />

                {/* Quote Content */}
                <div className="space-y-8 font-inter">
                  <blockquote className=" font-normal text-gray-600">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium">
                      {testimonial.author} <span> {testimonial.title} </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
