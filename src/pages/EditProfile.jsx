import { useState } from "react"
import { Bell, CheckCircle, ChevronDown, SquareCheck } from "lucide-react"
import image from "../asset/images/profile.png"
import check from "../asset/images/check.png"

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: "",
    city: "",
    state: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8  py-12 md:my-20 font-inter">

      <div className="max-w-3xl mx-auto ">


        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl md:text-[45px] font-bold">Edit profile</h1>
          <div className="flex items-center gap-4">

            <img
              src={image}
              alt="Profile"
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-950 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                // className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:border-transparent"
                className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"

              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"
              />
              {/* <img src={check} alt="check" className="w-5 h-5 text-white  absolute right-3 top-1/2 -translate-y-1/2" /> */}
            </div>
          </div>

          {/* Address Field */}
          <div>
            <label htmlFor="address" className="block text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"
            />
          </div>

          {/* Contact Number Field */}
          <div>
            <label htmlFor="contactNumber" className="block text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"
            />
          </div>

          {/* City and State Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="city" className="block text-gray-700 mb-2">
                City
              </label>
              <div className="relative">
                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"
                >
                  {/* Add more cities */}
                </input>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <div>
              <label htmlFor="state" className="block text-gray-700 mb-2">
                State
              </label>
              <div className="relative">
                <input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"
                >
                  {/* Add more states */}
                </input>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border border-gray-300 text-sm  md:text-lg rounded-lg  focus:border-transparent"
              />
              {/* <CheckCircle className="w-5 h-5 text-green-500 absolute right-3 top-1/2 -translate-y-1/2" /> */}
              {/* <img src={check} alt="check" className="w-5 h-5 text-white  absolute right-3 top-1/2 -translate-y-1/2" /> */}

            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              className="px-6 py-2 border border-[#5865F2] text-[#5865F2] rounded-lg hover:bg-blue-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#5865F2] text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default EditProfile

