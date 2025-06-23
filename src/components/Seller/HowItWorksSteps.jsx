import cat1 from '../../asset/images/seller-page/icon1.png'
import cat2 from '../../asset/images/seller-page/icon2.png'
import cat3 from '../../asset/images/seller-page/icon3.png'

const steps = [
  {
    icon: cat1,
    number: "1",
    title: "Create a Gig",
    description: "Sign up for free, set up your Gig, and offer your work to our global audience.",
  },
  {
    icon: cat2,
    number: "2",
    title: "Deliver great work",
    description: "Get notified when you get an order and use our system to discuss details with customers.",
  },
  {
    icon: cat3,
    number: "3",
    title: "Get paid",
    description: "Get paid on time, every time. Payment is available for withdrawal as soon as it clears.",
  },
]

export default function HowItWorksSteps() {
  return (
    <section className="container mx-auto px-4 font-inter ">
      <div className="rounded-3xl bg-gradient-to-r from-[#8891F6] to-[#5865F2] px-6 pt-12 pb-20">


        <h2 className="mb-12 text-center text-xl font-bold text-white md:text-2xl">How it works</h2>

        <div className="grid gap-8 text-center md:grid-cols-3 md:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="mx-auto flex  items-center justify-center">
                <img src={step.icon} />
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">
                  {step.number}. {step.title}
                </h3>
                <p className="text-xs text-white">{step.description}</p>
              </div>
            </div>











          ))}
        </div>
        
      </div>
    </section>
  )
}


