import icon3 from "../../asset/images/section/stamp.png"

const GuaranteeSection = () => {
    return (
      <div className="container mx-auto  px-4 my-10 sm:px-6 lg:px-8 py-16">
        
        
        <div className="max-w-4xl ">

        <h2 className="text-2xl font-medium text-gray-700 mb-20">Made on DreamHire</h2>
  
        <div className="grid md:grid-cols-[150px,1fr] gap-12 items-center">
          {/* Guarantee Badge */}
          <div className="mx-auto md:mx-0">
            <div className="relative w-64 h-64">
              <img
                src={icon3}
                alt="100% Satisfaction Guarantee"
                className="object-contain"
              />
            </div>
          </div>
  
          {/* Content */}
          <div className="space-y-4">
            <div className="space-y-0 font-inter">
              <h3 className="text-3xl font-semibold text-gray-600">100% Money Back Guarantee.</h3>
              <p className="text-3xl font-semibold text-gray-600 leading-tight">
                If you don't find someone great, we'll give you your money back.
              </p>
            </div>
  
            <p className="text-lg  text-gray-600 tracking-wide font-inter">
              NO CONTRACTS. NO COMMITMENTS. NO EXTRA FEES. NO SALARY MARKUPS. CANCEL SUBSCRIPTION AT ANYTIME.
            </p>
  
            <h4 className="text-2xl font-inter font-semibold text-gray-700">Find A Great Worker!</h4>
  
            <a href="#" className="inline-flex items-center font-inter text-lg text-blue-400 hover:text-blue-700 transition-colors">
              Learn more about our satisfaction guarantees
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>


        </div>
      </div>
    )
  }
  
  export default GuaranteeSection
  
  