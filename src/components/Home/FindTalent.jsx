import home from "../../asset/images/section/talent.png";


const FindTalent = () => {
    return (
<div className="relative min-h-[520px] container mx-auto my-10 rounded-full">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={home}
      alt="Modern office space"
      className="w-full h-full object-cover"
    />
  </div>


    {/* For Clients Label */}
    <div className="mb-16 absolute top-5 left-5  ">
      <span className="inline-block text-white text-base font-medium">For Clients</span>
    </div>

  {/* Content */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-5">


    {/* Hero Content */}
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl text-center md:text-5xl font-normal text-white mb-5">Find talent your way</h1>
      <p className="text-lg text-center md:text-xl text-white/90 mb-6 font-light leading-relaxed">
        Work with the largest network of independent professionals and get things done—from quick turnarounds to big
        transformations.
      </p>

      {/* CTA Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Post a Job Card */}
        <div className="group relative overflow-hidden rounded-2xl bg-[#5865F2] px-4 py-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-3xl font-medium text-white mb-8">
              Post a job
              <br />
              and hire a pro
            </h2>
            <div className="flex items-center">
              <span className="text-white text-lg">Get Started</span>
              <svg
                className="w-6 h-6 text-white ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Staffing Card */}
        <div className="group relative overflow-hidden rounded-2xl bg-[#5865F2] px-4 py-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="h-full flex flex-col justify-between">
            <h2 className="text-3xl font-medium text-white mb-8">
              360° Staffing & <br />
              Recruiting
            </h2>
            <div className="flex items-center">
              <span className="text-white text-lg">Get Started</span>
              <svg
                className="w-6 h-6 text-white ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
  }
  
  export default FindTalent
  
  