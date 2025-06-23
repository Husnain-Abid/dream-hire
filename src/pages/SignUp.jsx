import { ChevronDown, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import flag from "../asset/images/US.png";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        agreeToTerms: false,
        agreeToMarketing: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission

console.log(formData);


    }

    return (
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:my-20 font-inter">

            <div className="max-w-3xl w-full border rounded-3xl shadow-sm p-8 md:py-12 md:px-20 ">
                <div className="space-y-6">
                    <h1 className="text-3xl font-medium text-[#333333] mb-2">Sign up now</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm md:text-base text-[#666666] mb-1">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg  focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm md:text-base text-[#666666] mb-1">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm md:text-base text-[#666666] mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:border-transparent"
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm md:text-base text-[#666666] mb-1">
                                Phone number
                            </label>

                            <div className="relative overflow-hidden">
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-28 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:border-transparent"
                                />

                                <button
                                    type="button"
                                    className="absolute top-0 left-0 flex items-center gap-2 px-3 py-2 md:py-3  border-gray-300   focus:border-transparent"
                                >
                                    <img
                                        src={flag}
                                        alt="US Flag"
                                    />
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-600">+1</span>
                                </button>

                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <label htmlFor="password" className="block text-sm md:text-base text-[#666666]">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Hide
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <Eye className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                            <p className="mt-1 md:mb-8 text-sm  text-[#666666]">
                                Use 8 or more characters with a mix of letters, numbers & symbols
                            </p>
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 h-4 w-4  border-gray-300 rounded accent-black "
                                />
                                <label htmlFor="agreeToTerms" className="ml-2 text-sm md:text-base text-[#333333]">
                                    By creating an account, I agree to our &#160;
                                    <Link href="#" className="text-gray-900 underline">
                                        Terms of use
                                    </Link>
                                    &#160; and &#160;
                                    <Link href="#" className="text-gray-900 underline">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="agreeToMarketing"
                                    name="agreeToMarketing"
                                    checked={formData.agreeToMarketing}
                                    onChange={handleChange}
                                    className="mt-1 h-4 w-4  border-gray-300 rounded accent-black"
                                />
                                <label htmlFor="agreeToMarketing" className="ml-2 text-sm md:text-base text-[#333333]">
                                    By creating an account, I am also consenting to receive SMS messages and emails, including product new
                                    feature updates, events, and marketing promotions.
                                </label>
                            </div>
                        </div>

                        {/* Submit Button and Login Link */}
                        <div className="flex items-center justify-start gap-6 pt-4">
                            <button
                                type="submit"
                                className="px-8 py-2 md:py-3 text-white bg-[#C3C3C3] md:text-[22px] hover:bg-gray-400 rounded-full transition-colors"
                            >
                                Sign up
                            </button>
                            <div className="text-sm md:text-base">
                                Already have an account? &#160;
                                <Link href="#" className="text-gray-900 underline">
                                    Log in
                                </Link>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp

